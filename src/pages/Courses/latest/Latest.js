import React from 'react';
import {BsFillClipboardMinusFill} from "react-icons/bs";
import './style.scss'
import '../media.scss'
import Rectangle from "../../../img/Rectangle.png";
import read from "../../../img/read.svg";

const Latest = () => {
    return (
        <div id="latest">
            <div className="container">
                <div className="latest">

                    <div className="latest--stat">
                        <h1>Другие статьи</h1>
                    </div>

                 <div className="latest--title">



                         <div className="latest--title__text">
                         <h5>Статьи</h5>
                         <h1>Мы подготовили подборку  самых
                             популярных курсов  по направлению Java в IBS Training Center. </h1>
                         <div className="latest--title__text--icon">
                             <button><BsFillClipboardMinusFill/>Читать</button>
                             <h4>21.09.2022</h4>
                         </div>

                     </div>
                     <div className="latest--title__text">
                         <h5>Статьи</h5>
                         <h1>Мы подготовили подборку самых
                             популярных курсов  по направлению Java в IBS  Training Center. </h1>
                         <div className="latest--title__text--icon">
                             <button><BsFillClipboardMinusFill/>Читать</button>
                             <h4>21.09.2022</h4>
                         </div>

                     </div>
                     <div className="latest--title__text">
                     <h5>Статьи</h5>
                     <h1>Мы подготовили подборку  самых
                         популярных курсов по направлению Java в IBS Training Center. </h1>
                     <div className="latest--title__text--icon">
                         <button><BsFillClipboardMinusFill/>Читать</button>
                         <h4>21.09.2022</h4>
                     </div>

                 </div>
                 </div>

                </div>
            </div>
        </div>
    );
};

export default Latest;