
const easy = document.getElementById("easy")
 const hard = document.getElementById("hard")
const normal = document.getElementById("normal")
const impenetrable = document.getElementById("impenetrable")
const PartTwo = document.getElementById("partTwo")
const show = document.getElementById("BTN_show")
const Text = document.getElementById('Text_password')

let total_Array = []
let Answer = []

let A_numbers =[0,1,2,3,4,5,6,7,8,9]
let A_E_alphabet = ["A", "E", "I", "O", "U","B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q","R",
 "S", "T", "V", "X","Z", "W", "Y"]

const mark = ["!", "@" ,"/" , "=" , "-" , "+" , "%" , "$" , "&"]
const A_Russian = ["пар","оль" , "сол","дат"]



PartTwo.addEventListener("click",function handleClick(event){
    
        
   if(event.target.id == "easy") {
      total_Array.push(...A_numbers)
      

   }
 
   
   if(event.target.id == "hard"){
    total_Array.push(...A_numbers)
    total_Array.push(...A_E_alphabet)
    total_Array.push(...mark)
    // console.log(total_Array);

   }
   

   if(event.target.id == "normal") {
       total_Array.push(...A_numbers)
    total_Array.push(...A_E_alphabet)
     

   }
   if(event.target.id == "impenetrable"){
    total_Array.push(...A_numbers)
    total_Array.push(...A_E_alphabet)
    total_Array.push(...mark)
    total_Array.push(...A_Russian)

   }

   for(let i = 0; i<= 7;i++){
    let Randomaise = total_Array[Math.floor(Math.random() * total_Array.length)]
  
    Answer.push(Randomaise)
    

   }
   console.log(Answer);
   Text.innerHTML = Answer.join("")
   Answer.splice(0,Answer.length)
   console.log(Answer);
    

   
   
  
  

})







// function  Feasy() {
//     // A_easy = [0 , 1 , 2 , 3 , 4, 5 , 6 , 7 , 8 , 9]
//     if(BTN_easy) {
//         log("yesssssss")
//     }
//     BTN_easy = true
    
   
// }  







