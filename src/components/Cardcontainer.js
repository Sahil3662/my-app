import Restaurantcard from "./Restaurantcard";
import data from "../utils/config";

const Cardcontainer = ()=>{
    const {imgURL,name,rating,deliveryTime,cuisines,location}=data[0];
    return(
        <div className="container d-flex justify-content-between flex-wrap mt-4">
            <Restaurantcard url={imgURL} Name={name} Rating={rating} delivery={deliveryTime} Cuisines={cuisines} Loc={location}/>
            <Restaurantcard url={imgURL} Name={name} Rating={rating} delivery={deliveryTime} Cuisines={cuisines} Loc={location}/>
            <Restaurantcard url={imgURL} Name={name} Rating={rating} delivery={deliveryTime} Cuisines={cuisines} Loc={location}/>
            <Restaurantcard url={imgURL} Name={name} Rating={rating} delivery={deliveryTime} Cuisines={cuisines} Loc={location}/>
            <Restaurantcard url={imgURL} Name={name} Rating={rating} delivery={deliveryTime} Cuisines={cuisines} Loc={location}/>
        </div>

 
        
    )
            
    
}

export default Cardcontainer;
