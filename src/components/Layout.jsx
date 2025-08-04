// src/components/Layout.jsx
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import WhatsAppFloatingButton from "./WhatsAppFloatingButton";

export default function Layout() {
    return (
        <div>
            <Navbar />
            <main className="p-[1px]">
                <Outlet />
            </main>
            <WhatsAppFloatingButton />
        </div>
    );
}
