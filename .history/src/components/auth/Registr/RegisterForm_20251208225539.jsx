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
        const localePhone = getLocalPhoneDigits(input.phone);
    }
}

export default App;

