import React from 'react';
import './dashboard.scss'
import {Link} from "react-router-dom";
import {BsBasket2, BsCreditCard2Back, BsWallet2} from "react-icons/bs";
import {FaRegComment} from "react-icons/fa";
import {AiOutlineExport, AiOutlineUser} from "react-icons/ai";
import user from '../../../img/user.svg'


const Dashboard = () => {
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
        <div id='dashboard'>
            <div className="container">
                <input onChange={foto} className='file' type="file" style={{position:'absolute',margin:'154px 0 0 24px',opacity:'0'}}/>
                <div className="dashboard">
            <div className="dashboard--saydBar">
                <img className='users' src={user} alt=""/>
                <button className='dashboard--saydBar__btn'>Добавить фото</button>
                <div className="dashboard--saydBar__link">
                    <Link style={{color:'rgb(0 58 250)'}} to={'/личныеДанные'}><AiOutlineUser/>Личные данные</Link>
                    <Link to={'/cards'}><BsWallet2/>Платежные карты</Link>
                    <Link to={'/follows'}><BsCreditCard2Back/>Подписки</Link>
                    <Link to={'#'}><FaRegComment/>Комментарии</Link>
                    <Link to={'#'}><BsBasket2/>Мои покупки</Link>
                    <Link to={'#'} onClick={vyhod}><AiOutlineExport/>Выйти</Link></div>
            </div>

            <div className="personaldata">
                <h1>Личные данные</h1>
                <div className="wrapper">
                    <form action="" className="personaldata--form">
                        <label htmlFor="">ФИО</label>
                        <input type="text" className="personaldata--form__input"/>
                        <label htmlFor="">Номер телефон</label>
                        <input type="number" className="personaldata--form__input"/>
                        <label htmlFor="">Email</label>
                        <input type="email" className="personaldata--form__input"/>
                        <label htmlFor="">Пол</label>
                        <div className="personaldata--form__check">
                            <label>
                                <input type="checkbox" name="gender" value="male"/>
                                Мужской
                            </label>
                            <label>
                                <input type="checkbox" name="gender" value="female" />
                                Женский
                            </label>
                        </div>
                    </form>
                    <form action="" className="personaldata--data">
                        <h2>Дата рождения</h2>
                        <div className="personaldata--data__select">
                            <select id="month" name="month">
                                <option value="01">1</option>
                                <option value="02">2</option>
                                <option value="03">3</option>
                                <option value="04">4</option>
                                <option value="05">5</option>
                                <option value="06">6</option>
                                <option value="07">7</option>
                                <option value="08">8</option>
                                <option value="10">9</option>
                                <option value="11">10</option>
                                <option value="12">31</option>
                            </select>
                            <select id="month" name="month">
                                <option value="01">Январь</option>
                                <option value="02">Февраль</option>
                                <option value="03">Март</option>
                                <option value="04">Апрель</option>
                                <option value="05">Май</option>
                                <option value="06">Июнь</option>
                                <option value="07">Июль</option>
                                <option value="08">Август</option>
                                <option value="09">Сентябрь</option>
                                <option value="10">Октябрь</option>
                                <option value="11">Ноябрь</option>
                                <option value="12">Декабрь</option>
                            </select>

                            <select id="year" name="year">
                                <option value="1900">2000</option>
                                <option value="1901">2001</option>
                                <option value="1902">2002</option>
                                <option value="1903">2003</option>
                                <option value="2099">2004</option>
                                <option value="2099">2005</option>
                                <option value="2099">2006</option>
                            </select>
                        </div>
                        <label htmlFor="country">Страна</label>
                        <select id="country" name="country">
                            <option value="Австралия">Кыргызстан</option>
                            <option value="Австрия">Австрия</option>
                            <option value="Азербайджан">Азербайджан</option>
                            <option value="Албания">Албания</option>
                            <option value="Алжир">Алжир</option>
                            <option value="">Кыргызстан</option>
                        </select>

                        <label htmlFor="country">Город</label>
                        <select id="country" name="country">
                            <option value="Австралия">Бишкек</option>
                            <option value="Австрия">Австрия</option>
                            <option value="Азербайджан">Азербайджан</option>
                            <option value="Албания">Албания</option>
                            <option value="Алжир">Бишкек</option>
                            <option value="">Кыргызстан</option>
                        </select>
                        <label htmlFor="">Род деятельности</label>
                        <input type="text" className="personaldata--form__input"/>
                    </form>
                </div>
            </div>
                </div>
            </div>
            <div className="vyhod" style={{position:'absolute',left:'12.5%',top:'75%',textAlign:'center',color:'white',background:'rgb(11 22 57)',padding:'30px 76px',borderRadius:'10px',display:'none'}}>
                <h3 style={{fontSize:'15px',width:'170px',padding:'0 0 17px 0',fontWeight:'500'}}>Действительно хотите выйти или нет?</h3>
                <div className="vyhod--btn">
                    <Link onClick={home} to={'/'} ><button style={{background:'#044076',color:'white',padding:'10px 35px',borderRadius:'10px',margin:'0 20px 0 0'}}>Да</button></Link>
                    <button onClick={closeVyhod} style={{background:'#044076',color:'white',padding:'10px 35px',borderRadius:'10px'}}>Нет</button>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;