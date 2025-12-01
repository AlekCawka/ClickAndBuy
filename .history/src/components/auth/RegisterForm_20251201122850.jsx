import { useState } from 'react';

function RegisterForm({ onSwitchToLogin }) {
    const [form, setForm] = useState({
        name: '',
        email: '',
        login: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: '',
        }));
    };

    const validate = () => {
        const newErrors = {};

        if (!form.name.trim()) {
            newErrors.name = 'Введите имя';
        }

        if (!form.email.trim()) {
            newErrors.email = 'Введите e-mail';
        } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
            newErrors.email = 'Некорректный e-mail';
        }

        if (!form.login.trim()) {
            newErrors.login = 'Введите логин';
        }

        if (!form.password) {
            newErrors.password = 'Введите пароль';
        } else if (form.password.length < 6) {
            newErrors.password = 'Пароль должен быть не короче 6 символов';
        }

        if (!form.confirmPassword) {
            newErrors.confirmPassword = 'Повторите пароль';
        } else if (form.confirmPassword !== form.password) {
            newErrors.confirmPassword = 'Пароли не совпадают';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validate()) return;

        // Сюда потом придёт запрос на backend: регистрация пользователя
        console.log('REGISTER DATA:', form);

        // Для примера можем очистить форму
        setForm({
            name: '',
            email: '',
            login: '',
            password: '',
            confirmPassword: '',
        });

        // Можно сразу переключить на экран входа, если нужно
        if (onSwitchToLogin) {
            onSwitchToLogin();
        }
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
            <div className="field">
                <label className="field__label" htmlFor="name">
                    Имя
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    className={`field__input ${errors.name ? 'field__input--error' : ''}`}
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Как к вам обращаться?"
                />
                {errors.name && <div className="field__error">{errors.name}</div>}
            </div>

            <div className="field">
                <label className="field__label" htmlFor="email">
                    E-mail
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    className={`field__input ${errors.email ? 'field__input--error' : ''}`}
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                />
                {errors.email && <div className="field__error">{errors.email}</div>}
            </div>

            <div className="field">
                <label className="field__label" htmlFor="reg-login">
                    Логин
                </label>
                <input
                    id="reg-login"
                    name="login"
                    type="text"
                    className={`field__input ${errors.login ? 'field__input--error' : ''}`}
                    value={form.login}
                    onChange={handleChange}
                    placeholder="Придумайте логин"
                />
                {errors.login && <div className="field__error">{errors.login}</div>}
            </div>

            <div className="field">
                <label className="field__label" htmlFor="reg-password">
                    Пароль
                </label>
                <input
                    id="reg-password"
                    name="password"
                    type="password"
                    className={`field__input ${errors.password ? 'field__input--error' : ''}`}
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Минимум 6 символов"
                />
                {errors.password && <div className="field__error">{errors.password}</div>}
            </div>

            <div className="field">
                <label className="field__label" htmlFor="confirmPassword">
                    Повторите пароль
                </label>
                <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    className={`field__input ${errors.confirmPassword ? 'field__input--error' : ''
                        }`}
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Повторите пароль"
                />
                {errors.confirmPassword && (
                    <div className="field__error">{errors.confirmPassword}</div>
                )}
            </div>

            <button className="btn btn--primary" type="submit">
                Зарегистрироваться
            </button>

            <button
                className="btn btn--link"
                type="button"
                onClick={onSwitchToLogin}
            >
                Уже есть аккаунт? Войти
            </button>
        </form>
    );
}

export default RegisterForm;
