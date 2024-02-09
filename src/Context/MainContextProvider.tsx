import MoneyContext from '../Context/MoneyContext'
import ReceiptContext from './ReceiptContext';
import { useState } from "react"

function MainContextProvider({ children }) { 
    const [currentMoney, setCurrentMoney] = useState(100000000000);

    const data = {
        currentMoney,
        setCurrentMoney
    }

    return (
        <MoneyContext.Provider value={data}>
            <ReceiptContext.Provider value={[]}>
                {children}
            </ReceiptContext.Provider>
        </MoneyContext.Provider>
    )
}

export default MainContextProvider;