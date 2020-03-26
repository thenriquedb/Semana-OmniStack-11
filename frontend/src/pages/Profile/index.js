import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';
import { Container, LogoutButton, Header, Incidents, Incident } from './styles';

export default function Profile() {
  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Be the Hero" />
        <p>Bem vinda, Sociedade Vencer</p>

        <Link to="/incidents/new" style={{ marginLeft: 'auto' }}>
          <Button type="button">Cadastrar novo caso</Button>
        </Link>

        <LogoutButton>
          <FiPower size={22} color="#e02041" />
        </LogoutButton>
      </Header>

      <h1> Casos cadastrados </h1>

      <Incidents>
        <Incident>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Lorem ipslum dolor</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </Incident>

        <Incident>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Lorem ipslum dolor</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </Incident>

        <Incident>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Lorem ipslum dolor</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </Incident>

        <Incident>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Lorem ipslum dolor</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </Incident>
      </Incidents>
    </Container>
  );
}
