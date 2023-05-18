import React from 'react';
import ".//style.scss"
import Master from "../master";
import "../media.scss"
import Example from "../exemple";
import Late from "../Late";
import Process from "../Process";
import {Link} from "react-router-dom";

const JavaRu = () => {
    return (
        <>
            <div id="java">
                <div className="container">
                    <div className="java">
                        <div className='java--bold'>
                            <a href="#">Главная</a>
                            <a href="#">/ Мастер классы</a>
                            <a href="#">/ Реактивное программирование на Java</a>
                        </div>
                        <div className="java--chat">
                            <div className="java--chat__left">
                                <h2>Реактивное программирование на Java : как, зачем и стоит ли? Часть 1 </h2>
                                <p>Идея реактивного программирования появилась сравнительно недавно, лет 10 назад.
                                    Что вызвало популярность этого относительно нового подхода и почему сейчас он
                                    в тренде, рассказал на конференции </p>
                                <Link to={'/reactiv/details'}><button>Купить мастер-класс за 46$</button></Link>
                            </div>
                            <div className='java--chat__right'>
                                <div className='java--chat__right--month'>
                                    <p>Доступ: </p>
                                    <h4>6 недель</h4>
                                </div>
                                <div className="java--chat__right--month">
                                    <p>В мастер-класс входит: </p>
                                    <h4>5 уроков</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Master/>
            <Example/>
            <Process/>
            <Late/>
        </>
    );
};

export default JavaRu;