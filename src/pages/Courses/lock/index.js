import React from 'react';
import locks from "../../../img/lock.svg"
import person from "../../../img/person.svg"
import './style.scss'
import '../media.scss'
import {Link} from "react-router-dom";
const Lock = () => {
    return (
        <div id="lock">
            <div className="container">
                <div className="lock">
                    <div className="lock--block">
                        <img src={locks} alt=""/>
                            <div className="lock--block__title">
                                <h1>Оформите подписку,
                                    чтобы <br/> посмотреть полную версию</h1>
                                <div className="lock--block__title--text">
                                    <p>Вы уже авторизованы?</p>
                                    <h5>Авторизуйтесь</h5>
                                </div>
                            </div>
                           <Link to={"/подпискаГод"}>
                               <button>Получить доступ за 225,00$</button>
                           </Link>
                    </div>
                    <div className="lock--comments">
                        <h1>Комментарии</h1>
                    </div>
                    <div className="lock--block1">
                        <img src={person} alt=""/>
                            <div className="lock--block1__title">
                                <h1>Вы не зарегистрировались!</h1>
                                <div className="lock--block1__title--text">
                                    <p>Чтобы оставить комментарий, пожалуйста авторизуйтесь или  <br/>
                                        зарегитрируйтесь.</p>

                                </div>
                            </div>
                          <Link to={"/войти"}>
                              <button>Зарегистрироваться</button>
                          </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lock;