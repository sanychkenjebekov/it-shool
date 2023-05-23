// import React, { useState } from 'react';
// import './style.scss'
// import '../media.scss'
//
// function ToDoList() {
//     const [comment, setComment] = useState('');
//     // const initialComment = {
//     //     text: '',
//     //     files: [],
//     // };
//     const [commentsList, setCommentsList] = useState([]);
//     const [replyFormIndex, setReplyFormIndex] = useState(null);
//
//     const handleInputChange = (event) => {
//         setComment(event.target.value);
//     };
//
//     const handleAddComment = () => {
//         // Добавляем комментарий в список комментариев
//         setCommentsList([...commentsList, { text: comment, replies: [] }]);
//
//         // Очищаем поле ввода комментария после добавления
//         setComment('');
//     };
//
//
//     const handleDeleteComment = (commentIndex) => {
//         // Удаляем комментарий из списка комментариев
//         const newCommentsList = commentsList.filter((_, index) => index !== commentIndex);
//         setCommentsList(newCommentsList);
//     };
//
//     const handleAddReply = (commentIndex) => {
//         setReplyFormIndex(commentIndex);
//     };
//
//
//     const handleKeyDown = (event) => {
//         if (event.key === 'Enter') {
//             event.preventDefault();
//             handleAddComment();
//         }
//     };
//
//
//     return (
//         <div id="toDoList">
//             <div className="container">
//                 <h1 className="comment">Комментарии</h1>
//                 <div className="toDoList">
//
//                     <textarea value={comment}
//                               onChange={handleInputChange}
//                               onKeyDown={handleKeyDown}
//                               rows="4" cols="50"
//                               placeholder="Ваш комментарий"
//                     />
//                     <div>
//                         <button onClick={handleAddComment}>Отправить</button>
//
//                     </div>
//
//                    <div className="toDoList--ul">
//                        {/*<input type="file" multiple onChange={handleFileChange} />*/}
//
//                        <ul>
//                            {commentsList.map((comment, commentIndex) => (
//                                <li key={commentIndex}>
//                                    {comment.text}
//                                       <button className="toDoList--ul__del" onClick={() => handleDeleteComment(commentIndex)}>Удалить</button>
//                                       <button  className="toDoList--ul__otv" onClick={() => handleAddReply(commentIndex)}>Ответить</button>
//                                    <ul>
//                                        {comment.replies.map((reply, replyIndex) => (
//                                            <li key={replyIndex}>{reply}</li>
//                                        ))}
//                                        {replyFormIndex === commentIndex && (
//                                            <li>
//                                                <form onSubmit={(event) => handleAddReply(commentIndex, event.target.reply.value)}>
//                                                    <input type="text" name="reply" />
//                                                    <button style={{marginLeft:"30px"}} type="submit">Отправить</button>
//                                                </form>
//                                            </li>
//                                        )}
//                                    </ul>
//                                </li>
//                            ))}
//                        </ul>
//                    </div>
//                 </div>
//             </div>
//
//         </div>
//     );
// }
//
// export default ToDoList;
//
//


import React, {useContext} from "react";
import {LoginContext} from "../../../Context";

function ToDo() {

    const {login} = useContext(LoginContext)
    const textarea = () => {
        const tx = document.querySelector('textarea')
        const sms = document.querySelector('.reactComent--sms')
        sms.innerHTML += `<div class="reactComent--sms__card">
<h3>${login}</h3>
<p>${tx.value}</p>
<div class="reactComent--sms__card--btn">
<button class="btn-del">Удалить</button>
<button class="btn-otvet">Ответить</button>
</div>
<input style="display: none" class="otvet" type="text">
<div class="otvetP"></div>
</div>
`
        smsRemove(sms)
        textareaErr()
        tx.value = ''
    }

    const textareaErr = () => {
        const tx = document.querySelector('textarea')
        const sms = document.querySelector('.reactComent--sms')
        if (tx.value.trim() === '') {
            sms.innerHTML = ''
        }
    }

    function smsRemove(sms) {
        sms.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-del')) {
                e.target.parentNode.parentNode.remove()
            }
        })
    }


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

export default ToDo;