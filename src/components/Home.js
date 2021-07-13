import '../static/home.scss';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";
// import { useState } from 'react';

const Home = () => {

    // setInterval(()=>{
    //     console.log("salam");
    // }, 2000);

    Aos.init();

    return ( 
        <div className="homeMainDiv">
            <section className="firstBg">
            <div className="container">
                <div className="rightCol">
                    <h1>یک تیمچه به وسعت ایران</h1>
                    <p>در بازار چرخ بزنید یا خودتان فروشنده شوید!</p>
                    <Link to="" id="shpAroundBtn" className="tmBtn">بریم گشت زنی</Link>
                    <Link to="" className="tmBtn">فروشنده شو</Link>
                </div>
                <div className="leftCol">
                    <img src={'/images/online-shopping.jpg'} alt="shopping"/>
                </div>
            </div>
            </section>
            
            <section className="randomClothes">
                <div className="container">
                    <div className="column">
                        <img src={'/images/3.jpg'}  data-aos-delay="100" data-aos-duration="1000" data-aos="fade-up" alt="1"/>
                        <img src={'/images/9.jpg'}  data-aos-delay="100" data-aos-duration="1000" data-aos="fade-up" alt="2"/>
                    </div>
                    <div className="column">
                        <img src={'/images/5.jpg'} data-aos-delay="200" data-aos-duration="1000" data-aos="fade-up" alt="4"/>
                        <img src={'/images/4.jpg'} data-aos-delay="200" data-aos-duration="1000" data-aos="fade-up" alt="3"/>

                    </div>
                    <div className="column">
                        <img src={'/images/2.jpg'} data-aos-delay="300" data-aos-duration="1000" data-aos="fade-up" alt="1"/>
                        <img src={'/images/11.jpg'} data-aos-delay="300" data-aos-duration="1000" data-aos="fade-up" alt="4"/>
                    </div>
                </div>
            </section>


            <section className="storesSection">
            <h2>دکان‌ها</h2>
                <div className="container">
                    
                    <div className="column" data-aos-delay="100" data-aos-duration="1000" data-aos="fade-up">
                        <img src={'/images/store1.jpg'} alt="Store" />
                        <h3>نام مغازه</h3>
                    </div>
                    <div className="column" data-aos-delay="200" data-aos-duration="1000" data-aos="fade-up">
                        <img src={'/images/store2.jpg'} alt="Store" />
                        <h3>نام مغازه</h3>
                    </div>
                    <div className="column" data-aos-delay="300" data-aos-duration="1000" data-aos="fade-up">
                        <img src={'/images/store3.jpg'} alt="Store" />
                        <h3>نام مغازه</h3>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Home;