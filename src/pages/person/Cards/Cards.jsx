import React from 'react';
import {Link} from "react-router-dom";
import {AiOutlineExport, AiOutlineUser} from "react-icons/ai";
import {BsBasket2, BsCreditCard2Back, BsWallet2} from "react-icons/bs";
import {FaRegComment} from "react-icons/fa";
import './cards.scss'
import './media.scss'
import user from "../../../img/user.svg"

import Card from '../../../img/karta.svg'
import Wi from '../../../img/wi.svg'
import vis from '../../../img/vis.svg'

const Cards = () => {
    return (
        <div id='karty'>
            <div className="container">
                <div className="karty">
                    <div className="karty--saydBar">
                        <img src={user} alt=""/>
                        <button className='karty--saydBar__btn'>Добавить фото</button>
                        <div className="karty--saydBar__link">
                            <Link to={'/личныеДанные'}><AiOutlineUser/>Личные данные</Link>
                            <Link to={'/'}><BsWallet2/>Платежные карты</Link>
                            <Link to={'/'}><BsCreditCard2Back/>Подписки</Link>
                            <Link to={'/'}><FaRegComment/>Комментарии</Link>
                            <Link to={'/'}><BsBasket2/>Мои покупки</Link>
                            <Link to={'/'}><AiOutlineExport/>Выйти</Link>
                        </div>
                    </div>

                    <div className="karty--visul">
                        <div className="karty--visul__mouse">
                            <h1>Платежные карты</h1>
                        </div>
                        <div className="karty--visul__visa">

                            <div className="karty--visul__visa--block">
                                {/*<img src={visa} alt=""/>*/}
                                <h1>Visa Classic</h1>
                                <div>
                                    <img src={Card} alt=""/>
                                    <img className="karty--visul__visa--block__card" src={Wi} alt=""/>
                                </div>
                                <p>4000 1234 5678 9010</p>
                                <span>12/34</span>
                                <div>
                                    <img className="karty--visul__visa--block__img" src={vis} alt=""/>
                                </div>
                            </div>
                            <div className="karty--visul__visa--block">
                                {/*<img src={visa} alt=""/>*/}
                                <h1>Visa Classic</h1>
                                <div>
                                    <img src={Card} alt=""/>
                                    <img className="karty--visul__visa--block__card" src={Wi} alt=""/>
                                </div>
                                <p>4000 1234 5678 9010</p>
                                <span>12/34</span>
                                <div>
                                    <img className="karty--visul__visa--block__img" src={vis} alt=""/>
                                </div>
                            </div>
                        </div>

                        <div className="karty--visul__add">
                            <div className="karty--visul__add--text">
                                <h1>Добавить карту</h1>
                                <p>Добавьте свою карту, чтобы больше не тратить время на ввод данных вручну</p>
                                <div className="karty--visul__add--text__for">
                                    <button>Добавить карту</button>
                                    <p>Для проверки карты будет снята минимальная сумма в размере 1$.  Сумма будет <br/>
                                        возвращена вам а течении 48 часов</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cards;