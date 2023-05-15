import React from 'react';
import './article.scss'
import Rectangle from '../../img/Rectangle.png'
import read from '../../img/read.svg'
import {Link} from "react-router-dom";

const Articles = () => {
    return (
        <div id="Article">
            <div className="container">
                <div className="article">
                    <div className="article--text">
                        <h1>Последние статьи</h1>
                    </div>
                    <Link to={'/articles/details'}><div className="article--blocks">
                        <div className="article--blocks__block">
                            <img className='read' src={Rectangle} alt=""/>
                            <div className='article--blocks__block--one'>
                                <p>Статьи</p>
                                <h1>Мы подготовили подборку самых популярных курсов по
                                    направлению Java в IBS Training Center. </h1>
                                <div className='article--blocks__block--one__tx'>
                                    <div className='article--blocks__block--one__tx--not'>
                                        <img src={read} alt=""/>
                                        <a href="src/HomePage/Articles/articles#">Читать</a>
                                    </div>
                                    <div>
                                        <p>01.02.2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="article--blocks__block">
                            <img className='read' src={Rectangle} alt=""/>
                            <div className='article--blocks__block--one'>
                                <p>Статьи</p>
                                <h1>Мы подготовили подборку самых популярных курсов по
                                    направлению Java в IBS Training Center. </h1>
                                <div className='article--blocks__block--one__tx'>
                                    <div className='article--blocks__block--one__tx--not'>
                                        <img src={read} alt=""/>
                                        <a href="src/HomePage/Articles/articles#">Читать</a>
                                    </div>
                                    <div>
                                        <p>01.02.2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="article--blocks__block">
                            <img className='read' src={Rectangle} alt=""/>
                            <div className='article--blocks__block--one'>
                                <p>Статьи</p>
                                <h1>Мы подготовили подборку самых популярных курсов по
                                    направлению Java в IBS Training Center. </h1>
                                <div className='article--blocks__block--one__tx'>
                                    <div className='article--blocks__block--one__tx--not'>
                                        <img src={read} alt=""/>
                                        <a href="src/HomePage/Articles/articles#">Читать</a>
                                    </div>
                                    <div>
                                        <p>01.02.2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="article--blocks__block">
                            <img className='read' src={Rectangle} alt=""/>
                            <div className='article--blocks__block--one'>
                                <p>Статьи</p>
                                <h1>Мы подготовили подборку самых популярных курсов по
                                    направлению Java в IBS Training Center. </h1>
                                <div className='article--blocks__block--one__tx'>
                                    <div className='article--blocks__block--one__tx--not'>
                                        <img src={read} alt=""/>
                                        <a href="src/HomePage/Articles/articles#">Читать</a>
                                    </div>
                                    <div>
                                        <p>01.02.2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="article--blocks__block">
                            <img className='read' src={Rectangle} alt=""/>
                            <div className='article--blocks__block--one'>
                                <p>Статьи</p>
                                <h1>Мы подготовили подборку самых популярных курсов по
                                    направлению Java в IBS Training Center. </h1>
                                <div className='article--blocks__block--one__tx'>
                                    <div className='article--blocks__block--one__tx--not'>
                                        <img src={read} alt=""/>
                                        <a href="src/HomePage/Articles/articles#">Читать</a>
                                    </div>
                                    <div>
                                        <p>01.02.2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="article--blocks__block">
                            <img className='read' src={Rectangle} alt=""/>
                            <div className='article--blocks__block--one'>
                                <p>Статьи</p>
                                <h1>Мы подготовили подборку самых популярных курсов по
                                    направлению Java в IBS Training Center. </h1>
                                <div className='article--blocks__block--one__tx'>
                                    <div className='article--blocks__block--one__tx--not'>
                                        <img src={read} alt=""/>
                                        <a href="src/HomePage/Articles/articles#">Читать</a>
                                    </div>
                                    <div>
                                        <p>01.02.2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></Link>
                    <div className='article--btn'>
                        <button>Показать больше</button>
                    </div>
                    <div className='article--follow'>
                        <div className='article--follow__left'>
                            <h2>Подпишитесь сейчас за 19,00 $ / мес</h2>
                            <p>И получите доступ к материалам и кейсам, а также к новым мастер-классам </p>
                        </div>
                        <div className='article--follow__right'>
                            <Link to={'/подпискаМесяц'}><button className='article--follow__right--first'>Оформить подписку</button></Link>
                            <button className='article--follow__right--second'>Подробнее о пакетах </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Articles;