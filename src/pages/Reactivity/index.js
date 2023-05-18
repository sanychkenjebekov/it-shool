import React, {useState} from 'react';
import reactiv from '../../img/reactivity.png'
import you from '../../img/reactiv1.jpg'
import you2 from '../../img/reactiv2.jpg'
import you3 from '../../img/reactiv3.jpg'
import you4 from '../../img/reactiv4.jpg'
import {AiOutlineRight} from "react-icons/ai";
import {HiOutlineChevronLeft} from "react-icons/hi";
import ReactFaq from "./ReactFaq";
import ReactComent from "./ReactComent";


const Reactivity = () => {
    const [youTube,setYouTube] = useState('TGPPPFczOj0')
    // const [id,setId] = useState(1)
    const youFr = [
        {
        video: 'TGPPPFczOj0',
        name: '1 Reactivity',
        span: 'Урок',
            img: you,
            id:1
        },
        {
            video: 'Q4rW0fvkt2g',
            name: '2 Reactive approach',
            span: 'Урок',
            img: you2,
            id:2
        },
        {
            video: '2i5Lm7BMtpo',
            name: '3 Observable example',
            span: 'Урок',
            img: you3,
            id:3
        },
        {
            video: 'PQi6WvXgnpQ',
            name: '4 Implementing and subscribing to an observer',
            span: 'Урок',
            img: you4,
            id:4
        }
    ]

    const prev=()=>{
youFr.map((el,inx)=>{})
    }
    const next=()=>{
        youFr.map((el,inx)=>{
            // setId(inx + 1)
            setYouTube(el.video)
        })
    }
    return (
        <>
        <div id='reactivity'>
            <div className="container">
                <div className="reactivity">
                    <h5>Главная / Мастер классы / <span>Реактивное программирование на Java</span></h5>
                   <div className="reactivity--about">
                       <div className="reactivity--about__title">
                           <h1>Reactivity</h1>
                           <p>Когда нужно переходить от прокачивания личной
                               эффективности к изучению эффективности командой?</p>
                       </div>
                       <div className="reactivity--about__img">
                           <img src={reactiv} alt=""/>
                           <div className="reactivity--about__img--title">
                               <h3>Евгений Александрович</h3>
                               <span>Frontend developer</span>
                           </div>
                       </div>
                   </div>
                    <div className="reactivity--youtube">
                        <iframe  src={`https://www.youtube.com/embed/${youTube}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                        <div className="reactivity--youtube__videoAll">
                                {
                                    youFr.map((el)=>(
                                        <div onClick={()=>setYouTube(el.video)} className="reactivity--youtube__videoAll--video">
                                            <img src={el.img} alt=""/>
                                            <div className="reactivity--youtube__videoAll--video__title">
                                                <h3>{el.name}</h3>
                                                <span>{el.span}</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            {/*<div onClick={youFrame} className="reactivity--youtube__videoAll--video">*/}
                            {/*    <img src={you} alt=""/>*/}
                            {/*    <div className="reactivity--youtube__videoAll--video__title">*/}
                            {/*        <h3>1 Reactivity</h3>*/}
                            {/*        <span>Урок</span>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div onClick={youFrame2} className="reactivity--youtube__videoAll--video">*/}
                            {/*    <img src={you2} alt=""/>*/}
                            {/*    <div className="reactivity--youtube__videoAll--video__title">*/}
                            {/*        <h3>2 Reactive approach</h3>*/}
                            {/*        <span>Урок</span>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div onClick={youFrame3} className="reactivity--youtube__videoAll--video">*/}
                            {/*    <img src={you3} alt=""/>*/}
                            {/*    <div className="reactivity--youtube__videoAll--video__title">*/}
                            {/*        <h3>3 Observable example</h3>*/}
                            {/*        <span>Урок</span>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div onClick={youFrame4} className="reactivity--youtube__videoAll--video">*/}
                            {/*    <img src={you4} alt=""/>*/}
                            {/*    <div className="reactivity--youtube__videoAll--video__title">*/}
                            {/*        <h3>4 Implementing and subscribing to an observer</h3>*/}
                            {/*        <span>Урок</span>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="reactivity--youtube__videoAll--btn">
                                <button onClick={prev} className='youTubeBtn1'><HiOutlineChevronLeft/>Предыдущий урок</button>
                                <button onClick={next} className='youTubeBtn2'>Следующий урок <AiOutlineRight/></button>
                            </div>
                        </div>
                    </div>
                    <div className="reactivity--sec2">
                        <div className="reactivity--sec2__about">
                            <h3>Как работает многопоточность в Java? Старая добрая многопоточность
                                в Java — это базовые примитивы многопоточности:</h3>
                            <ul>
                                <li>Threads (потоки);</li>
                                <li>Synchronization (синхронизация);</li>
                                <li>Wait/notify (ожидание/уведомление).</li>
                            </ul>
                        </div>
                        <div className="reactivity--sec2__about">
                            <h3 className='aboutH3'>Сложно писать, сложно отлаживать, сложно тестировать.</h3>
                            <ul>
                                <li>Java 5 Future interface:</li>
                                <li>V get()</li>
                                <li>boolean cancel() V get()</li>
                                <li>boolean isCancelled()</li>
                                <li>boolean isDone()</li>
                                <li>Executors</li>
                                <li>Callable interface</li>
                                <li>BlockingQueue</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <ReactComent/>
            <ReactFaq/>
        </>
    );
};

export default Reactivity;