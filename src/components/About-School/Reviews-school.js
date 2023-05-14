import React from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import El from "../../img/Ellipse 40.svg"
import Kyz from "../../img/Kyz.svg"
import {Pagination} from "swiper";



function ReviewsSchool() {
    return (
        <div id="swiper">
            <div className="container">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="swiper">
                            <img src={El} alt=""/>
                            <div className="swiper--swiper1">
                                <h1>Виктор Александарович</h1>
                                <p>С радостью оставляю положительной отзыв! <br/>
                                    Пройдя курс "UX/UI Designer с нуля" я с <br/>
                                    остался полностью доволен, что мой выбор <br/>
                                    пал именно на данную школу. Если вы выберите <br/>
                                    данную школу - вам обеспечена прокачка в выбранной <br/>
                                    вами области. Всячески рекомендую и благодарю!</p>
                                <h5>23.02.2022 г</h5>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper">
                            <img src={Kyz} alt=""/>
                            <div className="swiper--swiper1">
                                <h1>Алина Татьянован</h1>
                                <p>С радостью оставляю положительной отзыв! <br/>
                                    Пройдя курс "UX/UI Designer с нуля" я с <br/>
                                    остался полностью доволен, что мой выбор <br/>
                                    пал именно на данную школу. Если вы выберите <br/>
                                    данную школу - вам обеспечена прокачка в выбранной <br/>
                                    вами области. Всячески рекомендую и благодарю!</p>
                                <h5>23.02.2022 г</h5>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>  <div className="swiper">
                        <img src={El} alt=""/>
                        <div className="swiper--swiper1">
                            <h1>Виктор Александарович</h1>
                            <p>С радостью оставляю положительной отзыв! <br/>
                                Пройдя курс "UX/UI Designer с нуля" я с <br/>
                                остался полностью доволен, что мой выбор <br/>
                                пал именно на данную школу. Если вы выберите <br/>
                                данную школу - вам обеспечена прокачка в выбранной <br/>
                                вами области. Всячески рекомендую и благодарю!</p>
                            <h5>23.02.2022 г</h5>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper">
                            <img src={Kyz} alt=""/>
                            <div className="swiper--swiper1">
                                <h1>Алина Татьянован</h1>
                                <p>С радостью оставляю положительной отзыв! <br/>
                                    Пройдя курс "UX/UI Designer с нуля" я с <br/>
                                    остался полностью доволен, что мой выбор <br/>
                                    пал именно на данную школу. Если вы выберите <br/>
                                    данную школу - вам обеспечена прокачка в выбранной <br/>
                                    вами области. Всячески рекомендую и благодарю!</p>
                                <h5>23.02.2022 г</h5>
                            </div>
                        </div></SwiperSlide>
                    <SwiperSlide>  <div className="swiper">
                        <img src={El} alt=""/>
                        <div className="swiper--swiper1">
                            <h1>Виктор Александарович</h1>
                            <p>С радостью оставляю положительной отзыв! <br/>
                                Пройдя курс "UX/UI Designer с нуля" я с <br/>
                                остался полностью доволен, что мой выбор <br/>
                                пал именно на данную школу. Если вы выберите <br/>
                                данную школу - вам обеспечена прокачка в выбранной <br/>
                                вами области. Всячески рекомендую и благодарю!</p>
                            <h5>23.02.2022 г</h5>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper">
                            <img src={Kyz} alt=""/>
                            <div className="swiper--swiper1">
                                <h1>Алина Татьянован</h1>
                                <p>С радостью оставляю положительной отзыв! <br/>
                                    Пройдя курс "UX/UI Designer с нуля" я с <br/>
                                    остался полностью доволен, что мой выбор <br/>
                                    пал именно на данную школу. Если вы выберите <br/>
                                    данную школу - вам обеспечена прокачка в выбранной <br/>
                                    вами области. Всячески рекомендую и благодарю!</p>
                                <h5>23.02.2022 г</h5>
                            </div>
                        </div></SwiperSlide>
                    <SwiperSlide>  <div className="swiper">
                        <img src={El} alt=""/>
                        <div className="swiper--swiper1">
                            <h1>Виктор Александарович</h1>
                            <p>С радостью оставляю положительной отзыв! <br/>
                                Пройдя курс "UX/UI Designer с нуля" я с <br/>
                                остался полностью доволен, что мой выбор <br/>
                                пал именно на данную школу. Если вы выберите <br/>
                                данную школу - вам обеспечена прокачка в выбранной <br/>
                                вами области. Всячески рекомендую и благодарю!</p>
                            <h5>23.02.2022 г</h5>
                        </div>
                    </div></SwiperSlide>
                </Swiper>
            </div>

        </div>
    );
}

export default ReviewsSchool;