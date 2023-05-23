import React, {useContext} from 'react';
import {BsCreditCard} from "react-icons/bs";
import {Link} from "react-router-dom";
import {LoginContext} from "../../../Context";

const MonthPromotion = () => {
    const {setNotification} = useContext(LoginContext)
    const {setNotific} = useContext(LoginContext)
    const {setNotific2} = useContext(LoginContext)
    const {setNotificRed} = useContext(LoginContext)
    const oplata = (e) => {
        const oplata = document.querySelector('.oplata')
        const bg = document.querySelector('.bg')
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
        if(i1.value ==='' || i2.value === '' || i3.value === '' || i4.value === '' || i5.value === '' || i6.value === '' || i7.value === ''|| i8.value === ''){
            oplata.style.display='none'
            bg.style.display='none'
            i1.style.border='1px solid red'
            i2.style.border='1px solid red'
            i3.style.border='1px solid red'
            i4.style.border='1px solid red'
            i5.style.border='1px solid red'
            i6.style.border='1px solid red'
            i7.style.border='1px solid red'
            i8.style.border='1px solid red'
            i9.parentNode.style.border = '1px solid red'
            i10.parentNode.style.border = '1px solid red'
        }else{
            oplata.style.display='block'
            bg.style.display='block'
            i1.style.border='1px solid white'
            i2.style.border='1px solid white'
            i3.style.border='1px solid white'
            i4.style.border='1px solid white'
            i5.style.border='1px solid white'
            i6.style.border='1px solid white'
            i7.style.border='1px solid white'
            i8.style.border='1px solid white'
            i9.parentNode.style.border = '1px solid white'
            i10.parentNode.style.border = '1px solid white'
            window.setTimeout(()=>{
                oplata.style.display='none'
                bg.style.display='none'
            },3000)
            setNotificRed(true)
            setNotific('Месяц')
            setNotific2('19.00')
            setNotification('Вы оформили подписку пакет “Месяц”')
        }
        i1.value = ''
        i2.value = ''
        i3.value = ''
        i4.value = ''
        i5.value = ''
        i6.value = ''
        i7.value = ''
        i8.checked = ''
        i9.checked = ''
        i10.checked = ''
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
                    <h4>Главная / <span>Оформить подписку</span></h4>
                    <center>
                        <div className="god--about">
                            <h1>Месяц</h1>
                            <form action="#">
                                <div className="god--about__input">
                                    <input onInput={oplata2} className='i1' required placeholder='Ф.И.О*' name='name' type="text"/>
                                    <input onInput={oplata2} className='i2' required placeholder='Телефон*' name='tel' type="number"/>
                                    <input onInput={oplata2} className='i3' required placeholder='E mail*' name='email' type="email"/>
                                    <input onInput={oplata2} className='i4' required placeholder='Пароль' type="password"/>
                                    <p>Выберите платежную карту</p>
                                    <div className="god--about__input--radio">
                                        <div className="god--about__input--radio__one">
                                            <input onInput={oplata2} required className='i9' name='radio' type="radio"/>
                                            <h2>Visa</h2>
                                        </div>
                                        <div className="god--about__input--radio__one">
                                            <input onInput={oplata2} required className='i10' name='radio' type="radio"/>
                                            <h2>MasterCard</h2>
                                        </div>
                                    </div>
                                    <input onInput={oplata2} className='i5' required placeholder='Номер карты *' name='karta'
                                           type="number"/>
                                    <div className="god--about__input--cvc">
                                        <input onInput={oplata2} className='i6' required placeholder='ММ/ГГ *' type="tel"/>
                                        <input onInput={oplata2} className='i7' required placeholder='CVC *' type="number"/>
                                    </div>
                                    <div className="god--about__input--chekbox">
                                        <input onInput={oplata2} className='i8' required type="checkbox"/>
                                        <h5>Я ознакомился и согласен с Условиями оказания услуг</h5>
                                    </div>
                                    <button style={{cursor:'pointer'}} onClick={oplata} type='submit'>Оплатить 19.00$</button>
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
                                    display: 'none',
                                    zIndex:2
                                }}>
                                    <p style={{padding: '0 0 15px 0'}}><BsCreditCard style={{padding: '0 10px 0 0',lineHeight:'25px'}}/>Вы
                                        оформили подписку пакет “Месяц” </p>
                                    <p>Спасибо что выбрали нас !</p>
                                </div>
                            </form>
                        </div>
                        <div className="god--title">
                            <p>Все мастер-классы нашей школы</p>
                            <p>6 новых статей каждый месяц.</p>
                            <h3>Другие варианты подписки:</h3>
                            <Link to={'/подпискаГодPlus'}>Год +-585,00$</Link>
                            <Link to={'/подпискаГод'}>Год - 220,00 $/год</Link>
                            <p>Отменить можно в любой момент!</p>
                            <p>При оплате через Fondy, с Вашей карты автоматически
                                будут списываться 225,00 $/год, которые являются
                                стандартной ценой участия.</p>
                            <p>Вы всегда можете отменить подписку в Вашем личном
                                кабинете и больше списаний не будет.</p>
                        </div>
                    </center>
                </div>
            </div>
            <div style={{background:'#0a1128d9',position:'fixed',top:0,left:0,bottom:0,right:0,zIndex:1,display:'none'}} className="bg"></div>
        </div>
    );
};

export default MonthPromotion;