import React from 'react';
import '../style.scss'
import '../media.scss'
import Program from "../program";
import ToDoPr from "../todoPr";
import Asks from "../asks";

const Front = () => {
    return (
   <>
       <div id="front">
           <div className="container">
               <div className="front">
                   <div className="front--fr">
                       <h5>Главная / Мастер классы / <span>Frontend разработчик</span></h5>
                   </div>
                   <div className="front--end">
                       <div className="front--end__dev">
                           <h1>Frontend-разработчик</h1>
                           <p>Когда нужно переходить от прокачивания личной
                               эффективности к изучению эффективности командой?</p>
                       </div>
                       <div className="front--end__prog">
                           <h1>Прогресс по курсу</h1>
                           <input type="range"/>
                           <div className="front--end__prog--mod">
                               <div>
                                   <h4>Пройдено <br/> модулей</h4>
                                   <h3>0/3</h3>
                               </div>
                               <div>
                                   <h4>Пройдено  <br/>материалов</h4>
                                   <h3>4/60</h3>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <Program/>
       <ToDoPr/>
       <Asks/>
   </>
    );
};

export default Front;