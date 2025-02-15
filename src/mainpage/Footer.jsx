import React from 'react';
import '../assets/css/local.css';
import '../assets/css/input.css';

const Footer = () => {
    return (
        <footer 
            className="mx-auto justify-items-center mt-5" 
            style={{ 
                backgroundColor: '#2B2B2B', 
                width: '1280px', 
                height: 'auto' 
            }}
        >
            <h1 
                style={{ 
                    color: '#ffff', 
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
                    color: '#ffff', 
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
        </footer>
    );
};

export default Footer;
