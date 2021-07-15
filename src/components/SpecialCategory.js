import "../static/specialCategory.scss";
import { useParams } from "react-router-dom";
import Commodity from "./Commodity";
import useFetch from "../components/useFetch";


const SpecialCategory = () => {
    const { category } = useParams();
    const {data: commodities , isPending, error} = useFetch('https://my-json-server.typicode.com/kia-bdq/fake-server/commodity?category='+category);
    // const {data: commodities , isPending, error} = useFetch('http://localhost:8000/commodity');
    // console.log(commodities)
    
    return ( 
        <div className="main">
            { category==="clothing" && <h2>راسته پوشاک</h2> }
            { category==="shoes" && <h2>راسته کفش</h2> }
            { category==="bags" && <h2>راسته کیف</h2> }
            
            <div className="categoryContainer">
            
            {error && <div>{error}</div>}
            {isPending && <div className="loading"> <img src='https://i.pinimg.com/originals/b4/4e/22/b44e229598a8bdb7f2f432f246fb0813.gif' alt="loading..."/> </div>}

            {commodities && commodities.map((commodity) => (<Commodity id={commodity.id} 
                name={commodity.name} picture={commodity.picture} key={commodity.id}/>))}
            </div>
            
        </div>
        
        
    );
}
 
export default SpecialCategory;