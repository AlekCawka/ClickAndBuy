import { useState } from 'react';
import LoginForm from './components/auth/LoginForm.jsx';
import RegisterForm from './components/auth/Registr/RegisterForm.jsx';
import './App.css';

function App() {
  const [mode, setMode] = useState('login');
  const isLogin = mode === 'login';

  return (
    <div className='app-root'>
      <div className='auth-card'>
        <h1 className='auth-title'>
          {isLogin ? 'Вход в ClickAndBuy' : 'Регистрация'}
        </h1>
      </div>

    </div>
  )

}

export default App;
