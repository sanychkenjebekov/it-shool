import React from 'react';

function Swiper() {
    return (
        <div id="submitSchool">
            <div className="container">
                <div className="submitSchool">
                    <div className="submit1">
                        <h1>Оставить заявку</h1>
                        <p>Заполните краткий бриф с ключевым вопросами, <br/>
                            и мы подготовимся к разговору с вами </p>
                    </div>
                    <div className="submit2">
                        <p>ФИО*</p>
                        <input type={"text"}/>
                        <p>Номер телефон*</p>
                        <input type={"number"}/>
                        <p>Email*</p>
                        <input type={"text"}/> <br/>
                        <button>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Swiper;