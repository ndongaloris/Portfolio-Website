const fullName = "Loris Jared Ndonga";
let profileInfo = document.querySelector("#profileInfo");

profileName = document.createElement("h5");
profileName.innerHTML = fullName;

profilePicture = document.createElement("img");
profilePicture.setAttribute("src", "images/profile.JPG");
profilePicture.setAttribute("class", "rounded-circle img-fluid ms-1 d-none d-sm-inline ");
profilePicture.setAttribute("alt", "Jared's profile Picture");

profileTitle = document.createElement("p");
profileTitle.innerHTML = "BYU-I student | Software Engineer<br>Developer | Full-stack developer";

separator = document.createElement("hr");
separator.setAttribute("width", "150%");

profileInfo.appendChild(profileName);
profileInfo.appendChild(profilePicture);
profileInfo.appendChild(profileTitle);
profileInfo.appendChild(separator);


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
