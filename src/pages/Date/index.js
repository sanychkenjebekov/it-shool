import React from 'react';
import {Route, Routes} from "react-router-dom";
import Dashboard from "../person/dashboard/Dashboard";
import Cards from "../person/Cards/Cards";
import Follows from "../person/follows/Follows";
import Comments from "../person/comments/Comments";
import Mine from "../person/mine/Mine";
import Exit from "../person/exit/Exit";
import Sidebar from "../../components/Sidebar/Sidebar";

const Date = () => {
    return (
            <Sidebar>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path={'/cards'} element={<Cards/>}/>
                    <Route path="/follows" element={<Follows/>} />
                    <Route path="/comments" element={<Comments/>} />
                    <Route path="/mine" element={<Mine/>} />
                    <Route path="/exit" element={<Exit/>} />
                </Routes>
            </Sidebar>
    );
};

export default Date;