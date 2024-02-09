import './Item.style.css'
import ActionButton from '../ActionButton/ActionButton'
import ItemQuantityInput from '../ItemQuantityInput/ItemQuantityInput';

interface Prop {
    id: string;
    img: string;
    name: string;
    price: number;
}

function Item(prop: Prop) {
    return (
        <>
            <div className='container'>
                <div className='item-description'>
                    <img src={prop.img} alt={prop.name}/>
                    <h2>{prop.name}</h2>
                    <h4>{prop.price}</h4>
                </div>

                <div className='buy-sell'>
                    <ActionButton buttonName={'Sell'}></ActionButton>
                    <ItemQuantityInput></ItemQuantityInput>
                    <ActionButton buttonName={'Buy'}></ActionButton>
                </div>
            </div>
        </>
    );
}

export default Item;