let btnEl = document.querySelector("button");
let headEl = document.querySelector("h1");

let count = 0;
btnEl.addEventListener("click", () => {
    count++;
    headEl.textContent = count;
})