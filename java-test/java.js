//alert

// alert('hello world');

//console

console.log("Hello World");
console.error("this is error");
console.warn("this is warrning");

//let,const

let age = 30;
age = 15;              // we can change the value
console.log(age);

const score = 20;
// score=30;       it not change
console.log(score);

//string,number,boolean,null,undefined

const name1 = 'gayu';
const mark = 70;
const rating = 5.6;
const cool = true;
const x = null;         //object
const y = undefined;
let z;

console.log(typeof name1);
console.log(typeof mark);
console.log(typeof rating);
console.log(typeof cool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

//concatenation
console.log('my name is' + name1 + 'and mark' + mark);

//template string
console.log(`my name is ${name1} and mark ${mark}`);
const itsme = `my name is ${name1} and mark ${mark}`;
console.log(itsme);


//string properties
const s = "Heyy";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 2));
console.log(s.toUpperCase().substring(0, 2));
console.log(s.split(''));

const d = 'oi, hi, haha';
console.log(', ');

//arrays 
const number = new Array(1, 2, 3, 4, 5);
console.log(number);

const fruit = ['apple', 'bananan', 'orange'];
console.log(fruit);
console.log(fruit[2]);
fruit[3] = 'grpes';
fruit.push('mangoes');    // in end add values
fruit.unshift('berries');  //in starting add value
fruit.pop(2);   //last item is not visible
console.log(Array.isArray(fruit)); //true
console.log(Array.isArray('game')); //false
console.log(fruit.indexOf('orange'));
console.log(fruit);

//object - keyvalue

const person = {
    firstname: 'gayu',
    lastname: 'thiri',
    address: {
        street: 'dfghjk',
        city: 'ertyuio'
    }
};
person.email = 'sdfg@gmail.com';
console.log(person);
console.log(person.firstname, person.lastname);
console.log(person.address.city);

//both array and object

const today = [
    {
        id: 1,
        empoly: 'sdfgh',
        isCompleted:true
    },
    {
        id: 2,
        empoly: 'srtyh',
        isCompleted:true
    },
    {
        id: 3,
        empoly: 'scvbnh',
        isCompleted:true
    }
];
console.log(today);
console.log(today[1].id);

//json formate

const todoJSON = JSON.stringify(today);
console.log(todoJSON);

//for loop
for(let i=0;i<10;i++){
    console.log(i);
    console.log(`for loop : ${i}`);
}

//while
let i=0;
while(i<10) {
    console.log(`while loop : ${i}`);
    console.log(i);
    i++;
}

//for in array
for(let i=0;i<today.length;i++) {
    console.log(today[i].id);
}

for(let todo of today) {
    console.log(todo.empoly);
}
  
// for each 
today.forEach(function(todo){
    console.log(todo.empoly);
});

//map
today.map(function(todo){
    console.log(todo.id);
});

const todotext = today.map(function(todo){
    return todo.empoly;
});

console.log(todotext);

//filter

const todoCompleted = today.filter(function(todos){
    return todos.id=== 1;
}).map(function(todos){
    return todos.empoly;
})

console.log(todoCompleted);

//if

const r = 10;
const t=7;

if (r> 10 || t>10){
    console.log(`x is ${r}`);
}

else if (r> 10 && t>10){
    console.log(`x is ${r}`);
}


else if (x>10){
  console.log('x is greater');
}

else {
    console.log ('x is not 10');
}

//nested if

if (r<5){
    if (t>10){
        console.log(t);
    }
    else {
        console.log(r)
    }
}

else {
    console.log(t)
}

// terinary 

const l =30;
const color =l>10 ? 'red':'blue';
console.log(color);

switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;    
}

//function

function addnum(num1,num2) {
    console.log(num1+num2);
}

addnum(5,5);

const addnumb = (num1 = 1, num2 =2) => {
    console.log(num1+num2);
    return num1+num2;
}


console.log(addnumb(9,5))


const addnumber = (num1 =1 ,num2 = 2) => console.log(num1 +num2);
addnumber(7,5);

