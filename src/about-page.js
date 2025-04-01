export function aboutPage() {
    const content_container = document.createElement('main');
    const h1 = document.createElement('h1');

    document.querySelector('#content').innerHTML = "";
    content_container.classList.add('about_container_style');
    h1.textContent = "Testing. Hello World!";
    content_container.appendChild(h1);
   
    document.querySelector('#content').appendChild(content_container);
}