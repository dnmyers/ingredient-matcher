import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import "./App.scss";
const App = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default App;