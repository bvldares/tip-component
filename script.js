const btnEl = document.querySelectorAll(".btn")
let tipValue = null


btnEl.forEach(function(btn){
    btn.addEventListener("click", function(){
        tipValue = btn.value
        console.log(tipValue)
    })
})