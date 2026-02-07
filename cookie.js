const cookie_img = document.getElementById("cookie_img");
const body = document.body;
const counter = document.getElementById("count");
const restartBtn = document.getElementById("restart");
const doubleBtn = document.getElementById("double");

counter.innerText = 0;

cookie_img.addEventListener("click", function(e){
    counter.innerText ++;

    if(counter.innerText>5 && counter.innerText<25){
        body.style.backgroundColor = "pink";
        restartBtn.removeAttribute("hidden");
    }else if(counter.innerText>24){
        doubleBtn.removeAttribute("hidden");
    }
})

restartBtn.addEventListener("click", function(e){
    counter.innerText=0;
    body.style.backgroundColor = "chocolate";
    restartBtn.setAttribute("hidden", "");
    doubleBtn.setAttribute("hidden", "")
})

doubleBtn.addEventListener("click", function(e){
    counter.innerText= counter.innerText * 2;
})