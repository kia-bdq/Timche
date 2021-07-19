import { Link } from "react-router-dom";
import "../static/commodity.scss";

const Commodity = ({commodity}) => {

    return ( 
        <Link to={"/Timche/commodity/"+commodity.id} className="commodityCard">
            <img src={`${process.env.PUBLIC_URL}/assets/images/${commodity.id}.jpg`} alt="commodity" />
            <h3>{commodity.name}</h3>
            <p>{commodity.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}  تومان </p>
        </Link>
     );
}
 
export default Commodity;