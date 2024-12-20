import React, { useState } from "react";
import { styles } from "../../styles";

export default function Navbar() {
    // initialize state 
    const [isOpen, setIsOpen] = useState(false);

    // toggle menu
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="absolute top-0 w-full flex items-center justify-between px-6 py-4 z-20 max-w-7xl mx-auto">
            <div className="flex flex-row gap-4 items-center">
                <a href="#">
                    <img
                        src="https://seeklogo.com/images/I/itzy-logo-C7AF1DE85E-seeklogo.com.png"
                        alt="ITZY Logo"
                        className="w-12 h-12"
                    />
                </a>
            </div>

            <ul className="hidden md:flex space-x-6 gap-x-6 text-white">
                {["About", "Music", "Gallery", "Contact"].map((item) => (
                    <li key={item}>
                        <a
                            href={`#${item.toLowerCase()}`}
                            className="text-white hover:text-pink-500 transition duration-300 text-lg font-medium"
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="md:hidden flex items-center">
                <button
                    className="text-white text-2xl"
                    onClick={toggleMenu}
                >
                    ☰
                </button>
            </div>

            {/* mobile Menu */}
            <ul
                className={`md:hidden absolute top-0 left-0 w-full bg-black bg-opacity-80 transform transition-all duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                {["About", "Music", "Gallery", "Contact"].map((item) => (
                    <li key={item} className="text-center py-4">
                        <a
                            href={`#${item.toLowerCase()}`}
                            className="text-white hover:text-pink-500 transition duration-300 text-lg font-medium"
                            onClick={toggleMenu} // Close the menu when an item is clicked
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
