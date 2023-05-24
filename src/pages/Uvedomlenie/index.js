import React, {useContext} from 'react';
import {BsCreditCard} from "react-icons/bs";
import {LoginContext} from "../../Context";

const Uvedomlenie = () => {
    const {notification} = useContext(LoginContext)
    return (
        <div id='uvedomlenie'>
            <div className="container">
                <div className="uvedomlenie">
                    <p>Главная / <span>Уведомлении</span></p>
                    <h1>Уведомлении</h1>
                    <center><div className="uvedomlenie--card">
                        <h4><BsCreditCard className='cart'/>{notification}</h4>
                    </div></center>
                </div>
            </div>
        </div>
    );
};

export default Uvedomlenie;