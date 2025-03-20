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
            <div className='text-center cursor-pointer' onClick={openHome}>
                <h1>Latest News</h1>
                <p>Stay tuned for the latest updates.</p>
            </div>

            {/* 🔹 Tampilkan berita jika ditemukan */}
            {selectedNews ? (
                <div className="news-content">
                    <h2>{selectedNews.title}</h2>
                    <img src={selectedNews.image} alt={selectedNews.title} style={{ width: "300px", height: "auto" }} />
                    <p>{selectedNews.content}</p>
                </div>
            ) : (
                <p>Loading news...</p>
            )}
        </div>
    );
};

export default News;
