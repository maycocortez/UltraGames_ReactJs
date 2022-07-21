import './styles/ItemListContainer.css'
import React, {useState, useEffect} from 'react';
import Title from './Title';
import { ItemCount } from './ItemCount';
import ItemList from './ItemList';



const juegos = [
    {
        id:1,
        image: "/src/components/images/juego1.jpg",
        title: "Resident Evil 7 - Biohazard",
    },
    {
        id:2,
        image: "C:/Users/diego/Desktop/34680/UltraGames-Tienda-Deorazio/src/components/images/juego2.jpg",
        title: "Doom Eternal",
    },
    {
        id:3,
        image: "C:/Users/diego/Desktop/34680/UltraGames-Tienda-Deorazio/src/components/images/juego3.jpg",
        title: "Age Of Empires IV",
    },
    {
        id:4,
        image: "C:/Users/diego/Desktop/34680/UltraGames-Tienda-Deorazio/src/components/images/juego4.jpg",
        title: "Assasin creed - Valhalla",
    },
    {
        id:5,
        image: "C:/Users/diego/Desktop/34680/UltraGames-Tienda-Deorazio/src/components/images/juego5.jpg",
        title: "Age of Mithology - Extended Version",
    },
    {
        id:6,
        image: "C:/Users/diego/Desktop/34680/UltraGames-Tienda-Deorazio/src/components/images/juego6.jpg",
        title: "The Sims 4",
    },
    {
        id:7,
        image: "C:/Users/diego/Desktop/34680/UltraGames-Tienda-Deorazio/src/components/images/juego7.jpg",
        title: "Sonic Generations",
    },
    {
        id:8,
        image: "C:/Users/diego/Desktop/34680/UltraGames-Tienda-Deorazio/src/components/images/juego8.jpg",
        title: "God of War"
    }
];
console.log(juegos[0].image)

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
            <ItemList data={data}/>
        </>
    );
} 

export default ItemListContainer;