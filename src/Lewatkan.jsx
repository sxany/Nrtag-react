import React from 'react';
import './assets/css/local.css';
import './assets/css/input.css';

const Lewatkan = () => {
    return (
        <div>
            {/* Kotak Judul */}
            <div className="relative z-10 flex space-x-2 mt-[60px]">
                <div className="kotak w-[34px] h-[13px] mt-4"></div>
                <p 
                    className="text-black mt-1.5 opacity-100" 
                    style={{ 
                        fontFamily: "Familjen Grotesk, serif", 
                        fontWeight: '500', 
                        fontStyle: 'normal', 
                        fontSize: '20px' 
                    }}
                >
                    Informasi Anda Lewatkan
                </p>
            </div>

            {/* Kotak Informasi */}
            <div className="ml-12 flex absolute space-x-2">
                {/* Item 1 */}
                <div className="flex flex-col">
                    <img src="./images/mumbai.jpg" className="w-[180px] h-auto" alt="Thumbnail" />
                    <p 
                        className="ml-2 text-black opacity-100 max-w-[200px]" 
                        style={{ 
                            fontFamily: "Familjen Grotesk, serif", 
                            fontWeight: '300', 
                            fontStyle: 'normal', 
                            fontSize: '11px' 
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu mollis leo, ac commodo ipsum. 
                        Nunc at sapien quis justo euismod ornare. Aliquam augue nulla, laoreet ut urna quis.
                    </p>
                    <p 
                        className="ml-2 text-[#706969] opacity-100" 
                        style={{ 
                            fontFamily: "Familjen Grotesk, serif", 
                            fontWeight: '300', 
                            fontStyle: 'normal', 
                            fontSize: '11px' 
                        }}
                    >
                        12 jam lalu
                    </p>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col">
                    <img src="./images/mumbai.jpg" className="w-[180px] h-auto" alt="Thumbnail" />
                    <p 
                        className="ml-2 text-black opacity-100 max-w-[200px]" 
                        style={{ 
                            fontFamily: "Familjen Grotesk, serif", 
                            fontWeight: '300', 
                            fontStyle: 'normal', 
                            fontSize: '11px' 
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu mollis leo, ac commodo ipsum. 
                        Nunc at sapien quis justo euismod ornare. Aliquam augue nulla, laoreet ut urna quis.
                    </p>
                    <p 
                        className="ml-2 text-[#706969] opacity-100" 
                        style={{ 
                            fontFamily: "Familjen Grotesk, serif", 
                            fontWeight: '300', 
                            fontStyle: 'normal', 
                            fontSize: '11px' 
                        }}
                    >
                        12 jam lalu
                    </p>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col">
                    <img src="./images/mumbai.jpg" className="w-[180px] h-auto" alt="Thumbnail" />
                    <p 
                        className="ml-2 text-black opacity-100 max-w-[200px]" 
                        style={{ 
                            fontFamily: "Familjen Grotesk, serif", 
                            fontWeight: '300', 
                            fontStyle: 'normal', 
                            fontSize: '11px' 
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu mollis leo, ac commodo ipsum. 
                        Nunc at sapien quis justo euismod ornare. Aliquam augue nulla, laoreet ut urna quis.
                    </p>
                    <p 
                        className="ml-2 text-[#706969] opacity-100" 
                        style={{ 
                            fontFamily: "Familjen Grotesk, serif", 
                            fontWeight: '300', 
                            fontStyle: 'normal', 
                            fontSize: '11px' 
                        }}
                    >
                        12 jam lalu
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Lewatkan;
