import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/Home/Home.tsx";
import { About } from "../../pages/About/About.tsx";
import { Contact } from "../../pages/Contact/Contact.tsx";
// import * as React from "react";
import {ShoppingCart} from "../../pages/ShoppingCart/ShoppingCart.tsx";
// import {itemList} from "../ModifyCart/ModifyCart.tsx";

export function MainContent() {
    return (
        <div className="flex justify-center items-center min-h-screen ">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/shopping-cart" element={<ShoppingCart/>} />
            </Routes>
        </div>
    );
}

/*
import './MainContent.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home.tsx";
import * as React from "react";
import {About} from "../../pages/About/About.tsx";
import {Contact} from "../../pages/Contact/Contact.tsx";
export function MainContent() {
    return (
        <div className="main-content">
           <Routes>
               <Route path="/" element={<Home />}/>
               <Route path="/about" element={<About />}/>
               <Route path="/contact" element={<Contact />}/>
           </Routes>
        </div>
    );
}*/
