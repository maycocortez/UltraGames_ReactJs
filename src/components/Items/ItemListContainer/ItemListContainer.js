import './ItemListContainer.css'
import React, {useState, useEffect} from 'react';
import Title from '../../Title/Title';
import ItemList from '../ItemList/ItemList';
import { ItemCount } from '../ItemCount/ItemCount';
import { useParams } from 'react-router-dom';
import juegos from '../../../mocks/Array'



export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    const {juegosId} = useParams();
   

    useEffect(()=>{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(juegos);
            }, 500);
        });
        if(juegosId){
            getData.then(res => setData (res.filter(categoria => categoria.modo === juegosId)));
        }else {
            getData.then(res => setData (res));

        }
    }, [juegosId])



    return (    
        <>
            <Title greeting={texto} />
            <div className='box'>
            <ItemList data={data}/>
            </div>
        </>
    );
} 

export default ItemListContainer;