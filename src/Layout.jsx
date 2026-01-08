import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import HeaderImage from "./Components/HeaderImage";
import Footer from "./Components/Footer";
import { Outlet, useLocation } from "react-router-dom";

export function Layout(){
    const location = useLocation();
    const showHeaderImage = location.pathname !== "/";

    // Map routes to titles
    const pageTitles = {
        "/teachers": "微學程成員",
        "/contact": "聯絡我們",
        "/about": "課程介紹",
        "/news": "最近消息",
        "/activity": "近期活動",
        "/album": "活動花絮",
        "/course": "課程名稱",
        "/class_regulation": "修課規定",
    };
    
    // Check for dynamic routes (like /album/1, /album/2, etc.)
    let title = pageTitles[location.pathname] || "";
    if (!title && location.pathname.startsWith("/album/")) {
        title = "活動花絮";
    }
    if (!title && location.pathname.startsWith("/teachers/")) {
        title = "微學程成員";
    }
    
    return (
        <>
            <Header />
            <Navbar />
            {showHeaderImage && <HeaderImage title={title} />}
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
            
    )
}