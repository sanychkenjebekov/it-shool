import React from 'react';
import user from "../../../img/user.svg";
import {Link} from "react-router-dom";
import {AiOutlineExport, AiOutlineUser} from "react-icons/ai";
import {BsBasket2, BsCreditCard2Back, BsWallet2} from "react-icons/bs";
import {FaRegComment} from "react-icons/fa";
import "./comments.scss"
import "./media.scss"

const Comments = () => {
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
        <div id='comment'>
            <div className="container">
                <input onChange={foto} className='file' type="file" style={{position:'absolute',margin:'154px 0 0 24px',opacity:'0'}}/>
                <div className="comment">
                    <div className="comment--text">
                        <a href="#">Главная  <span>/ Профиль / Мои покупки</span></a>
                    </div>
                    <div className='comment--every'>
                        <div className="comment--every__saydBar">
                            <img src={user} alt=""/>
                            <button className='comment--every__saydBar--btn'>Добавить фото</button>
                            <div className="comment--every__saydBar--link">
                                <Link to={'/личныеДанные'}><AiOutlineUser/>Личные данные</Link>
                                <Link to={'/cards'}><BsWallet2/>Платежные карты</Link>
                                <Link to={'/follows'}><BsCreditCard2Back/>Подписки</Link>
                                <Link  style={{color:'rgb(0 58 250)'}} to={'/comments'}><FaRegComment/>Комментарии</Link>
                                <Link  to={'/mine'}><BsBasket2/>Мои покупки</Link>
                                <Link to={'#'} onClick={vyhod}><AiOutlineExport/>Выйти</Link></div>
                        </div>

                        <div className="comment--every__right">
                            <div className='comment--every__one'>
                                <h1>Коментарии</h1>
                            </div>
                            <div className='comment--every__status'>
                                <div className='comment--every__status--card'>
                                    <h2>Осмонова Нурай</h2>
                                    <h2>Урок супер</h2>
                                    <h4>Удалить</h4>
                                </div>
                                <div className='comment--every__status--card'>
                                    <h2>Осмонова Нурай</h2>
                                    <h2>Было классно.Все понятно и досканально
                                        описано <br/> каждая деталь. Я вообще не желею
                                        что купила эти курсы </h2>
                                    <h4>Удалить</h4>
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

export default Comments;