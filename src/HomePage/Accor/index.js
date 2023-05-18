import React from "react";
import ask from "../../img/ask.svg"
import "./accor.scss"
// import {AiOutlineArrowDown} from "react-icons/ai";
// import {FiArrowUp, FiArrowDown} from "react-icons/fi"
import {useState} from "react";
import {TfiArrowCircleDown, TfiArrowCircleUp} from "react-icons/tfi";

 const Accor = () => {
     const [selected, setSelected] = useState(null)

     const toggle = (i) => {
         if (selected === i) {
             return setSelected(null)
         }

         setSelected(i)
     }

     return (
         <div id="Accor">
             <div className="container">
                 <div className="accor">
                     <div className="accor--photo">
                         <h1>ОСТАЛИСЬ <br/> ВОПРОСЫ?</h1>
                         <img src={ask} alt=""/>
                     </div>
                     <div className="accor--all">
                         <div className="accor--all__item" style={{
                             transition: ".5s"
                         }}>
                             {data.map((cold, i) => (
                                 <div className='accor--all__item--cold'>
                                     <div className='accor--all__item--cold__title'
                                          onClick={() => toggle(i)}>
                                         <h2>{cold.Question}</h2>
                                         <span> {selected === i ? <TfiArrowCircleUp/> : <TfiArrowCircleDown/>} </span>
                                     </div>
                                     <hr/>
                                     <div className={
                                         selected === i ? 'accor--all__item--cold__content::shadow' : 'accor--all__item--cold__content'
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
 }
export default Accor;
const data = [
    {
        Question: 'Что такое зарезервированные слова в программировании?',
        answer:
            "Зарезерви́рованное сло́во (или ключево́е сло́во) — в языках\n" +
            " программирования слово, имеющее специальное значение.Идентификаторы с такими именами запрещены. В лексическом\n" +
            " анализе зарезервированное слово фигурирует как одна лексема\n" +
            " особого типа.",
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
    {
        Question: 'Какие направление в IT самые актуальные',
        answer:
            'В 2022 году чаще всего компании ищут разработчиков,\n' +
            '                                     на втором месте по популярности аналитики, а на\n' +
            '                                     третьем — системные администраторы. Эти данные приводит\n' +
            '                                     в своем исследовании портал «Работа. ру». Также в список\n' +
            '                                     востребованных профессий вошли менеджеры продукта и\n' +
            '                                     тестировщики.',
    },
    {
        Question: 'Нужно ли учить другой язык программирования, перед изучением языка С++?',
        answer: 'С++ разработчику необходимо знать устройство компьютера, основные операторы языка,\n' +
            '                                     правила их применения, принципы объектно-ориентированного программирования. Только в\n' +
            '                                     этом случае он сможет написать рабочий код. Кроме того, ему нужно изучить библиотеки\n' +
            '                                     С++, в которых содержатся наборы функций для создания IT-продуктов.',
    },
    {
        Question: 'Платформа обнавляется?',
        answer: 'Обновление смартфона не только помогает оптимизировать\n' +
            '                                    работу всех программ, но и закроет все возможные «дыры»\n' +
            '                                    в безопасности вашего устройства, поэтому обновлять его все\n' +
            '                                    же необходимо.',
    },
    {
        Question: 'Как я могу получить доступ ка всем курсом',
        answer:
            'На Coursera размещено более 3000 курсов,\n' +
            '                                    и большинство можно прослушать бесплатно.\n' +
            '                                    Но если вы хотите получить сертификат или освоить\n' +
            '                                    специализацию, придется оплачивать программу или\n' +
            '                                    покупать подписку. Но есть лайфхак — финансовая помощь,\n' +
            '                                    которую в теории может попросить каждый. Главное,\n' +
            '                                    составить убедительную заявку. Рассказываем, какие\n' +
            '                                    варианты материальной поддержки предлагают Coursera,\n' +
            '                                    edX и Udacity и как ими воспользоваться.',
    },
]

