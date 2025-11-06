//点击button1，弹出toast//
const b1=document.getElementById("button1");

function showtoast(msg){
  const t=document.querySelector("#toast");
  t.textContent=msg;
  t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"),2000);
}
b1.addEventListener( "click", ()=>showtoast("this is the msg"));

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



//用户输入tracking id,点击查询弹出查询结果

