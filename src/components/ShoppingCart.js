import "../static/shoppingCart.scss";
import { useSelector, useDispatch } from "react-redux";
import { increment ,decrement } from "../redux/cartSlice";

const ShoppingCart = () => {
    
    const cartData = useSelector(state => state.cart.cartArray);
    const sum= useSelector(state => state.cart.sum);
    const dispatch = useDispatch();


    return ( 
        <div className="mainDiv">
            {cartData.length===0 && <div className="empty">سبد خرید شما خالی است.</div>}
            {cartData.length > 0 && 
                <div className="innerDiv">
                    <h2>سبد خرید</h2> 
                    <div className="container">
                    <ul>
                        {cartData.map( commodity => 
                            <li key={cartData.indexOf(commodity)}>
                                <div className="commodityContainer">
                                    <div className="right"><img src={commodity.picture} alt="commodity"/></div>
                                    <div className="middleRight">
                                        <p className="name">{commodity.name}</p>
                                        <p>سایز: {commodity.size} </p>
                                    </div>
                                    <div className="middleLeft">
                                        <div className="count"> 
                                            <p className="plus" onClick={()=> dispatch(increment(cartData.indexOf(commodity)))}>+</p>
                                            <p>{commodity.count}</p>
                                            <p className={commodity.count>1? "minus":"minus deactive"}  onClick={commodity.count >1 ? () => dispatch(decrement(cartData.indexOf(commodity))): undefined} >
                                            -
                                            </p>
                                         </div>
                                    </div>
                                    <div className="left"><p>{commodity.price}</p></div>
                                </div>
                            </li>
                            ) //end of map function
                        }
                    </ul>
                    <div className="sum">
                        <p>مجموع</p>
                        {sum}
                    </div>
                    </div>
                </div>
            }
        </div>
     );
}
 
export default ShoppingCart;