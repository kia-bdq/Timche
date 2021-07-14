
import { Link } from 'react-router-dom';
import '../static/navbar.scss';
import {FaBars, FaShoppingCart} from 'react-icons/fa';
import { useState } from 'react';
// import logo from '../static/logo 2.png'

const Navbar = ({cartCounter}) => {
    const [navOpen, setNavOpen] = useState(false)

    const openNav = () =>{
        setNavOpen(!navOpen);
    }

    return ( 
        <div className='head'>
            <div className='container'>
                <FaShoppingCart className="fs" />
                <Link className="logo" to="/Timche"><h1>Timche</h1></Link>
                <FaBars onClick={openNav} className='fb'/>
                {/*{cartCounter>0 && <p id="cartCounter">{cartCounter}</p>}*/}
            </div>

            <div className="container">
                <nav className={navOpen ? "customNav opened" : "customNav"}>
                    <ul>
                        <li className="dropdown"><Link to="#">راسته‌ها</Link>
                            <div className="dropdown-content">
                                <Link to="/Timche/special-category/clothing">پوشاک</Link>
                                <Link to="/Timche/special-category/shoes">کفش</Link>
                                <Link to="/Timche/special-category/bags">کیف</Link>
                            </div>
                        </li>

                        <li><Link to='#'>فروشنده شوید</Link></li>
                        <li><Link to='#'>درباره ما</Link></li>
                        <li><Link to='#' id='sign-in'>ورود</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
     );
}
 
export default Navbar;