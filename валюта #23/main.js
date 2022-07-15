// async function f1(){ 
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts'); 
//     return  res.json(); 
// } 
// async function f2(){ 
//    const res = await fetch('https://jsonplaceholder.typicode.com/comments'); 
//    return  res.json(); 
// } 
// async function f3(){ 
//     const res = await fetch('https://jsonplaceholder.typicode.com/albums'); 
//     return  res.json(); 
// }      

// function go(){ 
//    let a = f1(); 
//    console.log(a) 

//    let b = f2(); 
//    console.log(b) 


//    let c = f3(); 
//    console.log(c) 
// } 
// go();


//1
//exchange rates
//VALUTE
const courses = {}; 
 
const elementUSD = document.querySelector('[data-value="USD"]'); 
const elementEUR = document.querySelector('[data-value="EUR"]'); 
const elementKGS = document.querySelector('[data-value="KGS"]'); 
 
const input = document.getElementById('input'); 
const result = document.getElementById('result'); 
const select = document.getElementById('select'); 
 
 
 
 
getData() 
 
 
 
input.oninput = function(){ 
    result.value = (parseFloat(input.value) / courses[select.value].Value).toFixed(2) 
} 
 
select.oninput = function(){ 
    result.value = (parseFloat(input.value) / courses[select.value].Value).toFixed(2) 
} 
 
 
 
 
async function getData(){ 
    const data = await fetch('https://www.cbr-xml-daily.ru/daily_json.js') 
    const result = await data.json(); 
    console.log(result); 
 
    courses.USD = result.Valute.USD 
    courses.EUR = result.Valute.EUR 
    courses.KGS = result.Valute.KGS 
 
    elementUSD.innerHTML = courses.USD.Value.toFixed(2) 
    elementEUR.innerHTML = courses.EUR.Value.toFixed(2) 
    elementKGS.innerHTML = courses.KGS.Value.toFixed(2) 
    
    if(courses.USD.Value > courses.USD.Previuos){ 
        elementUSD.classList.add('top') 
    }else{ 
        elementUSD.classList.add('bottom') 
    } 
     
 
    if(courses.EUR.Value > courses.EUR.Previuos){ 
        elementEUR.classList.add('top') 
    }else{ 
        elementEUR.classList.add('bottom') 
    } 
 
 
    if(courses.KGS.Value > courses.KGS.Previuos){ 
        elementKGS.classList.add('top') 
    }else{ 
        elementKGS.classList.add('bottom') 
    } 
 
 
    console.log(courses); 
}
