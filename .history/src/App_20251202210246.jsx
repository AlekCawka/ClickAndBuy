import { useState } from 'react';
import LoginForm from './components/auth/LoginForm';
import './App.css';

function App() {
  const [mode, setMode] = useState('login');
  const isLogin = mode === 'login';

  return (
    <div className='app-root'>
      <div className='auth-card'>
        <h1 className='auth-title'>
          {isLogin ? 'Вход' : 'Регистрация'}
        </h1>

        <div className='auth-toggle'>
          <button
            type='button'
            className={`auth-toggle__btn ${isLogin ? 'auth-toggle__btn--active' : ''}`}
            onClick={() => setMode('login')}
          >
            Вход
          </button>

          <button
            type='button'
            className={`auth-toggle__btn ${!isLogin ? 'auth-toggle__btn--active' : ''}`}
            onClick={() => setMode('register')}
          >
            Регистрация
          </button>
        </div>

        {isLogin ? (
          <LoginForm />
        ) : (
          <RegisterForm onSwitchToLogin={() => setMode('login')} />
        )}
      </div>
    </div>
  )
}

export default App;
