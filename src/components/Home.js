import '../static/home.scss';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";
import myimg from "../images/online-shopping.jpg";
import useFetch from './useFetch';
import AnchorLink from 'react-anchor-link-smooth-scroll';
// import { useState } from 'react';

const Home = () => {

    const {data: stores , isPending, error} = useFetch('https://my-json-server.typicode.com/kia-bdq/fake-server/stores');


    Aos.init();

    return ( 
        <div className="homeMainDiv">
            <section className="firstBg">
            <div className="container">
                <div className="rightCol">
                    <h1>یک تیمچه به وسعت ایران</h1>
                    <p>در بازار چرخ بزنید یا خودتان فروشنده شوید!</p>
                    <AnchorLink href="#shpAround" id="shpAroundBtn" className="tmBtn">بریم گشت زنی</AnchorLink>
                    <Link to="Timche/shop-register" className="tmBtn">فروشنده شو</Link>
                </div>
                <div className="leftCol">
                    <img src={myimg} alt="shopping"/>
                </div>
            </div>
            </section>
            
            <section id='shpAround' className="randomClothes">
                <div className="container">
                    <div className="column">
                        <Link to="/Timche/commodity/1"><img src={'https://i.pinimg.com/750x/2a/40/d4/2a40d4b7a308b3b3988202165cd03429.jpg'}  data-aos-delay="100" data-aos-duration="1000" data-aos="fade-up" alt="1"/></Link>
                        <Link to="/Timche/commodity/3"><img src={'https://i.pinimg.com/564x/1b/47/21/1b4721f4b14946d9afdb346eb6bb7fe2.jpg'}  data-aos-delay="100" data-aos-duration="1000" data-aos="fade-up" alt="2"/></Link>
                    </div>
                    <div className="column">
                        <Link to="/Timche/commodity/2"><img src={'https://i.pinimg.com/564x/ba/8a/90/ba8a90b408558b0f4b0334b0f8efcf11.jpg'} data-aos-delay="200" data-aos-duration="1000" data-aos="fade-up" alt="4"/></Link>
                        <Link to="/Timche/commodity/9"><img src={'https://i.pinimg.com/750x/a3/ac/6b/a3ac6b3798b6adf8a360dff093e80381.jpg'} data-aos-delay="200" data-aos-duration="1000" data-aos="fade-up" alt="3"/></Link>

                    </div>
                    <div className="column">
                        <Link to="/Timche/commodity/4"><img src={'https://i.pinimg.com/750x/a1/88/5c/a1885cd17ab1eac19f3575abe3c10d49.jpg'} data-aos-delay="300" data-aos-duration="1000" data-aos="fade-up" alt="1"/></Link>
                        <Link to="/Timche/commodity/11"><img src={'https://i.pinimg.com/originals/21/da/82/21da82adbfd01b03d1e1b33e3ac887ae.jpg'} data-aos-delay="300" data-aos-duration="1000" data-aos="fade-up" alt="4"/></Link>
                    </div>
                </div>
            </section>

            {error && <div>{error}</div>}
            {isPending && <div> Loading... </div>}

            {stores && 
                <section className="storesSection">
                    <h2>دکان‌ها</h2>
                    
                    <div className="container">
                        
                        <Link to={"/Timche/store/"+ stores[0].id} className="column" data-aos-delay="100" data-aos-duration="1000" data-aos="fade-up">
                            <img src={stores[0].picture} alt="Store" />
                            <h3>{stores[0].name}</h3>
                        </Link>
                        <Link to={"/Timche/store/"+ stores[1].id} className="column" data-aos-delay="200" data-aos-duration="1000" data-aos="fade-up">
                            <img src={stores[1].picture} alt="Store" />
                            <h3>{stores[1].name}</h3>
                        </Link>
                        {/*<div className="column" data-aos-delay="300" data-aos-duration="1000" data-aos="fade-up">
                            <img src={'https://www.yourlittleblackbook.me/wp-content/uploads/2018/11/concept-store-vrouwen-hutspot-2.jpg'} alt="Store" />
                            <h3>نام مغازه</h3>
                        </div>*/}
                    </div>
                </section> 
            }
            
        </div>
     );
}
 
export default Home;