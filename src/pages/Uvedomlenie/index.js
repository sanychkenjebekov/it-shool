import React from 'react';
import {BsCreditCard} from "react-icons/bs";

const Uvedomlenie = () => {
    return (
        <div id='uvedomlenie'>
            <div className="container">
                <div className="uvedomlenie">
                    <p>Главная / <span>Уведомлении</span></p>
                    <h1>Уведомлении</h1>
                    <center><div className="uvedomlenie--card">
                        <h4><BsCreditCard className='cart'/>У вас ещё нету уведомлении !</h4>
                    </div></center>
                </div>
            </div>
        </div>
    );
};

export default Uvedomlenie;