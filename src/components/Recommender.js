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
            {isPending && <div className="container"> Loading... </div>}
            {commodities && rec && 
                <div className="outDiv">
                    <h2>محصولات مرتبط</h2>
                    <div className="recommenderDiv">
                        <Commodity id={rec[0].id} name={rec[0].name} key={rec[0].id}/>
                        <Commodity id={rec[1].id} name={rec[1].name} key={rec[1].id}/>
                        <Commodity id={rec[2].id} name={rec[2].name} key={rec[2].id}/>
                        <Commodity id={rec[3].id} name={rec[3].name} key={rec[3].id}/>
                    </div>
                </div>
                
            }
        </div>
     );
}
 
export default Recommender;