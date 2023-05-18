import React from 'react';
import "./app.scss"

const Application = () => {
    return (
        <div id='Application'>
            <div className="container">
                <div className="application">
                    <div className="application--left">
                        <h1>Оставить заявку</h1>
                        <p>Заполните краткую форму
                            с ключевым вопросами, и
                            мы подготовимся к разговору
                            с вами </p>
                    </div>
                    <div className="application--right">
                        <div className='application--right__inputs'>
                            <h2>ФИО*</h2>
                            <input type="text"/>
                        </div>
                     <div className='application--right__inputs'>
                         <h2>Номер телефон*</h2>
                         <input type="number"/>
                     </div>
                     <div className='application--right__inputs'>
                         <h2>Email*</h2>
                         <input type="email"/>
                     </div>
                        <div>
                            <button>Отправить</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Application;