import React, { useEffect, useState } from 'react';
import logo from '../../img/логотип.svg';
import { Link } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const Voyti = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('email не может быть пустым');
    const [passwordError, setPasswordError] = useState(
        'Пароль не может быть пустым'
    );
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        setFormValid(emailError === '' && passwordError === '');
    }, [emailError, passwordError]);

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
            default:
                break;
        }
    };

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный e-mail');
        } else {
            setEmailError('');
        }
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 3 || e.target.value.length > 12) {
            setPasswordError('пароль должен быть длиной от 3 до 12  символов');
        } else {
            setPasswordError('');
        }
    };

    const profile = (e) => {
        const prof = document.querySelector('.header--voitiAll');
        const voiti = document.querySelector('.header--podpis');
        const voiti2 = document.querySelector('.burger--menu__podpisAll');
        const prof2 = document.querySelector('.burger--menu__voitiAll');
        if (!e.target.classList.contains('active')) {
            e.target.classList.add('active');
            voiti.style.display='none';
            voiti2.style.display='none';
            prof.style.display='block';
            prof2.style.display='block';
        } else {
            e.target.classList.remove('active');
            voiti.style.display='block';
            voiti2.style.display='block';
            prof.style.display='none';
            prof2.style.display='none';
        }
    };
    return (
        <div id='voyti'>
            <div className='container'>
                <div className='voyti'>
                    <Link to='/'>
                        <img src={logo} alt='' />
                    </Link>
                    <form className='voyti--form'>
                        <div className='voyti--form__input'>
                            <input
                                type='text'
                                name='email'
                                value={email}
                                onChange={emailHandler}
                                onBlur={blurHandler}
                                required
                            />
                            <span>E-mail*</span>
                            {emailDirty && emailError && (
                                <div style={{ color: '#f44336' }}>{emailError}</div>
                            )}
                        </div>
                        <div className='voyti--form__input'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                value={password}
                                onChange={passwordHandler}
                                onBlur={blurHandler}
                                required
                            />
                            <span>Пароль*</span>
                            {passwordDirty && passwordError && (
                                <div style={{ color: '#f44336'}}>{passwordError}</div>
                            )}
                            <h4 className='icon' onClick={togglePasswordVisibility}>
                                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                            </h4>
                        </div>

                        <div className='voyti--form__btn'>
                            <Link to='/' onClick={profile}>
                                <button disabled={!formValid} type='submit'>
                                    Войти
                                </button>
                            </Link>
                            <span>Забыли пароль?</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Voyti;
