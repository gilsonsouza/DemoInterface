var serverUrl = "";//"http://192.168.2.15:8080"
var myInterval;

$(document).ready(function() {
    serverUrl = document.getElementById("serverUrl").value
    drawGraph();
    /*$.ajax({
        url: "http://192.168.0.104:8080/agglog"
    }).then(function(data) {
       $('.greeting-id').append(data.xct_freeing_space);
      // $('.greeting-content').append(data.content);
  });*/
});

function drawGraph()
{
    var layout = {
      xaxis: {
        //type: 'log',
        autorange: true
      },
      yaxis: {
        //type: 'log',
        autorange: true
      }
    }
    var trace1 = {
      x: [0,1],
      y: [0,0],
      type: 'scatter',
    };
    var graphsToPlot = [trace1];
    Plotly.newPlot(graph, graphsToPlot, layout);
}


function dataGraph(data)
{
    arrayLength = data.xct_freeing_space.length;
    var xAxis=[];
    for (var i = 0; i < arrayLength; i++) {
        xAxis.push(i)
    };
    var trace1 = {
      x: xAxis,
      y: data.xct_freeing_space,
      type: 'scatter',
      name: 'xct_freeing_space'
    };
    var trace2 = {
      x: xAxis,
      y: data.comment,
      type: 'scatter',
      name: 'comment'
    };

    var trace3 = {
      x: xAxis,
      y: data.compesate,
      type: 'scatter',
      name: 'compesate'
    };

    var trace4 = {
      x: xAxis,
      y: data.btree_insert,
      type: 'scatter',
      name: 'btree_insert'
    };

    var trace5 = {
      x: xAxis,
      y: data.btree_update,
      type: 'scatter',
      name: 'btree_update'
    };
    var trace6 = {
      x: xAxis,
      y: data.alloc_page,
      type: 'scatter',
      name: 'dealloc_page'
    };
    var trace7 = {
      x: xAxis,
      y: data.xct_end,
      type: 'scatter',
      name: 'xct_end'
    };
    var trace8 = {
      x: xAxis,
      y: data.btree_insert_nonghost,
      type: 'scatter',
      name: 'btree_insert_nonghost'
    };
    //counters
    var trace1 = {
      x: xAxis,
      y: data.begin_xct_cnt,
      type: 'scatter',
      name: 'begin_xct_cnt'
    };
    var trace2 = {
      x: xAxis,
      y: data.commit_xct_cnt,
      type: 'scatter',
      name: 'commit_xct_cnt'
    };

    var trace3 = {
      x: xAxis,
      y: data.abort_xct_cnt,
      type: 'scatter',
      name: 'abort_xct_cnt'
    };

    var trace4 = {
      x: xAxis,
      y: data.bf_fix_nonroot_count,
      type: 'scatter',
      name: 'bf_fix_nonroot_count'
    };
    console.log(data.Items);
    for (var name in data.Items) {
        console.log(name + "=" + data.Items[name]);
    }
    var graphsToPlot = [generateDataSingleGraph("compensate", data.compensate)];
    $.each(data, generateDataSingleGraph(key, value));
    graphsToPlot.push(generateDataSingleGraph("skip", data.skip));
    graphsToPlot.push(generateDataSingleGraph("comment", data.comment));
    graphsToPlot.push(generateDataSingleGraph('bf_fix_nonroot_count', data.bf_fix_nonroot_count));
    graphsToPlot.push(generateDataSingleGraph("chkpt_begin", data.chkpt_begin));
    graphsToPlot.push(generateDataSingleGraph("chkpt_bf_tab", data.chkpt_bf_tab));
    graphsToPlot.push(generateDataSingleGraph("chkpt_xct_tab", data.chkpt_xct_tab));
    graphsToPlot.push(generateDataSingleGraph("chkpt_xct_lock", data.chkpt_xct_lock));
    graphsToPlot.push(generateDataSingleGraph("chkpt_restore_tab", data.chkpt_restore_tab));
    graphsToPlot.push(generateDataSingleGraph("chkpt_restore_tab", data.chkpt_restore_tab));
    graphsToPlot.push(generateDataSingleGraph("chkpt_restore_tab", data.chkpt_restore_tab));
    graphsToPlot.push(generateDataSingleGraph("chkpt_restore_tab", data.chkpt_restore_tab));
    graphsToPlot.push(generateDataSingleGraph("chkpt_restore_tab", data.chkpt_restore_tab));
    graphsToPlot.push(generateDataSingleGraph("chkpt_restore_tab", data.chkpt_restore_tab));
    graphsToPlot.push(generateDataSingleGraph("chkpt_restore_tab", data.chkpt_restore_tab));
    graphsToPlot.push(generateDataSingleGraph("chkpt_restore_tab", data.chkpt_restore_tab));
    graphsToPlot.push(generateDataSingleGraph("chkpt_restore_tab", data.chkpt_restore_tab));
    graphsToPlot.push(generateDataSingleGraph("chkpt_restore_tab", data.chkpt_restore_tab));
    graphsToPlot.push(generateDataSingleGraph("chkpt_restore_tab", data.chkpt_restore_tab));
    graphsToPlot.push(generateDataSingleGraph("chkpt_restore_tab", data.chkpt_restore_tab));
    graphsToPlot.push(generateDataSingleGraph("chkpt_restore_tab", data.chkpt_restore_tab));
    graphsToPlot.push(generateDataSingleGraph("chkpt_restore_tab", data.chkpt_restore_tab));
    graphsToPlot.push(generateDataSingleGraph("chkpt_restore_tab", data.chkpt_restore_tab));
    graphsToPlot.push(generateDataSingleGraph("chkpt_restore_tab", data.chkpt_restore_tab));
    graphsToPlot.push(generateDataSingleGraph("chkpt_restore_tab", data.chkpt_restore_tab));
    graphsToPlot.push(generateDataSingleGraph("chkpt_restore_tab", data.chkpt_restore_tab));
    graphsToPlot.push(generateDataSingleGraph("chkpt_restore_tab", data.chkpt_restore_tab));
    graphsToPlot.push(generateDataSingleGraph("chkpt_restore_tab", data.chkpt_restore_tab));
    graphsToPlot.push(generateDataSingleGraph("chkpt_restore_tab", data.chkpt_restore_tab));
    graphsToPlot.push(generateDataSingleGraph("chkpt_restore_tab", data.chkpt_restore_tab));
    graphsToPlot.push(generateDataSingleGraph("chkpt_restore_tab", data.chkpt_restore_tab));
    graphsToPlot.push(generateDataSingleGraph("chkpt_restore_tab", data.chkpt_restore_tab));
    graphsToPlot.push(generateDataSingleGraph("chkpt_restore_tab", data.chkpt_restore_tab));
    graphsToPlot.push(generateDataSingleGraph("chkpt_restore_tab", data.chkpt_restore_tab));

    return graphsToPlot;
};

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
    var graphsToPlot = [];
    $.ajax({
        url: serverUrl + "/counters",
        dataType: 'json',
        success: function (data){
            $.each(data, function(key, val){
                graphsToPlot.push(generateDataSingleGraph(key, val));
            });
        }
    });

    // $.ajax({
    //     url: serverUrl + "/counters"
    // }).then(function(data) {
    //graph.data = dataGraph(data);
    graph.data = graphsToPlot;
    Plotly.redraw(graph);
    // })
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
