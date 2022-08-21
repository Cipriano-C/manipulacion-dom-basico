const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const btn = document.querySelector('btnCacular');
const pResult = document.querySelector('#result');


const p1 = document.querySelectorAll('p');

console.log(p1)

console.log (h1.innerHTML)

console.log(input1.value)

console.log ({
	h1,
	p,
	parrafito,
	pid,
	input1,
});

h1.innerHTML = 'cambio para que veas <em> esto';
h1.innerText = 'otro cambio'

console.log(h1.getAttribute('pantalla'));

h1.setAttribute('class', 'red');

h1.classList.add('verde');

h1.classList.remove('red');

h1.classList.toggle('ambar');

h1.classList.contains('red');

input1.value = '456';

const img = document.createElement('img');
img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/240px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png');

console.log(img)

pid.append(img);

function BtnOnClick() {
    sumaInputs = Number(input1.value) + Number(input2.value)
    pResult.innerHTML = "Resultado: " + sumaInputs
}
