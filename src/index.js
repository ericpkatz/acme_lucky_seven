const faker = require('faker');
const generateNumbers = require('./generator');
//console.log(faker.vehicle.model());

const numbers = generateNumbers(11);

const ul = document.querySelector('#numbers-list');

let chosenNumber = window.location.hash.slice(1) * 1;

const render = ()=> {
  const html = numbers.map( num => {
    return `
      <li>
        <a href='#${ num }'>
        ${ num }
        </a>
        ${
          chosenNumber === num ? `<div>${ num * 7}</div>`: ''
        }
      </li>
    `;
  }).join('');
  ul.innerHTML = html;
};

window.addEventListener('hashchange', ()=> {
  chosenNumber = window.location.hash.slice(1) * 1;
  render();
});

render();
