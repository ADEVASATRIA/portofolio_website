function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// function typingtext(){
//     let typingtext = new Typed('title', {
//         strings: ['Adeva Satria Arif Wibawa', 'Students of Computer Science'],
//         loop: true,
//         typeSpeed: 100,
//         backSpeed: 50,
//         backDelay: 1000,
//     })
// }

// var typed = new typed('#title', {
//     strings: ['Teks pertama.', 'Teks kedua.', 'Teks ketiga.'],
//     typeSpeed: 50
// });

let typingText = new Typed('#text', {
    strings: ['Adeva Satria Arif Wibawa', 'Web Developer', 'Front End Developer', 'Back End Developer'],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
})
