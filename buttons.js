var nvd3 = document.getElementById('nvd3');
var chartJs = document.getElementById('chartJs');
var amCharts = document.getElementById('amCharts');

window.onload = function(){
    document.getElementsByTagName('CANVAS')[0].style.display = "none";
}

chartJs.onclick = function(){
    document.getElementsByTagName('CANVAS')[0].style.display = "block";
    document.getElementsByTagName('CANVAS')[1].style.display = "block";
    if (loaded){
        createChartJs();
    }
}

nvd3.onclick = function(){
    document.getElementsByTagName('CANVAS')[0].style.display = "none";
    document.getElementsByTagName('CANVAS')[1].style.display = "none";

}