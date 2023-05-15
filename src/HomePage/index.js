import React from 'react';
import "./home.scss"
// import luch from "../img/luch.png"
import men from "../img/men.png"
import tools1 from '../img/tools1.svg'
import tools2 from '../img/tools2.svg'
import tools3 from '../img/tools3.svg'
import lamp from '../img/lamp.svg'
import Application from "./Application";
import Accor from "./Accor";
import Articles from "./Articles/articles";


const Home = () => {
    return (
        <>
        <div id='Home'>
            <div className="container">
                <div className="home">
                    <div className="home--text">
                        <h1>IT образовательная платформа </h1>
                        <p>Наша образовательная платформа вам даст необходимые практические знания для адаптации в IT-сфере.</p>
                    </div>
                    <div className="home--image">
                        {/*<img src={luch} width={850} alt=""/>*/}
                            <img src={men} width={500} alt=""/>
                            <img className='home--image__tool' src={tools1} alt=""/>
                            <img className='home--image__tool2' src={tools2} alt=""/>
                            <img className='home--image__tool3' src={tools3} alt=""/>
                            <img className='home--image__tool4' src={lamp} alt=""/>
                    </div>
                </div>
            </div>
        </div>
            <Articles/>
            <Accor/>
            <Application/>
        </>
    );
};

export default Home;