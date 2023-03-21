const btn = document.querySelector('.newchat');
const ulListChat = document.querySelectorAll('ul');
const nav = document.querySelector('nav')
const menu = document.querySelector('.menu');

btn.addEventListener('click', () => {
    const newLi = document.createElement('li');
    const icon = document.createElement('svg');
    ulListChat[0].classList.toggle('show');

//    icon.innerHTML = `
//    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
//     viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square fa">
//         <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
//    </svg>`;

//     const newHref = document.createElement('a');
//     newHref.setAttribute('href', '#');
//     const minut = new Date().getMilliseconds();
//     const year = new Date().getFullYear()
//     newHref.textContent = `Hello im ${minut} - ${year}`

//     newLi.append(icon)
//     newLi.append(newHref)
//     ulListChat[0].append(newLi)
    // newLi.append(newHref)
})

window.addEventListener('resize', () => {
    if (window.innerWidth <= 550) {
        btn.style.width = '100%';
        btn.firstChild.style.display = 'block'
    }else{
        btn.firstChild.style.display = 'none'
    }
})