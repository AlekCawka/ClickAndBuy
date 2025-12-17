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
        const localPhone = getLocalPhoneDigits(input.phone);
        const passwordResult = validatePassword(input.password);


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


    function formatPhone(input) {
        const maxLength = 10;
        const phoneCountryCode = '38';
        const local = getLocalPhoneDigits(input).slice(0, maxLength);

        if (!local) return '';

        const part1 = local.slice(0, 3); 
        const part2 = local.slice(3, 6); 
        const part3 = local.slice(6, 8); 
        const part4 = local.slice(8, 10); 

        let result = `+${phoneCountryCode}`;

        if (part1) {
            result += ` (${part1}`;
            if (local.length >= 3) {
                result += ')';
            }
        }

        if (part2) result += ` ${part2}`;
        if (part3) result += `-${part3}`;
        if (part4) result += `-${part4}`;

        return result;
    }

}

export default App;

