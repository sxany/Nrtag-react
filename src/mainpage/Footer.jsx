import React from 'react';
import '../assets/css/local.css';
import '../assets/css/input.css';
import { FaFacebook, FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";


const Footer = () => {
    return (
        //**Text */
        <footer 
            className="mx-auto justify-items-center mt-5" 
            style={{ 
                backgroundColor: 'rgba(255, 220, 205, 0.8)', 
                maxWidth: '',
                height: 'auto' 
            }}
        >
            <h1 
                style={{ 
                    color: 'black', 
                    fontFamily: "Familjen Grotesk, serif", 
                    fontWeight: '500', 
                    fontStyle: 'normal', 
                    fontSize: '36px' 
                }}
            >
                Nrtag Developer
            </h1>
            <p 
                className="mt-1" 
                style={{ 
                    color: 'black', 
                    fontFamily: "Familjen Grotesk, serif", 
                    fontWeight: '300', 
                    fontStyle: 'normal', 
                    fontSize: '18px', 
                    maxWidth: '500px', 
                    textAlign: 'center', 
                    lineHeight: '1.8' 
                }}
            >
                We are committed to providing users with the latest gaming news, delivering up-to-date trends, releases, and industry insights.
            </p>
            {/*icon */}
            <div className="flex space-x-2 mt-2">
    {[
        { Icon: FaFacebook, link: "https://www.facebook.com" },
        { Icon: FaTiktok, link: "https://www.tiktok.com" },
        { Icon: FaGithub, link: "https://github.com" },
        { Icon: FaInstagram, link: "https://www.instagram.com" }
    ].map(({ Icon, link }, index) => (
        <a 
            key={index} 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
        >
            <Icon size={32} color="black" />
        </a>
    ))}
</div>

        </footer>
    );
};

export default Footer;
