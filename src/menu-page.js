export function menuPage() {
    const content_container = document.createElement('main');
    
    const menu_box_1 = document.createElement('div');
    const menu_box_2 = document.createElement('div');
    const menu_box_3 = document.createElement('div');
    const menu_box_4 = document.createElement('div');
    const menu_box_5 = document.createElement('div');
    const menu_box_6 = document.createElement('div');
    
    document.querySelector('#content').innerHTML = "";
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
    
    content_container.appendChild(menu_box_1);
    content_container.appendChild(menu_box_2);
    content_container.appendChild(menu_box_3);
    content_container.appendChild(menu_box_4);
    content_container.appendChild(menu_box_5);
    content_container.appendChild(menu_box_6);

    document.querySelector('#content').appendChild(content_container);
}