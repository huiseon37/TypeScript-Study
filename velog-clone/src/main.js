"use strict";
const menuOptionsData = document.querySelector(".menu__options-date");
const menuDropdown = document.querySelector(".menu__dropdown");
const menuOptionsText = document.querySelector(".menu__options-text");
menuOptionsData === null || menuOptionsData === void 0 ? void 0 : menuOptionsData.addEventListener("click", () => {
    if (menuDropdown instanceof HTMLUListElement) {
        if (menuDropdown.style.visibility == "hidden") {
            menuDropdown.style.visibility = "visible";
            return;
        }
        menuDropdown.style.visibility = "hidden";
    }
});
menuDropdown === null || menuDropdown === void 0 ? void 0 : menuDropdown.addEventListener("click", (e) => {
    Array.from(menuDropdown.children).forEach((element) => {
        console.log(element);
        element === null || element === void 0 ? void 0 : element.classList.remove("active");
    });
    if (e.target instanceof HTMLLIElement) {
        e.target.classList.add("active");
        if (menuOptionsText instanceof HTMLSpanElement)
            menuOptionsText.innerText = e.target.innerText;
    }
});
const articles = document.querySelectorAll(".article");
const modal = document.querySelector(".modal");
const modalWrap = document.querySelector(".modal__wrap");
const modalClose = document.querySelector(".modal__close");
let isModal = false;
//article을 클릭하면 모달창이 팝업
const showModal = (e) => {
    var _a;
    if (modal instanceof HTMLDivElement)
        modal.style.visibility = "visible";
    document.body.style.overflow = "hidden";
    if (isModal === false) {
        // const target =  e.target as HTMLElement;
        let clickArticle;
        if (e.target instanceof HTMLElement) {
            clickArticle = (_a = e.target.closest(".article")) === null || _a === void 0 ? void 0 : _a.cloneNode(true);
        }
        const closeIC = document.createElement("img");
        closeIC.setAttribute("src", "../icon/x-circle.svg");
        closeIC.className = "modal__close";
        closeIC.addEventListener("click", removeModal);
        if (clickArticle instanceof Node)
            modalWrap === null || modalWrap === void 0 ? void 0 : modalWrap.appendChild(clickArticle);
        modalWrap === null || modalWrap === void 0 ? void 0 : modalWrap.appendChild(closeIC);
        //모달창 중복 구현 방지
        isModal = true;
    }
};
articles.forEach((article) => {
    article === null || article === void 0 ? void 0 : article.addEventListener("click", showModal);
});
//X클릭하면 모달창 꺼짐
const removeModal = () => {
    if ((modalWrap === null || modalWrap === void 0 ? void 0 : modalWrap.lastChild) instanceof Node) {
        modalWrap === null || modalWrap === void 0 ? void 0 : modalWrap.removeChild(modalWrap.lastChild);
        modalWrap === null || modalWrap === void 0 ? void 0 : modalWrap.removeChild(modalWrap.lastChild);
    }
    if (modal instanceof HTMLDivElement)
        modal.style.visibility = "hidden";
    document.body.style.overflow = "visible";
    isModal = false;
};
