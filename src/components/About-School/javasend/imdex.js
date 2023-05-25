import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {BsCreditCard} from "react-icons/bs";



function JavaSend () {
    const nav = useNavigate()
    const [redirectToFront, setRedirectToFront] = useState(false);
    const oplata = (e) => {
        const i1 = document.querySelector('.i1')
        const i2 = document.querySelector('.i2')
        const i3 = document.querySelector('.i3')
        const i4 = document.querySelector('.i4')
        const i5 = document.querySelector('.i5')
        const i6 = document.querySelector('.i6')
        const i7 = document.querySelector('.i7')
        const i8 = document.querySelector('.i8')
        const i9 = document.querySelector('.i9')
        const i10 = document.querySelector('.i10')
        e.preventDefault()
        if (i1.value === '' || i2.value === '' || i3.value === '' || i4.value === '' || i5.value === '' || i6.value === '' || i7.value === '' || i8.value === '') {
            i1.style.border = '1px solid red'
            i2.style.border = '1px solid red'
            i3.style.border = '1px solid red'
            i4.style.border = '1px solid red'
            i5.style.border = '1px solid red'
            i6.style.border = '1px solid red'
            i7.style.border = '1px solid red'
            // i8.style.border = '1px solid red'
            i9.parentNode.style.border = '1px solid red'
            i10.parentNode.style.border = '1px solid red'
        } else {
            i1.style.border = '1px solid white'
            i2.style.border = '1px solid white'
            i3.style.border = '1px solid white'
            i4.style.border = '1px solid white'
            i5.style.border = '1px solid white'
            i6.style.border = '1px solid white'
            i7.style.border = '1px solid white'
            // i8.style.border = '1px solid white'
            i9.parentNode.style.border = '1px solid white'
            i10.parentNode.style.border = '1px solid white'
            setRedirectToFront(true)
        }
    }
    if(redirectToFront === true){
        nav('/front')
        return null
    }

    function oplata2(){
        const i = document.querySelector('input')
        const i1 = document.querySelector('.i1')
        const i2 = document.querySelector('.i2')
        const i3 = document.querySelector('.i3')
        const i4 = document.querySelector('.i4')
        const i5 = document.querySelector('.i5')
        const i6 = document.querySelector('.i6')
        const i7 = document.querySelector('.i7')
        const i8 = document.querySelector('.i8')
        const i9 = document.querySelector('.i9')
        const i10 = document.querySelector('.i10')
        if (i.value.trim() === '') {
            i.style.border = '1px solid red'
        } else {
            i.style.border = '1px solid white'
        }
        if (i1.value.trim() === '') {
            i1.style.border = '1px solid red'
        } else {
            i1.style.border = '1px solid white'
        }
        if (i2.value === '') {
            i2.style.border = '1px solid red'
        } else {
            i2.style.border = '1px solid white'
        }
        if (i3.value === '') {
            i3.style.border = '1px solid red'
        } else {
            i3.style.border = '1px solid white'
        }
        if (i4.value === '') {
            i4.style.border = '1px solid red'
        } else {
            i4.style.border = '1px solid white'
        }
        if (i5.value === '') {
            i5.style.border = '1px solid red'
        } else {
            i5.style.border = '1px solid white'
        }
        if (i6.value === '') {
            i6.style.border = '1px solid red'
        } else {
            i6.style.border = '1px solid white'
        }
        if (i7.value === '') {
            i7.style.border = '1px solid red'
        } else {
            i7.style.border = '1px solid white'
        }
        if (i8.value === '') {
            i8.style.border = '1px solid red'
        } else {
            i8.style.border = '1px solid white'
        }
        if (i9.checked || i10.checked) {
            i9.parentNode.style.border = '1px solid white'
            i10.parentNode.style.border = '1px solid white'
        } else {
            i9.parentNode.style.border = '1px solid red'
            i10.parentNode.style.border = '1px solid red'
        }
    }

    return (
        <div id='god'>
            <div className="container">
                <div className="god">
                    <h4>Главная/ <span> Зарегистрироваться на курс</span></h4>
                    <h3>Зарегистрироваться на курс</h3>
                    <div className="god--banner">
                        <div className="god--banner__action">
                            <p1>Курс</p1> <br/><br/>
                            <h1>Java-разработчик</h1>
                            <p>Идея реактивного программирования
                                <br/>появилась сравнительно недавно, лет 10 назад. </p>
                            <p1>Лектор</p1> <br/><br/>
                            <h1>Евгений Александрович</h1>
                            <p>Java разработчик</p>
                            <h5>3 модулей 60материалов В курс входит </h5>
                            <rem>* - материалы включают уроки, тесты и задания. <br/>
                                Некоторые материалы могут быть недоступны <br/>
                                при самостоятельном обучении. </rem>
                        </div>
                        <div className="god--about">
                            <form action="#">
                                <div className="god--about__input">
                                    <input onInput={oplata2} className='i1' required placeholder='Ф.И.О*' name='name' type="text"/>
                                    <input onInput={oplata2} className='i2' required placeholder='Телефон*' name='tel' type="number"/>
                                    <input onInput={oplata2} className='i3' required placeholder='E mail*' name='email' type="email"/>
                                    <input onInput={oplata2} className='i4' required placeholder='Пароль' type="password"/>
                                    <p>Выберите платежную карту</p>
                                    <div className="god--about__input--radio">
                                        <div className="god--about__input--radio__one">
                                            <input onInput={oplata2} className='i9' required name='radio' type="radio"/>
                                            <h2>Visa</h2>
                                        </div>
                                        <div className="god--about__input--radio__one">
                                            <input onInput={oplata2} className='i10' required name='radio' type="radio"/>
                                            <h2>MasterCard</h2>
                                        </div>
                                    </div>
                                    <input onInput={oplata2} className='i5' required placeholder='Номер карты *' name='karta'
                                           type="number"/>
                                    <div className="god--about__input--cvc">
                                        <input onInput={oplata2} className='i6' required placeholder='ММ/ГГ *' type="tel"/>
                                        <input onInput={oplata2} className='i7' required placeholder='CVC *' type="text"/>
                                    </div>
                                    <div className="god--about__input--chekbox">
                                        <input onInput={oplata2} className='i8' required type="checkbox"/>
                                        <h5>Я ознакомился и согласен с Условиями оказания услуг</h5>
                                    </div>
                                    <button onClick={oplata} style={{cursor: 'pointer',padding:'12px 15px'}} type='submit'>Оплатить 220.00$
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};


export default JavaSend;