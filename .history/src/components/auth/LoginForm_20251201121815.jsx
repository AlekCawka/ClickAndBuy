import { useState } from 'react';

function LoginForm() {
    const [form, setForm] = useState({
        login: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

        // По ходу ввода можно очищать ошибку по конкретному полю
        setErrors((prev) => ({
            ...prev,
            [name]: '',
        }));
    };

    const validate = () => {
        const newErrors = {};

        if (!form.login.trim()) {
            newErrors.login = 'Введите логин или e-mail';
        }

        if (!form.password) {
            newErrors.password = 'Введите пароль';
        } else if (form.password.length < 6) {
            newErrors.password = 'Пароль должен быть не короче 6 символов';
        }

        setErrors(newErrors);

        // если объект без ключей — ошибок нет
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validate()) return;

        // Тут потом будет реальный запрос на backend
        console.log('LOGIN DATA:', form);

        // Временно просто очистим пароль, логин можно оставить
        setForm((prev) => ({
            ...prev,
            password: '',
        }));
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
            <div className="field">
                <label className="field__label" htmlFor="login">
                    Логин или e-mail
                </label>
                <input
                    id="login"
                    name="login"
                    type="text"
                    className={`field__input ${errors.login ? 'field__input--error' : ''}`}
                    value={form.login}
                    onChange={handleChange}
                    placeholder="username или email@example.com"
                />
                {errors.login && <div className="field__error">{errors.login}</div>}
            </div>

            <div className="field">
                <label className="field__label" htmlFor="password">
                    Пароль
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    className={`field__input ${errors.password ? 'field__input--error' : ''}`}
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Введите пароль"
                />
                {errors.password && <div className="field__error">{errors.password}</div>}
            </div>

            <button className="btn btn--primary" type="submit">
                Войти
            </button>
        </form>
    );
}

export default LoginForm;
