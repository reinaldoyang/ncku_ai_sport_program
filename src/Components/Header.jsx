import sport_logo from '../assets/ai_sport_logo.png'
import "../header.css"
import { Link } from 'react-router-dom'

function Header(){
    return (
        <header className="header_size">
            <div className="logo">
                <Link to="/">
                    <img src={sport_logo} alt="CSIE AI Logo" className="sport_logo"/>
                </Link>
            </div>
        </header>
    )
}

export default Header