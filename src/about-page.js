export function aboutPage() {
    const content_container = document.createElement('main');

    document.querySelector('#content').innerHTML = "";
    content_container.classList.add('about_container_style');
   
    document.querySelector('#content').appendChild(content_container);
}