var nvd3 = document.getElementById('nvd3');
var chartJs = document.getElementById('chartJs');
var amCharts = document.getElementById('amCharts');
var loadData = document.getElementById('loadData');
var loadDataC = [];
var graphC = [];

window.onload = function () {
    document.getElementsByTagName('CANVAS')[0].style.display = "none";
}

chartJs.onclick = function () {
    graphC = document.getElementsByClassName("graphContainer");
    for (i = 0; i < graphC.length; i++) {
        graphC[i].style.display = "flex";
    }
    loadDataC = document.getElementsByClassName("loadDataContainer");
    for (i = 0; i < loadDataC.length; i++) {
        loadDataC[i].style.display = "none";
    }
    document.getElementsByTagName('CANVAS')[0].style.display = "block";
    document.getElementsByTagName('CANVAS')[1].style.display = "block";
    createChartJs();
}

nvd3.onclick = function () {
    graphC = document.getElementsByClassName("graphContainer");
    for (i = 0; i < graphC.length; i++) {
        graphC[i].style.display = "flex";
    }
    loadDataC = document.getElementsByClassName("loadDataContainer");
    for (i = 0; i < loadDataC.length; i++) {
        loadDataC[i].style.display = "none";
    }
    document.getElementsByTagName('CANVAS')[0].style.display = "none";
    document.getElementsByTagName('CANVAS')[1].style.display = "none";
    drawGraph();
}

loadData.onclick = function () {
    graphC = document.getElementsByClassName("graphContainer");
    for (i = 0; i < graphC.length; i++) {
        graphC[i].style.display = "none";
    }
    loadDataC = document.getElementsByClassName("loadDataContainer");
    for (i = 0; i < loadDataC.length; i++) {
        loadDataC[i].style.display = "flex";
    }
}
