import { Route, Routes } from "react-router-dom";
import Service from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import ServiceDetails from "./components/ServiceDetails";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="services" element={<Service />} />
                <Route path="services/:slug" element={<ServiceDetails />} /> {/* dynamic route */}
                <Route path="*" element={<div>404 Not Found</div>} />
            </Route>
        </Routes>
    );
}

export default App