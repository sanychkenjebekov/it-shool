import React from 'react';
import user from "../../../img/user.svg";
import {Link} from "react-router-dom";
import {AiOutlineCheck, AiOutlineExport, AiOutlineUser} from "react-icons/ai";
import {BsBasket2, BsCreditCard2Back, BsWallet2} from "react-icons/bs";
import {FaRegComment} from "react-icons/fa";
import "../follows/follows.scss"
import "../follows/media.scss"

const Follows = () => {
    return (
        <div id='follows'>
            <div className="container">
                <div className="follows">
                    <div className="follows--text">
                        <a className='follows--text__color' href="#">Главная / </a>
                        <a href="#">Профиль /</a>
                        <a href="#"> Подписки</a>
                    </div>
                    <div className='follows--every'>
                        <div className="follows--saydBar">
                            <img src={user} alt=""/>
                            <button className='follows--saydBar__btn'>Добавить фото</button>
                            <div className="follows--saydBar__link"><Link to={'/личныеДанные'}><AiOutlineUser/>Личные
                                данные</Link>
                                <Link to={'/'}><BsWallet2/>Платежные карты</Link> <Link to={'/'}><BsCreditCard2Back/>Подписки</Link>
                                <Link to={'/'}><FaRegComment/>Комментарии</Link> <Link to={'/'}><BsBasket2/>Мои
                                    покупки</Link>
                                <Link to={'/'}><AiOutlineExport/>Выйти</Link></div>
                        </div>

                        <div className="follows--every__right">
                            <div className='follows--every__one'><h1>Подписки</h1></div>

                            <div className='follows--every__status'>
                                <div className='follows--every__status--card'>
                                    <h2>Тариф:</h2>
                                    <h2>Статус :</h2>
                                    <h2>Сумма :</h2>
                                    <h2>Карта :</h2>
                                    <h2>Действует до :</h2>
                                </div>
                                <div className='follows--every__status--card'>
                                    <h2>Год </h2>
                                    <h2>Начальная</h2>
                                    <h2>220.00 $</h2>
                                    <h2>5106 21 ХХ ХХХХ 4186</h2>
                                    <h2>30 . 09.  2022 г</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='follows--big'>
                        <div className='follows--big__about--plus'>
                            <h3>Другие тарифы</h3>
                        </div>
                        <div className='follows--big__about'>
                            <div className="follows--big__about--cards">
                                <h6>Месяц +</h6>
                                <h1>105,00 $</h1>
                                <p>Ежемесячно</p>
                                <h4><AiOutlineCheck className='like'/>Все статьи</h4>
                                <Link to={'/подпискаМесяцPlus'}><button className='cardBtn1'>Оформить подписку</button></Link>
                            </div>
                            <div className="follows--big__about--cards">
                                <h6>Год +</h6>
                                <h1>585,00 $</h1>
                                <p>Ежегодно</p>
                                <h4><AiOutlineCheck className='like'/>Все статьи</h4>
                                <h4><AiOutlineCheck className='like'/>Все мастер классы</h4>
                                <h4><AiOutlineCheck className='like'/>6 новых статей каждый месяц</h4>
                                <h4><AiOutlineCheck className='like'/>Доступ к курсу “DevOps - инженер”</h4>

                                <Link to={'/подпискаГодPlus'}><button className='cardBtn3'>Оформить подписку</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Follows;