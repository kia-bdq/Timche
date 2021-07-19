import Commodity from "./Commodity";
import useFetch from "./useFetch";
import "../static/recommender.scss";

const Recommender = ({category, id}) => {

    const {data: commodities , isPending, error} = useFetch('https://my-json-server.typicode.com/kia-bdq/fake-server/commodity?category='+category+'&id_ne='+id);
    var rec = [];

    if(commodities){
        while(rec.length < 4){
            var c = Math.floor(Math.random() * commodities.length);
            if(!rec.includes(commodities[c])){
                rec = [...rec, commodities[c]];
            }
        }
    }
    
    return ( 
        <div>
            {error && <div className="container">{error}</div>}

            {isPending && 
                <div className="loading"> 
                    <img src={`${process.env.PUBLIC_URL}/assets/images/loading.gif`} alt="loading..."/> 
                </div>
            }   

            {commodities && rec && 
                <div className="outDiv">
                    <h2>محصولات مرتبط</h2>
                    <div className="recommenderDiv">
                        <Commodity commodity={rec[0]}/>
                        <Commodity commodity={rec[1]}/>
                        <Commodity commodity={rec[2]}/>
                        <Commodity commodity={rec[3]}/>
                    </div>
                </div>
            }
        </div>
     );
}
 
export default Recommender;