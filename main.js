// alert('Hello World');
// console.log('Hello World');
// console.error('this is an error');
// console.warm('this is an warm');

// var,let.const 

// let age= 30;
// age=30;

// console.log(age);

// const score=10
// seore=10;

// console.log(score);

// String,numbers,boolean,null,undefined

// const name = 'John';
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof age);


// const name = 'John';
// const age = 30;
// //conatemation
// console.log(' My name is '+name +' and I am '+age);
// //Template String
// const hello = ('My name is ${name} and I am ${age}');

// console.log(hello)

// const s = 'Hello World!';
// const s = 'technology, computers, it, cod'

// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0,5));
// console.log(s.split(', '));

//Arrays - variables that hold multiple values

// const numbers = new Array(1,2,3,4,5);

// console.log(numbers);

// const fruits = ['apples', 'oranges','pears',10, true];

// fruits[3] = 'grapes';

// fruits.push('mangos');

// fruits.unshift('strawberries');

// fruits.pop();

// console.log(fruits);

// console.log(Array.isArray('hello'));

// console.log(fruits.indexOf('oranges'))

// console.log(fruits[1]);

// const person = {
//     firstname: 'john',
//     lastname: 'doe',
//     age:30,
//     hobbies:['music', 'reading', 'football'],
//     adderss: {
//         street: '50 main st',
//         city: 'boston',
//         state: 'MA'
//     }
// }

// person.email = 'ahmed@gmail.com';
// console.log(person)
// alert(person)
// console.log(person.hobbies[1])
// console.log(person.adderss.city);

// const { firstname, lastname,adderss:{city} } = person;

// console.log(firstname)
// console.log(city)

// const todos = [
//     {
//         id:1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id:2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id:3,
//         text: 'Doctor vsit',
//         isCompleted: false
//     },
// ];
// console.log(todos[1].text);

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON)

//For
// for(let i = 0; i <= 10; i++){
//     console.log('for Loop Number:${i}')
// }

//While
// let i = 0;
// while(i < 10){
// console.log('while Loop Number:${i}');
// i++;
// }
// for (let i = 0; i < todos.length; i++){
//     console.log(todos[i].text)
// }
// for (let todo of todos){
//     console.log(todo.id);
// }
//forEach, map, filter
// todos.forEach(function(todo){
// console.log(todo.text);
// });

// const todoText = todos.map(function(todo){
// return todo.text;
// });

// console.log(todoText)
// const todoText = todos.filter(function(todo){
//     return todo.isCompleted = true;
//     });.map(function(todo){
//         return todo.text;
//     });
    
//     console.log(todoText)
// const x = 4;
// const y = 11;

// if (x == 10){
//     console.log('x is 10');
// } 
// else if( x > 10){
//     console.log('x is greater than 10')
// }
// else{
//     console.log('x is Not 10');
// }
// else{
//     console.log('x is less than 10');
// }
// if (x > 5 || y > 10){
//     console.log('x is more than 5 or y is more than 10');
// } 
// else if( x > 10){
//     console.log('x is greater than 10')
// }
// const x = 21;

// const color = x > 10 ? 'red' : 'blue';
// const color = 'green';

// switch(color){
// case 'red':
//     console.log('color is red');
//     break;
// case 'blue':
//     console.log('color is blue');
//     break;
// default:
// console.log('color is Not red or blue');
// break;
// }

// console.log(color);

// function addNums( num1 = 1, num2 = 1){// console.log(num1+num2);
// return num1 + num2;
// }
// console.log (addNums(3,5));
// const addNums = (num1 = 1, num2 =1) => console.log(num1 + 
//     num2);

//     addNums(5,5);
// const addNums = num1 => num1 + 5;

// console.log(addNums(5));

// todos.forEach((todo) => console.log(todo));
// Constructor fuhnction
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
    // this.getBirthYear = function(){
    //     return this.dob.getFullYear();}
    // this.getFullName = function(){
    //     return `${this.firstName} ${this.lastName}`;
    // }
// }
// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// // Class
// class Person {
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }
//     getBirthYear(){
//         return this.dob.getFullYear();
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// Instantiate object
// const Person1 = new Person('John', 'Doe', '4-3-1980');
// const Person2 = new Person('Giie', 'kloe', '7-5-1970');

// console.log(Person1);
// console.log(Person2.dob.getFullYear());
// console.log(Person1.getBirthYear());
// console.log(Person1.getFullName());

// console.log(window);

// window.alert(1);

// Single element
// console.log(document.getElementById('my-form')) ;
// console.log(document.querySelector('h1')) ;

// Multiple element
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('Li'));

// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hi<h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// const btn = document.querySelector('.btn');

// btn.addEventListener('mouseover',(e) => {
//     e.preventDefault();
    // console.log('click');
    // console.log(e.target);
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.tems').lastElementChild.innerHTML = '<h1>Hi<h1>'
// });

// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userlist = document.querySelector('#users');

// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//     e.preventDefault();

//     // console.log(nameInput,value);
//     if(nameInput.value == '' || emailInput.value == ''){
//         alert('Please enter fields');

//     }else{
//         console.log('success')
//     }
// }
