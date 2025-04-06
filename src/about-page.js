export function aboutPage() {
    const content_container = document.createElement('main');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const p_2 = document.createElement('p');
    const biz_info = document.createElement('ul');
    const biz_info_li = document.createElement('li');
    const biz_info_li_2 = document.createElement('li');
    const biz_info_li_3 = document.createElement('li');
    const biz_info_li_4 = document.createElement('li');
    const about_store_sign = document.createElement('img');
    const about_store_location = document.createElement('img');
    const content = document.querySelector('#content');

    content.innerHTML = "";

    content_container.classList.add('about_container_style');
    h1.textContent = "Welcome to Play Dough Ice Cream!";
    h1.style.fontFamily = 'Skrapbook';
    h1.style.textAlign = 'center';
    h1.style.padding = '30px 0';

    p.style.paddingBottom = '20px';
    p.style.fontWeight = 'bolder';

    p_2.style.fontSize = 'small';
    p_2.style.fontWeight = 'bolder';

    biz_info.style.listStyle = "none";
    biz_info.style.fontSize = "1.5rem";
    biz_info.style.fontWeight = "bolder";
    biz_info.style.textAlign = "center";
    biz_info.style.padding = "30px";
    biz_info.style.margin = "50px 0";
    biz_info.style.borderRadius = "10px";

    biz_info_li.textContent = "Play Dough Ice Cream";
    biz_info_li_2.textContent = "6969 East Ave";
    biz_info_li_3.textContent = "Santa Cruz, CA 95060";
    biz_info_li_4.textContent = "(831) 555 - 3789";

    p.textContent = "Remember when you were a kid, and you definitely weren't supposed to eat Play-Doh, but you maybe did anyway? Well, good news! We've made your childhood dreams (and questionable snack choices) a reality! At Playdough Ice Cream, we scoop up the most colorful, fun, and deliciously sweet treats, with swirls of nostalgia in every bite. Our signature Playdough Ice Cream isn't just a name, it's an experience. Bright, bold, and packed with flavors that make your taste buds do a happy dance, it's like recess for your mouth! And don't worry, it's 100% edible this time. Come for the ice cream, stay for the fun, and relive your best childhood memories without anyone telling you not to eat the dough.";

    about_store_sign.width = '900';
    about_store_sign.height = "550";
    about_store_sign.classList.add('about_store_sign_style');
    about_store_sign.loading = 'lazy';

    about_store_location.width = '900';
    about_store_location.height = "550";
    about_store_location.classList.add('about_store_location_style');
    about_store_location.loading = 'lazy';

    p_2.textContent= "DISCLAIMER: This website is fake as fuck. Don't actually eat anything that's produced by Playdough. You will probably die...";

    biz_info.append(biz_info_li, biz_info_li_2, biz_info_li_3, biz_info_li_4);

    content_container.append(h1, p, about_store_sign, about_store_location, biz_info, p_2);
   
    content.appendChild(content_container);
}