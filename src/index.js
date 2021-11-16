const faker = require('faker');
const generateNumbers = require('./generator');
console.log(faker.vehicle.model());

const numbers = generateNumbers(11);

const ul = document.querySelector('#numbers-list');

const render = ()=> {
  const html = numbers.map( num => {
    return `
      <li>
        <a href='#${ num }'>
        ${ num }
        </a>
      </li>
    `;
  }).join('');
  ul.innerHTML = html;
};

render();
