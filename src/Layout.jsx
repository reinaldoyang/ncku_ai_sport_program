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
        "/course": "微課程科目",
        "/class_regulation": "修課規定",
    };
    const title = pageTitles[location.pathname] || ""; // fallback empty
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