import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "./useFetch";
import "../static/commodityDetails.scss";
import Recommender from "./Recommender";

import { useDispatch} from "react-redux";
import { addToCart} from "../redux/cartSlice";


const CommodityDetails = () => {
    const {id} = useParams();
    const {data: commodity , isPending, error} = useFetch('https://my-json-server.typicode.com/kia-bdq/fake-server/commodity/' + id);
    const [size, setSize] = useState("");
    const [added, setAdded] = useState(false);
    const [touched, setTouched] = useState(false);
    const dispatch = useDispatch();
    var price = "";
    if(commodity){
        price = commodity.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const handleSize = (s) =>{
        setSize(s);
        setAdded(false);
        setTouched(false);
    }


    return ( 
        <div className="detailsMainDiv">
            {error && <div className="container">{error}</div>}
            {isPending && <div className="loading"> <img src={`${process.env.PUBLIC_URL}/assets/images/loading.gif`} alt="loading..."/> </div>}

            { commodity && 
                <div className="container">
                    <div className="right">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/${id}.jpg`} alt="2"/>
                    </div>
                    <div className="left">
                        <p id="name">{commodity.name}</p>
                            { commodity.category === "clothing" &&
                                <ul>
                                    <p>سایز</p>
                                    <li onClick={() => handleSize("S")} className={size === "S" ? "selected" :""}> S</li>
                                    <li onClick={() => handleSize("M")} className={size === "M" ? "selected": ""}> M</li>
                                    <li onClick={() => handleSize("L")} className={size === "L" ? "selected" :""}> L</li>
                                    <li onClick={() => handleSize("XL")} className={size === "XL" ? "selected":""}> XL</li>
                                </ul>
                            }
                            { commodity.category === "shoes" &&
                                <ul>
                                    <p>سایز</p>
                                    <li onClick={() => handleSize("36")} className={size === "36" ? "selected" : ""}> 36</li>
                                    <li onClick={() => handleSize("37")} className={size === "37" ? "selected" : ""}> 37</li>
                                    <li onClick={() => handleSize("38")} className={size === "38" ? "selected" : ""}> 38</li>
                                    <li onClick={() => handleSize("39")} className={size === "39" ? "selected" : ""}> 39</li>
                                    <li onClick={() => handleSize("40")} className={size === "40" ? "selected" : ""}> 40</li>
                                </ul>
                            }

                        <div>
                            <p>{price} تومان</p>
                            <p className={added? "addedMsg":"addedMsg hidden"}> به سبد خرید اضافه شد </p>
                            <button className={added? "addBtn added": "addBtn" } onClick={size ? () => 
                                    {dispatch(addToCart({id: commodity.id, name:commodity.name, picture:commodity.picture,
                                    price: commodity.price, size: size, count: 1}));
                                    setAdded(true);
                                    setTouched(true);
                                    setTimeout(()=> setAdded(false), 2000);
                                    } : () => window.alert("سایز را انتخاب کنید")}>{touched? "یکی دیگه هم اضافه کن" : "افزودن به سبد خرید" }</button>
                        </div>
                    </div>
                </div> 
            }

            {commodity && 
                <div className="recommend">
                    <Recommender category={commodity.category} id={commodity.id} />
                </div>
            }
        </div>
     );
}
 
export default CommodityDetails;