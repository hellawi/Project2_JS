// task 1
let input = document.querySelector(".year_birth")
let button = document.querySelector(".fa-search")
let result = document.querySelector(".birth_result")
button.addEventListener("click", function(){
    if(input.value % 4 == 0){
        result.innerHTML = "Ви народились в високосний рік!"
        result.style.color = "green"
    } else{
        result.innerHTML = "Ви народились не в високосний рік!"
        result.style.color = "red"
        result.style.fontWeight = "bold"
    }
    if(input.value >= 2024){
      result.innerHTML = "Такого року ще не було!"
      result.style.color = "red"
    }
})

// task 2
let inputRnd = document.querySelector(".rnd_input")
let btnSearch = document.getElementById("fa-search_h")
let resultRnd = document.getElementById("rndRes")
btnSearch.addEventListener("click", function(){
  console.log(getRandomNumber)
  if(inputRnd.value == getRandomNumber){
    resultRnd.innerHTML = `Вітаю, ви вгадали число! ${getRandomNumber}`
    resultRnd.style.color = "green"
  } else{
    resultRnd.innerHTML = `Ви програли, комп’ютер загадав ${getRandomNumber}`
    resultRnd.style.color = "red"
  }
  if(inputRnd.value > 255){
    resultRnd.innerHTML = "Число має бути в діапазоні від 0 до 255!"
    resultRnd.style.color = "red"
  }
})
let getRandomNumber = Math.floor(Math.random() * (255 - 0) + 0);

// task 3
const rock = document.querySelector(".img_1");
const scissors = document.querySelector(".img_2");
const paper = document.querySelector(".img_3");
const result3 = document.querySelector(".result_box");
const variantOfPC = document.querySelector(".variant_pc")
const score3PLayerText = document.querySelector(".im")
const score3PCText = document.querySelector(".pc")
let score3PLayer = 0
let score3PC = 0
let arrItems = ["rock", "scissors", "paper"]
let playerChoice;

variantOfPC.addEventListener("click", function(){
  let varianttOfPc = arrItems[getRandomChoice()];
  if(playerChoice == "rock" && varianttOfPc == "scissors"){
    result3.innerHTML = "Ви виграли раунд!"
    result3.style.color = "green"
    score3PLayer++
    score3PLayerText.innerHTML = "Ви - " + score3PLayer
    score3PCText.innerHTML = "Комп'ютер - " + score3PC
  } else if(playerChoice == "scissors" && varianttOfPc == "paper"){
    result3.innerHTML = "Ви виграли раунд!"
    result3.style.color = "green"
    score3PLayer++
    score3PLayerText.innerHTML = "Ви - " + score3PLayer
    score3PCText.innerHTML = "Комп'ютер - " + score3PC
  } else if(playerChoice == "paper" && varianttOfPc == "rock"){
    result3.innerHTML = "Ви виграли раунд!"
    result3.style.color = "green"
    score3PLayer++
    score3PLayerText.innerHTML = "Ви - " + score3PLayer
    score3PCText.innerHTML = "Комп'ютер - " + score3PC
  } else if(playerChoice == varianttOfPc){
    result3.style.color = "black"
    result3.innerHTML = "Нічия!"
    score3PLayerText.innerHTML = "Ви - " + score3PLayer
    score3PCText.innerHTML = "Комп'ютер - " + score3PC
  }
  else {
    result3.innerHTML = "Комп'ютер виграв раунд!"
    result3.style.color = "red"
    score3PC++
    score3PLayerText.innerHTML = "Ви - " + score3PLayer
    score3PCText.innerHTML = "Комп'ютер - " + score3PC
  }
})
function getRandomChoice(){
  return Math.floor(Math.random() * 3)
}
function playerChoiceFnctn(knp){
  playerChoice = knp;
}

// task 4
let plus = document.querySelector(".plus")
let multiply = document.querySelector(".multiply")
let minus = document.querySelector(".minus")
let divide = document.querySelector(".divide")
let numInput14 = document.querySelector(".number-01")
let numInput24 = document.querySelector(".number-02")
let resultT4 = document.getElementById("result4")

