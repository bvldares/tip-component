const btnEl = document.querySelectorAll(".btn")
const inputCash = document.getElementById("calculator-input-amount")
const inputPeople = document.getElementById("calculator-input-people") 
const tipEl = document.getElementById("tip")
const totalEl = document.getElementById("total")


btnEl.forEach(function(btn){
    btn.addEventListener("click", function(){ 
       tipEl.textContent = tipCalculator(btn.value, inputCash.value, inputPeople.value)
       totalEl.textContent =  totalCalculator(inputCash.value, tipCalculator(btn.value, inputCash.value, inputPeople.value), inputPeople.value)
    })
})

function tipCalculator(percentage, total, people){
    return (total * (percentage /100)) / people
}

function totalCalculator(total, tip, people){
    return total / people + tip 
}


document.querySelector(".btn-keyup").addEventListener("keyup", (event)=>{
    tipEl.textContent = tipCalculator(event.target.value, inputCash.value, inputPeople.value)
    totalEl.textContent =  totalCalculator(inputCash.value, tipCalculator(event.target.value, inputCash.value, inputPeople.value), inputPeople.value)
})


document.getElementById("reset").addEventListener("click", ()=>{
    inputCash.value = 0
    inputPeople.value = 0
    tipEl.textContent = 0
    totalEl.textContent = 0
})