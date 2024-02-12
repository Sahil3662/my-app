
const Restaurantcard = ({url, Name, Rating, delivery, Cuisines , Loc})=>{


    return(
        <div className="custom-card">
            <div>
                <img src={url} alt="resimage"
                width="100%"
                style={{height:"150px",
                objectFit:"cover"}}/>
            </div>
            <p>{Name}</p>
            <div className="d-flex justify-content-between">
                <p>{Rating}/10</p>
                <p>{delivery} min</p>
            </div>
            <p>{Cuisines}</p>
            <p>{Loc}</p>
        </div>
    )
            
     
}

export default Restaurantcard;