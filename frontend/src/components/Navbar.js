import logo from "./sslogo.png";

export default function Navbar() {
    return (
        <nav>
            <img src={logo} className="nav--icon" />
            <h3 className="nav--logo_text">SkyStorm -- Flight Management System</h3> 
            <h6 className="nav--title">Flight Schedule as of: <strong> { new Date().toLocaleString() + ""}</strong></h6>
        </nav>
    )
}







