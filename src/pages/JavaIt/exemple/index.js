import React from 'react';
import modal from "../../../img/modul.png";
import ".//style.scss"
import even from "../../../img/even.png"
import Process from "../Process";
import "../media.scss"
import {Link} from "react-router-dom";

const Example = () => {
    return (
        <>
            <div id="example">
                <div className='container'>
                    <div className="example">
                        <div className="example--programma">
                            <h1>ПРОГРАММА МАСТЕР-КЛАССА</h1>
                            <div className="example--programma__modulAll">
                                <div className="example--programma__modulAll--main">
                                    <div className="example--programma__modulAll--main__modal">
                                        <h4>Модуль 1</h4>
                                        <p>Reactivity</p>
                                    </div>
                                    <div className="example--programma__modulAll--main__modal">
                                        <h4>Модуль 2</h4>
                                        <p>Reactive approach</p>
                                    </div>
                                    <div className="example--programma__modulAll--main__modal">
                                        <h4>Модуль 3</h4>
                                        <p>Observable example</p>
                                    </div>
                                    <div className="example--programma__modulAll--main__modal">
                                        <h4>Модуль 4</h4>
                                        <p>Implementing and subscribing to an observer</p>
                                    </div>
                                    <div className="example--programma__modulAll--main__modal">
                                        <h4>Модуль 5</h4>
                                        <p>Reactive Streams spec</p>
                                    </div>
                                    <div className="example--programma__modulAll--main__modal">
                                        <h4>Модуль 6</h4>
                                        <p>Reactive Streams spec</p>
                                    </div>
                                    <Link to={'/master'}><button>Купить мастер-класс</button></Link>
                                </div>
                                <img src={modal} alt=""/>
                            </div>
                        </div>

                        <div className='example--develop'>
                            <div>
                                <img src={even} alt=""/>
                            </div>
                            <div className='example--develop__title'>
                                <p>Мастер класс ведет</p>
                                <h6>Евгений Александрович</h6>
                                <p> Frontend developer / Аратор </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Example;