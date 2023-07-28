import {Navigate, Route, Routes} from "react-router-dom";
import Index from "./LoginPage";
import NotFound from "./NotFoundPage";

const App = () => {
    return (
        <Routes>
            <Route path={'*'} element={<NotFound />} />
            <Route path={'/'} element={<Navigate to="/login" replace />}/>

            <Route path={"/login"} element={<Index />} />
        </Routes>
    );
}

export default App;
