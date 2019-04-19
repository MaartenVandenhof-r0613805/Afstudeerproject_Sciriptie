var lineChartCanvas = document.getElementsByClassName('lineChart')[1].getContext('2d');
var pieChartCanvas = document.getElementsByClassName('pieChart')[1].getContext('2d');
var t1 = 0;
var t2 = 0;

function createChartJs() {
    t1 = new Date();
    var myChart = new Chart(lineChartCanvas, {
        type: 'line',
        data: {
            labels: ['d1'],
            datasets: [{
                label: '# of Votes',
                data: data1,
                backgroundColor: [
                'rgba(255, 159, 64, 0.2)'
            ],
                borderColor: [
                'rgba(255, 159, 64, 1)'
            ],
                borderWidth: 1
        }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
            }]
            }
        }
    });
    
    var myPieChart = new Chart(pieChartCanvas, {
    type: 'pie',
    data: [5, 5]
});
    t2 = new Date();
    var time = t2 - t1;
    document.getElementById("graphTime").innerHTML = time + "ms";
}
