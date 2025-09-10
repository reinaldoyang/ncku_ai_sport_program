import "../navbar.css"
import { useState } from "react";
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    /*when click make the navbar pop*/
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu= () => {
        setIsOpen(false);
    }
    return (
        <nav class="my-navbar">
            <div className="mobile-menu-icon" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={`my-nav-menu ${isOpen ? 'active' : ''}`}>
            <li class="my-nav-item dropdown">
                <span class="my-nav-link">關於課程 ▼</span>
                <ul class="my-dropdown-menu">
                    <li><Link to="/about" onClick={closeMenu}>課程介紹</Link></li>
                </ul>
            </li>
            <li class="my-nav-item dropdown">
                <span class="my-nav-link">訊息公告 ▼</span>
                <ul class="my-dropdown-menu">
                    <li><Link to="/news" onClick={closeMenu}>最新消息</Link></li>
                    <li><Link to="/activity" onClick={closeMenu}>近期活動</Link></li>
                    <li><Link to="/album" onClick={closeMenu}>活動花絮</Link></li>
                </ul>
            </li>
            <li class="my-nav-item dropdown">
                <span class="my-nav-link">微學程成員 ▼</span>
                <ul class="my-dropdown-menu">
                    <li><Link to="/teachers" onClick={closeMenu}>微學程師資</Link></li>
                </ul>
            </li>
            <li class="my-nav-item dropdown">
                <span class="my-nav-link">課程修業 ▼</span>
                <ul class="my-dropdown-menu">
                    <li><Link to="/course" onClick={closeMenu}>微課程科目</Link></li>
                    <li><Link to="/class_regulation" onClick={closeMenu}>修課規定</Link></li>
                </ul>
            </li>
            <li class="my-nav-item">
                <span class = "my-nav-item">
                    <Link to="/contact" className="my-nav-link" onClick={closeMenu}>聯絡我們</Link>
                </span>
            </li>    
            </ul>
        </nav>
    )
}

export default Navbar