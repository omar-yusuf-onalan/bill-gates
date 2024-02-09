import "./SellButton.style.css";
import data from "../../Data/Items";
import { useContext } from "react";
import MoneyContext from "../../Context/MoneyContext";
import InputContext from "../../Context/InputContext";

interface Prop {
    itemId: string;
}

function SellButton(prop: Prop) {
    const { currentMoney, setCurrentMoney } = useContext(MoneyContext);
    const { input, setInput } = useContext(InputContext);

    const getItem = () => {
        return data.find((obj) => obj.id === prop.itemId);
    };

    const sell = () => {
        if (getItem().bought < input) return;

        setCurrentMoney(currentMoney + getItem().price * Number(input));

        getItem().bought -= Number(input);
        console.log(getItem());
    };

    return (
        <>
            <button onClick={sell}>Sell</button>
        </>
    );
}

export default SellButton;
