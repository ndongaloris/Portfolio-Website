"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'devicon/devicon.min.css';

import Image from "next/image"
import NavBar from "./ui/navBar";
import SideNav from "./ui/sideNav";
import Footer from "./ui/footer";
import Welcome from "./ui/welcome";
import AboutMe from "./ui/aboutMe";
import MyProjects from "./ui/myProjects";
import MySkills from "./ui/myskills";
import ContactMe from "./ui/contactMe";

export default function Home() {
  return (
    <div className="min-h-screen row flex-wrap w-full m-0">
      <SideNav />
      <div className="col-lg-10 col-md-10 col-sm-12 p-0" id="body">
        <NavBar />
        <div className="row" id="mainRow">
          {/* // tabindex="0"  */}
          <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0"
            data-bs-smooth-scroll="true" className="scrollspy-example" id="navManager">
            <Welcome />
            <AboutMe />
            <MySkills />
            <MyProjects />
            <ContactMe />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
