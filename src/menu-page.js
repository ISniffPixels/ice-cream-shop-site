export function menuPage() {
    const content_container = document.createElement('main');
    const content = document.querySelector('#content');

    const menu_box_1 = document.createElement('div');
    const menu_box_2 = document.createElement('div');
    const menu_box_3 = document.createElement('div');
    const menu_box_4 = document.createElement('div');
    const menu_box_5 = document.createElement('div');
    const menu_box_6 = document.createElement('div');
    const menu_box_7 = document.createElement('div');
    const menu_box_8 = document.createElement('div');
    const menu_box_9 = document.createElement('div');

    const menu_heading = document.createElement('h1');
    menu_heading.textContent = "Flavor Station"
    menu_heading.style.textAlign = 'center';
    menu_heading.style.fontSize = '5.5rem';
    menu_heading.style.paddingTop = '30px';
    menu_heading.style.fontFamily = "Skrapbook";
    menu_heading.classList.add('menu_page_title');
    
    content.innerHTML = "";
    content_container.classList.add('menu_selection_container');

    menu_box_1.classList.add('menu_boxes');
    menu_box_1.classList.add('loupy_lemon_img');
    menu_box_1.classList.add('menu_box_1');

    menu_box_2.classList.add('menu_boxes');
    menu_box_2.classList.add('bonnie_blue_berry_img');
    menu_box_2.classList.add('menu_box_2');

    menu_box_3.classList.add('menu_boxes');
    menu_box_3.classList.add('cheeky_cherry_img');
    menu_box_3.classList.add('menu_box_3');

    menu_box_4.classList.add('menu_boxes');
    menu_box_4.classList.add('loogy_lime_img');
    menu_box_4.classList.add('menu_box_4');

    menu_box_5.classList.add('menu_boxes');
    menu_box_5.classList.add('macho_mango_img');
    menu_box_5.classList.add('menu_box_5');

    menu_box_6.classList.add('menu_boxes');
    menu_box_6.classList.add('chonky_choco_chip_img');
    menu_box_6.classList.add('menu_box_6');

    menu_box_7.classList.add('menu_boxes');
    menu_box_7.classList.add('pimpin_purple_img');
    menu_box_7.classList.add('menu_box_7');

    menu_box_8.classList.add('menu_boxes');
    menu_box_8.classList.add('stinky_swirl_img');
    menu_box_8.classList.add('menu_box_8');

    menu_box_9.classList.add('menu_boxes');
    menu_box_9.classList.add('ragin_rainbow_img');
    menu_box_9.classList.add('menu_box_9');
    
    content_container.append(menu_box_1, menu_box_2, menu_box_3, menu_box_4, menu_box_5, menu_box_6, menu_box_7, menu_box_8, menu_box_9);

    content.appendChild(menu_heading);
    content.appendChild(content_container);
}