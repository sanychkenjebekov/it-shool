import React from 'react';
import {AiOutlineCheck} from "react-icons/ai";
import {Link} from "react-router-dom";
import "./style.scss"

const Podpisatsa = () => {
    return (
        <div id='podpisatsa'>
            <div className="container">
                <div className="podpisatsa">
                    <p>Главная / <span>Пакет участия</span></p>
                    <div className="podpisatsa--about">
                        <h1 className='h1'>Выберите свой пакет участия</h1>
                        <div className="podpisatsa--about__cards">
                            <div className="podpisatsa--about__cards--card">
                                <h6>Месяц +</h6>
                                <h1>105,00 $</h1>
                                <p>Ежемесячно</p>
                                <h4><AiOutlineCheck className='like'/>Все статьи</h4>
                                <Link to={'/подпискаМесяцPlus'}><button className='cardBtn1'>Оформить подписку</button></Link>
                            </div>
                            <div className="podpisatsa--about__cards--card">
                                <h6>Год</h6>
                                <h1>220,00 $</h1>
                                <p>Ежегодно</p>
                                <h4><AiOutlineCheck className='like'/>Все статьи</h4>
                                <h4><AiOutlineCheck className='like'/>Все мастер классы</h4>
                                <Link to={'/подпискаГод'}><button className='cardBtn2'>Оформить подписку</button></Link>
                            </div>
                            <div className="podpisatsa--about__cards--card">
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
                    <p className='p'>Списания будут автоматическими. Вы всегда можете отменить подписку в Вашем личном
                        кабинете и больше списаний не будет</p>
                    <div className="podpisatsa--zayavka">
                        <div className="podpisatsa--zayavka__title">
                            <h1>Оставить заявку</h1>
                            <p>Заполните краткий бриф с ключевым вопросами, и мы подготовимся к разговору с вами </p>
                        </div>
                        <form><div className="podpisatsa--zayavka__input">
                            <input required placeholder='ФИО*' type="text" name='name'/>
                            <input required placeholder='Номер телефон*' type="number"/>
                            <input required placeholder='Email*' type="email" name={'email'}/>
                            <button type='submit'>Отправить</button>
                        </div></form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Podpisatsa;