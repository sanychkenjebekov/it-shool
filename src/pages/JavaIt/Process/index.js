import React from 'react';
import ".//style.scss"
import {AiOutlineCheck} from "react-icons/ai";
import Late from "../Late";
import "../media.scss"
import {Link} from "react-router-dom";

const Process = () => {
    return (
        <>
            <div id="process">
                <div className="container">
                    <div className="process">
                        <div className="process--learn">
                            <h1>Процесс обучения</h1>
                            <p>Каждый из наших мастер-классов состоит из 2-8 уроков. Рекомендуем проходить мастер-класс
                                последовательно, урок за уроком</p>
                        </div>
                        <div className="process--access">
                            <div className='process--access__one'>
                                {/*<div className='process--access__one--red'>*/}
                                    <div className='process--access__one--feel'>
                                        <h2>1</h2>
                                        <h3>Мастер-класс</h3>
                                        <p>Вы получите доступ ко всем урокам мастер-класса и другим дополнительным
                                            материалам</p>
                                    </div>
                                    <div className='process--access__one--feel'>
                                        <h2>2</h2>
                                        <h3>Мастер-класс</h3>
                                        <p>Вы получите доступ ко всем урокам мастер-класса и другим дополнительным
                                            материалам</p>
                                    </div>
                                {/*</div>*/}
                                {/*<div className='process--access__one--red'>*/}
                                    <div className='process--access__one--feel'>
                                        <h2>3</h2>
                                        <h3>Мастер-класс</h3>
                                        <p>Вы получите доступ ко всем урокам мастер-класса и другим дополнительным
                                            материалам</p>
                                    </div>
                                    <div className='process--access__one--feel'>
                                        <h2>4</h2>
                                        <h3>Мастер-класс</h3>
                                        <p>Вы получите доступ ко всем урокам мастер-класса и другим дополнительным
                                            материалам</p>
                                    </div>
                                {/*</div>*/}

                            </div>
                            <div className='process--access__two'>
                                <p>Мастер-класс “Реактивное программирование на Java : как, зачем и стоит ли? Часть
                                    1”</p>
                                <h4>46,00 $</h4>

                                <div>
                                    <h5><AiOutlineCheck/> Доступ к мастер классу навсегда</h5>
                                    <h5><AiOutlineCheck/>Доступны все 5 уроков</h5>
                                    <h5><AiOutlineCheck/>Дополнительные материалы</h5>
                                </div>
                                <Link to={'/reactiv/details'}><button>Купить мастер-класс</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<Late/>*/}
        </>
    );
};

export default Process;