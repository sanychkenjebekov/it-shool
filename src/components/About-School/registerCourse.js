import React from 'react';
import {BsCreditCard} from "react-icons/bs";
import {Link} from "react-router-dom";

function RegisterCourse() {
    const oplata = (e) => {
        const oplata = document.querySelector('.oplata')
        const i1 = document.querySelector('.i1')
        const i2 = document.querySelector('.i2')
        const i3 = document.querySelector('.i3')
        const i4 = document.querySelector('.i4')
        const i5 = document.querySelector('.i5')
        const i6 = document.querySelector('.i6')
        const i7 = document.querySelector('.i7')
        const i8 = document.querySelector('.i8')
        // e.preventDefault()
        if (i1.value === '' || i2.value === '' || i3.value === '' || i4.value === '' || i5.value === '' || i6.value === '' || i7.value === '' || i8.value === '') {
            // oplata.style.display = 'none'
            // i1.style.border = '1px solid red'
            // i2.style.border = '1px solid red'
            // i3.style.border = '1px solid red'
            // i4.style.border = '1px solid red'
            // i5.style.border = '1px solid red'
            // i6.style.border = '1px solid red'
            // i7.style.border = '1px solid red'
            // i8.style.border = '1px solid red'
        } else {
            // oplata.style.display = 'block'
            // i1.style.border = '1px solid white'
            // i2.style.border = '1px solid white'
            // i3.style.border = '1px solid white'
            // i4.style.border = '1px solid white'
            // i5.style.border = '1px solid white'
            // i6.style.border = '1px solid white'
            // i7.style.border = '1px solid white'
            // i8.style.border = '1px solid white'
            // window.setTimeout(() => {
            //     oplata.style.display = 'none'
            //
            // }, 3000)
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
                            <h1>Frontend-разработчик</h1>
                            <p>Идея реактивного программирования
                                <br/>появилась сравнительно недавно, лет 10 назад. </p>
                            <p1>Лектор</p1> <br/><br/>
                            <h1>Евгений Александрович</h1>
                            <p>Frontend разработчик</p>
                            <h5>3 модулей 60материалов В курс входит </h5>
                            <rem>* - материалы включают уроки, тесты и задания. <br/>
                                Некоторые материалы могут быть недоступны <br/>
                                при самостоятельном обучении. </rem>
                        </div>
                        <div className="god--about">
                            <form action="#">
                                <div className="god--about__input">
                                    <input className='i1' required placeholder='Ф.И.О*' name='name' type="text"/>
                                    <input className='i2' required placeholder='Телефон*' name='tel' type="number"/>
                                    <input className='i3' required placeholder='E mail*' name='email' type="email"/>
                                    <input className='i4' required placeholder='Пароль' type="password"/>
                                    <p>Выберите платежную карту</p>
                                    <div className="god--about__input--radio">
                                        <div className="god--about__input--radio__one">
                                            <input required name='radio' type="radio"/>
                                            <h2>Visa</h2>
                                        </div>
                                        <div className="god--about__input--radio__one">
                                            <input required name='radio' type="radio"/>
                                            <h2>MasterCard</h2>
                                        </div>
                                    </div>
                                    <input className='i5' required placeholder='Номер карты *' name='karta'
                                           type="number"/>
                                    <div className="god--about__input--cvc">
                                        <input className='i6' required placeholder='ММ/ГГ *' type="tel"/>
                                        <input className='i7' required placeholder='CVC *' type="text"/>
                                    </div>
                                    <div className="god--about__input--chekbox">
                                        <input className='i8' required type="checkbox"/>
                                        <h5>Я ознакомился и согласен с Условиями оказания услуг</h5>
                                    </div>
                                    <button onClick={oplata} style={{cursor: 'pointer',padding:'12px 15px'}} type='submit'>Оплатить
                                        <Link style={{color:'white',margin:'0 0 0 10px'}}  to={'/front'}>220.00$</Link>
                                    </button>
                                </div>
                                <div className="oplata" style={{
                                    fontSize: '15px',
                                    color: 'white',
                                    position: 'fixed',
                                    left: '39%',
                                    top: '50%',
                                    right: 0,
                                    background: 'rgba(27, 41, 89)',
                                    borderRadius: '10px',
                                    width: '300px',
                                    padding: '30px 10px',
                                    display: 'none'
                                }}>
                                    <p style={{padding: '0 0 15px 0'}}><BsCreditCard style={{padding: '0 10px 0 0'}}/>Вы
                                        оформили подписку пакет “год” </p>
                                    <p>Спасибо что выбрали нас !</p>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default RegisterCourse;