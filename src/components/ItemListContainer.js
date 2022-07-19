import './styles/ItemListContainer.css'
import React from 'react';
import Title from './Title';
import { ItemCount } from './ItemCount';

export const ItemListContainer = ({texto}) => {
    const onAdd = (unidades) => {
        console.log (`Compraste ${unidades} unidades`);
    }

    return (    
        <>
            <Title greeting={texto} />
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </>
    );
} 

export default ItemListContainer;