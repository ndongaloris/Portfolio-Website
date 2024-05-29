const fullName = "Loris Jared Ndonga";
const profileInfo = document.querySelectorAll(".profileInfo");

profileInfo.forEach(element => {  
    const profileName = document.createElement("h6");
    profileName.innerHTML = fullName;

    const profilePicture = document.createElement("img");
    profilePicture.setAttribute("src", "images/profile.JPG");
    profilePicture.setAttribute("class", "rounded-circle img-fluid d-sm-inline ");
    profilePicture.setAttribute("alt", "Jared's profile Picture");

    const profileTitle = document.createElement("p");
    profileTitle.innerHTML = `FULL-STACK SOFTWARE DEVELOPER <br>BYU-I Student <br>CS50 Learner`
    const separator = document.createElement("hr");
    separator.setAttribute("width", "100%");

    element.appendChild(profileName);
    element.appendChild(profilePicture);
    element.appendChild(profileTitle);
    element.appendChild(separator);
});

// const Hamburger = document.querySelector(".navbar-toggler");
// // const canvas = document.querySelector(".offcanvas-end");
// const canvas = document.querySelector(".offcanvas");
// Hamburger.addEventListener("click", () =>{
//     const canvasFade = document.querySelector(".offcanvas-backdrop");

//     canvas.addEventListener("click", () =>{
//             canvas.setAttributes("visibility", "hidden")
//             // canvas.classList.remove('show');
//             // canvasFade.classList.remove('show');
//             // canvasFade.classList.remove('.offcanvas-backdrop');
//         })    
// })
function close_offcanvas() {
    var element1 = document.getElementById("eff_nav_toggler");
    element1.classList.remove("collapsed");
    var element2 = document.getElementById("navbarSupportedContent");
    element2.classList.remove("show");
    document.getElementById("eff_nav_toggler").setAttribute('aria-expanded', 'false');
}

// canvas.classList.
// if (!bodyStyle){
//     bodyStyle = '';
// }

// let Message = [
//     "Greetings And Welcome!!!",
//     "I am Jared, and currently studying at BYUI",
//     "I have also taken a few CS50's course",
//     "I am a software Developer",
//     "Python Developer",
//     "C# Developer"
// ]

// message = documment.querySelector("#simple-list-item-1");




































let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.querySelector("#year").innerHTML = currentYear;
