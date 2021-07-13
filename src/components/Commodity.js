import "../static/commodity.scss";

const Commodity = ({id , name}) => {
    console.log(id)
    return ( 
        <div className="commodityCard">
            <img src={'/images/'+id+'.jpg'} alt="Store" />
            <h3>{name}</h3>
        </div>
     );
}
 
export default Commodity;