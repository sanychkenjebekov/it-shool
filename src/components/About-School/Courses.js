import React from 'react';
import {AiOutlineArrowRight} from "react-icons/ai";
import {Link, NavLink} from "react-router-dom";


function Courses() {
    return (
        <div id="courses">
            <div className="container">
                <h2>Курсы</h2>
                <div className="courses">
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
                        <a href="">Подробнее<AiOutlineArrowRight/></a>
                    </div>
                    <div className="courses3">
                        <h1>UX / UI Дизайнер</h1>
                        <p>Мастер создания сайтов. Умеет <br/>
                            делать их красивыми, интерактивными, <br/>
                            с большим функционалом. Профессия отлично <br/>
                            подойдет тем, кто хочет фрилансить и постоянно
                            разрабатывать новые проекты</p>
                        <a href="">Подробнее<AiOutlineArrowRight/></a>
                    </div>
                </div>
                <center>
                    <NavLink to={"/allCard"}>
                        <button>Все курсы</button>
                    </NavLink>
                </center>
            </div>
        </div>
    );
}

export default Courses;