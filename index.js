let form =  document.getElementById("form");
let delay =  document.getElementById("delay");
let scale = document.getElementById("scale");
let growBtn = document.getElementById("grow");
let shrinkBtn = document.getElementById("shrink");
let roundBtn =  document.getElementById("round");
let box = document.getElementById("box");

let delayValue = delay.value * 1000
let width = 100;
let height = 100;

function reset(){
    setTimeout(() => {
        box.style.width = `${width}px`
        box.style.height = `${height}px`
        box.style.borderRadius = "0"
    }, delayValue+=2000);
 
}
function growBox(){
    setTimeout(() => {
    box.style.width = `${width * scale.value}px`
    box.style.height = `${height * scale.value}px`
    }, delayValue);
    
};

function shrinkBox(){
    setTimeout(() => {
        box.style.width = `${width / scale.value}px`
        box.style.height = `${height / scale.value}px`
    }, delayValue);
}

function roundBox(){
    setTimeout(() => {
        box.style.borderRadius = `${scale.value}px`
    }, delayValue);
}

// console.log(growBox())

growBtn.addEventListener("click", (e) => {
    e.preventDefault();
    growBox()  
    reset();
    // delay.value =""
    // scale.value =""
})

shrinkBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    shrinkBox();
    reset();
    // delay.value =""
    // scale.value =""
} )

roundBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    roundBox();
    reset();
    // delay.value =""
    // scale.value =""
})

