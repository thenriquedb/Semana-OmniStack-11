import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';

import MenuDesktop from '../../components/MenuDesktop';
import MenuMobile from '../../components/MenuMobile';

import api from '../../services/api';

import { Container, Incidents, Incident } from './styles';

export default function Profile() {
  const history = useHistory();
  const ongId = localStorage.getItem('@BeTheHero/id');

  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    async function getIncidents() {
      try {
        const response = await api.get('/profile', {
          headers: {
            Authorization: ongId,
          },
        });

        setIncidents(response.data);
      } catch (error) {
        alert('Ocorreu um erro ao tentar buscar os casos cadastrados');
      }
    }

    getIncidents();
  }, [ongId]);

  async function handleDelete(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (error) {
      alert('Erro ao delete caso. Tente novamente');
    }
  }

  function handleLogout() {
    localStorage.removeItem('@BeTheHero/id');
    localStorage.removeItem('@BeTheHero/name');

    history.push('/');
  }
  return (
    <>
      <Container>
        <MenuMobile handleLogout={handleLogout} />
        <MenuDesktop handleLogout={handleLogout} />

        <h1> Casos cadastrados </h1>
        <Incidents>
          {incidents.map((incident) => (
            <Incident key={incident.id}>
              <strong>CASO:</strong>
              <p>{incident.title}</p>

              <strong>DESCRIÇÃO:</strong>
              <p>{incident.description}</p>

              <strong>VALOR:</strong>
              <p>R$ {incident.value.toFixed(2).replace('.', ',')}</p>

              <button onClick={() => handleDelete(incident.id)} type="button">
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </Incident>
          ))}
        </Incidents>
      </Container>
    </>
  );
}
