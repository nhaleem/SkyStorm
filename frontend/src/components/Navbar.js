import logo from "./sslogo.png";
import logo2 from './logo.svg';
import './App.css';


export default function Navbar() {
    return (
        <nav>
            <img src={logo} className="nav--icon" alt="skystorm-logo"/>
            <h3 className="nav--logo_text">SkyStorm -- Flight Management System</h3> 
            <h6 className="nav--title">Flight Schedule as of: <strong> { new Date().toLocaleString() + ""}</strong></h6>
            <img src={logo2} className="react-project-blueprint" alt="react-project-blueprint" title="react-project-blueprint" />
        </nav>
    )
}







