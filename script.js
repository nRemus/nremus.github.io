document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let contactBtn = document.querySelectorAll(".contact-btn")
let contactSection = document.querySelector(".contact-section")
let closeBtn = document.querySelector(".close")
let container = document.querySelector("body")


let showContactModal = function () {
    contactBtn.forEach(item => {
        item.addEventListener("click", function () {
            contactSection.classList.add("show-contact")
            container.classList.add("overlay")
        })
    })
}()

closeBtn.addEventListener("click", function () {
    contactSection.classList.remove("show-contact")
    container.classList.remove("overlay")
})


if (window.innerWidth > 769) {
    var cursor = document.getElementById("cursor");
    document.body.addEventListener("mousemove", function (e) {
        cursor.style.left = e.clientX + "px",
            cursor.style.top = e.clientY + "px";
    });
}

