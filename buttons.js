var nvd3 = document.getElementById('nvd3');
var chartJs = document.getElementById('chartJs');
var amCharts = document.getElementById('amCharts');

chartJs.onclick = function(){
    document.getElementsByTagName('CANVAS')[0].style.display = "block";
    document.getElementsByTagName('SVG')[0].style.display = "none";
}

nvd3.onclick = function(){
    document.getElementsByTagName('CANVAS')[0].style.display = "none";
    document.getElementsByTagName('SVG')[0].style.display = "block";
}