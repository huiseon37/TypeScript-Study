const inputBox : HTMLInputElement | null = document.querySelector(".inputbox");

const addTag = (e : KeyboardEvent) : void =>{
    //inputBox.value
    if(e.key==="Enter"){
        const tag : HTMLDivElement = document.createElement("div");
        if(inputBox instanceof HTMLInputElement){
            tag.innerText = inputBox.value;
            tag.className = "tag";
            tag.addEventListener("click",deleteTag);
            inputBox.before(tag);
            inputBox.value="";
        }      
    }
}

inputBox?.addEventListener("keydown",addTag);

//tag삭제
const deleteTag = (e : MouseEvent) : void=>{
    if(e.target instanceof HTMLDivElement)  e.target.remove();
}