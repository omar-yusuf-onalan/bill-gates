import './ActionButton.style.css'

interface Prop {
    buttonName: string;
}

function ActionButton(prop: Prop) {
    return (
        <>
           <button>{prop.buttonName}</button> 
        </>
    );
}

export default ActionButton;