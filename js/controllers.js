var serverUrl = "";
var myInterval;
var benchmarkParameters = "benchmark=tpcc\
\nqueried_sf=1\nthreads=1\nduration=10\nno_stop=true\n\load=false\n\
sm_archiving=true";

$(document).ready(function() {
    serverUrl = document.getElementById("serverUrl").value
    drawGraph();
});


function connectToServer()
{
    serverUrl = document.getElementById("serverUrl").value
    $.ajax({
        url: serverUrl + "/iskitsrunning"
    }).then(function(data) {
        $('#start_benchmark').prop('disabled', false);
        $('#adjust_parameters').prop('disabled', false);
        $('#counters').prop('disabled', false);
        $('#sys_fail').prop('disabled', false);
        $('#media_fail').prop('disabled', false);
        $('#btn_connect').prop('disabled', true);
        myInterval = window.setInterval(function(){
            redrawGraph();
            isBenchmarkRunning();
        }, 3000);
        if(data.isRunning == "yes"){
            progressBarsInterval = window.setInterval(function(){
                updateProgressBars();
            }, 3000);
        }
        updateStatusProgram(data.isRunning);
    });
}

function updateStatusProgram(isRunning)
{
    if(isRunning == "yes"){
        $('.applicationStatus').html("<div class=\"alert alert-success\" role=\"alert\" align=\"center\">Benchmark is running</div>");
        $('#sys_fail').prop('disabled', false);
        $('#media_fail').prop('disabled', false);    }
    else if (isRunning == "initializing"){
        $('.applicationStatus').html("<div class=\"alert alert-warning\" role=\"alert\" align=\"center\">Initializing</div>");
        $('#sys_fail').prop('disabled', true);
        $('#media_fail').prop('disabled', true);
    }
    else if (isRunning == "no"){
        $('.applicationStatus').html("<div class=\"alert alert-info\" role=\"alert\" align=\"center\">Benchmark is not running</div>");
        $('#sys_fail').prop('disabled', true);
        $('#media_fail').prop('disabled', true);
    }
}

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
    kitsOptions = benchmarkParameters;

    $.post( serverUrl+"/startkits", kitsOptions, function( data ) {
        $( ".result" ).html( kitsOptions );
    }).then(function(data) {
        if(data.kitsStart)
            myInterval = window.setInterval(function(){
                redrawGraph();
                isBenchmarkRunning();
            }, 3000);
            progressBarsInterval = window.setInterval(function(){
                updateProgressBars();
            }, 3000);
    });
}

function isBenchmarkRunning()
{
    $.ajax({
        url: serverUrl + "/iskitsrunning",
        error: function(xhr, error){
            $('#start_benchmark').prop('disabled', true);
            $('#adjust_parameters').prop('disabled', true);
            $('#counters').prop('disabled', true);
            $('#sys_fail').prop('disabled', true);
            $('#media_fail').prop('disabled', true);
            $('#btn_connect').prop('disabled', false);
            $('.applicationStatus').html("<div class=\"alert alert-info\" role=\"alert\" align=\"center\">Benchmark is not running</div>");
            clearInterval(progressBarsInterval);
            clearInterval(mediaBarInterval);
            clearInterval(myInterval);
        }
    }).then(function(data) {
        updateStatusProgram(data.isRunning);
    });
}

function callWebserver(routineName)
{
    $.ajax({
        url: serverUrl + "/" +routineName
    }).then(function(data) {
        if(routineName == 'mediafailure' && data.hasMediaFailured)
            mediaBarInterval = window.setInterval(function(){
                updateProgressBars();
            }, 3000);
    });
}

function updateProgressBars()
{
    $.ajax({
        url: serverUrl + "/recoveryprogress"
    }).then(function(data) {
        if(data.redoProgress == 100 && data.logAnalysisProgress == 100)
            clearInterval(progressBarsInterval);
        $('.loganalysis').html('<div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: '+ data.logAnalysisProgress + '%;">'+ data.logAnalysisProgress +'%</div>');
        $('.redopass').html('<div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: '+ data.redoProgress + '%;">'+ data.redoProgress +'%</div>');
        $('.undopass').html('<div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: '+ data.undoProgress + '%;">'+ data.undoProgress +'%</div>');
        $('.mediarecovery').html('<div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: '+ data.restoreProgress + '%;">'+ data.restoreProgress +'%</div>');
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
                if (typeof(existentCounters[key]) !== 'undefined' && existentCounters[key]["plot"] == true) {
                    var trace = generateDataSingleGraph(existentCounters[key]["name"], val, existentCounters[key]["secondY"]);
                    if (!existentCounters[key]["name"])
                        trace = generateDataSingleGraph(key, val, existentCounters[key]["secondY"]);
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
