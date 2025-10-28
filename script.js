//给button1绑定时间，先get element，然后add event listner
const b1=document.getElementById("button1");
//得到的就是——整个 <button> 元素对象（DOM 元素
b1.addEventListener( "click", function(){
  const a1="Dont click";
  alert(a1);});


