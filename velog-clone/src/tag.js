"use strict";
const inputBox = document.querySelector(".inputbox");
const addTag = (e) => {
    //inputBox.value
    if (e.key === "Enter") {
        const tag = document.createElement("div");
        if (inputBox instanceof HTMLInputElement) {
            tag.innerText = inputBox.value;
            tag.className = "tag";
            tag.addEventListener("click", deleteTag);
            inputBox.before(tag);
            inputBox.value = "";
        }
    }
};
inputBox === null || inputBox === void 0 ? void 0 : inputBox.addEventListener("keydown", addTag);
//tag삭제
const deleteTag = (e) => {
    if (e.target instanceof HTMLDivElement)
        e.target.remove();
};
