import { useState } from "react";

function App() {
    const [formData, setFormData] = useState({
        name: '',
        login: '',
        email: '',
        password: '',
        phone: '',
        country: '',
        city: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        login: '',
        email: '',
        password: '',
        phone: '',
        country: '',
        city: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        let newValue = value;

        if (name === 'phone') {
            newValue = formatPhone(input);
        }

        const updateFormData = {
            ...formData,
            [name]: newValue,
        };

        setFormData(updateFormData);

        const validationResult = validateForm(updateData);

        setErrors(prev => ({
            ...prev,
            [name]: validationResult[name] || '',
        }));
    }

    const validateForm = (input) => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const name = input.name.trim();
        const login = input.login.trim();
        const email = input.login.trim();


        if (!name) {
            newErrors.name = 'Имя обязательно';
        } else if (name.length < 2) {
            newErrors.name = 'Имя должно быть длинее двух символов';
        }

        if (!login) {
            newErrors.login = 'Логин обязателен';
        } else if (login.length < 2) {
            newErrors.login = 'Логин должен содержать два или более символа';
        }

        if (!email) {
            newErrors.email = 'Email (почта) обязателен';
        } else if (!emailRegex.test(email)) {
            newErrors.email = 'Неверный формат почты (email)';
        }

        if (!localPhone) {
            newErrors.phone = 'Телефон обязателен';
        } else if (localPhone.length !== 10) {
            newErrors.phone = `Телефон должен содержать ровно 10 цифр`;
        }
    }

    const formatPhone = (input) => {
        let digits = input.replace(/\D/g, '');

        const country = '+38';
        const LOCAL_LENGTH = 10;

        if (digits.startsWith('38')) {
            digits = digits.slice(2);
        }
        if (digits.startsWith('7')) {
            digits.slice(1);
        }

        const local = digits.replace(/^38/, '').slice(0, LOCAL_LENGTH);

        if (!local.length) return '';

        const part1 = digits.slice(0, 3);
        const part2 = digits.slice(3, 6);
        const part3 = digits.slice(6, 8);
        const part4 = digits.slice(8, 10);

        let formatted = country;

        if (part1) {
            formatted += ` (${part1})`;
            if (local.length >= 3) {
                formatted += ')';
            }
        }

        if (part2) formatted += ` ${part2}`;
        if (part3) formatted += `-${part3}`;
        if (part4) formatted += `-${part4}`;

        return formatted;
    }

    const validatePassword(password) => {
        const rules = [
            {test: (p)}
            https://chatgpt.com/c/692972a5-a5f8-832c-8bf8-e4510237e241
        ]
    }
}

export default App;

