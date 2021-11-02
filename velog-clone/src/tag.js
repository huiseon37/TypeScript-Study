"use strict";

//input tag 불러옴
const inputBox = document.querySelector(".inputbox");

const addTag = (e) =>{
    //inputBox.value
    if(e.key==="Enter"){
        const tag = document.createElement("div");
        tag.innerText = inputBox.value;
        tag.className = "tag";
        tag.addEventListener("click",deleteTag);

        inputBox.before(tag);
        
        inputBox.value="";
    }
}

inputBox.addEventListener("keydown",addTag);

//tag삭제
const deleteTag = (e)=>{
    e.target.remove();
}