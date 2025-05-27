import './style.css';
import createHome from './home.js';
import createMenu from './menu.js';
import createContact from './contact.js';

let contain = document.querySelector('.content');
createHome();

let home = document.querySelector('button#Home');
home.addEventListener('click',()=>createHome());
let menu = document.querySelector('button#Menu');
menu.addEventListener('click',()=>createMenu());
let contact = document.querySelector('button#Contact');
contact.addEventListener('click',()=>createContact());