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
        <div>
            <Navbarnews />
          
            {selectedNews ? (
                <div className="grid md:grid-cols-2 container md:max-w-[1200px] mx-auto">
                    <p className='md:pt-4 md:max-w-[400px] text-justify mx-auto'>{selectedNews.content}</p>
                    <img src={selectedNews.image} alt={selectedNews.title} className="w-auto md:pt-4  "  />
                    
                    
                    <p className=''>12 jam lalu</p>
                    <p className='cursor-pointer md:mt-2'> Sumber Dari : {selectedNews.link}</p>
                </div>
            ):(
                <p>Loading news...</p>
            )}
               
               

            </div>

           
    );
};

export default News;
