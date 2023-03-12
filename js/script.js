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


let button_save = document.querySelector(".value_btn")
let result_name = document.querySelector(".header-text-span")
let input_name = document.querySelector(".input_name")
let form = document.querySelector(".name_form")
button_save.addEventListener("click", function(event){
  form.onsubmit = event.preventDefault()
  result_name.textContent = input_name.value;
})



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