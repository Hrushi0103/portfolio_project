/*------menu-button-Event start-----*/

const menu_button = document.querySelector('.menu-button');
menu_button.addEventListener('click',showSidebar)

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.right = '0px';
    sidebar.style.transition ='right 0.40s ease';
}

const exit_menu_button = document.querySelector('.exit-menu-button')
exit_menu_button.addEventListener('click',hideSidebar)

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.right = '-190px';
}
/*------menu-button-Event end-----*/


/*------typing-Event-start-----*/

let title = document.querySelector('.name');
let newTitle = 'Hrutikesh Ekawade';
let index = 0;

const typeWriter = () =>{
    let new_title = newTitle.slice(0,index);
    title.innerText = new_title;
    index > newTitle.length ? index = 0 : index++
    // index ++;

    setTimeout(typeWriter,120)
};
typeWriter();

/*------typing-Event-end-----*/


/*------skill-slider-Event start-----*/

const skillSlider = document.querySelector('.skills-slider');
let isDragStart = false, prevPageX, precScrollLeft;

let firstImg = skillSlider.querySelectorAll('.wrapper img')[0];
let firstImgWidth = firstImg.clientWidth + 14;
console.log(firstImgWidth)

const arrowIcons = document.querySelectorAll('.wrapper i');

arrowIcons.forEach(icons =>{
    icons.addEventListener('click',() =>{
        skillSlider.scrollLeft += icons.id == 'left-nav' ? -firstImgWidth : firstImgWidth;
    })
})


const dragStart = (e) =>{
    isDragStart = true;
    prevPageX = e.pageX;
    precScrollLeft = skillSlider.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    skillSlider.classList.add('dragging');
    skillSlider.scrollLeft = e.pageX;
    let positionDiff = e.pageX - prevPageX;
    skillSlider.scrollLeft = precScrollLeft - positionDiff;
}

const dragStop = () =>{
    isDragStart = false;
    skillSlider.classList.remove('dragging');
}


skillSlider.addEventListener('mousedown',dragStart);
skillSlider.addEventListener('mousemove',dragging);
skillSlider.addEventListener('mouseup',dragStop);

/*------skill-slider-Event end-----*/

/*---------- Active nav link starts ------*/

let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

console.log(navLink)
window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            })
        }
    })
}
/*---------- Active nav link ends ------*/

/*---------- form validation start--------*/

  function validateName(){
        let pattern = /^([^0-9]*)$/;
        
        if(pattern.test( document.feedback_form.name.value)){
            document.getElementById('nameError').textContent = '';
        }else{
            document.getElementById('nameError').textContent = 'invalid name';
            document.getElementById('nameError').style.color = 'red';
        }
    
    }
    document.feedback_form.name.addEventListener('keyup',validateName); 

    let submit = document.getElementById('submit');

    function resetForm(){
        document.getElementById('feeedback_form').reset();
    }
submit.addEventListener('click',resetForm)

/*---------- form validation end --------*/

