let currentDate = new Date();
let currentYear = currentDate.getFullYear();
// document.querySelector("#year").innerHTML = currentYear;


export default function Footer(){
    return(
            <footer>
                <small>&copy;<span id="year"></span> | Loris Jared Ndonga | Portfolio</small>
                <a href="https://www.linkedin.com/in/lorisjaredndonga/" target="_blank"><i className="fa-brands fa-linkedin"></i>&nbsp;<span className="ms-1 d-none d-sm-inline">LinkedIn</span></a>
            </footer>
    )
}