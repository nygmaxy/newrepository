// let promise = new Promise((resolve,reject)=> { 
//       reject('result') 
// }); 
 
// promise 
//    .then(result =>{ 
//         alert("fillet"+result)   
//    }, 
//     error => { 
//         alert("reject"+error) 
//     } 
//    )'
fetch('https://jsonplaceholder.typicode.com/todos') 
  .then(data => data.json()) 
  .then(data => console.log(data))
