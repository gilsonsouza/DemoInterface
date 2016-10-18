var serverUrl = "";
var myInterval;

$(document).ready(function() {
    serverUrl = document.getElementById("serverUrl").value
    drawGraph();
});

function drawGraph()
{
    var layout = {
      xaxis: {
        autorange: true
      },
      yaxis: {
        autorange: true,
        title: "yaxis title"
      },
      yaxis2: {
          autorange: true,
          title: "yaxis2 title",
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
    serverUrl = document.getElementById("serverUrl").value
    benchmark = document.getElementById("benchmark").value
    duration = document.getElementById("benchmarkDuration").value
    $.ajax({
        url: serverUrl + "/startkits"
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
                    var trace = generateDataSingleGraph(key, val, existentCounters[key]["secondY"]);
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
        result =  {
                x: xCoordinates,
                y: yCoordinates,
                type: 'scatter',
                yaxis: 'y2',
                name: graphName
            };
    }
    else {
        result =  {
                x: xCoordinates,
                y: yCoordinates,
                type: 'scatter',
                name: graphName
            };
    }
    return result;
}
