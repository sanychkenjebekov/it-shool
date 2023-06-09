import React from 'react';
import {AiOutlineArrowRight} from "react-icons/ai";
import {Link} from "react-router-dom";

function AllMaps() {
    return (
        <div id="allMaps">
            <div className="container">
                <p style={{color:'#ffffffb3',margin:'80px 0 50px 0',fontSize:'145x'}}>Главная /<span style={{color:'white'}}>Наши курсы</span></p>
            <h2>
                Курсы
            </h2>
                <div className="allMaps">
                    <div className="courses1">
                        <h1>Frontend-разработчик</h1>
                        <p>Мастер создания сайтов. Умеет <br/>
                            делать их красивыми, интерактивными, <br/>
                            с большим функционалом. Профессия отлично <br/>
                            подойдет тем, кто хочет фрилансить и постоянно разрабатывать новые проекты</p>
                        <Link to={'/frCurse'}>Подробнее<AiOutlineArrowRight/></Link>
                    </div>
                    <div className="courses2">
                        <h1>Backend-разработчик</h1>
                        <p>Мастер создания сайтов. Умеет <br/>
                            делать их красивыми, интерактивными, <br/>
                            с большим функционалом. Профессия отлично <br/>
                            подойдет тем, кто хочет фрилансить и постоянно
                            разрабатывать новые проекты</p>
                        <Link to={'/bkCurse'}>Подробнее<AiOutlineArrowRight/></Link>

                    </div>
                    <div className="courses3">
                        <h1>UX / UI Дизайнер</h1>
                        <p>Мастер создания сайтов. Умеет <br/>
                            делать их красивыми, интерактивными, <br/>
                            с большим функционалом. Профессия отлично <br/>
                            подойдет тем, кто хочет фрилансить и постоянно
                            разрабатывать новые проекты</p>
                        <Link to={'/uxuiCurse'}>Подробнее<AiOutlineArrowRight/></Link>

                    </div>
                    <div className="courses3">
                        <h1>DevOps - инженер</h1>
                        <p>Мастер создания сайтов. Умеет <br/>
                            делать их красивыми, интерактивными, <br/>
                            с большим функционалом. Профессия отлично <br/>
                            подойдет тем, кто хочет фрилансить и постоянно
                            разрабатывать новые проекты</p>
                        <Link to={'/devopsCurse'}>Подробнее<AiOutlineArrowRight/></Link>
                    </div>
                    <div className="courses3">
                        <h1>Android-разработчик</h1>
                        <p>Мастер создания сайтов. Умеет <br/>
                            делать их красивыми, интерактивными, <br/>
                            с большим функционалом. Профессия отлично <br/>
                            подойдет тем, кто хочет фрилансить и постоянно
                            разрабатывать новые проекты</p>
                        <Link to={'/androidCurse'}>Подробнее<AiOutlineArrowRight/></Link>
                    </div>
                    <div className="courses3">
                        <h1>Java-разработчик</h1>
                        <p>Мастер создания сайтов. Умеет <br/>
                            делать их красивыми, интерактивными, <br/>
                            с большим функционалом. Профессия отлично <br/>
                            подойдет тем, кто хочет фрилансить и постоянно
                            разрабатывать новые проекты</p>
                        <Link to={'/javaCurse'}>Подробнее<AiOutlineArrowRight/></Link>
                    </div>
                    <div className="courses3">
                        <h1>С++ - разработчик</h1>
                        <p>Мастер создания сайтов. Умеет <br/>
                            делать их красивыми, интерактивными, <br/>
                            с большим функционалом. Профессия отлично <br/>
                            подойдет тем, кто хочет фрилансить и постоянно
                            разрабатывать новые проекты</p>
                        <Link to={'/c++Curse'}>Подробнее<AiOutlineArrowRight/></Link>
                    </div>
                    <div className="courses3">
                        <h1>IOS - разработчик</h1>
                        <p>Мастер создания сайтов. Умеет <br/>
                            делать их красивыми, интерактивными, <br/>
                            с большим функционалом. Профессия отлично <br/>
                            подойдет тем, кто хочет фрилансить и постоянно
                            разрабатывать новые проекты</p>
                        <Link to={'/iosCurse'}>Подробнее<AiOutlineArrowRight/></Link>
                    </div>
                    <div className="courses3">
                        <h1>Python - разработчик</h1>
                        <p>Мастер создания сайтов. Умеет <br/>
                            делать их красивыми, интерактивными, <br/>
                            с большим функционалом. Профессия отлично <br/>
                            подойдет тем, кто хочет фрилансить и постоянно
                            разрабатывать новые проекты</p>
                        <Link to={'/pythonCurse'}>Подробнее<AiOutlineArrowRight/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllMaps;