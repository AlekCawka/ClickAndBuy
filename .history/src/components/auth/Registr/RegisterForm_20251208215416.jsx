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
    }
}

export default App;