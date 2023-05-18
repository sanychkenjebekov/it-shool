import React from 'react';
import {Link} from "react-router-dom";

function Packages() {
    return (
        <div id="packages">
            <div className="container">
                <div className="packages">
                    <div className="packages--packages1">
                        <h1>Уровень пакетов</h1>
                        <p>Списания будут автоматическими. Вы всегда можете отменить подписку в <br/>
                            Вашем личном кабинете и больше списаний не будет</p>
                    </div>
                    <div className="packages--packagesTop">
                        <div className="packages--packagesTop__packagesTop1">
                            <center>
                                <h3>Месяц +</h3>
                                <p>Доступны: Все статьи</p>
                                <h1>105,00 $</h1>
                                <p>Ежемесячно</p>
                                <Link to={'/подпискаМесяцPlus'}>
                                    <button className='btns'>Оформить подписку</button>
                                </Link>
                                <Link to={'/подпискаМесяцPlus'}>
                                    <button>Оформить подписку</button>
                                </Link>
                            </center>
                        </div>
                        <div className="packages--packagesTop__packagesTop2">
                            <center>
                                <h3>Месяц +</h3>
                                <p>Доступны: Все статьи</p>
                                <h1>105,00 $</h1>
                                <p>Ежемесячно</p>
                                <Link to={'/подпискаМесяцPlus'}>
                                    <button className='btns'>Оформить подписку</button>
                                </Link>
                                <Link to={'/подпискаМесяцPlus'}>
                                    <button>Оформить подписку</button>
                                </Link>
                            </center>
                        </div>
                        <div className="packages--packagesTop__packagesTop3">
                            <center>
                                <h3>Месяц +</h3>
                                <p>Доступны: Все статьи</p>
                                <h1>105,00 $</h1>
                                <p>Ежемесячно</p>
                                <Link to={'/подпискаМесяцPlus'}>
                                    <button className='btns'>Оформить подписку</button>
                                </Link>
                                <Link to={'/подпискаМесяцPlus'}>
                                    <button>Оформить подписку</button>
                                </Link>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Packages;