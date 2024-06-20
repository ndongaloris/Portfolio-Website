const fullName = "Loris Jared Ndonga";
const profileInfo = document.querySelectorAll(".profileInfo");

profileInfo.forEach(element => {  
    const profileName = document.createElement("h4");
    profileName.innerHTML = fullName;

    const profilePicture = document.createElement("img");
    profilePicture.setAttribute("src", "images/profile.JPG");
    profilePicture.setAttribute("class", "rounded-circle img-fluid d-sm-inline ");
    profilePicture.setAttribute("alt", "Jared's profile Picture");

    const profileTitle = document.createElement("h6");
    profileTitle.innerHTML = `FULL-STACK SOFTWARE DEVELOPER`

    element.appendChild(profileName);
    element.appendChild(profilePicture);
    element.appendChild(profileTitle);
});







































let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.querySelector("#year").innerHTML = currentYear;
