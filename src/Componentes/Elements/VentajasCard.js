import React from "react";
import "../Css/VentajasCard.css";

const VentajasCard = (props) => {
    const {title, img, description}= props;
    return(
        <div className="card">
            <div className="cardImg" style={{ backgroundImage: `url(${img})` }}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default VentajasCard;