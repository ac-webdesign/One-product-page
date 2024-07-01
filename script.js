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

    
        const buyBtn1 = document.getElementById('buy-btn');
        const buyBtn2 = document.getElementById('buy-btn2');
        const topBtn = document.getElementById('top-btn');
    
        buyBtn1.addEventListener('click', () => {
            const scrollDistance = window.innerWidth < 480 ? 1800 : 1500;
            window.scrollTo({
                top: scrollDistance, 
                behavior: 'smooth'
            });
        });
        buyBtn2.addEventListener('click', () => {
            const scrollDistance = window.innerWidth < 480 ? 1800 : 1500;
            window.scrollTo({
                top: scrollDistance, 
                behavior: 'smooth'
            });
        });
        topBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0, 
                behavior: 'smooth'
            });
        });
    
});