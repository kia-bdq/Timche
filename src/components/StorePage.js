import useFetch from "./useFetch";
import { useParams } from "react-router";
import Commodity from "./Commodity";
import "../static/storePage.scss";

const StorePage = () => {
    const {id} = useParams();
    const {data: store , isPending, error} = useFetch('https://my-json-server.typicode.com/kia-bdq/fake-server/stores/' + id);
    const {data: commodities , isPending2, error2} = useFetch('https://my-json-server.typicode.com/kia-bdq/fake-server/commodity?storeId=' + id);

    return ( 
        <div>
            {error && <div className="container">{error}</div>}
            {isPending && <div className="container"> Loading... </div>}

            {store && 
                <div>
                    <div className="storeHeader">
                        <img src={store.picture} alt={store.name} />
                    </div>

                    <div className="commodityContainer">
            
                        {error2 && <div>{error2}</div>}
                        {isPending2 && <div> Loading... </div>}

                        {commodities && commodities.map((commodity) => (<Commodity id={commodity.id}
                             name={commodity.name} picture={commodity.picture} key={commodity.id}/>))}
                    </div>
                </div>
            }
        </div>
     );
}
 
export default StorePage;