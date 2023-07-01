const menuItem = document.querySelectorAll('.mover')



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