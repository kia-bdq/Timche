import "../static/specialCategory.scss";
import { useParams } from "react-router-dom";
import Commodity from "./Commodity";
import useFetch from "../components/useFetch";


const SpecialCategory = () => {
    const { category } = useParams();
    const {data: commodities , isPending, error} = useFetch('https://my-json-server.typicode.com/kia-bdq/fake-server/commodity?category='+category);
    
    return ( 
        <div className="main">
            { category==="clothing" && <h2>راسته پوشاک</h2> }
            { category==="shoes" && <h2>راسته کفش</h2> }
            { category==="bags" && <h2>راسته کیف</h2> }

            {error && <div>{error}</div>}
            {isPending && 
                <div className="loading"> 
                    <img src={`${process.env.PUBLIC_URL}/assets/images/loading.gif`} alt="loading..."/> 
                </div>
            }
            
            <div className="categoryContainer">
            {commodities && commodities.map((commodity) => (<Commodity commodity={commodity} />))}
            </div>
            
        </div>
        
        
    );
}
 
export default SpecialCategory;