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
            </div>
        </form>
    )
}

export default LoginForm;