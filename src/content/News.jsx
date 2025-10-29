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
       //const [allNews, setAllNews] = useState([]);
        
        
        useEffect(() => {
            fetch("http://localhost:5000/news/")
                .then((res) => res.json())
                .then((data) => {setNews(data);
                    //setAllNews(data);
                    //setRandomNews(data);

                    //console log
                    console.log("Selectednews:", selectedNews);

                    //error massage
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

            //random news
        /*const setRandomNews =(data) =>  {
            if(data.length > 0){
                const randomNews = Math.floor(Math.random() * data.length);
                setNews(data[randomNews]);
                
        }
    };*/
            //open home
                const openHome = () => {
                navigate('/home');
                };
       

        return ( 
            <div >
                 <Navbarnews />
            
                {selectedNews ?(
                    <div className="grid md:grid-cols-2 container md:max-w-[1200px] mx-auto">
                        {/*all konten */}
                    <div>
                        {/*title */}
                        <div style={{
                            fontFamily: "Familjen Grotesk, serif", 
                            fontWeight: '500', 
                            fontStyle: 'normal', 
                            fontSize:'24px',
                        }}>
                        {selectedNews.title} 
                        <br></br>
                        </div>
                        <div className='md:pt-4 md:pr-3 text-justify ' style={{
                                fontFamily: "Familjen Grotesk, serif", 
                                fontStyle: 'normal', 
                                fontSize:'16px',
                                lineHeight: '32px'        
                        }}>

                        {/*intro*/}
                        {selectedNews.intro}
                        <br></br>
                        
                        {/*all heading and paragraph*/}
                        {selectedNews.body.map((item) => (
                        item.type === "heading" ? (
                            <h key={item.id}>{item.content}</h>
                        ): 
                        (   
                            <p key={item.id}>{item.content}</p>
                        )
                       
                        
                    ))}
                        </div>
                    </div>
                    
                
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
                    {/*lihat juga */}
                    <div style={{
                        fontFamily: "Familjen Grotesk, serif"
                    }} 
                        className="md:pt-2">

                    <h className="cursor-pointer" 
                        onClick={() => setRandomNews(allNews)}style={{
                        fontWeight: '500',
                        fontSize: '14px'}}>Lihat Juga:</h>
                    <div className='relative flex space-x-4'>
                        <div>
                        <img src='/images/news/poster2.png' className='populer2 max-h-[150px]'>
                        </img>
                        <p className="flex"
                        style={{
                            fontWeight: '300',
                            fontSize: '12px'
                        }}
                        >Cantarella Hadir! Semua yang Perlu Kamu Tau tentang Update Wuthering Waves 2.2</p>
                        </div>

                        <img src='/images/news/poster3.jpg'
                        className='populer2 max-h-[150px]  '></img>

                        <img src='/images/news/poster4.jpg'
                        className='populer2 max-h-[150px]  '></img>
                
                    <p className="cursor-pointer"
                        style={{
                        fontWeight: '300',
                        fontSize: '12px'
                        }}>test </p>
                    </div>
                    </div>
                    </div>
                </div>
                
                ):(
                    <p className='text-center'>Loading...</p>
                    
                )}
                
            </div>

            
        );
    };

    export default News;
