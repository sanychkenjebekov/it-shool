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
    const vyhod=()=>{
        const vyhod = document.querySelector('.vyhod')
        vyhod.style.display='block'
    }
    const home=()=>{
        const profil2 = document.querySelector('.burger--menu__voitiAll')
        const voiti2 = document.querySelector('.burger--menu__podpisAll')
        const voiti = document.querySelector('.header--podpis')
        const profil = document.querySelector('.header--voitiAll')
        profil2.style.display='none'
        profil.style.display='none'
        voiti2.style.display='block'
        voiti.style.display='block'
    }
    const foto=()=>{
        const users = document.querySelector('.users')
        const file = document.querySelector('.file')
        users.src = URL.createObjectURL(file.files[0])
    }
    const closeVyhod=()=>{
        const vyhod = document.querySelector('.vyhod')
        vyhod.style.display='none'
    }
    return (
        <div id='karty'>
            <div className="container">
                <input onChange={foto} className='file' type="file" style={{position:'absolute',margin:'154px 0 0 24px',opacity:'0'}}/>
                <div className="karty">
                    <div className="karty--saydBar">
                        <img src={user} alt=""/>
                        <button className='karty--saydBar__btn'>Добавить фото</button>
                        <div className="karty--saydBar__link">
                            <Link to={'/личныеДанные'}><AiOutlineUser/>Личные данные</Link>
                            <Link style={{color:'rgb(0 58 250)'}} to={'/cards'}><BsWallet2/>Платежные карты</Link>
                            <Link to={'/follows'}><BsCreditCard2Back/>Подписки</Link>
                            <Link to={'/comments'}><FaRegComment/>Комментарии</Link>
                            <Link to={'/mine'}><BsBasket2/>Мои покупки</Link>
                            <Link to={'#'} onClick={vyhod}><AiOutlineExport/>Выйти</Link>
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
            <div className="vyhod" style={{position:'absolute',left:'12.5%',top:'74%',textAlign:'center',color:'white',background:'rgb(11 22 57)',padding:'30px 76px',borderRadius:'10px',display:'none'}}>
                <h3 style={{fontSize:'15px',width:'170px',padding:'0 0 17px 0',fontWeight:'500'}}>Действительно хотите выйти или нет?</h3>
                <div className="vyhod--btn">
                    <Link onClick={home} to={'/'} ><button style={{background:'#044076',color:'white',padding:'10px 35px',borderRadius:'10px',margin:'0 20px 0 0'}}>Да</button></Link>
                    <button onClick={closeVyhod} style={{background:'#044076',color:'white',padding:'10px 35px',borderRadius:'10px'}}>Нет</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;