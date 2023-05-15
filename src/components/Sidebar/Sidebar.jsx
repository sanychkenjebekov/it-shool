import React from 'react';
import {AiOutlineExport, AiOutlineUser} from "react-icons/ai";
import {BsBasket2, BsCreditCard2Back, BsWallet2} from "react-icons/bs";
import {FaRegComment} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './style.css'
import user from "../../../../it-school/src/img/user.svg"

const Sidebar = ({children}) => {

    const menuItem=[
        {
            path:"/профиль",
            name:"Личное данное",
            icon:<AiOutlineExport />
        },
        {
            path:'/cards',
            name:"Платежные карты",
            icon:<AiOutlineUser />
        },
        {
            path:"/follows",
            name:"Подписки",
            icon:<BsBasket2/>
        },
        {
            path:"/comments",
            name:"Комментарии",
            icon:<BsCreditCard2Back/>
        },
        {
            path:"/mine",
            name:"Мои покупки",
            icon:<BsWallet2/>
        },
        {
            path:"#",
            name:"Выйти",
            icon:<FaRegComment/>
        }
    ]

    return (
        <div id='profile'>
            <div className="container">
                <div className="profile">
                    <h3 className="logo">Главная / Профиль / Личные данные</h3>
                    <div className="wrapper">
                        <div className="profile__saydBar">
                            <img src={user} alt=""/>
                            <button className='profile__saydBar--btn'>Добавить фото</button>
                            <div className="profile__saydBar--link">
                                {
                                    menuItem.map((item, index)=>(
                                        <NavLink to={item.path} key={index} className="link" activeClassName="active">
                                            <div className="icon">{item.icon}</div>
                                            <div className="link_text">{item.name}</div>
                                        </NavLink>
                                    ))
                                }
                            </div>
                        </div>
                        <main>{children}</main>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Sidebar;
