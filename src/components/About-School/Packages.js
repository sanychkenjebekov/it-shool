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
                           <div className="packages--packagesTop__packagesTop1--top">
                               <h3>Месяц +</h3>
                               <p>Доступны: Все статьи</p>
                               <h1>105,00 $</h1>
                               <p>Ежемесячно</p>
                               <Link to={'/подпискаМесяцPlus'}><button className='btns'>Оформить подписку</button></Link>
                               <Link to={'/подпискаМесяцPlus'}><button>Оформить подписку</button></Link>
                           </div>
                       </div>
                       <div className="packages--packagesTop__packagesTop2">
                           <div className="packages--packagesTop__packagesTop2--top">
                               <h3>Год +</h3>
                               <p>Доступны: Все Мастер классы и статьи и курсы</p>
                               <h1>585,00 $</h1>
                               <p>Ежемесячно</p>
                               <Link to={'/подпискаГодPlus'}><button className='btns'>Оформить подписку</button></Link>
                               <Link to={'/подпискаГодPlus'}><button>Оформить подписку</button></Link>
                           </div>
                       </div>
                       <div className="packages--packagesTop__packagesTop3">
                           <div className="packages--packagesTop__packagesTop3--top">
                               <h3>Год</h3>
                               <p>Доступны: Все статьи</p>
                               <h1>220,00 $</h1>
                               <p>Ежемесячно</p>
                               <Link to={'/подпискаГод'}><button className='btns'>Оформить подписку</button></Link>
                               <Link to={'/подпискаГод'}><button>Оформить подписку</button></Link>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    );
}

export default Packages;