import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import { Container, LogoutButton } from './styles';
import Button from '../Button';
import logoImg from '../../assets/logo.svg';

function MenuDesktop({ handleLogout }) {
  const ongName = localStorage.getItem('@BeTheHero/name');

  return (
    <Container>
      <img src={logoImg} alt="Be the Hero" />
      <p>Bem vinda, {ongName} </p>

      <Link to="/incidents/new" style={{ marginLeft: 'auto' }}>
        <Button type="button">Cadastrar novo caso</Button>
      </Link>

      <LogoutButton onClick={handleLogout}>
        <FiPower size={22} color="#e02041" />
      </LogoutButton>
    </Container>
  );
}

MenuDesktop.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default MenuDesktop;
