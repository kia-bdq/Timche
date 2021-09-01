import '../static/home.scss';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";
import useFetch from './useFetch';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Home = () => {

    const {data: stores , isPending, error} = useFetch('https://my-json-server.typicode.com/kia-bdq/fake-server/stores');
    console.log(localStorage);

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
                    <img src={`${process.env.PUBLIC_URL}/assets/images/online-shopping.jpg`}  alt="shopping"/>
                </div>
            </div>
            </section>
            
            <section id='shpAround' className="randomClothes">
                <div className="container">
                    <div className="column">
                        <Link to="/Timche/commodity/1">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/1.jpg`}  
                                data-aos-delay="100" data-aos-duration="1000" data-aos="fade-up" alt="commodity1"/>
                        </Link>
                        <Link to="/Timche/commodity/3">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/3.jpg`}  
                                data-aos-delay="100" data-aos-duration="1000" data-aos="fade-up" alt="commodity3"/>
                        </Link>
                    </div>
                    <div className="column">
                        <Link to="/Timche/commodity/2">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/2.jpg`} 
                                data-aos-delay="200" data-aos-duration="1000" data-aos="fade-up" alt="commodity2"/>
                        </Link>
                        <Link to="/Timche/commodity/9">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/9.jpg`} 
                                data-aos-delay="200" data-aos-duration="1000" data-aos="fade-up" alt="commodity9"/> 
                        </Link>

                    </div>
                    <div className="column">
                        <Link to="/Timche/commodity/4">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/4.jpg`} 
                                data-aos-delay="300" data-aos-duration="1000" data-aos="fade-up" alt="commodity4"/>
                        </Link>
                        <Link to="/Timche/commodity/11">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/11.jpg`} 
                                data-aos-delay="300" data-aos-duration="1000" data-aos="fade-up" alt="commodity11"/>
                        </Link>
                    </div>
                </div>
            </section>

            {error && <div>{error}</div>}
            {isPending && <div> Loading... </div>}

            {stores && 
                <section className="storesSection">
                    <h2>دکان‌ها</h2>
                    
                    <div className="container">
                        
                        <Link to={"/Timche/store/"+ stores[0].id} className="column" 
                            data-aos-delay="100" data-aos-duration="1000" data-aos="fade-up">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/store1.jpg`} alt="Store" />
                                <h3>{stores[0].name}</h3>
                        </Link>
                        <Link to={"/Timche/store/"+ stores[1].id} className="column" 
                            data-aos-delay="200" data-aos-duration="1000" data-aos="fade-up">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/store2.jpg`} alt="Store" />
                                <h3>{stores[1].name}</h3>
                        </Link>
                        <Link to={"/Timche/store/"+ stores[2].id} className="column" 
                            data-aos-delay="200" data-aos-duration="1000" data-aos="fade-up">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/store3.jpg`} alt="Store" />
                                <h3>{stores[2].name}</h3>
                        </Link>
                    </div>
                </section> 
            }
        </div>
     );
}
 
export default Home;