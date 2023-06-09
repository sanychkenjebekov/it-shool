import React from 'react';
import Android from "../../img/Android.png"
import Courses from "./Courses";
import MasterClasses from "./Master-classes";
import Packages from "./Packages";
import Swiper from "./Swiper";
import Otzyvy from "../../pages/aboutUs/otzyvy";

function OurSchool() {
    return (
        <>
            <div id="ourSchool">
                <div className="container">
                    <div className="ourSchool">
                        <div className="school1">
                            <rem>Главная / <span style={{color:'white'}}>О школе</span></rem>
                            <h1>О нашей школе:</h1>
                            <p>Наша платформа — это интенсивная программа <br/>
                                обучения для тех, кто хочет освоить востребованную <br/>
                                профессию, войти в IT и зарабатывать больше.</p>
                            <h1>Наша миссия:</h1>
                            <p>Сформировать интерес к современным технологиям <br/>
                                и помочь школьнику определиться с выбором <br/>
                                будущей специальности.</p>
                        </div>
                        <div className="school2">
                            <img src={Android} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <Courses/>
            <MasterClasses/>
            <Packages/>
            <Otzyvy/>
            <Swiper/>
        </>
    );
}

export default OurSchool;