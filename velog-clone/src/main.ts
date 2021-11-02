const menuOptionsData : HTMLDivElement | null = document.querySelector(".menu__options-date");
const menuDropdown : HTMLUListElement | null = document.querySelector(".menu__dropdown");
const menuOptionsText : HTMLSpanElement | null = document.querySelector(".menu__options-text");

menuOptionsData?.addEventListener("click",() : void =>{
    if(menuDropdown instanceof HTMLUListElement){
        if(menuDropdown.style.visibility == "hidden"){
            menuDropdown.style.visibility = "visible";
            return;
        }
        menuDropdown.style.visibility = "hidden";
    }
});

menuDropdown?.addEventListener("click",(e : MouseEvent) :void =>{
    Array.from(menuDropdown.children).forEach((element : Element) : void => {
        console.log(element);
        element?.classList.remove("active");
    });
    if(e.target instanceof HTMLLIElement){
        e.target.classList.add("active");
        if(menuOptionsText instanceof HTMLSpanElement)  menuOptionsText.innerText = e.target.innerText;
    }
});

const articles : NodeListOf<HTMLElement> = document.querySelectorAll(".article");
const modal : HTMLDivElement | null = document.querySelector(".modal");
const modalWrap : HTMLDivElement | null = document.querySelector(".modal__wrap");
const modalClose : HTMLImageElement | null = document.querySelector(".modal__close");
let isModal : boolean = false;

//article을 클릭하면 모달창이 팝업
const showModal = (e : MouseEvent) : void => {
    if(modal instanceof HTMLDivElement) modal.style.visibility = "visible";

    document.body.style.overflow="hidden";

    if(isModal === false){
        // const target =  e.target as HTMLElement;
        let clickArticle : Node | undefined;

        if(e.target instanceof HTMLElement){
            clickArticle = e.target.closest(".article")?.cloneNode(true);
        }
        const closeIC : HTMLImageElement = document.createElement("img");

        closeIC.setAttribute("src","../icon/x-circle.svg");
        closeIC.className="modal__close";
        closeIC.addEventListener("click",removeModal);

        if(clickArticle instanceof Node)    modalWrap?.appendChild(clickArticle);
        modalWrap?.appendChild(closeIC);
        
        //모달창 중복 구현 방지
        isModal = true;
    }  
}

articles.forEach((article) : void=>{
    article?.addEventListener("click",showModal);
})

//X클릭하면 모달창 꺼짐
const removeModal = () : void => {
    if(modalWrap?.lastChild instanceof Node){
        modalWrap?.removeChild(modalWrap.lastChild);
        modalWrap?.removeChild(modalWrap.lastChild);
    }    
    if(modal instanceof HTMLDivElement) modal.style.visibility = "hidden";

    document.body.style.overflow = "visible";

    isModal = false;
}