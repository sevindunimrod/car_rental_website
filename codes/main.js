let menu = document.querySelector('#menu-icon');
let navibar = document.querySelector('.navibar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navibar.classList.toggle('active');

}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navibar.classList.remove('active');
}
const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.revesl('.text',{delay: 200,origin: 'top'})
sr.revesl('.form-container form',{delay: 800,origin: 'left'})
sr.revesl('.heading',{delay: 800,origin: 'top'})
sr.revesl('.ride-container .box',{delay: 600,origin: 'top'})
sr.revesl('.services-container .box',{delay: 600,origin: 'top'})
sr.revesl('.about-container .box',{delay: 600,origin: 'top'})
sr.revesl('.reviews-container .box',{delay: 600,origin: 'top'})
sr.revesl('.newsletter .box',{delay: 400,origin: 'bottom'})