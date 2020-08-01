(function(){

var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);

function autosize(){
  console.log("qweqwe");
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:5px 0px';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}
})();


