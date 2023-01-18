let outputColor = document.querySelector(#output-color);
let output = document.getElementById(output);
let genBtn = document.getElementById(gen-btn)
let copyBtn = document.getElementById(copy-btn);
let hexString = 0123456789abcdef;

let genHexCode = () => {
    let hexCode = “#”;
    for( i = 0; i < 6; i++){
        hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    output.value = hexCode;
    outputColor.classList.remove(“show-color”);
    setTimeout( () => {
        outputColor.classList.add(“show-color”);
    },10);
    outputColor.style.backgroundColor = hexCode;
}

copyBtn.addEventListener(“click”, () => {
    output.select();
    document.execCommand(“copy”);
})
window.onload = genHexCode;
genBtn.addEventListener(“click”, genHexCode);