window.onload = function(){ 
    let todolist  = []; 
    if(localStorage.getItem('todo') != undefined){ 
        todolist = JSON.parse(localStorage.getItem('todo')); 
        out(); 
    } 
    document.getElementById('add').onclick = function(){ 
 
    
         let d =  document.getElementById('in').value 
          
        let temp = {}; 
        temp.todo = d; 
        temp.check = false; 
        let i = todolist.length;    
        todolist[i] = temp; 
        console.log(todolist); 
        out(); 
        localStorage.setItem('todo',JSON.stringify(todolist)); 
    } 
 
    function out(){ 
        let out = ''; 
        for(let key in todolist){ 
             if(todolist[key].check == true){ 
                out += '<input type="checkbox"  checked>' 
             }else{ 
                out += '<input type="checkbox">' 
             } 
            out += todolist[key].todo + '<br>' 
         } 
         document.getElementById('out').innerHTML = out; 
    } 
    document.getElementById('remove').onclick  = function () {
         for(let i = 0; i < todolist.length; i++){
            if
         }
        }
    }

