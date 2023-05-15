import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../img/логотип.svg'
import {AiOutlineInstagram, AiOutlineMail, AiOutlineYoutube} from "react-icons/ai";
import {CiFacebook} from "react-icons/ci";
import {FiTwitter} from "react-icons/fi";
import {FaTiktok} from "react-icons/fa";
import {TbBrandTelegram} from "react-icons/tb";
import {BsGeoAlt, BsTelephone} from "react-icons/bs";

const Footer = () => {
    return (
        <div id='footer'>
            <div className="container">
                <div className="footer">
                    <div className="footer--menu">
                        <Link to={'/'}><img src={logo} alt=""/></Link>
                        <div className="footer--menu__ru">
                            <p>KG</p>
                            <p>RU</p>
                        </div>
                    </div>
                    <div className="footer--menu">
                        <h3>Быстрые ссылки</h3>
                        <Link to={'/оШколе'}>О школе</Link>
                        <Link to={'/нашиКурсы'}>Наши курсы</Link>
                        <Link to={'/оНас'}>О нас</Link>
                    </div>
                    <div className="footer--menu">
                        <h3>Социальные сети</h3>
                        <div className="footer--menu__seti">
                            <Link className='icons' to={'https://www.instagram.com/motion_web'}><AiOutlineInstagram/></Link>
                            <Link className='icons' to={'/'}><AiOutlineYoutube/></Link>
                            <Link className='icons' to={'/'}><CiFacebook/></Link>
                            <Link className='icons' to={'/'}><FiTwitter/></Link>
                            <Link className='icons' to={'/'}><FaTiktok/></Link>
                            <Link className='icons' to={'/'}><TbBrandTelegram/></Link>
                        </div>
                    </div>
                    <div className="footer--menu">
                        <h3>Контакты</h3>
                        <Link to={'/'}><AiOutlineMail className='ikonLeft'/> @motionwebteam@gmail.com</Link>
                        <Link to={'/'}><BsTelephone className='ikonLeft'/> +996 559 - 69 - 26 - 26</Link>
                    </div>
                    <div className="footer--menu">
                        <h3>Адреса</h3>
                        <Link to={'#'}><BsGeoAlt className='ikonLeft'/> Турусбекова 109 / 3</Link>
                        <Link className='id' to={'#'}>Идентификационный код: 1234567890</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;