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
const navLink = document.querySelectorAll('.nav__link');   
function linkAction(){
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));
/* ------------------ */
/* Animação de scroll */
/* ------------------ */
const rolagem = ScrollReveal({
    distance: '80px',
    duration: 2000,
    reset: true
});
// "Quem sou"
// Primeiro Titulo, depois imagem, depois texto
rolagem.reveal('.perfilSubtitulo',{origin: 'top', delay: 200}); 
rolagem.reveal('.imgPerfil',{origin: 'right', delay: 1000}); 
rolagem.reveal('.textPerfil',{origin: 'left', delay: 1500, interval: 500 }); 
// "Skill"
// Primeiro Titulo, depois texto e imagem, depois skill descendo
rolagem.reveal('.skillSubtitulo',{origin: 'bottom' , delay: 200}); 
rolagem.reveal('.skillText',{origin: 'top', delay: 1000}); 
rolagem.reveal('.skillImagem',{origin: 'left', delay: 1000});
rolagem.reveal('.skillValores',{origin: 'top', delay: 1500, interval: 800}); 
// "work"
rolagem.reveal('.workImagens',{interval:200}); 
/*SCROLL CONTACT*/
rolagem.reveal('.contact__input',{interval: 200}); 



