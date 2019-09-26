let firstNum = prompt("Zadej první číslo"); // první bod
let secNum = prompt("Zadej druhý číslo"); // druhej bod

let pyth = Math.sqrt(firstNum * firstNum + secNum * secNum); // výpočet tretí strany, co udavá vzdalneost od stredu (pythagorova veta)


if(pyth < 5) { 
document.write("<span class=lol> Bod " + "(" + firstNum + ";" + secNum + ")" + " je v dostřelu dělové věže </span>");
}else {
document.write("<span class=lul> Bod " + "(" + firstNum + ";" + secNum + ")" + " není v dostřelu dělové věže </span>");
}
