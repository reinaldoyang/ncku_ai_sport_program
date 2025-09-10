import sport_logo from '../assets/ai_sport.png'
import "../header.css"
import { Link } from 'react-router-dom'

function Header(){
    return (
        <header>
            <div class="logo">
                <Link to="/">
                    <img src={sport_logo} alt="CSIE AI Logo" class="sport_logo"/>
                </Link>
            </div>
        </header>
    )
}

export default Header