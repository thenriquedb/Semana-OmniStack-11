import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Form, HeroesImg } from './styles';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Login() {
  return (
    <Container>
      <Form>
        <img src={logoImg} alt="Be The Hero" />
        <h1> Faça seu login</h1>

        <input type="text" placeholder="Sua ID" />
        <button type="button"> Entrar </button>
        <a href="#">
          <FiLogIn size={18} color="#e02041" />
          Nâo tenho cadastro
        </a>
      </Form>
      <HeroesImg src={heroesImg} alt="Heroes" />
    </Container>
  );
}
