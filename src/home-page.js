const playdough_logo = './images/playdough_logo.avif';
const playdough_ice_cream = './images/playdough_ice_cream_bg.avif';
const home_btn = './images/home_btn_img.png'; 
const menu_btn = './images/menu_btn_img.png'; 
const about_btn = './images/about_btn_img.png';

export { 
    playdough_logo, 
    playdough_ice_cream, 
    home_btn, 
    menu_btn, 
    about_btn
}

export function homePage() {
    const content = document.querySelector('#content');
    const content_container = document.createElement('main');
    const content_section = document.createElement('section');
    
    content.innerHTML = "";
    content_container.classList.add('pd_bg');
    content_section.classList.add('promo_bg');
    content.append(content_container, content_section);
}