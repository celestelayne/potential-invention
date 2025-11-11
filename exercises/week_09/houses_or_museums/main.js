// select the english button
const en_btn = document.querySelector(".en")
// select the portuguense button
const pt_btn = document.querySelector(".pt")

// grab the english text block
const english_text = document.querySelector(".english")
const portuguese_text = document.querySelector(".portuguese")

// define the function to translate the text to pt
function translateToPortuguese() {
    // select the title
    let h1 = document.querySelector("h1")
    // translate the title
    h1.textContent = "Casas ou Museus?"
    // hide the english text block
    english_text.style.display = "none"
    // show the portuguese text block
    portuguese_text.style.display = "block"
}

function translateToEnglish() {
    // select the title
    let h1 = document.querySelector("h1")
    // translate the title
    h1.textContent = "Houses or Museums?"
    // hide the english text block
    portuguese_text.style.display = "none"
    // show the portuguese text block
    english_text.style.display = "block"
}

// addEvenListener to the english button
en_btn.addEventListener("click", translateToEnglish)
pt_btn.addEventListener("click", translateToPortuguese)