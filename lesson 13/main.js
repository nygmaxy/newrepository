//   let box = document.querySelector('div');
// //   let box2 = document.querySelectorAll("")

// //   console.log(box)
// conaole.log(box.getAttribute('class'));


// let create = document.createElement('div');
// create.setAttribute('class','block')
// console.log(create.textContent = "Привет мир");
// console.log(create);

// let h1 = document.createElement('h1')
// console.log(h1.innerHTML = "Hello world");
// console.log(h1);

// let h2 = document.querySelector('.h2');
// console.log(h2.innerHTML = 'Я замекнил заголовок')

// let ul = document.querySelector('ul');
// let li = document.createElement('li');
// li.textContent = 5;
// li2.textContent = 0;
// ul.append(li)
// ul.prepend(li2)
// console.log(ul)

// let li = document.createElement('li');
// li.remove()


// let div = document.querySelector('div')
// div.classList.add('div');
// div.classList.remove('div');
// console.log(div);

let div = document.querySelector('.box');
let btn = document.querySelector('.btn');

btn.addEventListener('click',() =>{
    div.classList.toggle('black');
})

div.classList.contains('box')
console.log(div.classList.contains('box'));