
import { Link } from 'react-router-dom';
import '../static/navbar.scss';
import {FaBars, FaShoppingCart} from 'react-icons/fa';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
// import logo from '../static/logo 2.png'

const Navbar = () => {
    const cartCount = useSelector(state => state.cart.count);
    const [navOpen, setNavOpen] = useState(false);

    const openNav = () =>{
        setNavOpen(!navOpen);
    }
    useEffect(()=>{setNavOpen(false)}, []);

    return ( 
        <div className='head'>
            <div className='container'>
                <Link to="/Timche/cart"><FaShoppingCart className="fs" /></Link>
                <Link className="logo" to="/Timche"><h1>Timche</h1></Link>
                <FaBars onClick={openNav} className='fb'/>
                {cartCount>0 && <p id="cartCounter">{cartCount}</p>}
            </div>

            <div className="container">
                <nav className={navOpen ? "customNav opened" : "customNav"}>
                    <ul>
                        <li className="dropdown"><Link to="#">راسته‌ها</Link>
                            <div className="dropdown-content">
                                <Link onClick={() => setNavOpen(false)} to="/Timche/special-category/clothing">پوشاک</Link>
                                <Link onClick={() => setNavOpen(false)} to="/Timche/special-category/shoes">کفش</Link>
                                <Link onClick={() => setNavOpen(false)} to="/Timche/special-category/bags">کیف</Link>
                            </div>
                        </li>

                        <li><Link onClick={() => setNavOpen(false)} to='/Timche/shop-register'>فروشنده شوید</Link></li>
                        <li><Link onClick={() => setNavOpen(false)} to='/Timche/about-us'>درباره ما</Link></li>
                        <li><Link onClick={() => setNavOpen(false)} to='/Timche/login' id='sign-in'>ورود</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
     );
}
 
export default Navbar;