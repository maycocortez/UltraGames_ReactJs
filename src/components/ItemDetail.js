import { data } from "autoprefixer";
import React from "react";
import './styles/ItemDetail.css'

export const ItemDetail = ({data}) => {
    return (
        <div className="container">
            <div className="detail">
                <img className="detail_image" src={data.image} alt="" />
                <div className="content">
                    <h1>{data.title}</h1>
                    <p><strong>Descripcion: </strong>{data.detalle}</p>
                    <p>- <strong>Género: </strong>{data.genero}</p>
                    <p>- <strong>Desarollador: </strong>{data.desarrollador}</p>
                    <p>- <strong>lanzamiento: </strong>{data.lanzamiento}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;