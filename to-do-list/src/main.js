"use strict";
const inputs = document.querySelectorAll(".todos__input");
const addBtns = document.querySelectorAll(".todos__add");
const allItems = document.querySelectorAll(".todos__items");
addBtns.forEach((btn, index) => {
    btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
        onAdd(index);
    });
});
inputs.forEach((input, index) => {
    input === null || input === void 0 ? void 0 : input.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            onAdd(index);
        }
    });
});
const onAdd = (index) => {
    if (!inputs[index].value)
        return;
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");
    li.setAttribute("class", "todos__item");
    span.setAttribute("class", "todos__name");
    deleteBtn.setAttribute("class", "todos__delete");
    deleteBtn.innerText = "X";
    const checkBoxStr = "<input type='checkbox'>" + inputs[index].value + "</input>";
    span.innerHTML = checkBoxStr;
    li.appendChild(span);
    li.appendChild(deleteBtn);
    allItems[index].appendChild(li);
    inputs[index].value = "";
    deleteBtn === null || deleteBtn === void 0 ? void 0 : deleteBtn.addEventListener("click", () => {
        li.remove();
    });
};
//얘는 왜 이걸까..진짜 모르겠다...
const nav = document.querySelector(".options");
const todos = document.querySelectorAll(".todos > section");
nav === null || nav === void 0 ? void 0 : nav.addEventListener("click", (e) => {
    if (e.target instanceof HTMLButtonElement) {
        if (e.target.className.includes("options__today")) {
            todos[0].classList.add("open");
            todos[1].classList.remove("open");
        }
        else if (e.target.className.includes("options__tomorrow")) {
            todos[1].classList.add("open");
            todos[0].classList.remove("open");
        }
        else if (e.target.className.includes("options__both")) {
            todos[1].classList.add("open");
            todos[0].classList.add("open");
        }
    }
});
