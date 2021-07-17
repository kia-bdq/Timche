import { Link } from "react-router-dom";
import "../static/commodity.scss";

const Commodity = ({id , name, picture}) => {

    return ( 
        <Link to={"/Timche/commodity/"+id} className="commodityCard">
            <img src={`${process.env.PUBLIC_URL}/assets/images/${id}.jpg`} alt="Store" />
            <h3>{name}</h3>
        </Link>
     );
}
 
export default Commodity;