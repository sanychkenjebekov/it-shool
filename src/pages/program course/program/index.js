import React, {useState} from 'react';
import '../style.scss'
import '../media.scss'
import {TfiArrowCircleDown, TfiArrowCircleUp} from "react-icons/tfi";
import ne from '../../../img/ne.png'
import su from '../../../img/su.png'
import ke from '../../../img/ke.png'
import ve from '../../../img/po.png'
import tix from '../../../img/tix.png'
import min from '../../../img/min.png'
import fire from '../../../img/fire.png'
import mne from '../../../img/mne.png'
import sag from '../../../img/an.png'
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
        study: 'Урок ',
        id: 1
    },
    {
        title: 'Модуль 2',
        image: ve,
        image1: tix,
        image2: min,
        video: `j1DhaufCHmI`,
        video2: `BiBwujgYNvc`,
        video3: `XflFSWaNJxU`,
        text: 'По пятам',
        text2: 'Тихий океан',
        text3: 'Minefields',
        study: 'Урок ',
        id: 2
    },
    {
        title: 'Модуль 3',
        image: fire,
        image1: mne,
        image2: sag,
        video: `vk_xq1P7vIU`,
        video2: `4oaYcw-zZC8`,
        video3: `GFAFTXQcmew`,
        text: 'Fire on fire',
        text2: 'Мне не нужны',
        text3: 'Angels Like You ',
        study: 'Урок ',
        id: 3
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
        study: 'Урок ',
        id: 4
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
        study: 'Урок ',
        id: 5
    },


];


const Program = () => {
    const [youtube, setYoutube] = useState(accordionData[0].video)
    const [activeIndex, setActiveIndex] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0);


    const programClick = (index) => {
        // const a = document.querySelector('.accordion-item')
        if (index <= currentIndex) {
            // a.style.opacity='1'
            setActiveIndex(index === activeIndex ? null : index)
        }
    };

    const programVideoClick = (video, index) => {
        if (index === activeIndex) {
            setYoutube(video);
            setActiveIndex(null);
            // setCurrentIndex(currentIndex + 1);
            setCurrentIndex(index + 1)
        }
    }

    return (
        <div id="program">
            <div className="container">
                <div className="program">
                    <div className="program--fr">
                        <h1>ПРОГРАММА КУРСА </h1>
                    </div>
                    <div className="program--vid">
                        <div className="program--vid__if">
                            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${youtube}`}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write;
                                                           encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </div>
                        <div className="program--vid__accordion" style={{cursor:'pointer'}}>
                            {accordionData.map((item, index) => (
                                <div key={index} className={`accordion-item ${activeIndex === index ?
                                    <TfiArrowCircleUp/> : <TfiArrowCircleDown/>}`}
                                     onClick={() => programClick(index)}>
                                    <div className="program--vid__accordion--title">{item.title}
                                        <span>{activeIndex === index ? <TfiArrowCircleUp/> :
                                            <TfiArrowCircleDown/>}</span></div>
                                    {index === activeIndex && (<div className="program--vid__accordion--title__content">
                                            <div onClick={() => programVideoClick(item.video,index)}
                                                 className="program--vid__accordion--title__content--videos">
                                                <img src={item.image} alt=""/>
                                                <div>
                                                    <p>{item.text}</p>
                                                    <span>{item.study}</span>
                                                </div>
                                            </div>
                                            <div onClick={() => programVideoClick(item.video2,index)}
                                                 className="program--vid__accordion--title__content--videos">
                                                <img src={item.image1} alt=""/>
                                                <div>
                                                    <p>{item.text2}</p>
                                                    <span>{item.study}</span>
                                                </div>
                                            </div>
                                            <div onClick={() => programVideoClick(item.video3,index)}
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