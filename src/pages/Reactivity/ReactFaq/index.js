import React, {useState} from 'react';
import {TfiArrowCircleDown, TfiArrowCircleUp} from "react-icons/tfi";


const data = [
    {
        Question: 'Как мне начать обучение ?',
        answer:
            "Очень просто – зарегистрироваться. Это займет всего несколько минут. " +
            "Создайте свой аккаунт с помощью адреса электронной почты и номера телефона." +
            " Мастер-класс станет доступен сразу после оплаты или в день запуска.",
    },
    {
        Question: 'Могу ли я отказаться от автопродления подписки?',
        answer:
            'Помните, что от подписки как от услуги вы можете\n' +
            '                                отказаться в любой момент. Такое право предоставлено\n' +
            '                                всем потребителям в соответствии со статьей 32 Закона\n' +
            '                                о защите прав потребителей, а также в соответствии с\n' +
            '                                пунктом 1 статьи 782 Гражданского кодекса РФ.',
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
    }
]
const ReactFaq = () => {
    const [selected, setSelected] = useState(null)

    const toggle = (i) =>{
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }
    return (
        <div id='Accor'>
            <div className="container">
                <div className="accorFaq">
                    <span style={{fontSize:'18px',color:'#A5A5A5'}}>FAQ</span>
                    <h1 style={{fontSize:'36px',color:'white',padding:'25px 0 50px 0'}}>Остались вопросы?</h1>
                </div>
            <div className="accor--all__item" style={{
                transition: ".5s"
            }}>
            {data.map((cold, i) => (
                <div className='accor--all__item--cold'>
                    <div className='accor--all__item--cold__title' onClick={() =>toggle(i)}>
                        <h2>{cold.Question}</h2>
                        <span> {selected === i ? <TfiArrowCircleUp/> :  <TfiArrowCircleDown/>} </span>
                    </div>
                    <hr/>
                    <div className= {
                        selected === i ? 'accor--all__item--cold__content::shadow' : 'accor--all__item--cold__content'
                    }
                    >{cold.answer}</div>
                </div>
            ))}
        </div>
        </div>
        </div>
    );
};

export default ReactFaq;