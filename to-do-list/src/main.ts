const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".todos__input");
const addBtns: NodeListOf<HTMLButtonElement>= document.querySelectorAll(".todos__add");
const allItems: NodeListOf<HTMLUListElement> = document.querySelectorAll(".todos__items");

addBtns.forEach((btn:HTMLButtonElement,index:number) :void => {
    btn?.addEventListener("click",() => {
        onAdd(index);
    });
});

inputs.forEach((input:HTMLInputElement,index:number) :void => {
    input?.addEventListener("keyup", (e:KeyboardEvent) => {
        if(e.key==="Enter"){
            onAdd(index);
        }  
    });
});

const onAdd : Function = (index:number) : void =>{
    if(!inputs[index].value) return;
    const li : HTMLLIElement = document.createElement("li");
    const span : HTMLSpanElement = document.createElement("span");
    const deleteBtn : HTMLButtonElement = document.createElement("button");
    
    li.setAttribute("class", "todos__item");
    span.setAttribute("class", "todos__name");
    deleteBtn.setAttribute("class", "todos__delete");

    deleteBtn.innerText = "X";
    const checkBoxStr : string = "<input type='checkbox'>"+inputs[index].value+"</input>";
    span.innerHTML = checkBoxStr;
        
    li.appendChild(span);
    li.appendChild(deleteBtn);
    allItems[index].appendChild(li);

    inputs[index].value = "";

    deleteBtn?.addEventListener("click", () => {
        li.remove();
    });
}

//얘는 왜 이걸까..진짜 모르겠다...
const nav : HTMLElement | null = document.querySelector(".options");
const todos : NodeListOf<HTMLElement> = document.querySelectorAll(".todos > section");

nav?.addEventListener("click",(e:MouseEvent) : void=> {
    if(e.target instanceof HTMLButtonElement){
        if(e.target.className.includes("options__today")){
            todos[0].classList.add("open");
            todos[1].classList.remove("open");
        }else if(e.target.className.includes("options__tomorrow")){
            todos[1].classList.add("open");
            todos[0].classList.remove("open");
        }else if(e.target.className.includes("options__both")){
            todos[1].classList.add("open");
            todos[0].classList.add("open");
        }
    }
});