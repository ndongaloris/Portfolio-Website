export default function NavBar(){
    return (
        // id="navbar-example2"
        <nav  className="navbar bg-body-tertiary d-md-none">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    // aria-multiselectable=""
                    <a className="nav-link" href="#welcome" ><i className="fa-solid fa-house"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#about"><i className="fa-solid fa-user"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#list-skills"><i className="fa-solid fa-laptop-code"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#project"><i className="fa-solid fa-code"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact-me"><i className="fa-solid fa-address-card"></i></a>
                </li>
            </ul>
        </nav>
    )
}