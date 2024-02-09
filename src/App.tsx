import "./App.css";
import ItemContainer from "./Component/ItemContainer/ItemContainer.tsx";
import MoneyBar from "./Component/MoneyBar/MoneyBar.tsx";
import Profile from "./Component/Profile/Profile.tsx";

function App() {
    return (
        <>
            <div className="app-container">
                <Profile></Profile>
                <MoneyBar></MoneyBar>
                <ItemContainer></ItemContainer>
            </div>
        </>
    );
}

export default App;
