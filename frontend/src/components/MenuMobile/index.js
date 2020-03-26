import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';
import logoImg from '../../assets/logo.svg';
import Button from '../Button';

function MenuMobile({ handleLogout }) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Be The Hero" />

        <section>
          <Link to="/incidents/new" style={{ marginLeft: 'auto' }}>
            <Button>Cadastrar novo caso</Button>
          </Link>

          <button type="button" onClick={handleLogout}>
            Sair
          </button>
          {/* <Button>
            <FiPower size={32} color="#fff" />
          </Button> */}
        </section>
      </Content>
    </Container>
  );
}

MenuMobile.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default MenuMobile;
