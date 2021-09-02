//at 730px the side bar disappears and becomes a slide out.
//import './style.css';

import {
      renderNavPane,
      renderPages, 
      renderAdd           
} from './render.js';
import { getToDo } from './data.js';


renderNavPane();
renderPages('My Day');
renderAdd();
getToDo();

const content = document.querySelector('.content');

const navdiv = document.querySelectorAll('.navdiv');
      navdiv.forEach(div => {
            div.addEventListener('click', () => {
                  const design = div.id;
                  content.innerHTML = '';
                  renderPages(design);
                  renderAdd();
                  getToDo();
            })
})


     