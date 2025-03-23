    import React, { useEffect, useState } from 'react';
    import '../assets/css/local.css';
    import '../assets/css/input.css';
    import { useNavigate, useParams } from 'react-router-dom';
    import Navbarnews from './Navbarnews';

    const News = () => {
        const navigate = useNavigate();
        const { id } = useParams();
        const [news, setNews] = useState([]);
        const [selectedNews, setSelectedNews] = useState(null);
        
        useEffect(() => {
            fetch("http://localhost:5000/news/")
                .then((res) => res.json())
                .then((data) => {setNews(data);
                    console.log("Selectednews:", selectedNews);
                    const foundNews = data.find(item => item.id === id);
                    console.log("Fetched Data:", data);
                    if (!foundNews){
                        alert("Page not found!, Redirecting to Home");
                        navigate('/home');
                    }else {
                        setSelectedNews(foundNews);
                    }

                    
                })
                .catch((err) => console.error("Error fetching news:", err));
        }, [id, navigate]);

        const openHome = () => {
            navigate('/home');
        };

        return ( 
            <div >
                 <Navbarnews />
            
                {selectedNews ?(
                    <div className="grid md:grid-cols-2 container md:max-w-[1200px] mx-auto">
                    <p style={{
                        fontFamily: "Familjen Grotesk, serif", 
                        fontWeight: '300', 
                        fontStyle: 'normal', fontSize:'16px',
                        lineHeight: '22px'}} 
                        className='md:pt-4 md:pr-3 text-justify'>
                        {selectedNews.title} 
                        <br></br>
                        {selectedNews.intro}
                        <br></br>
                        {selectedNews.heading1}
                        <br></br>
                        {selectedNews.paragraph1}
                        <br></br>
                        {selectedNews.heading2}
                        <br></br>
                        {selectedNews.paragraph2}
                        <br></br>
                        {selectedNews.heading3}
                        <br></br>
                        {selectedNews.paragraph3}
                        <br></br>
                        {selectedNews.heading4}
                        <br></br>
                        {selectedNews.paragraph4}
                        <br></br>
                        {selectedNews.heading5}
                        <br></br>
                        {selectedNews.paragraph5}
                        <br></br>
                        </p>
                    
                
                    <div className="flex flex-col md:pt-4 ">
                        <img 
                        src={selectedNews.image} 
                        alt={selectedNews.title} 
                        
                        className="w-auto" />
                        <p 
                        style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', 
                        fontStyle: 'normal', 
                        fontSize:'12px'}}
                        className=" text-gray-600">12 jam lalu</p>
                    
                
                    <p style={{
                        fontFamily: "Familjen Grotesk, serif", fontWeight: '300', 
                        fontStyle: 'normal', 
                        fontSize:'12px'}} 
                        className='cursor-pointer '
                    > Sumber Dari : 
                    {selectedNews.link.map((url, index) => (
                    
                    <span 
                    key={index}>
                        <a                       
                        href={url.trim().replace(/,$/, '')}
                        target="blank"
                        rel = "noopener noreferrer"
                        className= "hover:text-blue-500 inline "
                        >
                        {url.trim().replace(/,$/, '')}
                        {index !== selectedNews.link.length && ". "}
                        </a>
                        </span>

                        
                    ))} 
                    
                    </p>
                    
                    <h style={{
                        fontFamily: "Familjen Grotesk, serif",
                        fontWeight: '500',
                        fontSize: '14px',
                        
                    }} className="md:pt-2"
                    >Lihat Juga:</h>
                    
                    </div>
                </div>
                
                ):(
                    <p className='text-center'>Loading...</p>
                    
                )}
                
            </div>

            
        );
    };

    export default News;
