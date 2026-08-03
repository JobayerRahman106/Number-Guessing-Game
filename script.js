let playeroneinput = document.querySelector(".playeroneinput")
let playeronebutton = document.querySelector(".playeronebutton")
let error = document.querySelector(".error")

playeronebutton.addEventListener("click", function(){

    // console.log(typeof playeroneinput.value)
    // console.log(Boolean(Number(playeroneinput.value)))
    // console.log(isNaN(playeroneinput.value))

   
    if(playeroneinput.value == ""){
        error.style.color = "red"
        error.innerHTML = "Please give a number"
    }
    else{
        if(Number(playeroneinput.value)){
        error.innerHTML = ""
    }
    else{
        error.style.color = "red"
        error.innerHTML = "Please give a number"
    }
    }

});