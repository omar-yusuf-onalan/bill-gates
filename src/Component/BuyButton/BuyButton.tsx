import './BuyButton.style.css'
import data from '../../Data/Items'
import { useContext } from 'react';
import MoneyContext from '../../Context/MoneyContext';
import InputContext from '../../Context/InputContext';

interface Prop {
    itemId: string;
}

function BuyButton(prop: Prop) {
    const { currentMoney, setCurrentMoney } = useContext(MoneyContext);
    const { input, setInput } = useContext(InputContext);

    const getItem = () => {
        return data.find(obj => obj.id === prop.itemId);
    }

    const buy = () => {
        if(input <= 0 || input === null) return;

        if(getItem().price * Number(input) > currentMoney) return;
        
        setCurrentMoney(currentMoney - getItem().price * Number(input))

        getItem().bought += Number(input);
        console.log(getItem())
    }
    
    return (
        <>
           <button onClick={buy}>Buy</button> 
        </>
    );
}

export default BuyButton;