//constractor fucntion

function Person (firstname,lastname,dob){
    this.firstname = firstname;
    this.lastname =lastname;
    this.dob = new Date (dob);
    this.getBrithYear = function () {
        return this.dob.getFullYear();
    }
    this.getFullName =function() {
        return `${this.firstname} ${this.lastname}`;
    }
     
}

Person.prototype.getBrithYear = function(){
    return this.dob.getFullYear();
}

//class
class erson {
    constrauctor (firstname ,lastname ,dob) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = new Date (dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    
    getFullName(){
        return `${this.firstname} ${lastname}`;
    }  
}

console.log(erson.getFullName)

//instatiate object 
const person1 =new Person('gayu','thiri','3.5.7009');
const person2 =new Person('maha','lakshmi','2.3.5009');


console.log(person1.dob);
console.log(person1.getBrithYear());
console.log(person1);

//math
console.log(Math.pi);
console.log(Math.abs(-3));
console.log(Math.ceil(0.5));
console.log(Math.floor(5.95));
console.log(Math.random());
console.log(Math.random()*(100-1)+1);
console.log(Math.round(0.5));
console.log(Math.max(15,345,67,23));
console.log(Math.min(45,45,76,5,0));
console.log(Math.pow(5,4));
console.log(Math.trunc(2.45677));
console.log(Math.sqrt(16));
console.log(Math.exp(6));

//document
console.log(window);

window.alert(1);

//single element
// const form =(document.getElementById('my-form'));
// console.log(form);

console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));

//multiple element
console.log(document.querySelectorAll('.form-label'));
console.log(document.getElementsByClassName('form-label'));
console.log(document.getElementsByTagName('label'));

//foreach

const items = document.querySelectorAll('.form-label');

items.forEach((form) => console.log(form));

//manipulating tha dom

const ul =document.querySelector('.item');

// ul.remove();
// ul.lastElementChild.remove();      last element is remove
// ul.firstElementChild.textContent = 'uio';
// ul.children[1].innerText='wf';
// ul.lastElementChild.innerHTML='<h1>wsd</h1>';     the value of list is change

const btn=document.querySelector('.btn');
btn.computedStyleMap.background='red';   //color of button will change

// btn.addEventListener('click',(e)=> {
//     e.preventDefault();
//     console.log('click');
//     console.log(e.target.className);
//     document.querySelector('#my-form')
//     .style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-danger');
//     document.querySelector('.item')
//     // .lastElementChild.innerHTML = '<h1>rtghbn</h1>' ;     //the value will change
// });

btn.addEventListener('mouseover',(e)=> {
    e.preventDefault();
    console.log('mouseover');
    console.log(e.target.className);
    document.querySelector('#my-form')
    .style.background = '#ccc';
    document.querySelector('body').classList.add('bg-info');
    document.querySelector('.item')
    // .lastElementChild.innerHTML = '<h1>rtghbn</h1>' ;     //the value will change
});

// btn.addEventListener('mouseout',(e)=> {
//     e.preventDefault();
//     console.log('click');
//     console.log(e.target.className);
//     document.querySelector('#my-form')
//     .style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.item')
//     // .lastElementChild.innerHTML = '<h1>rtghbn</h1>' ;     //the value will change
// });


const email = document.querySelector('#email');
const password = document.querySelector('#password');
const msg = document.querySelector('#msg');
const form = document.querySelector('#my-form');


form.addEventListener('submit',onSubmit);

function onSubmit(r){
    r.preventDefault();
     if(password.value === '' || email.value === '') {
        alert('please fill it');
        msg.classList.add('bg-danger');
        msg.innerHTML = 'please enter all';
        setTimeout(() => msg.remove(),30000000)
     }
     else {
        console.log('success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${
            email.value} : ${password.value}`));

            userlist.appendChild(li);
//clear fields
email.value ='';
password.value = '';
        }


    console.log(email.value);
}

console.log('12')


















