export function aboutPage() {
    const content_container = document.createElement('main');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const about_store_sign = document.createElement('img');
    const content = document.querySelector('#content');

    content.innerHTML = "";

    content_container.classList.add('about_container_style');
    h1.textContent = "Welcome to Playdough Ice Cream!";
    h1.style.fontFamily = 'Skrapbook';
    h1.style.textAlign = 'center';
    h1.style.padding = '30px 0';

    p.style.paddingBottom = '20px';
    p.style.fontWeight = 'bolder';

    p.textContent = "Remember when you were a kid, and you definitely weren't supposed to eat Play-Doh, but you maybe did anyway? Well, good news! We've made your childhood dreams (and questionable snack choices) a reality! At Playdough Ice Cream, we scoop up the most colorful, fun, and deliciously sweet treats, with swirls of nostalgia in every bite. Our signature Playdough Ice Cream isn't just a name, it's an experience. Bright, bold, and packed with flavors that make your taste buds do a happy dance, it's like recess for your mouth! And don't worry, it's 100% edible this time. Come for the ice cream, stay for the fun, and relive your best childhood memories without anyone telling you not to eat the dough.";

    about_store_sign.width = '900';
    about_store_sign.height = "550";
    about_store_sign.classList.add('about_store_sign_style');

    content_container.append(h1, p, about_store_sign);
   
    content.appendChild(content_container);

    console.log(about_store_sign);
}