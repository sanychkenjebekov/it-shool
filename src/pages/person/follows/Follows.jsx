import React from 'react';
import user from "../../../img/user.svg";
import {Link} from "react-router-dom";
import {AiOutlineCheck, AiOutlineExport, AiOutlineUser} from "react-icons/ai";
import {BsBasket2, BsCreditCard2Back, BsWallet2} from "react-icons/bs";
import {FaRegComment} from "react-icons/fa";
import "../follows/follows.scss"
import "../follows/media.scss"

const Follows = () => {
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
    const closeVyhod=()=>{
        const vyhod = document.querySelector('.vyhod')
        vyhod.style.display='none'
    }
    const foto=()=>{
        const users = document.querySelector('.users')
        const file = document.querySelector('.file')
        users.src = URL.createObjectURL(file.files[0])
    }
    return (
        <div id='follows'>
            <div className="container">
                <input onChange={foto} className='file' type="file" style={{position:'absolute',margin:'154px 0 0 24px',opacity:'0'}}/>
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
                            <div className="follows--saydBar__link">
                                <Link to={'/личныеДанные'}><AiOutlineUser/>Личные данные</Link>
                                <Link to={'/cards'}><BsWallet2/>Платежные карты</Link>
                                <Link style={{color:'rgb(0 58 250)'}} to={'/follows'}><BsCreditCard2Back/>Подписки</Link>
                                <Link to={'/comments'}><FaRegComment/>Комментарии</Link>
                                <Link to={'#'}><BsBasket2/>Мои покупки</Link>
                                <Link to={'#'} onClick={vyhod}><AiOutlineExport/>Выйти</Link></div>
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

export default Follows;