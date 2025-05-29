import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/Home/Home.tsx";
import { About } from "../../pages/About/About.tsx";
import { Contact } from "../../pages/Contact/Contact.tsx";
import * as React from "react";

export function MainContent() {
    return (
        <div className="bg-[#dad7cb] text-center min-h-[55vh] px-10 py-16 mx-auto">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
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
