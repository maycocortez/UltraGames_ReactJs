import './ItemListContainer.css'
import React, {useState, useEffect} from 'react';
import Title from '../../Title/Title';
import ItemList from '../ItemList/ItemList';
import { ItemCount } from '../ItemCount/ItemCount';
import { useParams } from 'react-router-dom';


import juego01 from "../../images/juego1.jpg";
import juego02 from "../../images/juego2.jpg";
import juego03 from "../../images/juego3.jpg";
import juego04 from "../../images/juego4.jpg";
import juego05 from "../../images/juego5.jpg";
import juego06 from "../../images/juego6.jpg";
import juego07 from "../../images/juego7.jpg";
import juego08 from "../../images/juego8.jpg";




const juegos = [
    {
        id:1,
        image: juego01,
        title: "Resident Evil 7 - Biohazard",
        modo:"online",
    },
    {
        id:2,
        image: juego02,
        title: "Doom Eternal",
        modo:"online",
    },
    {
        id:3,
        image: juego03,
        title: "Age Of Empires IV",
        modo:"online",
    },
    {
        id:4,
        image: juego04,
        title: "Assasin creed - Valhalla",
        modo:"offline",
    },
    {
        id:5,
        image: juego05,
        title: "Age of Mithology - Extended Version",
        modo:"online",
    },
    {
        id:6,
        image: juego06,
        title: "The Sims 4",
        modo:"offline",
    },
    {
        id:7,
        image: juego07,
        title: "Sonic Generations",
        modo:"offline",
    },
    {
        id:8,
        image: juego08,
        title: "God of War",
        modo:"offline",
    }
];

export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    const {juegosId} = useParams();

    useEffect(()=>{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(juegos);
            }, 2000);
        });
        if(juegosId){
            getData.then(res => setData (res.filter(offline => offline.modo === juegosId)));
        }else {
            getData.then(res => setData (res));

        }
    }, [juegosId])

    const onAdd = (unidades) => {
        console.log (`Compraste ${unidades} unidades`);
    }

    return (    
        <>
            <Title greeting={texto} />
            
            <div className='box'>
            <ItemList data={data}/>
            </div>
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </>
    );
} 

export default ItemListContainer;