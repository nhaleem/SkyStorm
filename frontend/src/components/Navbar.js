import skystormlogo from "../assets/skystormlogo.png";
import reactlogo from '../assets/reactlogo.svg';
import "../assets/app.css";



export default function Navbar() {
    return (
        <nav>
            <img src={skystormlogo} className="nav--icon" alt="skystorm-logo"/>
            <h3 className="nav--logo_text">SkyStorm Flight Management System</h3> 
            <h6 className="nav--title">Current Date Time --  <strong> { new Date().toLocaleString() + ""}</strong></h6>
            <img src={reactlogo} className="react-project-blueprint" alt="react-project-blueprint" title="react-project-blueprint" />
        </nav>
    )
}







