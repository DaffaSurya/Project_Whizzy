import React from "react";
import { Routes, Route , Router} from 'react-router-dom'

import About from "../Pages/About";
import Text from "../Pages/Text";
import Profile from "../Pages/Profile";
import Favorit from "../Pages/Favorit";

const Index = () => {
    return ( 
        // <Router>
        <div>
            <Routes>
                <Route path="/" element={<Text />}/>
                {/* <Route path="/about" element={<About />}/> */}
                <Route path="/profile" element={<Profile />}/>
                <Route path="/Favorit" element={<Favorit />}/>
            </Routes>
        </div>
    )
}

export default Index;