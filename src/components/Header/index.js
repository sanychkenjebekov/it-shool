import React from 'react';
import logo from '../../img/логотип.svg'
import {Link, NavLink} from "react-router-dom";
import {IoIosNotificationsOutline} from "react-icons/io";

const Header = () => {
    const spans =(e)=>{
        const p1 = document.querySelector('.p1')
        const p2 = document.querySelector('.p2')
        const p3 = document.querySelector('.p3')
        const burger = document.querySelector('.burger')

        if(!e.target.classList.contains('active')){
            e.target.classList.add('active')
           p1.style.transform = 'rotate(45deg)'
           p1.style.margin = '18px 0 0 0'
           p2.style.opacity = '0'
           p3.style.transform = 'rotate(-45deg)'
           p3.style.margin = '-16px 0 0 0'
            burger.style.display='block'
        }else {
            e.target.classList.remove('active')
            p1.style.transform = 'none'
            p1.style.margin = '5px 0'
            p2.style.opacity = '1'
            p3.style.transform = 'none'
            p3.style.margin = '5px 0'
            burger.style.display='none'
        }
    }

    return (
        <div id='header'>
            <div className="container">
                <div className="header">
                    <div className="header--logo">
                        <Link to={'/'}><img src={logo} alt=""/></Link>
                        <div className="header--logo__menu">
                            <NavLink to={'/оШколе'}>О школе</NavLink>
                            <NavLink to={'/нашиКурсы'}>Наши курсы</NavLink>
                            <NavLink to={'/оНас'}>О нас</NavLink>
                        </div>
                    </div>
                    <div className="header--podpis">
                        <NavLink to={'/войти'}>Войти</NavLink>
                        <NavLink to={'/подписаться '}><button>Подписаться</button></NavLink>
                    </div>
                    <div className="header--voitiAll">
                    <div className="header--voitiAll__voiti">
                        <NavLink to={'/уведомление'}><IoIosNotificationsOutline className='voitiIcon'/></NavLink>
                        <NavLink to={'/профиль'}><button>Профиль</button></NavLink>
                    </div>
                </div>
                </div>
                <div className="spans" onClick={spans}>
                    <p className='p1'></p>
                    <p className='p2'></p>
                    <p className='p3'></p>
                </div>
                <div className="burger">
                    <div className="burger--menu">
                        <NavLink to={'/оШколе'}>О школе</NavLink>
                        <NavLink to={'/нашиКурсы'}>Наши курсы</NavLink>
                        <NavLink to={'/оНас'}>О нас</NavLink>
                        <div className="burger--menu__podpisAll">
                        <div className="burger--menu__podpisAll--podpis">
                            <NavLink to={'/войти'}>Войти</NavLink>
                            <NavLink to={'/подписаться '}><button>Подписаться</button></NavLink>
                        </div>
                    </div>
                        <div className="burger--menu__voitiAll">
                        <div className="burger--menu__voitiAll--voiti">
                            <NavLink to={'/уведомление'}><IoIosNotificationsOutline className='voitiIcon'/></NavLink>
                            <NavLink to={'/профиль'}><button>Профиль</button></NavLink>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;