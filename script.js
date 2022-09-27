const btnEl = document.querySelectorAll(".btn")
const inputCash = document.getElementById("calculator-input-amount")
const inputPeople = document.getElementById("calculator-input-people")

const tipEl = document.getElementById("tip")
const totalEl = document.getElementById("total")


btnEl.forEach(function(btn){
    btn.addEventListener("click", function(){
       tipEl.textContent = tipCalculator(btn.value, inputPeople.value, inputCash.value)
    })
})




function tipCalculator(percentage, people, total){
    return (total * percentage) / people
}


function totalCalculator(total, tip, people){
    return (total + tip) / people
}