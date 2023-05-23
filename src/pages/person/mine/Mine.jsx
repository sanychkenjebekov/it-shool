import React, {useContext} from 'react';
import user from "../../../img/user.svg";
import {Link} from "react-router-dom";
import {AiOutlineCheck, AiOutlineExport, AiOutlineUser} from "react-icons/ai";
import {BsBasket2, BsCreditCard2Back, BsWallet2} from "react-icons/bs";
import {FaRegComment} from "react-icons/fa";
import './mine.scss'
import './media.scss'
import {LoginContext} from "../../../Context";


const Mine = () => {
    const {notific} = useContext(LoginContext)
    const {notific2} = useContext(LoginContext)
    const vyhod=()=>{
        const vyhod = document.querySelector('.vyhod')
        const bgProf = document.querySelector('.bgProf')
        vyhod.style.display='block'
        bgProf.style.display='block'
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
        const bgProf = document.querySelector('.bgProf')
        vyhod.style.display='none'
        bgProf.style.display='none'
    }
    const foto=()=>{
        const users = document.querySelector('.users')
        const file = document.querySelector('.file')
        users.src = URL.createObjectURL(file.files[0])
    }
    return (
        <div id='mine'>
            <div className="container">
                <input onChange={foto} className='file' type="file" style={{position:'absolute',margin:'163px 0 0 24px',opacity:'0'}}/>
                <div className="mine">
                    <div className="mine--text">
                        <a href="#">Главная  <span>/ Профиль / Мои покупки</span></a>
                    </div>
                    <div className='mine--every'>
                        <div className="mine--every__saydBar">
                            <img src={user} alt=""/>
                            <button className='mine--every__saydBar--btn'>Добавить фото</button>
                            <div className="mine--every__saydBar--link">
                                <Link to={'/личныеДанные'}><AiOutlineUser/>Личные данные</Link>
                                <Link to={'/cards'}><BsWallet2/>Платежные карты</Link>
                                <Link to={'/follows'}><BsCreditCard2Back/>Подписки</Link>
                                <Link to={'/comments'}><FaRegComment/>Комментарии</Link>
                                <Link style={{color:'rgb(0 58 250)'}}  to={'/mine'}><BsBasket2/>Мои покупки</Link>
                                <Link to={'#'} onClick={vyhod}><AiOutlineExport/>Выйти</Link></div>
                        </div>

                        <div className="mine--every__right">
                            <div className='mine--every__one'>
                                <h1>Мои покупки</h1>
                            </div>
<hr/>
                            <div className='mine--every__status'>

                                <div className='mine--every__status--card'>
                                    <h2>Описание</h2>
                                    <h2>{notific}</h2>
                                    {/*<h2>Год</h2>*/}
                                </div>


                                <div className='mine--every__status--card'>
                                    <h2>Цена </h2>
                                    <h2>{notific2} $</h2>
                                    {/*<h2>545 $</h2>*/}

                                </div>

                            </div>
                            <hr/>


                        </div>
                    </div>
                </div>
            </div>
            <div className="vyhod" style={{position:'absolute',margin:'-152px 0 0 189px',textAlign:'center',color:'white',background:'rgb(11 22 57)',padding:'30px 76px',borderRadius:'10px',display:'none',zIndex:1}}>
                <h3 style={{fontSize:'15px',width:'170px',padding:'0 0 17px 0',fontWeight:'500'}}>Действительно хотите выйти или нет?</h3>
                <div className="vyhod--btn">
                    <Link onClick={home} to={'/'} ><button style={{background:'#044076',color:'white',padding:'10px 35px',borderRadius:'10px',margin:'0 20px 0 0'}}>Да</button></Link>
                    <button onClick={closeVyhod} style={{background:'#044076',color:'white',padding:'10px 35px',borderRadius:'10px'}}>Нет</button>
                </div>
            </div>
            <div style={{position:'fixed',top:0,left:0,right:0,bottom:0, background:'rgb(10 17 40 / 80%)',display:'none'}} className="bgProf"></div>
        </div>
    );
};

export default Mine;