var multiplicate = function(){
  resultT4.innerHTML = +numInput14.value * +numInput24.value
}
var plussion = function(){
  resultT4.innerHTML = +numInput14.value + +numInput24.value
}
var division = function(){
  resultT4.innerHTML = +numInput14.value / +numInput24.value
}
var minussion = function(){
  resultT4.innerHTML = +numInput14.value - +numInput24.value
}

plus.addEventListener("click", plussion)
multiply.addEventListener("click", multiplicate)
divide.addEventListener("click", division)
minus.addEventListener("click", minussion)

// header > interactive
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}

// modal > header
// let button_save = document.querySelector(".value_btn")
// let result_name = document.querySelector(".header-text-span")
// let input_name = document.querySelector(".input_name")
// let form = document.querySelector(".name_form")
// button_save.addEventListener("click", function(event){
//   form.onsubmit = event.preventDefault()
//   result_name.textContent = input_name.value;
// })


// task 8
const npt1 = document.querySelector(".number_1");
const npt2 = document.querySelector(".number_2");
const npt3 = document.querySelector(".number_3");
const btn = document.getElementById("check_button");
const result_num = document.querySelector(".result_number");
console.log(btn)
btn.addEventListener('click', event => {
    if (npt1 && npt2 && npt3) {
      if (parseInt(npt1.value) > parseInt(npt2.value) && parseInt(npt1.value) > parseInt(npt3.value)) {
          result_num.textContent = npt1.value;
      } else if (parseInt(npt2.value) > parseInt(npt3.value)) {
          result_num.textContent = npt2.value;
      } else {
          result_num.textContent = npt3.value;
      }
    }
});


// task 5
let btnT_5 = document.querySelector(".task5")
let resultT_5 = document.querySelector(".result_text")

btnT_5.addEventListener("click", function(){
  let minutes = +document.querySelector(".task5_input").value;
  let day = Math.floor(minutes/(60*24));
  minutes = minutes%(60*24);
  let hours = Math.floor(minutes/60)
  if(hours < 10){
    hours = "0" + hours;
  }
  minutes = minutes%60;
  if(minutes < 10){
    minutes = "0" + minutes
  }
  resultT_5.innerHTML = `${day} дн. ${hours}:${minutes}:00`
})

// football
let canvas = document.querySelector(".canva")
let context = canvas.getContext("2d")

var mouseXblock = 0
var mouseYblock = 0

canvas.addEventListener("click", function(event){
  var mouseX = event.pageX
  var mouseY = event.clientY
  var block = document.querySelector(".canva")
  var blockRectangle = block.getBoundingClientRect()
  var blockX = blockRectangle.left
  var blockY = blockRectangle.top
  mouseXblock = mouseX - blockX - 25
  mouseYblock = mouseY - blockY - 25
})

let ball = new Image()
ball.src = "../img/foot_ball.png"

canvas.width = 720
canvas.height = 220

function draw(){
  context.fillStyle = "green"
  context.fillRect(0, 0, 720, 720)
  context.drawImage(ball, mouseXblock, mouseYblock)
  if(mouseXblock > 0){
    context.fillStyle = "green"
    context.fillRect(0, 0, 720, 720)
    context.drawImage(ball, mouseXblock, mouseYblock)
  }
}
setInterval(draw, 30)

// theme (dark, white)
const elementsTheme = document.querySelectorAll("#themeMode")
const ButtonSwitch = document.querySelector("#btnSwitch")
let isWhite = true;
ButtonSwitch.addEventListener("click", function(){
  isWhite = !isWhite
  if(isWhite){
    changeTheme("dark", "white")
  } else{
    changeTheme("white", "dark")
  }
})
function changeTheme(classRemove, classAdd){
  for(const element of elementsTheme){
    console.log(element)
    element.classList.remove(classRemove)
    element.classList.add(classAdd)
  }
}