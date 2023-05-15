import React from 'react';
import {Link} from "react-router-dom";
import photo from '../../../img/photo.png'
import './style.scss'
import '../media.scss'

const PageCom = () => {
    return (
        <div id="page">
            <div className="container">
                <div className="page">
                    <div className="page--block">
                        <Link to={'/'}>Главная / Статья / Мы подготовили... </Link>
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

                    <div className="page--desc">
                        <p>Ищите способы ускорить проектирование приложений? Используйте Spring Framework 5. Этот
                            легковесный каркас с открытыми исходными текстами не связан с конкретной моделью
                            программирования и поэтому универсален. Его можно использовать не только для крупных
                            корпоративных кейсов, но и для небольших проектов.</p>

                        <p style={{
                            padding: "20px 0"
                        }}>Интересно? Присоединяйтесь к нашему курсу и узнайте об основных модулях этого фреймворка,
                            вариантах их использования и как Spring Framework работает совместно с другими
                            технологиями.</p>

                        <p>Если вы уже знакомы с Spring Framework 5 и хотите углубить свои знания, то этот курс для вас!
                            Вместе с IBS Training Center вы изучите темы, необходимые для профессионального применения
                            Spring Framework на практике. Вы познакомитесь со Spring REST, HATEOAS и CORS, научитесь
                            использовать сериализацию и ограничение данных, освоите тонкости применения аннотации
                            @Transactional и оптимистических транзакций.</p>

                        <h2>Также вас ждет много практики, разбор реальных кейсов и  <br/>другие важные темы:</h2>

                        <div className="page--dot">
                            <ul>
                                <li>
                                    JWT-авторизация;
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    Практическое применение реактивного программирования с использованием WebFlux;
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    Тестирование Spring-сервисов
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    Планировщик задач и Actuator
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageCom;