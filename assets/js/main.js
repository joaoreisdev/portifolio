/*MENU SHOW*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*Active and remove menu*/ 
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    /*Configuração para ativação do menu*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    //Configuração para fechamento do menu
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')

}

navLink.forEach(n => n.addEventListener('click', linkAction));

/*Scroll reveal animation*/ 
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    durantion: 2000,
    reset: true
})
/*Scroll home*/ 
sr.reveal('.home__title', {})
sr.reveal('.button', {delay:200})
sr.reveal('.home__img', {delay:400})
sr.reveal('.home__social-icon', {interval:200})

/*Scroll about */
sr.reveal('.about__img', {})
sr.reveal('.about__subtitle', {delay:200})
sr.reveal('.about__text', {delay:400})

/*Scroll Skills */
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__text', {delay:200})
sr.reveal('.skills__data', {interval:200})
sr.reveal('.skills__img', {delay:400})

/*Scroll Work */
sr.reveal('.work__img', {interval:200})

/* Scroll Contact*/
sr.reveal('.contact__input', {interval:200}) 


/*Configurando email*/
document.getElementById("contactButton").addEventListener("click", function(){

    const name = document.getElementById('name').value;
    const assunto = document.getElementById('assunto').value;

    window.location.href = `mailto:joaovictorcruzereis@gmail.com?subject=${
                            encodeURIComponent(assunto)}&body=${encodeURIComponent(mensagem)}`;

})

