import React from 'react';
import {useState} from "react";
import {TfiArrowCircleDown, TfiArrowCircleUp} from "react-icons/tfi";
import "../Late/style.scss"
import "../media.scss"

const data = [
    {
        Question: 'Что такое зарезервированные слова в программировании?',
        answer:
            "Зарезерви́рованное сло́во (или ключево́е сло́во) — в языках\n" +
            "                                программирования слово, имеющее специальное значение.Идентификаторы с такими именами запрещены. В лексическом\n" +
            "                                анализе зарезервированное слово фигурирует как одна лексема\n" +
            "                                особого типа.",
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
    },

]


const Late = () => {

    const [selected, setSelected] = useState(null)

    const toggle = (i) =>{
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }
    return (
        <div id='late'>
            <div className="container">
                <div className="late">
                    <div className="late--all">
                        <div className='late--all__board'>
                            <h1>Остались вопросы?</h1>
                        </div>
                        <div className='late--all__item'>
                            {data.map((cold, i) => (
                                <div className='late--all__item--cold'>
                                    <div className='late--all__item--cold__title' onClick={() =>toggle(i)}>
                                        <h2>{cold.Question}</h2>
                                        <span> {selected === i ? <TfiArrowCircleUp/> :  <TfiArrowCircleDown/>} </span>
                                    </div>
                                    <hr/>
                                    <div className= {
                                        selected === i ? 'late--all__item--cold__content::shadow' : 'late--all__item--cold__content'
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

export default Late;

