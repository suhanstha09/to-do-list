// let variableh1 = document.querySelector("h1")

// let paragr = document.querySelector("#para")
// let heading4 = document.querySelector(".heading3")

// console.log(variableh1)
// console.log(paragr)
// console.log(heading4)

// let parag=document.querySelector(".para")
// parag.style.backgroundColor="red"
// parag.style.color="blue"
// let hello = document.querySelector(".para")
// hello.classList.add("sample")

// let btn = document.querySelector(".btn")
// // console.log(btn)    
// // btn.addEventListener("click",function(){
// //     hello.innerHTML="hello world"})
// function changecontent(){
//     hello.style.backgroundColor="red"}

//     btn.addEventListener("click",changecontent)


let todoinput = document.querySelector(".todoinput");
let btn = document.querySelector(".btn");
let todos = document.querySelector(".todos");   
btn.addEventListener("click",function(){

   let todovalue = todoinput.value;
let li =document.createElement("li");
let delbtn = document.createElement("button");
delbtn.innerHTML="delete"
todos.appendChild(delbtn)
delbtn.addEventListener("click",function(){
    todos.removeChild(li)
    todos.removeChild(delbtn)
})
li.innerHTML=todovalue
todos.appendChild(li)

})
