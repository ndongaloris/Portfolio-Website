import Image from "next/image";

const fullName = "Loris Jared Ndonga";
const profileInfo = document.querySelectorAll(".profileInfo");

profileInfo.forEach(element => {  
    const profileName = document.createElement("h4");
    profileName.innerHTML = fullName;

    const profilePicture = document.createElement("img");
    profilePicture.setAttribute("src", "images/profile.JPG");
    profilePicture.setAttribute("className", "rounded-circle img-fluid d-sm-inline ");
    profilePicture.setAttribute("alt", "Jared's profile Picture");

    const profileTitle = document.createElement("h6");
    profileTitle.innerHTML = `FULL-STACK SOFTWARE DEVELOPER`

    element.appendChild(profileName);
    element.appendChild(profilePicture);
    element.appendChild(profileTitle);
});

export default function Home() {
  return (
    <div className="row flex-wrap">

    <div className="col-lg-10 col-md-10 col-sm-12" style="--bs-bg-opacity: .2;" id="body">
        
            
            <div className="row" id="mainRow">
                <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0"
                data-bs-smooth-scroll="true" className="scrollspy-example" tabindex="0" id="navManager">
                   
                   
                </div>
            </div>
        </div>
    </div>
  );
}
