import React from 'react';
import LoginScreen from './pages/login';
import CadastroScreen from './pages/cadastro';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RecuperarSenhaScreen from './pages/recuperarSenha';
import TrocarSenhaScreen from './pages/trocarSenha';
import PrincipalScreen from './pages/principal';


const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/cadastro" element={<CadastroScreen />} />
          <Route path="/recuperar" element={<RecuperarSenhaScreen/>} />
          <Route path='/trocarsenha' element={<TrocarSenhaScreen/>} />
          <Route path='/home' element={<PrincipalScreen/>} />
        </Routes>
        
    </Router>

  );
};

export default App;
