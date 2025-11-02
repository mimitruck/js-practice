//给button1绑定时间，先get element，然后add event listner
const b1=document.getElementById("button1");
//得到的就是——整个 <button> 元素对象（DOM 元素
b1.addEventListener( "click", function(){
  const a1="Dont click";
  alert(a1);});


//第二个功能，在button2后面插入新的按钮
const b2=document.querySelector("#button2");
const nb=document.createElement("button");
nb.textContent="button3";
nb.id="button3";
nb.style.marginLeft="8px";
b2.insertAdjacentElement("afterend",nb);


//点击button2弹出modal
const m1=document.querySelector("#modal1");
b2.addEventListener("click",()=>{
  m1.classList.add("show");});

//给modal的关闭按钮增加一个关闭功能
const closebtn=document.querySelector(".modal-close-btn");
closebtn.addEventListener("click",()=>{
  m1.classList.remove("show");
});
