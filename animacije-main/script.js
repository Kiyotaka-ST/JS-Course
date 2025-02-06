let textTag = document.querySelector('.section1 h1');
let text = textTag.textContent;
let splittedText = text.split(' ');
textTag.innerHTML = ''; 

for (let i = 0; i < splittedText.length; i++) {
    if (splittedText[i] === " ") {
        splittedText[i] = "&nbsp;"; 
    }
    textTag.innerHTML += `<span>${splittedText[i]}</span> `;
}

let k = 0;
let interval = setInterval(() => {
    let spans = textTag.querySelectorAll('span');
    let singleSpan = spans[k];
    singleSpan.classList.add('fadeMove');
    k++;

    if (k === spans.length) {
        clearInterval(interval); 
    }
}, 500); 

let border = document.querySelector('.border-line');
let animationWidth = 0;
let oldScroll = window.scrollY;

window.onscroll = () => {
    if (oldScroll > window.scrollY) {
        animationWidth -= 1.5; 
    } else {
        animationWidth += 1.5; 
    }


    if (animationWidth >= 100) animationWidth = 100;
    if (animationWidth <= 0) animationWidth = 0;

    border.style.width = animationWidth + '%'; 
    oldScroll = window.scrollY;
}
