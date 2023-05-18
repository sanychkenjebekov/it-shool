import React, {useState} from 'react';
import '../style.scss'
import '../media.scss'
import {TfiArrowCircleDown, TfiArrowCircleUp} from "react-icons/tfi";
import ne from '../../../img/ne.png'
import su from '../../../img/su.png'
import ke from '../../../img/ke.png'
import ve from '../../../img/ve.png'
import tix from '../../../img/tix.png'
import min from '../../../img/min.png'
import fire from '../../../img/fire.png'
import mne from '../../../img/mne.png'
import sag from '../../../img/sag.png'
import abs from '../../../img/abs.png'
import alm from '../../../img/alm.png'
import eki from '../../../img/eki.png'
import avg from '../../../img/avg.png'
import li from '../../../img/li.png'
import uni from '../../../img/unu.png'

const accordionData = [

    {
        title: 'Модуль 1',
        image: ne,
        image1: su,
        image2: ke,
        video: `OQEfujHhtNw`,
        video2: `wpbHmjQJl1Y`,
        video3: `QBUXsvjZIWI`,
        text: 'Не надо быть сильной',
        text2: 'Суротуно',
        text3: 'Керексин',
        study: 'Урок '
    },
    {
        title: 'Модуль 2',
        image: ve,
        image1: tix,
        image2: min,
        video: `kSx9P6P588g`,
        video2: `BiBwujgYNvc`,
        video3: `XflFSWaNJxU`,
        text: 'Вера в любовь',
        text2: 'Тихий океан',
        text3: 'Minefields',
        study: 'Урок '
    },
    {
        title: 'Модуль 3',
        image: fire,
        image1: mne,
        image2: sag,
        video: `vk_xq1P7vIU`,
        video2: `4oaYcw-zZC8`,
        video3: `pEP2H6HO6c4`,
        text: 'Fire on fire',
        text2: 'Мне не нужны',
        text3: 'Сагынамын сени',
        study: 'Урок '
    },
    {
        title: 'Модуль 4',
        image: abs,
        image1: alm,
        image2: eki,
        video: `XaBFjB0Kmrw`,
        video2: `qMVrjR4qZ9E`,
        video3: `bVvCugVS5O8`,
        text: 'Абсалютно все',
        text2: 'Айрылып кеттин',
        text3: 'Эки журок',
        study: 'Урок '
    },
    {
        title: 'Модуль 5',
        image: avg,
        image1: li,
        image2: uni,
        video: `-7asGU6mWYI`,
        video2: `PwRf0ZsPYEM`,
        video3: `U553zUETEOk`,
        text: 'Август',
        text2: 'Лилии',
        text3: 'Унута албайм',
        study: 'Урок '
    },


];

const Program = () => {
    const [youtube, setYoutube] = useState(`OQEfujHhtNw`)
    const [activeIndex, setActiveIndex] = useState(null)

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };


    return (
        <div id="program">
            <div className="container">
                <div className="program">
                    <div className="program--fr">
                        <h1>ПРОГРАММА КУРСА </h1>
                    </div>
                    <div className="program--vid">
                        <div className="program--vid__if">
                            <iframe width="490" height="400" src={`https://www.youtube.com/embed/${youtube}`}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write;
                                 encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                            </iframe>
                        </div>
                        <div className="program--vid__accordion">
                            {accordionData.map((item, index) => (
                                <div
                                    key={index}
                                    className={`accordion-item ${activeIndex === index ? <TfiArrowCircleUp/> :
                                        <TfiArrowCircleDown/>}`}
                                    onClick={() => handleClick(index)}>


                                    <div className="program--vid__accordion--title">{item.title}</div>
                                    {index === activeIndex && (
                                        <div className="program--vid__accordion--title__content">

                                            <div onClick={()=>setYoutube(item.video)}
                                                 className="program--vid__accordion--title__content--videos">
                                                <img src={item.image} alt=""/>

                                                <div>
                                                    <p>{item.text}</p>
                                                    <span>{item.study}</span>
                                                </div>


                                            </div>
                                            <div onClick={()=>setYoutube(item.video2)}
                                                 className="program--vid__accordion--title__content--videos">
                                                <img src={item.image1} alt=""/>
                                                <div>
                                                    <p>{item.text2}</p>
                                                    <span>{item.study}</span>
                                                </div>


                                            </div>
                                            <div onClick={()=>setYoutube(item.video3)}
                                                 className="program--vid__accordion--title__content--videos">
                                                <img src={item.image2} alt=""/>
                                                <div>
                                                    <p>{item.text3}</p>
                                                    <span>{item.study}</span>
                                                </div>


                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Program;