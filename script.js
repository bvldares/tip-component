const btnEl = document.querySelectorAll(".btn")
const inputCash = document.getElementById("calculator-input-amount")
const inputPeople = document.getElementById("calculator-input-people")
const tipEl = document.getElementById("tip")
const totalEl = document.getElementById("total")
const errorEl = document.querySelector(".error")


btnEl.forEach(function (btn) {
    btn.addEventListener("click", function () {
        if (parseInt(inputPeople.value) > 0) {
            tipEl.textContent = tipCalculator(btn.value, inputCash.value, inputPeople.value)
            totalEl.textContent = totalCalculator(inputCash.value, tipCalculator(btn.value, inputCash.value, inputPeople.value), inputPeople.value)
            errorEl.style.display = "none"
        } else {
            errorEl.style.display = "block"
        }
    })
})

function tipCalculator(percentage, total, people) {
    return (total * (percentage / 100)) / people
}

function totalCalculator(total, tip, people) {
    return total / people + tip
}


document.querySelector(".btn-keyup").addEventListener("keyup", (event) => {
    if (parseInt(inputPeople.value) > 0) {
        tipEl.textContent = tipCalculator(event.target.value, inputCash.value, inputPeople.value)
        totalEl.textContent = totalCalculator(inputCash.value, tipCalculator(event.target.value, inputCash.value, inputPeople.value), inputPeople.value)
        errorEl.style.display = "none"
    } else {
        errorEl.style.display = "block"
    }
})


document.getElementById("reset").addEventListener("click", () => {
    inputCash.value = 0
    inputPeople.value = 0
    tipEl.textContent = 0
    totalEl.textContent = 0
    errorEl.style.display = "none"

})