window.onload  = window.onresize  = function(){
  //获取屏幕的宽度
  let dw = document.documentElement.clientWidth
  let htmlPx = dw /375 * 10
  document.documentElement.style.fontSize = htmlPx + 'px'
}