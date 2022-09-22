import React from "react";
import "./style.scss"

const Rating = ({rating}) => {
    return(
        <div className="star-rating">
            {[...Array(rating)].map((star) => {
                return(
                    <span className="star" key={star} >&#9733;</span>
                )
            })}
        </div>
    )
}

const Flavor = ({flavor}) => {
    return(
        <div className="flavor">
            <img className="flavor_img" src={`/images/${flavor.image}`} alt="" />
            <div className="flavor-info">
                <h4>{flavor.name}</h4>              
            </div>
            <div className="stars">
                <Rating rating={flavor.rating} />
            </div>  

        </div>
    )
}

export default Flavor