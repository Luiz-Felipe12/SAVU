import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaUser, FaBuilding} from 'react-icons/fa';
import './login.css';

const DescricaoScreen = () => {
  const iconStyle = {
    marginRight: '0.5rem',
    verticalAlign: 'middle',
  };
  return (
    <div style={{ background: '#EDEDEE', height: '100vh' }}>
      {/* Top Bar */}
        <div style={{ background: '#2e3039', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <FaBars style={{ marginRight: '1rem', cursor: 'pointer' }} />
            </div>
            <h2>SAVU</h2>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <FaUser style={{ marginRight: '1rem' }} />
            </div>
        </div>

      {/* Conteúdo Principal */}
        <div style={{ padding: '2rem' }}>
            {/* Bloco Agendamentos */}
            <div style={{ display: 'flex', alignItems: 'center', padding: '1rem', paddingLeft:'0rem' }}>
            <div style={{ boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)', background: 'white', padding: '1rem', marginTop: '0.5rem', marginRight:'1rem', borderRadius: '30%' }}>
                <FaBuilding size={32} />
            </div>
            <div>
                <h1 style={{ margin: 0 }}>Visitas</h1>
                <p style={{ margin: 0,  fontSize:'18px', marginLeft:'0.2rem'}}>Detalhes dos tipos de visitas cadastrados no sistema</p>
            </div>
            </div>

        </div>

        
    </div>
  );
};

export default DescricaoScreen;
