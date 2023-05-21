import React from 'react';
import {Link} from "react-router-dom";
import photo from '../../../img/photo.png'
import './style.scss'
import '../media.scss'
import Lock from "../lock";
import Latest from "../latest/Latest";
import ToDo from "../../comments/todoComments/ToDo";

const Page = () => {
    return (
        <>
        <div id="page">
            <div className="container">
                <div className="page">
                    <div className="page--block">
                        <Link to={'/'}>Главная / Статья / <span style={{color:'white'}}>Мы подготовили...</span> </Link>
                        <h5>11.09.2022</h5>
                    </div>
                    <div className="page--center">
                        <h1>Мы подготовили подборку самых популярных курсов по
                            направлению Java в IBS Training Center.</h1>
                        <p>Когда-то ни один крупный проект не обходился без применения функционального и асинхронного
                            программирования. Эти подходы до сих пор популярны за счет своих преимуществ: они помогают
                            выдерживать большие нагрузки и писать эффективный код, не теряя в скорости разработки. </p>

                        <div className="page--center__image">
                            <img src={photo} alt=""/>
                        </div>
                    </div>
                    <div className="page--frame">
                        <h1>В рамках курса от IBS Training Center вы поймете, как работают основные <br/>
                            фичи Spring Framework 5, и узнаете:</h1>
                    </div>
                   <div className="page--dot">
                       <ul>
                           <li>
                               Какие существуют конфигурации для Spring Framework 5;
                           </li>
                       </ul>
                       <ul>
                           <li>
                               Как работать с REST-сервисами и документацией при помощи Swagger.
                           </li>
                       </ul>
                       <ul>
                           <li>
                               Что такое бины и как с ними работать;
                           </li>
                       </ul>
                       <ul>
                           <li>
                               Что такое Концепция IoC;
                           </li>
                       </ul>
                       <ul>
                           <li>
                               Примеры использования AOP;
                           </li>
                       </ul>
                   </div>
                </div>
            </div>
        </div>
            <Lock/>
            <ToDo/>
            <Latest/>
        </>
);
};

export default Page;