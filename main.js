'use strict';

//Navbar를 투명하게 만든다 -> scrollY의 값을 가져와서 navbar 변경
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark')
    }
    else {
        navbar.classList.remove('navbar--dark')
    }
});

// navbar를 클릭했을 해당 위치로 스크롤링되도록
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) =>{
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    scrollIntoView(link);
});

//'contact me' 버튼 클릭 시 홈으로 이동
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});

// 스크롤링 되어 홈화면을 지나면 홈화면 흐리게 만들기
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

//스크롤을 아래로 내릴 때 "arrow up"버튼 나타내기
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=>{
    if(window.scrollY > homeHeight /2) {
        arrowUp.classList.add('visible');
    }
    else {
        arrowUp.classList.remove('visible');
    }
});

//"arrow up"버튼 클릭
arrowUp.addEventListener('click', ()=>{
    scrollIntoView('#home');
})


//Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e)=>{
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null){
        return;
    }
    projectContainer.classList.add('anim-out');
    setTimeout(()=> {
        projects.forEach((project)=>{
            console.log(project.dataset.type);
            if(filter ==='*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            }
            else {
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    }, 300);
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior : 'smooth'});
}