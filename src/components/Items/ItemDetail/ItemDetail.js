import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'


export const ItemDetail = ({data}) => {
    const onAdd = (unidades) => {
        console.log (`Compraste ${unidades} unidades`);
    }
    return (
        <div className="container">
            <div className="detail box2">
                <img className="detail_image" src={data.image} alt="" />
                <div className="content">
                    <h1>{data.title}</h1>
                    <p><strong>Descripcion: </strong>{data.detalle}</p>
                    <p>- <strong>Género: </strong>{data.genero}</p>
                    <p>- <strong>Desarollador: </strong>{data.desarrollador}</p>
                    <p>- <strong>lanzamiento: </strong>{data.lanzamiento}</p>
                    <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;