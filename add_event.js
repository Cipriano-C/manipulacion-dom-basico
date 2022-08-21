const h1 = document.querySelector('h1');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const btn1 = document.querySelector('#btnCalcular2');
const pResult1 = document.querySelector('#result');
const form = document.querySelector('#form')

// form.addEventListener('submit', sumaInputValues);

// function sumaInputValues(event) {
//     // console.log({event});
//     event.preventDefault();
//     const sumaInputs1 = Number(input1.value) + Number(input2.value);
//     pResult1.innerText = "Resultado: " + sumaInputs1;
// }

form.addEventListener('submit', sumaInputValues);

function sumaInputValues(event) {
    // console.log({event});
    event.preventDefault();
    const sumaInputs1 = Number(input1.value) + Number(input2.value);
    pResult1.innerText = "Resultado: " + sumaInputs1;
}