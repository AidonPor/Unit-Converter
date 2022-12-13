const length = ["meters", "feet", 3.281]
const volume = ["liters", "gallons", 0.264]
const mass = ["kilogramms","pounds", 2.204]
const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const incrementBtn = document.getElementById("increment-btn")
const decrementBtn = document.getElementById("decrement-btn")

incrementBtn.addEventListener("click", function () {
    inputEl.value = Number(inputEl.value) + 1
})

decrementBtn.addEventListener("click", function () {
    if (Number(inputEl.value) === 0) {
        inputEl.value = 0
    } else {
        inputEl.value = Number(inputEl.value) - 1
    }
})

convertBtn.addEventListener("click", function () {
    const lengthConversion = conversion(length)
    const volumeConversion = conversion(volume)
    const massConversion = conversion(mass)
    lengthEl.textContent = lengthConversion
    volumeEl.textContent = volumeConversion
    massEl.textContent = massConversion
    inputEl.value = 0
})

function conversion(type) {
    const unit1Value = (Number(inputEl.value) * type[2]).toFixed(3)
    const unit2Value = (Number(inputEl.value) / type[2]).toFixed(3)
    return `${Number(inputEl.value)} ${type[0]} = ${unit1Value} ${type[1]} | ${Number(inputEl.value)} ${type[1]} = ${unit2Value} ${type[0]}`
}

