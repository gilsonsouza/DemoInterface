var serverUrl = "";
var myInterval;
var benchmarkParameters = "";


$(document).ready(function() {
    serverUrl = document.getElementById("serverUrl").value
    drawGraph();
});

function drawGraph()
{
    var layout = {
        showlegend: true,
        legend: {"orientation": "h"},
        xaxis: {
            autorange: true
        },
            yaxis: {
            autorange: true,
            title: "Y1"
        },
        yaxis2: {
          autorange: true,
          title: "Y2",
          overlaying: "y",
          titlefont: {color: "rgb(148, 103, 189)"},
          tickfont: {color: "rgb(148, 103, 189)"},
          side: "right"
        }
    }
    var dataToPlot = [];
    Plotly.newPlot(graph, dataToPlot, layout);
}


function startBenchmark()
{
    serverUrl = document.getElementById("serverUrl").value;
    benchmark = document.getElementById("benchmark").value;
    kitsOptions = "-b "+benchmark+" "+benchmarkParameters;

    $.post( serverUrl+"/startkits", kitsOptions, function( data ) {
        $( ".result" ).html( kitsOptions );
    }).then(function(data) {
        if(data.kitsStart)
            $('.applicationStatus').html("<div class=\"alert alert-success\" role=\"alert\" align=\"center\">Benchmark is running</div>");
            myInterval = window.setInterval(function(){
                redrawGraph();
                isBenchmarkRunning();
            }, 5000);
            progressBarsInterval = window.setInterval(function(){
                updateRestartProgressBars();
            }, 3000);
    });
}

function isBenchmarkRunning()
{
    $.ajax({
        url: serverUrl + "/iskitsrunning"
    }).then(function(data) {
        if(!data.isRunning){
            clearInterval(myInterval);
            $('.applicationStatus').html("<div class=\"alert alert-info\" role=\"alert\" align=\"center\">Benchmark is not running</div>");
        }
    });
}

function callWebserver(routineName)
{
    $.ajax({
        url: serverUrl + "/" +routineName
    }).then(function(data) {
        if(routineName == 'mediafailure' && data.hasMediaFailured)
            mediaBarInterval = window.setInterval(function(){
                updateMediaProgressBars();
            }, 3000);
    });
}

function updateRestartProgressBars()
{
    $.ajax({
        url: serverUrl + "/recoveryprogress"
    }).then(function(data) {
        if(data.redoProgress == 100 && data.logAnalysisProgress == 100)
            clearInterval(progressBarsInterval);
        $('.loganalysis').html('<div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: '+ data.logAnalysisProgress + '%;">'+ data.logAnalysisProgress +'%</div>');
        $('.redopass').html('<div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: '+ data.redoProgress + '%;">'+ data.redoProgress +'%</div>');
    });
}

function updateMediaProgressBars()
{
    $.ajax({
        url: serverUrl + "/mediarecoveryprogress"
    }).then(function(data) {
        if(data.mediaRecoveryProgress == 100)
            clearInterval(mediaBarInterval);
        $('.mediarecovery').html('<div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: '+ data.mediaRecoveryProgress + '%;">'+ data.mediaRecoveryProgress +'%</div>');
    });
}

function redrawGraph()
{
    dataToPlot = [];
    var trace = {};
    $.ajax({
        url: serverUrl + "/getstats",
        dataType: 'json',
        success: function (data){
            $.each(data, function(key, val){
                if (existentCounters[key]["plot"] == true) {
                    var trace = generateDataSingleGraph(existentCounters[key]["name"], val, existentCounters[key]["secondY"]);
                    dataToPlot.push(trace);
                }
            });
        }
    }).done(function(){
        graph.data = dataToPlot;
        Plotly.redraw(graph);
    });
}

function generateDataSingleGraph(graphName, yCoordinates, secondY)
{
    var xCoordinates=[];
    for (var i = 0; i < yCoordinates.length; i++) {
        xCoordinates.push(i);
    };
    var result = {};
    if (secondY == true) {
        var finalName = graphName+"(Y2)";
        result =  {
                x: xCoordinates,
                y: yCoordinates,
                type: 'scatter',
                yaxis: 'y2',
                name: finalName
            };
    }
    else {
        var finalName = graphName+"(Y1)";
        result =  {
                x: xCoordinates,
                y: yCoordinates,
                type: 'scatter',
                name: finalName
            };
    }
    return result;
}
