import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./main.js";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/*画面表示ファイル読み込み*/
import Top from "./components/Top";
import Header from "./components/Header.js";
import About from "./components/About.js";
import Skills from "./components/Skills.js";
import Works from "./components/Works.js";
import Footer from "./components/Footer.js";

import Sidebar from "./components/Sidebar.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
const APP_NAME = "react-portfolio";
root.render(
    <React.StrictMode>
        <Header />
        <Sidebar />
        <div id="main-content">
            <BrowserRouter>
                <Routes>
                    <Route path={APP_NAME + "/"} element={<Top />} />
                    <Route path={APP_NAME + "/about"} element={<About />} />
                    <Route path={APP_NAME + "/skills"} element={<Skills />} />
                    <Route path={APP_NAME + "/works"} element={<Works />} />
                </Routes>
            </BrowserRouter>
        </div>
        <Footer />
    </React.StrictMode>
);

reportWebVitals();
