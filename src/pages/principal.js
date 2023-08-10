import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaUser, FaQuestion, FaPlus, FaCalendarAlt, FaEdit, FaTrashAlt,FaSearch } from 'react-icons/fa';
import './login.css';

const PrincipalScreen = () => {
  const iconStyle = {
    marginRight: '0.5rem',
    verticalAlign: 'middle',
  };

  const handleEditClick = () => {
    console.log('Clicou em Editar');
    // Adicione sua lógica de edição aqui
  };

  const handleDeleteClick = () => {
    console.log('Clicou em Excluir');
    // Adicione sua lógica de exclusão aqui
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
            <FaCalendarAlt size={32} />
          </div>
          <div>
            <h1 style={{ margin: 0 }}>Visitas Agendadas</h1>
            <p style={{ margin: 0,  fontSize:'18px', marginLeft:'0.2rem'}}>Histórico dos meus agendamentos de visitas</p>
          </div>
        </div>

        {/* Barra de Pesquisa e Botões */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', background: 'white', borderRadius: '5px', border: '1px solid #ccc', padding: '0.5rem', marginTop:'1.5rem' }}>
            <FaSearch style={{ marginLeft: '0.5rem', marginRight: '0.5rem', fontSize: '16px' }} />
            <input type="text" placeholder="Pesquisar..." style={{ padding: '0.5rem', borderRadius: '5px', border: 'none', outline: 'none', fontSize: '14px' }} />
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Link to="/tipo"className="button button-tipo link-no-underline" >
              <FaQuestion style={{ marginRight: '0.5rem' }} />
              Tipo de Visitas
            </Link>
          
            <button className="button button-agendar link-no-underline">
              <FaPlus style={{ marginRight: '0.5rem' }} />
              Agendar uma visita
            </button>
          </div>
        </div>


        <div style={{ boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)' }}>
        {/* Tabela de Dados */}
        {/* Cabeçalho */}
        <div style={{ display: 'flex', borderBottom: '1px solid #ccc', background: 'white', padding: '1rem', fontWeight: 'bold', fontSize: '18px', gap: '1rem', alignItems: 'center', marginTop: '1.5rem' }}>
          <div style={{ flex: '1' }}>Visita</div>
          <div style={{ flex: '1' }}>Data</div>
          <div style={{ flex: '1' }}>Horário início</div>
          <div style={{ flex: '1' }}>Horário término</div>
          <div style={{ flex: '1' }}>Status</div>
          <div style={{ flex: '1', textAlign: 'center' }}>Gerenciar</div>
          
        </div>

        {/* Linha de Dados (Exemplo) */}
        <div style={{ display: 'flex', flexDirection: 'column', background: 'white', padding: '1rem', gap: '1rem', fontSize: '16px' }}>
          {/* Linha de Dados */}
          <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #ccc', padding: '0.5rem 0' }}>
            <div style={{ flex: '1' }}>Visita 1</div>
            <div style={{ flex: '1' }}>07-08-2023</div>
            <div style={{ flex: '1' }}>09:00 AM</div>
            <div style={{ flex: '1' }}>11:00 AM</div>
            <div style={{ flex: '1' }}>Agendada</div>
            <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <button onClick={handleEditClick} style={{ border: 'none', background: 'none', cursor: 'pointer', marginLeft: '1rem' }}>
                <FaEdit size={20} style={iconStyle} />
              </button>
              <button onClick={handleDeleteClick} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                <FaTrashAlt size={20} style={iconStyle} />
              </button>
            </div>
          </div>


          {/* Outra Linha de Dados */}
          <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #ccc', padding: '0.5rem 0' }}>
            <div style={{ flex: '1' }}>Visita 2</div>
            <div style={{ flex: '1' }}>08-08-2023</div>
            <div style={{ flex: '1' }}>10:00 AM</div>
            <div style={{ flex: '1' }}>12:00 PM</div>
            <div style={{ flex: '1' }}>Concluída</div>
            <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <button onClick={handleEditClick} style={{ border: 'none', background: 'none', cursor: 'pointer', marginLeft: '1rem' }}>
                <FaEdit size={20} style={iconStyle} />
              </button>
              <button onClick={handleDeleteClick} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                <FaTrashAlt size={20} style={iconStyle} />
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>

        
    </div>
  );
};

export default PrincipalScreen;
