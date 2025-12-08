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
            newValue = formatPhone(value);
        }

        const updatedData = {
            ...formData,
            [name]: newValue,
        };

        setFormData(updatedData);

        const validationResult = validateForm(updatedData);

        setErrors(prev => ({
            ...prev,
            [name]: validationResult[name] || '',
        }));
    };

}

export default App;

