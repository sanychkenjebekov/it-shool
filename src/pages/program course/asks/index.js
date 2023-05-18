import React, {useState} from 'react';
import '../style.scss'
import '../media.scss'
import {TfiArrowCircleDown, TfiArrowCircleUp} from "react-icons/tfi";


const ask = [
    {
        Question: 'Как мне начать обучение ?',
        answer:
            "Очень просто – зарегистрироваться" +
            ". Это займет всего несколько минут." +
            " Создайте свой аккаунт с помощью адреса " +
            "электронной почты и номера телефона. Мастер-класс " +
            "станет доступен сразу после оплаты или в день запуска."
    },
    {
        Question: 'Могу ли я отказаться от автопродления подписки?',
        answer:
            'Помните, что от подписки как от услуги вы можете\n' +
            '  отказаться в любой момент. Такое право предоставлено\n' +
            '   всем потребителям в соответствии со статьей 32 Закона\n' +
            ' о защите прав потребителей, а также в соответствии с\n' +
            '   пунктом 1 статьи 782 Гражданского кодекса РФ.',
    },
    {
        Question: 'Могу ли я вернуть деньги',
        answer:
            'Закон «О защите прав потребителей» позволяет клиенту\n' +
            '                                     передумать и в любое время вернуть деньги за\n' +
            '                                     онлайн-курсы. Однако школа имеет право не возвращать\n' +
            '                                     деньги за уже понесенные расходы по договору. Существует\n' +
            '                                     лицензионный договор, который можно использовать, например,\n' +
            '                                     на курсах без обратной связи.',
    },

]


const Asks = () => {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    return (
        <div id="asks">
            <div className="container">
                <div className="asks">
                    <div className="asks--text">
                        <h1>ОСТАЛИСЬ ВОПРОСЫ?</h1>

                    </div>
                    <div className="asks--all">
                        <div className="asks--all__item" style={{
                            transition: ".5s"
                        }}>
                            {ask.map((cold, i) => (
                                <div className='asks--all__item--cold'>
                                    <div className='asks--all__item--cold__title' onClick={() => toggle(i)}>
                                        <h2>{cold.Question}</h2>
                                        <span> {selected === i ? <TfiArrowCircleUp/> : <TfiArrowCircleDown/>} </span>
                                    </div>
                                    <hr/>
                                    <div className={
                                        selected === i ? 'asks--all__item--cold__content::shadow' : 'asks--all__item--cold__content'
                                    }
                                    >{cold.answer}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Asks;