import React, {useContext, useEffect} from 'react';
import {LoginContext} from "../../../Context";


const ReactComent = () => {
    const {smsValue} = useContext(LoginContext)
    const {setSmsValue} = useContext(LoginContext)
    const {login} = useContext(LoginContext)
    const textarea = () => {
        const tx = document.querySelector('textarea')
        const sms = document.querySelector('.reactComent--sms')
        setSmsValue(tx.value)
        sms.innerHTML += `<div class="reactComent--sms__card">
<h3>${login}</h3>
<p>${tx.value}</p>
<div class="reactComent--sms__card--btn">
<button class="btn-del">Удалить</button>
</div>
</div>
`
        smsRemove(sms)
        textareaErr()
        tx.value = ''
    }

    const textareaErr=()=>{
        const tx = document.querySelector('textarea')
        const sms = document.querySelector('.reactComent--sms')
        if(tx.value.trim() === ''){
            sms.innerHTML=''
        }
    }
    function smsRemove(sms){
        sms.addEventListener('click',(e)=>{
            if(e.target.classList.contains('btn-del')){
                e.target.parentNode.parentNode.remove()
            }
        })
    }

    useEffect(()=>{

    },[smsValue])
    return (
        <div id='reactComent'>
            <div className="container">
                <div className="reactComent">
                    <h1>Комментарии</h1>
                    <div className="reactComent--coment">
                        <textarea placeholder={'Ваш комментарий'}></textarea>
                        <button onClick={textarea}>Отправить</button>
                    </div>
                    <div className="reactComent--sms">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReactComent;
