var d1 = 0;
var d2 = 0;
var da3 = 0;
var d4 = 0
var data1 = [];
var loaded = false;
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
                    "value": d1
      },
                {
                    "label": "d2",
                    "value": d2
      },
                {
                    "label": "d3",
                    "value": da3
      },
                {
                    "label": "d4",
                    "value": d4
      }];
    loaded = true;
});