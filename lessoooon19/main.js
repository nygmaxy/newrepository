// const URL = 'https://jsonplaceholder.typicode.com/users'; 
 
// function sendRequest(method,url,body){ 
//     return new Promise((resolve,reject) => { 
//         const xhr = new XMLHttpRequest(); 
          
      
     
//         xhr.open(method,url); 
//         xhr.responseType = "json"; 
//         xhr.setRequestHeader("Content-type",'application/json'); 
    
//         xhr.onload = () =>{ 
//               console.log(JSON.parse(xhr.response)); 
//         } 
         
//         xhr.onerror = () => { 
//            console.log("error"); 
//         } 
    
    
//         xhr.send(JSON.stringify(body)); 
//     }) 
 
// } 

// const body = { 
//     name:'Akniet', 
//     age:21 
// } 
 
// sendRequest("POST",URL,body) 
// .then(data => console.log(data)) 
// .then(err => console.log(err));



