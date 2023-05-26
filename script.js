let open = document.getElementById("openBtn");
let ul = document.getElementById("ul");
let close = document.querySelector("#closeBtn")
let li = document.querySelectorAll(".line")

open.addEventListener("click", function(){
    ul.style.right = "0"
})
close.addEventListener("click", function(){
    ul.style.right = "-300px"
})

li.forEach( item => {
    item.addEventListener('click', function(){
        item.classList.add('underline')
    })
})
