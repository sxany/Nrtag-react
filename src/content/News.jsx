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
        fetch("http://localhost:5000/news")
            .then((res) => res.json())
            .then((data) => {setNews(data);
                const foundNews = data.find(item => item.id === id);
                setSelectedNews(foundNews);
            })
            .catch((err) => console.error("Error fetching news:", err));
    }, [id]);
    const openHome = () => {
        navigate('/home');
    };

    return (
        <div >
            <Navbarnews />
          
            {selectedNews ? (
                <div className="grid md:grid-cols-2 container md:max-w-[1200px] mx-auto">
                <p style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'16px'}} className='md:pt-4 md:max-w-[400px] text-justify mx-auto'>{selectedNews.content}</p>
                
               
                <div className="flex flex-col md:pt-4">
                    <img src={selectedNews.image} alt={selectedNews.title} className="w-auto" />
                    <p className="mt-2 text-gray-600">12 jam lalu</p>
                
            
                <p style={{fontFamily: "Familjen Grotesk, serif", fontWeight: '300', fontStyle: 'normal', fontSize:'14px'}} className='cursor-pointer md:mt-1'
                > Sumber Dari : {selectedNews.link.map((url, index) => (
                    <a 
                    key={index}
                    href={url.trim().replace(/,$/, '')}
                    target="blank"
                    rel = "noonpener noreferer"
                    className= "hover:text-blue-500 "
                    >
                    
                    {url.trim().replace(/,$/, '')}
                    </a>
                ))} 

                </p>
                 </div>
            </div>
            
            ):(
                <p>Loading news...</p>
            )}
               
        </div>

           
    );
};

export default News;
