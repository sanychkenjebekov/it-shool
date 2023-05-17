import React, {useState} from 'react';
import '../style.scss'
import '../media.scss'
import {TfiArrowCircleDown, TfiArrowCircleUp} from "react-icons/tfi";

const accordionData = [

    {
        title: 'Модуль 1',
        image:`OQEfujHhtNw`,
        imagetwo:`OQEfujHhtNw`,
        text: '7  Observable example',
        study:'Урок '
    },
    {
        title: 'Модуль 2',
        image:`kSx9P6P588g`,
        imagetwo:`kSx9P6P588g`,
        text: '7  Observable example',
        study:'Урок '
    },
    {
        title: 'Модуль 3',
        image:`jKIEUdAMtrQ`,
        imagetwo:`jKIEUdAMtrQ`,
        text: '7  Observable example',
        study:'Урок '
    },
    {
        title: 'Модуль 4',
        image:`vk_xq1P7vIU`,
        imagetwo:`vk_xq1P7vIU`,
        text: '7  Observable example',
        study:'Урок '
    },
    {
        title: 'Модуль 5',
        image:`-7asGU6mWYI`,
        imagetwo:`-7asGU6mWYI`,
        text: '7  Observable example',
        study:'Урок '
    },



];

const Program = () => {

    const [activeIndex,setActiveIndex] = useState(null)

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
                           <iframe width="470" height="300" src="https://www.youtube.com/embed/GFAFTXQcmew"
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
                                    className={`accordion-item ${activeIndex === index ?  <TfiArrowCircleUp/> : <TfiArrowCircleDown/>}`}
                                    onClick={() => handleClick(index)}>


                                    <div className="program--vid__accordion--title">{item.title}</div>
                                    {index === activeIndex && (
                                        <div className="program--vid__accordion--title__content">

                                            <div className="program--vid__accordion--title__content--videos">

                                                    <iframe width="100" height="70"
                                                            src={`https://www.youtube.com/embed/${item.imagetwo}`}
                                                            title="YouTube video player" frameBorder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                            allowFullScreen></iframe>
                                                   <div>
                                                       <p>{item.text}</p>
                                                       <span>{item.study}</span>
                                                   </div>


                                            </div>
                                            <div className="program--vid__accordion--title__content--videos">

                                                <iframe width="100" height="70"
                                                        src={`https://www.youtube.com/embed/${item.imagetwo}`}
                                                        title="YouTube video player" frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        allowFullScreen></iframe>
                                                <div>
                                                    <p>{item.text}</p>
                                                    <span>{item.study}</span>
                                                </div>


                                            </div>

                                            <div className="program--vid__accordion--title__content--videos">

                                                <iframe width="100" height="70"
                                                        src={`https://www.youtube.com/embed/${item.imagetwo}`}
                                                        title="YouTube video player" frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        allowFullScreen></iframe>
                                                <div>
                                                    <p>{item.text}</p>
                                                    <span>{item.study}</span>
                                                </div>


                                            </div>
                                            <div className="program--vid__accordion--title__content--videos">

                                                <iframe width="100" height="70"
                                                        src={`https://www.youtube.com/embed/${item.imagetwo}`}
                                                        title="YouTube video player" frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        allowFullScreen></iframe>
                                                <div>
                                                    <p>{item.text}</p>
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