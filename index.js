const textareaEl = document.getElementById("textarea")
const totalCounterEl = document.getElementById("total-counter")
const remaininCountergEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", ()=>{
    updateCounter();
});

function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length
    remaininCountergEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}