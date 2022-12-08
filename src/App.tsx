import {Navigate, Route, Routes} from "react-router-dom";
import {ProductsPage} from "./pages/ProductsPage";
import {About} from "./pages/About";
import {Navigation} from "./components/Navigation";
import {RegisterForm} from "./pages/Register";
import {Login} from "./pages/Login"

function App() {
    return (
        <>
            <Navigation />
        <Routes>
            <Route path="/" element={ <ProductsPage />}/>
            <Route path="/about" element={ <About />}/>
            <Route path="/register" element={ <RegisterForm /> }/>
            <Route path="/login" element={ <Login /> }/>


        </Routes>
        </>
    )
}

export default App;
