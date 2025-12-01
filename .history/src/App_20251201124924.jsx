import { useState } from 'react';
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
      </div>
    </div>
  )
}

export default App;
