// const URL = 'https://jsonplaceholder.typicode.com/users'; 
 

// function sendRequest(mathode,url,body){
//     return fetch(url,{
//       methode:method,
//       body:JSON.stringify(body),
//       headers:headers
//     })
// }
// const body = { 
//     name:'Akniet', 
//     age:21 
// } 
 
// sendRequest("POST",URL,body) 
// .then(data => console.log(data)) 
// .then(err => console.log(err));
 


// fetch('https://jsonplaceholder.typicode.com/users')
// .then(data =>{
//      console.log(data);
//      return data.text()
// })
// .then(data => console.log(JSON.parse(data)));





//1
fetch('https://jsonplaceholder.typicode.com/users')
.then(data => data.json())
.then(data => data.showCards(data));

function showCards(Cards){
  
}

