import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaUser, FaQuestion, FaPlus, FaCalendarAlt, FaEdit, FaTrashAlt } from 'react-icons/fa';

const PrincipalScreen = () => {
  return (
    <div style={{ background: '#EDEDEE', height: '100vh' }}>
      {/* Top Bar */}
      <div style={{ background: '#333', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaBars style={{ marginRight: '1rem', cursor: 'pointer' }} />
          <h2>SAVU</h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaUser style={{ marginRight: '1rem' }} />
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div style={{ padding: '2rem' }}>
        {/* Bloco Agendamentos */}
        <div style={{ background: 'white', padding: '1rem', display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <div style={{ background: '#e9e9e9', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
            <FaCalendarAlt />
          </div>
          <div style={{ marginLeft: '1rem' }}>
            <h3>Visitas Agendadas</h3>
            <p>Histórico dos meus agendamentos de visitas</p>
          </div>
        </div>

        {/* Barra de Pesquisa e Botões */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <input type="text" placeholder="Pesquisar..." style={{ marginRight: '1rem', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }} />
          <div style={{ display: 'flex' }}>
            <button style={{ marginRight: '0.5rem', background: 'orange', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px' }}>
              <FaQuestion style={{ marginRight: '0.3rem' }} />
              Ajuda
            </button>
            <button style={{ background: '#007BFF', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
              <FaPlus style={{ marginRight: '0.3rem' }} />
              Agendar uma visita
            </button>
          </div>
        </div>

        {/* Tabela de Dados */}
        {/* Cabeçalho */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr auto', background: 'white', padding: '1rem', fontWeight: 'bold' }}>
          <div>Visita</div>
          <div>Data</div>
          <div>Horário início</div>
          <div>Horário término</div>
          <div>Status</div>
          <div>Gerenciar</div>
        </div>

        {/* Linha de Dados (Exemplo) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr auto', background: 'white', padding: '1rem', borderBottom: '1px solid #ccc' }}>
          <div>Visita 1</div>
          <div>2023-07-19</div>
          <div>09:00 AM</div>
          <div>11:00 AM</div>
          <div>Agendada</div>
          <div style={{ display: 'flex' }}>
            <button style={{ marginRight: '0.5rem' }}>
              <FaEdit />
            </button>
            <button>
              <FaTrashAlt />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalScreen;
