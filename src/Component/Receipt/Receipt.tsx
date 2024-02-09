import MoneyContext from "../../Context/MoneyContext";
import "./Receipt.style.css";
import { useContext } from "react";

function Receipt() {
    const { newData } = useContext(MoneyContext);

    return (
        <>
            {newData.filter((obj) => obj.bought !== 0).length > 0 ? (
                <h2>YOUR RECEIPT</h2>
            ) : (
                ""
            )}
            {newData
                .filter((obj) => obj.bought !== 0)
                .map((item) => {
                    return (
                        <div className="container">
                            <div>
                                <div>{item.name}</div>
                                <div>
                                    <div>x{item.bought}</div>
                                    <div>${item.price}</div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    );
                })}
        </>
    );
}

export default Receipt;
