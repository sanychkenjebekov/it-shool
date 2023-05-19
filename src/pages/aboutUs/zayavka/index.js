import React from 'react';
import './zayavka.scss'

const Zayavka = () => {
    return (
        <div id='podpisatsa'>
            <div className="container">
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
    );
};

export default Zayavka;