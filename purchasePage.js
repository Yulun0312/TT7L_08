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

document.querySelector('.home').onmousemove = (e)  =>{
    document.querySelectorAll(home-parallax).forEach(elm =>{
        
        let speed = elm.getAttribute('data-speed');

        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;

        elm.style.transform = 'translateX(${y}px) translateY(${x}px)';

    });

};

document.querySelector('.home').onmouseleave = ()  =>{
    document.querySelectorAll(home-parallax).forEach(elm =>{

        elm.style.transform = 'translateX(0x) translateY(0px)';

    });
    
};