import Image from "next/image"
import NavBar from "./ui/navBar";
import SideNav from "./ui/sideNav";
import Footer from "./ui/footer";
import Welcome from "./ui/welcome";
import AboutMe from "./ui/aboutMe";
import MyProjects from "./ui/myProjects";
import MySkills from "./ui/myskills";
import ContactMe from "./ui/contactMe";
import 'bootstrap/dist/css/bootstrap.min.css';



const fullName = "Loris Jared Ndonga";
// const profileInfo = document.querySelectorAll(".profileInfo");

// profileInfo.forEach(element => {  
//     const profileName = document.createElement("h4");
//     profileName.innerHTML = fullName;

//     const profilePicture = document.createElement("img");
//     profilePicture.setAttribute("src", "images/profile.JPG");
//     profilePicture.setAttribute("className", "rounded-circle img-fluid d-sm-inline ");
//     profilePicture.setAttribute("alt", "Jared's profile Picture");

//     const profileTitle = document.createElement("h6");
//     profileTitle.innerHTML = `FULL-STACK SOFTWARE DEVELOPER`

//     element.appendChild(profileName);
//     element.appendChild(profilePicture);
//     element.appendChild(profileTitle);
// });

export default function Home() {
  return (
    <div className="row flex-wrap">
      {/* //style=";"  */}
        <SideNav />
    <div className="col-lg-10 col-md-10 col-sm-12" id="body">
        <NavBar />            
            <div className="row" id="mainRow">
              {/* // tabindex="0"  */}
                <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0"
                data-bs-smooth-scroll="true" className="scrollspy-example" id="navManager ">   
                <Welcome/>
                <MySkills/>
                <MyProjects/>
                <ContactMe/>
                <Footer/>
                </div>
            </div>
        </div>        
    </div>
  );
}
