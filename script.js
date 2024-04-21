const header=document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>120);
});

let menu=document.querySelector('#menu-icon');
let navlist=document.querySelector('.navlist');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};

// contact submite ///////////////

const scriptURL = 'https://script.google.com/macros/s/AKfycbzF-U5lesxzNvvZotLYxH7AQkZ1kbzZqS9GKNJAzr3hNNmzstOxKsvjdU0C3eBN65dNbg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
});