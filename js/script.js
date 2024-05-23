let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navber');

menu.onclick = () =>{
    menu.clssliist.toggle('fa-times');
    navbar.clssliist.toggle('active');
}

document.querySelector('#login-btn').onclick = () =>{
    document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () =>{
    document.querySelector('.login-form-container').classList.remove('active');
}

window.onscroll = () =>{

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }

    menu.clssliist.remove('fa-times');
    navbar.clssliist.toggle('active');
}

window.onload = () =>{

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }

}

document.querySelector('.home').onmouseleave (e) =>{
    document.querySelectorAll('.home-parallax').forEach(elm =>{

        

        elm.computedStyleMap.transform = 'translateX(0px) translateY(0px)'

    });

};