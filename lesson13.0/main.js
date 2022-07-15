// document.querySelector(".div1").onclick = function(){ 
//     console.log("click"); 
// } 
 
// document.querySelector(".div2").onclick = function(){ 
//     console.log("click"); 
// } 
 
// document.querySelector(".div3").onclick = function(event){ 
//     console.log(event.target); 
//     event.stopPropagation
// }

// document.querySelector(".div4").onclick = function(){ 
//     console.log("click"); 
// }

// document.querySelector(".div5").onclick = function(){ 
//     console.log("click"); 
// }

// document.querySelector(".div6").onclick = function(){ 
//     console.log("click"); 
// }

// //2
// document.querySelector(".man1").onclick = function(){ 
//     console.log("click"); 
// } 
 
// document.querySelector(".man2").onclick = function(event){ 
//     console.log("click"); 
//     event.stopPropagation(); 
// } 
 
// document.querySelector(".man3").onclick = function(){ 
//     console.log("click"); 
// }


let modal = document.getElementById('myModal');

let btn = document.getElementById('btn');

let close = document.getElementById('close');

btn.onclick = function(){
    modal.style.display = "block"
}

close.onclick = function(){
    close.style.display = "none"
}

window.onclick = function (event){
    if(event.target === modal){
        modal.style.display = "none";
    }
}