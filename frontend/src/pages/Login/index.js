import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import { Container, Form, HeroesImg } from './styles';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Login() {
  return (
    <Container>
      <Form>
        <img src={logoImg} alt="Be The Hero" />

        <input type="text" placeholder="Sua ID" />
        <button type="button"> Entrar </button>
        <Link to="/register">
          <FiLogIn size={18} color="#e02041" />
          Nâo tenho cadastro
        </Link>
      </Form>

      <HeroesImg src={heroesImg} alt="Heroes" />
    </Container>
  );
}
