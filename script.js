document.addEventListener('DOMContentLoaded', (event) => {
    const colorDivs = document.querySelectorAll('.color');
    colorDivs.forEach(div => {
        div.addEventListener('click', () => {
            colorDivs.forEach(d => d.classList.remove('selected'));
            div.classList.add('selected');
        });
    });
    const photos = document.querySelectorAll('.photo');
    const mainImage = document.getElementById('mainImage');

    photos.forEach(photo => {
        photo.addEventListener('click', ()=>{
            photos.forEach(p=> p.classList.remove('selected'));
            photo.classList.add('selected');
            const imgSrc = photo.querySelector('img').getAttribute('src');
            mainImage.setAttribute('src', imgSrc);
        });
    });
});