export default function  SideNav(){
    return(
            <div className="col-2 d-none d-md-block bar p-0">
                <div id="simple-list-example" className="d-flex flex-column gap-2 simple-list-example-scrollspy text-center position-fixed">
                    <ul className="nav flex-column" id="Info">
                        <li className="nav-item profileInfo">
                            <h4>Loris Jared Ndonga</h4>
                            <img className="rounded-circle img-fluid d-sm-inline" src="images/profile.JPG" alt="Jared's profile Picture" />
                            <h6>FULL-STACK SOFTWARE DEVELOPER</h6>
                        </li>
                        <li>
                            <hr/>
                        </li>
                    </ul>
                <a className="p-1 rounded" href="#welcome"><i className="fa-solid fa-house"></i>&nbsp;<span>Welcome</span></a>
                <a className="p-1 rounded" href="#about"><i className="fa-solid fa-user"></i>&nbsp;<span className="ms-1 d-none d-sm-inline">About Me</span></a>
                <a className="p-1 rounded" href="#list-skills"><i className="fa-solid fa-laptop-code"></i>&nbsp;<span className="ms-1 d-none d-sm-inline">My Skills</span></a>
                <a className="p-1 rounded" href="#project"><i className="fa-solid fa-code"></i>&nbsp;<span className="ms-1 d-none d-sm-inline">My Projects</span></a>
                <a className="p-1 rounded" href="#contact-me"><i className="fa-solid fa-address-card"></i>&nbsp;<span className="ms-1 d-none d-sm-inline">Contact</span></a>
                <ul>
                    <li>
                        <hr/>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/lorisjaredndonga/" target="_blank"><i className="fa-brands fa-linkedin"></i>&nbsp;<span className="ms-1 d-none d-sm-inline">LinkedIn</span></a>
                    </li>
                    <li>
                        <a href="https://github.com/ndongaloris"><i className="fa-brands fa-github"></i>&nbsp;<span className="ms-1 d-none d-sm-inline">My Github</span></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}