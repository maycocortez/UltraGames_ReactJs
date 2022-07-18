import './ItemListContainer.css'

const ItemListContainer = (props) => {
    return (
        <>
        {props.yoSoyUnaProps.map(item => {
            return (
                <div>
                    {item}
                </div>
            )
        })}
        </>
    )
}

export default ItemListContainer;