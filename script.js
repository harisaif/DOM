function alert1(pass){
    alert('Hello clicked '+ pass);
}
function alert3(){
    alert('Hello btn 3!');
}
const btn2 = document.querySelector('#btn2');
btn2.onClick = () => alert('Clicked btn 2');

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click',alert3);

btn3.addEventListener('click', function(e){
    console.log(e.target.style.color = 'red');
});
// ................................................................
// Attaching Listeners to a Group of Nodes
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', (e) => {
    alert(button.id);
  });
});

// ................................................................
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = "Hello";

container.appendChild(content);

const p = document.createElement('p');
p.classList.add('red');
p.style.color = 'red';
document.getElementsByClassName("red")
p.textContent = "Hey i am Red!";

container.appendChild(p);

const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.textContent = "Hey I am Blue H3";
h3.style.color = 'blue';
container.appendChild(h3);

const div = document.createElement('div');
div.classList.add('border');
div.setAttribute('style', 'border: 1px solid black;');
container.appendChild(div);

const h1div = document.createElement('h1');
h1div.classList.add('h1div');
h1div.textContent = "I am a DIV";
div.appendChild(h1div);

const p2 = document.createElement('p');
p2.classList.add('p2');
p2.textContent = "ME TOO!";
div.appendChild(p2);