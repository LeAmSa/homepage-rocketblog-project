const menuBtn = document.querySelector('.menu-btn')
let menuOpen = false

function navLinkAnimation() {
    const navLinks = document.querySelectorAll('li')
    navLinks.forEach(function(link) {
        /*Verificando se existe a propriedade animation em cada li no html. Se já existe, deixa vazio. Se não, cria.*/
        link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`)
    })
    
}

menuBtn.addEventListener('click', () => {
    const navbar = document.querySelector('ul')
    navbar.classList.toggle('active')
    if(!menuOpen) {
        menuBtn.classList.add('open')
        menuOpen = true
    } else {
        menuBtn.classList.remove('open')
        menuOpen = false
    }
    navLinkAnimation()
})