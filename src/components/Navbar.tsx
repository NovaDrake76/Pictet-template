import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-white border-b border-[#cfcfcf] h-[70px]">
            <div className="max-w-[1920px] mx-auto flex items-center justify-between h-16 px-16">
                <Link to="/" className="logo">
                    <img src="/logo_black.png" alt="logo" width={100} />
                </Link>
                <div className="hidden md:flex gap-8">
                    {[
                        { to: "/our-approach", label: "Our Approach" },
                        { to: "/who-we-serve", label: "Who we serve" },
                        { to: "/why-choose-us", label: "Why choose us" },
                        { to: "/contact-us", label: "Contact us" }
                    ].map((link) => (
                        <Link key={link.to} to={link.to} className="text-gray-800">
                            {link.label}
                        </Link>
                    ))}
                </div>
                <button onClick={toggleMenu} className="md:hidden px-2 py-1 bg-white">
                    <span className="block bg-black h-1 w-6 mb-1"></span>
                    <span className="block bg-black h-1 w-6 mb-1"></span>
                    <span className="block bg-black h-1 w-6"></span>
                </button>
            </div>
            {isMenuOpen && (
                <div className="fixed inset-0 md:hidden bg-white z-40">
                    <button onClick={toggleMenu} className="absolute top-0 right-0 p-4 bg-white">
                        &times;
                    </button>
                    <div className="flex flex-col space-y-4 p-8">
                        {[
                            { to: "/our-approach", label: "Our Approach" },
                            { to: "/who-we-serve", label: "Who we serve" },
                            { to: "/why-choose-us", label: "Why choose us" },
                        ].map((link) => (
                            <Link key={link.to} to={link.to} className="text-gray-800 text-xl border-b" onClick={toggleMenu}>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
