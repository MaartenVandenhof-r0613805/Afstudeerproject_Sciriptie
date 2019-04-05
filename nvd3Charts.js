
var lineData = [];
var pieData = [];
var data1 = [];
var data2 = [];
var data3 = [];
var data4 = [];
execute();
/*These lines are all chart setup.  Pick and choose which chart features you want to utilize. */
function drawGraph() {
    nv.addGraph(function () {
        var chart = nv.models.lineChart()
            .margin({
                left: 80
            }) //Adjust chart margins to give the x-axis some breathing room.
            .useInteractiveGuideline(true) //We want nice looking tooltips and a guideline!
            .duration(350) //how fast do you want the lines to transition?
            .showLegend(true) //Show the legend, allowing users to turn on/off line series.
            .showYAxis(true) //Show the y-axis
            .showXAxis(true) //Show the x-axis
        ;

        chart.xAxis //Chart x-axis settings
            .axisLabel('X-Value')
            .tickFormat(d3.format(',r'));

        chart.yAxis //Chart y-axis settings
            .axisLabel('Y-Value')
            .tickFormat(d3.format('.02f'));

        /* Done setting the chart up? Time to render it!*/
        //You need data...

        d3.select('.lineChart') //Select the <svg> element you want to render the chart in.   
            .datum(lineData) //Populate the <svg> element with chart data...
            .call(chart); //Finally, render the chart!

        //Update the chart when window resizes.
        nv.utils.windowResize(function () {
            chart.update()
        });
        return chart;
    });

    //Regular pie chart example
    nv.addGraph(function () {
        var chart2 = nv.models.pieChart()
            .x(function (d) {
                return d.label
            })
            .y(function (d) {
                return d.value
            })
            .showLabels(true);

        d3.select(".pieChart")
            .datum(pieData)
            .transition().duration(350)
            .call(chart2);

        return chart2;
    });

}

function execute() {
    var d1 = 0;
    var d2 = 0;
    var da3 = 0;
    var d4 = 0;
    d3.json("dummyData.json", function (data) {
        var t = 0;
        data.forEach(function (d) {
            //LineChartData
            var x = d.x;
            var y = d.d1;
            var co = {
                x,
                y
            };
            t++;
            data1.push(co)

            //PieChartData
            var label = "";
            var value = 0;
            var element = {
                label,
                value
            };
            d1 = d1 + d.d1
            d2 = d2 + d.d2
            da3 = da3 + d.d3
            d4 = d4 + d.d4
        });
        //DataLineChart
        lineData = [
            {
                values: data1, //values - represents the array of {x,y} data points
                key: 'd1', //key  - the name of the series.
                color: '#ff7f0e' //color - optional: choose your own line color.
            }
        ];
        //PieDataCHart
        pieData = [
            { 
        "label": "d1",
        "value" : d1
      } , 
      { 
        "label": "d2",
        "value" : d2
      } , 
      { 
        "label": "d3",
        "value" : da3
      } , 
      { 
        "label": "d4",
        "value" : d4
      }];
        drawGraph();
    });
}
