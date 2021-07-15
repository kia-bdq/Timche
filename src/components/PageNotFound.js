import { Link } from 'react-router-dom';
import '../static/pageNotFound.scss';

const PageNotFound = () => {
    return ( 
        <div className="notFound">
            <p>404...! یعنی این آدرسی که وارد کردی تو این وبسایت وجود نداره  :(</p>
            
            <Link to="/Timche">بریم صفحه اصلی</Link>
                
        </div>
     );
}
 
export default PageNotFound;