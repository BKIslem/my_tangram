
let btnGiraffe = document.getElementById('btnFour');
let btnCarre = document.getElementById('btnOne');
let btnCat = document.getElementById('btnTwo');
let btnButterfly = document.getElementById('btnThree');
let btnAvion = document.getElementById('btnFive');
let btnBird = document.getElementById('btnSix');
let figures = document.querySelectorAll('.figure');


btnCarre.innerHTML = 'Carré';
btnCat.innerHTML= 'Chat';
btnButterfly.innerHTML= 'Pappillon';
btnGiraffe.innerHTML = 'Girafe';
btnAvion.innerHTML = 'Avion';
btnBird.innerHTML = 'Oiseau';



function animals(classe) {
    figures.forEach(elements => {
        elements.classList.remove('giraffe', 'cat','butterfly', 'bird','avion' ,'carre')
        elements.classList.add (classe)
    })
}
btnCarre.addEventListener('click', () => {
    animals('carre')
    
})
btnGiraffe.addEventListener('click', () => {
    animals('giraffe')
})
btnCat.addEventListener('click', () => {
   
    animals('cat')
})
btnButterfly.addEventListener('click', () => {
    animals('butterfly')
})

btnBird.addEventListener('click', () => {
    animals('bird')
})

btnAvion.addEventListener('click', () => {
    animals('avion') 
})