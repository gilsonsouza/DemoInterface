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
    var dataToPlot = [];
    $.ajax({
        url: serverUrl + "/counters",
        dataType: 'json',
        success: function (data){
            $.each(data, function(key, val){
                dataToPlot.push(generateDataSingleGraph(key, val));
            });
        }
    });

    graph.data = dataToPlot;
    Plotly.redraw(graph);
}

function generateDataSingleGraph(graphName, yPoints)
{
    var xAxis=[];
    for (var i = 0; i < yPoints.length; i++) {
        xAxis.push(i)
    };

    return {
        x: xAxis,
        y: yPoints,
        type: 'scatter',
        name: graphName
    }

}
