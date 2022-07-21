import './styles/ItemListContainer.css'
import React, {useState, useEffect} from 'react';
import Title from './Title';
import { ItemCount } from './ItemCount';
import ItemList from './ItemList';
import juego01 from "./images/juego1.jpg";
import juego02 from "./images/juego2.jpg";
import juego03 from "./images/juego3.jpg";
import juego04 from "./images/juego4.jpg";
import juego05 from "./images/juego5.jpg";
import juego06 from "./images/juego6.jpg";
import juego07 from "./images/juego7.jpg";
import juego08 from "./images/juego8.jpg";



const juegos = [
    {
        id:1,
        image: juego01,
        title: "Resident Evil 7 - Biohazard",
    },
    {
        id:2,
        image: juego02,
        title: "Doom Eternal",
    },
    {
        id:3,
        image: juego03,
        title: "Age Of Empires IV",
    },
    {
        id:4,
        image: juego04,
        title: "Assasin creed - Valhalla",
    },
    {
        id:5,
        image: juego05,
        title: "Age of Mithology - Extended Version",
    },
    {
        id:6,
        image: juego06,
        title: "The Sims 4",
    },
    {
        id:7,
        image: juego07,
        title: "Sonic Generations",
    },
    {
        id:8,
        image: juego08,
        title: "God of War"
    }
];

export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(juegos);
            }, 2000);
        });
        getData.then(res => setData (res));
    }, [])

    const onAdd = (unidades) => {
        console.log (`Compraste ${unidades} unidades`);
    }

    return (    
        <>
            <Title greeting={texto} />
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
            <div className='box'>
            <ItemList data={data}/>
            </div>
        </>
    );
} 

export default ItemListContainer;