import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Dashboard from "../../../../it-school/src/pages/person/dashboard/Dashboard";
import Cards from "../../../../it-school/src/pages/person/Cards/Cards";
import Follows from "../../../../it-school/src/pages/person/follows/Follows";
import Comments from "../../../../it-school/src/pages/person/comments/Comments";
import Mine from "../../../../it-school/src/pages/person/mine/Mine";
import Exit from "../../../../it-school/src/pages/person/exit/Exit";

const AppAll = () => {
    return (
        <BrowserRouter>
            <Sidebar>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/cards" element={<Cards/>} />
                    <Route path="/follows" element={<Follows/>} />
                    <Route path="/comments" element={<Comments/>} />
                    <Route path="/mine" element={<Mine/>} />
                    <Route path="/exit" element={<Exit/>} />
                    <Route path="/register" element={<Exit/>} />
                </Routes>
            </Sidebar>

        </BrowserRouter>
    );
};

export default AppAll;