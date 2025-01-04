import React from "react";
import { Routes, Route } from 'react-router-dom'

import About from "../Pages/About";
import Text from "../Pages/text";

const Index = () => {
    return ( 
        <div>
            <Routes>
                <Route path="/" element={<Text />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
        </div>
    )
}