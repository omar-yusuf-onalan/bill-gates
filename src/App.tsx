import "./App.css";
import MoneyBar from "./Component/MoneyBar/MoneyBar.tsx";
import Profile from "./Component/Profile/Profile.tsx";

function App() {
    return (
        <>
            <div className="app-container">
                <Profile></Profile>
                <MoneyBar></MoneyBar>
            </div>
        </>
    );
}

export default App;
