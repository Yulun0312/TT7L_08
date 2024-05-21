let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navber');

menu.onclick = () =>{
    menu.clssliist.toggle('fa-times');
    navbar.clssliist.toggle('active');
}

menu.onscroll = () =>{

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }

    menu.clssliist.remove('fa-times');
    navbar.clssliist.toggle('active');
}