import React from 'react';
import "../master/style.scss"
import Example from "../exemple";
import "../media.scss"

const Master = () => {
    return (
        <>
            <div id='master'>
                <div className="container">
                    <div className="master">
                        <div>
                            <p>Что, как и почему</p>
                        </div>
                        <div className="master--about">
                            <div className="master--about__class">
                                <h1>О МАСТЕР-КЛАССЕ</h1>
                                <p>В режиме мастер-класса он продемонстрировал,
                                    почему так важен неблокирующий ввод-вывод,
                                    в чем минусы классической многопоточности,
                                    в каких ситуациях нужна реактивность, и что
                                    она может дать. А еще описал недостатки
                                    реактивного подхода.</p>
                            </div>
                            <div className='master--about__dos'>
                                <div className='master--about__dos--month'>
                                    <p>Доступ: </p>
                                    <h4>6 недель</h4>
                                </div>
                                <div className="master--about__dos--month">
                                    <p>В мастер-класс входит: </p>
                                    <h4>5 уроков</h4>
                                </div>
                            </div>
                        </div>

                        <div className="master--video">
                            <h2>Переходите к видеоурокам, что бы научится: </h2>
                            <ul className='master--video__dote'>
                                <li>Чтению  файла (blocked on reading file);</li>
                                <li>Что бы научиться базе данных (blocked on reading from DB);</li>
                                <li>Научится использовать в  сложных вычислениях (blocked on heavy calculations);</li>
                                <li>На ответе от клиента (blocked on responding the client).</li>
                            </ul>
                        </div>
                        <div className="master--but">
                            <button className='master--but__one'>Купить мастер-класс </button>
                            <button className='master--but__two'>Смотреть программу</button>
                        </div>
                    </div>
                </div>
            </div>
            {/*<Example/>*/}
        </>
    );
};

export default Master;