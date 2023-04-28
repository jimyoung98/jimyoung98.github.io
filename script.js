// 1번문제
const con = document.querySelector(".navbar__menu");
const ba = document.querySelector(".navbar__toggle-btn");
function open() {
        if (con.style.display == 'none'){
            con.style.display = 'flex';
        }else{
            con.style.display = 'none';
        }
    window.onresize = function(){
        document.location.reload();
    };
}
ba.addEventListener('click', open)



// 2번

//스크롤이 들어간 경우
const lis = document.querySelectorAll(".navbar__menu__item");
const sections = document.querySelectorAll("section");
const text = [];

for (let i in lis){
    text.push(lis[i].textContent)
}

for (let li of lis) {
    const i = Array.from(lis).indexOf(li);
    li.innerHTML = `<a href="#${sections[i].id}">${text[i]}</a>`;
    //누른 위치로 이동
    const link = li.querySelector('a');
    link.addEventListener('click', (event) => {
        // 부드럽게 이동하게 하기 위해 설정
        event.preventDefault();
        const targetSection = document.querySelector(link.getAttribute('href'));
        // 누르는 버튼의 흰색 테두리 선정
        li.addEventListener('click', () => {
            lis.forEach(li => {
                li.classList.remove("active");
            })
            li.classList.add("active");
        })
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// 3번

// 탭에 맞춰 해당하는 
const list_of_project = ['all','front_end', 'back_end', 'AI']
const count_of_project = {'all':0, 'front_end':0, 'back_end':0, 'AI':0}
const project = document.querySelectorAll('.project')
const button = document.getElementsByClassName('category__btn');

// event 넣기
for (p of project) {
    p.addEventListener('mouseover', all_project(p))
}

// 개수 계산하기
function all_project(p) {
    const cl_list = p.classList
    for (let i = 1; i < list_of_project.length; i++){
        if (cl_list.contains(`${list_of_project[i]}`)){
            count_of_project['all'] += 1
            count_of_project[list_of_project[i]] += 1
        }
    }
    const num = document.getElementsByClassName('category__count')
    for (let i in num){
        num[i].innerHTML = `${count_of_project[list_of_project[i]]}`
    }
}

// 숫자 보이게 하기
for (let number of button){
    const count = number.getElementsByClassName('category__count')[0];
    number.addEventListener('mouseover', () => {
        count.style.opacity = 1;
    });
    number.addEventListener('mouseout', () => {
        count.style.opacity = 0;
    });
}

// 눌렀을 때 해당하는 것만 보이게 하기
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function() {
        hide_and_seek(i);
    });
}

function hide_and_seek(num) {
    const projects = document.getElementsByClassName('project');
    for (let i = 0; i < projects.length; i++) {
        if (!projects[i].classList.contains(list_of_project[num])) {
            projects[i].style.display = 'none';
        }else{
            projects[i].style.display = 'flex';
        }
    }
}


// 4번 문제
// const home = document.getElementById('home')
// const arrow = document.querySelector('.arrow-up')
// const section = document.querySelectorAll('.section')
// home.addEventListener('mouseout', visible)
// arrow.addEventListener('click', moveTop)
// home.addEventListener('mouseover', invisible)
// for (let sec of section){
//     sec.addEventListener('mouseover', visible)
// }

// function visible() {
//     arrow.classList.add("visible")
// }
// function invisible() {
//     arrow.classList.remove("visible")
// }
// function moveTop() {
//     arrow.innerHTML = `<a href="#home"><i class="fa-solid fa-arrow-up"></i></a>`
// }


const arrow = document.querySelector('.arrow-up');
const home = document.getElementById('home');

document.addEventListener('scroll', movetop);

function movetop() {
  if (window.scrollY > home.offsetHeight) {
    arrow.classList.add('visible');
  } else {
    arrow.classList.remove('visible');
  }
}

arrow.addEventListener('click', () => {
  home.scrollIntoView({ behavior: 'smooth' });
});

