const menuItem = document.querySelectorAll('.mover2')



function selectLink(){
    menuItem.forEach((item)=>
    item.classList.remove('ativo')
    
    )
    this.classList.add('ativo')
}


menuItem.forEach((item)=>
   item.addEventListener('click', selectLink)
)

const exp = document.querySelector('#exp')
const menu = document.querySelector('.menu-lateral')

exp.addEventListener('click', function(){
    menu.classList.toggle('expandir')
})

const card = document.querySelector('#card')
card.addEventListener('click', (e)=>{
card.classList.toggle('flip')
})
const card2 = document.querySelector('#card2')
card2.addEventListener('click', ()=>{
    card2.classList.toggle('flip')
})


