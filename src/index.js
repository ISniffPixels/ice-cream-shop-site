import './styles.css';

// HOMEPAGE ASSETS
import playdough_logo from './images/playdough_logo.png';
import home_btn from './images/home_btn_img.png';
import menu_btn from './images/home_btn_img.png';
import about_btn from './images/home_btn_img.png';
import { homePage } from './home-page.js';
import { menuPage } from './menu-page.js';
import { aboutPage } from './about-page.js';

homePage(); // INITIAL LOAD HOME SPLASH SCREEN

// HOME PAGE MODULE FUNCTION CALL
document.querySelector('.tabs_1').addEventListener('click', homePage);

// MENU PAGE MODULE FUNCTION CALL
document.querySelector('.tabs_2').addEventListener('click', menuPage);

// ABOUT PAGE MODULE FUNCTION CALL
document.querySelector('.tabs_3').addEventListener('click', aboutPage);

// HOME PAGE IMAGES
const pd_logo = document.createElement("img");
pd_logo.src = playdough_logo;
pd_logo.classList.add('pd_logo');
   
document.querySelector('nav').appendChild(pd_logo);

const home_ice_cream_btn = document.createElement("img");
home_ice_cream_btn.src = home_btn;
home_ice_cream_btn.style.width = '200px';
home_ice_cream_btn.style.height = '200px';
home_btn.classList.add('tabs_1');

document.querySelector('nav tabs_1').appendChild(home_ice_cream_btn);

const menu_ice_cream_btn = document.createElement("img");
menu_ice_cream_btn.src = menu_btn;
menu_ice_cream_btn.style.width = '200px';
menu_ice_cream_btn.style.height = '200px';
menu_btn.classList.add('tabs_2');

document.querySelector('nav tabs_2').appendChild(menu_ice_cream_btn);

const about_ice_cream_btn = document.createElement("img");
about_ice_cream_btn.src = about_btn;
about_ice_cream_btn.style.width = '200px';
about_ice_cream_btn.style.height = '200px';
about_btn.classList.add('tabs_3');

document.querySelector('nav tabs_3').appendChild(about_ice_cream_btn);