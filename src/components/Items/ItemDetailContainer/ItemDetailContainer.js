import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import juegos from "../../../mocks/Array";


  



export const ItemDetailContainer = () => {

    const [data, setData] = useState({});
    const {detalleId} = useParams();
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(juegos);
            }, 500)
        });
        getData.then(res => setData(res.find(juego => juego.id === parseInt(detalleId))));
    },[detalleId]);

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;