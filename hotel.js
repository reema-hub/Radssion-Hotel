//selector
let header = document.querySelector('.header');
let Menu = document.querySelector('.Menu');


window.addEventListener('scroll' , function() {
    let windowPostion = window.screenY >0;
    header.classList.toggle('active' , window.screenY > 0 //it is thesame if i put var
     )
}
)

Menu.addEventListener('click' , function(){
 header.classList.toggle('menu-open')
});
