const html = document.querySelector('html');

var currentDate = new Date().toLocaleString();

html.onclick = function (){
    alert(currentDate);
}