import "./styles/Item.css"
import React from "react";

const Item = ({info}) => {
    return (
        <div className="box">
        <a href="_blank" className="juego">
            <img src={info.image} alt=""/>
            <p>{info.title}</p>
        </a>
        </div>
    )
}

export default Item;