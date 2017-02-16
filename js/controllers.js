var serverUrl = "";
var myInterval;
var noStopOption = true;
var durationOption = false;
var durationValue = 0;
var transactionsOption = false;
var numberTransactions = 0;
var loadOption = false;
var numberThreads = 1;


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
    kitsOptions = "benchmark:"+benchmark+",threads:"+numberThreads;
    if (noStopOption)
        kitsOptions= kitsOptions+",no_stop:true";
    if(durationOption)
        kitsOptions = kitsOptions + ",duration:" + durationValue;
    if (transactionsOption)
        kitsOptions = kitsOptions + ",transactions:" + numberTransactions;
    if (loadOption)
        kitsOptions = kitsOptions + ",load:true";

    $.post( serverUrl+"/startkits", kitsOptions, function( data ) {
        $( ".result" ).html( kitsOptions );
    }).then(function(data) {
        if(data.kitsStart)
            $('.applicationStatus').html("<div class=\"alert alert-success\" role=\"alert\" align=\"center\">Benchmark is running</div>");
            myInterval = window.setInterval(function(){
                redrawGraph();
                isBenchmarkRunning();
            }, 5000);
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

function redrawGraph()
{
    dataToPlot = [];
    var trace = {};
    $.ajax({
        url: serverUrl + "/counters",
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
