import {Route, Routes} from "react-router-dom";
import Index from "./LoginPage";

const App = () => {

    return (
        <Routes>
            <Route path={"/"} component={Index} />
        </Routes>
    );
}

export default App;
