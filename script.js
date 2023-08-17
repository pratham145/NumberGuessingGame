let inp = document.querySelector(".inp")
let num;
let rn = Math.floor(Math.random()*100);
let guess = 10
let prev = []
console.log(rn)
document.querySelector("button").addEventListener("click", ()=>{
    num = Number(inp.value);
  
    checkans();
   
 })
 function checkans(){
    if(num==rn){
        document.querySelector(".Message").textContent = " yeah !! , you winn. "
       setTimeout(reset,2000)
        
    }
    else if(num < 0){
        document.querySelector(".Message").textContent = `Please Enter valid positive number between 1 and 100.`
    }
    else if(num > 100){
        document.querySelector(".Message").textContent = `Please Enter valid positive number between 1 and 100.`
    }
    else if(num > rn){
        document.querySelector(".Message").textContent = `Number is too big. `
    }
    else if(num < rn){
        document.querySelector(".Message").textContent = `Number is too small. `
    }
    guessremaining();
    prevnumber();
 }
 function guessremaining(){
    guess--;
    
    document.querySelector(".Guess").textContent = `${guess}`
    if(guess == 0){
        alert("please,presss ok to restart the game.")
        reset();
    }
 }
 
 function prevnumber(){
    prev.push(num) 
    document.querySelector(".prev").textContent = `${prev} `
}
function reset(){
document.querySelector("body").innerText  = "Gameover!,please reload the page to play again."
}