import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Links from "./components/Links";
import React from "react";

const App = () => {
    return (
        <div>
            <NavBar />
            <Links />
            <MainContent />
            <Footer />
        </div>
    );
};

export default App;
