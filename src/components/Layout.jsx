// src/components/Layout.jsx
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import WhatsAppFloatingButton from "./WhatsAppFloatingButton";
import Footer from './Footer';

export default function Layout() {
    const location = useLocation();

    // Hide footer on Contact and About pages
    const hideFooter = location.pathname === "/contact" || location.pathname === "/about";

    return (
        <div>
            <Navbar />
            <main className="p-[1px]">
                <Outlet />
            </main>
            <WhatsAppFloatingButton />
            {!hideFooter && <Footer />}
        </div>
    );
}
