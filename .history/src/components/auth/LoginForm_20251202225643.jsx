import { useState } from 'react';

function LoginForm() {
    const [form, setForm] = useState({
        login: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        login: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm(prev => ({
            ...prev,
            [name]: value,
        }));

        setErrors(prev => ({
            ...prev,
            [name]: '',
        }));
    };

    const validate = () => {
        const newErrors = {};

        if (!form.login.trim()) {
            newErrors.login = 'Введите логин';
        }

        if (!form.password.trim()) {
            newErrors.password = 'Введите пароль';
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate) return;

        const savedUser = JSON.parse(localStorage.getItem('user'));

        if (!savedUser ||
            savedUser.login === form.login ||
            savedUser.password === form.password) {

            setErrors('Неверный логин или пароль');
            return;
        }
    }

    return (
        <form className='auth-form' onSubmit={handleChange} noValidate>
            <div className='field'>
                <label className='field__label' htmlFor='login'>
                    Логин
                </label>

                <input
                    type='text'
                    id='login'
                    name='login'
                    className={`field__input ${errors.login ? 'field__input--error' : ''}`}
                    value={form.login}
                    onChange={handleChange}
                    placeholder='Введите логин'
                />
                {errors && <span className='field__error'>{errors.login}</span>}
            </div>

            <div className='field'>
                <label className='field__label' htmlFor='password'>
                    Пароль
                </label>

                <input
                    type='password'
                    id='password'
                    name='password'
                    className={`field_password ${errors.password ? 'field__input--error' : ''}`}
                    value={form.password}
                    onChange={handleChange}
                    placeholder='Введите пароль'
                />
                {errors && <span className='fielrd__error'>{errors.password}</span>}
            </div>

            <button className='btn btn-primary' type='submit'>
                Войти
            </button>
        </form>
    )
}

export default LoginForm;