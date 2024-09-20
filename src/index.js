import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./main.js";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/*画面表示ファイル読み込み*/
import Top from "./components/Top";
import Header from "./components/Header.js";
import Test from "./components/Test.js";
import About from "./components/About.js";
import Skills from "./components/Skills.js";
import Works from "./components/Works.js";
import Footer from "./components/Footer.js";

import Sidebar from "./components/Sidebar.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Header />
        {/* <Top /> */}
        <Sidebar />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Top />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/works" element={<Works />} />
            </Routes>
        </BrowserRouter>
        <Test />
        {/* <About />
        <Skills />
        <Works />
        <Footer /> */}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
