// src/components/Layout.jsx
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <Navbar />
            <main className="p-[1px]">
                <Outlet />
            </main>
        </div>
    );
}
