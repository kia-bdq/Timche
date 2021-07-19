import "../static/shoppingCart.scss";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increment ,decrement } from "../redux/cartSlice";
import { FaTrashAlt} from "react-icons/fa";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
    
    const cartData = useSelector(state => state.cart.cartArray);
    const sum= useSelector(state => state.cart.sum);
    const dispatch = useDispatch();


    return ( 
        <div className="mainDiv">
            {sum === 0 && <div className="empty">سبد خرید شما خالی است.</div>}
            {sum > 0 && 
                <div className="innerDiv">
                    <h2>سبد خرید</h2> 
                    <div className="container">
                    <ul>
                        {cartData.map( commodity => 
                            <li key={cartData.indexOf(commodity)}>
                                <div className="commodityContainer">
                                    <div className="right">
                                        <Link to={"/Timche/commodity/"+commodity.id}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/${commodity.id}.jpg`} alt="commodity"/>
                                        </Link>
                                    </div>

                                    <div className="middleRight">
                                        <p className="name">{commodity.name}</p>
                                        <p>سایز: {commodity.size} </p>
                                    </div>

                                    <div className="middleLeft">                                       
                                        <div className="count"> 
                                            <p className="plus" onClick={()=> dispatch(increment(cartData.indexOf(commodity)))}>+</p>
                                            <p>{commodity.count}</p>
                                            <p className={commodity.count>1? "minus":"minus deactive"}  
                                                onClick={commodity.count >1 ? 
                                                    () => dispatch(decrement(cartData.indexOf(commodity))): undefined}>
                                            -
                                            </p>
                                         </div>
                                         <FaTrashAlt className="trash" onClick={() => 
                                            dispatch(removeFromCart(cartData.indexOf(commodity)))}/>
                                    </div>
                                    <div className="left">
                                        <p>{commodity.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان</p>
                                    </div>
                                </div>
                            </li>
                            ) //end of map function
                        }
                    </ul>
                    <div className="sum">
                        <p>مجموع</p>
                        {sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان
                    </div>
                    </div>
                </div>
            }
        </div>
     );
}
 
export default ShoppingCart;