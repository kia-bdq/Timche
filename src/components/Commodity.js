import { Link } from "react-router-dom";
import "../static/commodity.scss";

const Commodity = ({id , name}) => {

    return ( 
        <Link to={"/commodity/"+id} className="commodityCard">
            <img src={'/images/'+id+'.jpg'} alt="Store" />
            <h3>{name}</h3>
        </Link>
     );
}
 
export default Commodity;