import { useState } from 'react';
import './App.css';

function App() {
  const [mode, setMode] = useState('login');
  const isLogin = mode === 'login';

  return (
    <div className='app-root'>

    </div>
  )
}

export default App;
