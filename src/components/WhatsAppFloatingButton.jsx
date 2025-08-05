import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloatingButton() {
    const phoneNumber = "7203030730"; // replace with your actual number
    const message = "Hey there";

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-50 bg-white text-white p-1 rounded-full shadow-lg transition-all duration-300"
        >
            <FaWhatsapp className="text-orange-400 md:size-8 size-6 " />
        </a>
    );
}
