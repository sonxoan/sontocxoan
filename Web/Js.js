function zoomer(event){
  var zoomer = event.currentTarget;
  x = event.offsetX/zoomer.offsetWidth*100;
  y = event.offsetY/zoomer.offsetHeight*100;
  zoomer.style.backgroundPosition = x + '%' + y + '%';
}