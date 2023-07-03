const menuItem = document.querySelectorAll('.mover2')



function selectLink(){
    menuItem.forEach((item)=>
    item.classList.remove('ativo2')
    
    )
    this.classList.add('ativo2')
}


menuItem.forEach((item)=>
   item.addEventListener('click', selectLink)
)

const exp = document.querySelector('#exp2')
const menu = document.querySelector('.menu-lateral2')

exp.addEventListener('click', function(){
    menu.classList.toggle('expandir2')
})