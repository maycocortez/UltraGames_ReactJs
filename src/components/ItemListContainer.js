import './styles/ItemListContainer.css'
import React from 'react';
import Title from './Title';
import { ItemCount } from './ItemCount';

export const ItemListContainer = ({texto}) => {
    const onAdd = (unidades) => {
        console.log (`Compraste ${unidades} unidades`);
        document.querySelector('.compraste').innerHTML = `Has comprado ${unidades} unidades`
    }

    return (    
        <>
            <Title greeting={texto} />
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
            <p className='compraste'></p>
        </>
    );
} 

export default ItemListContainer;