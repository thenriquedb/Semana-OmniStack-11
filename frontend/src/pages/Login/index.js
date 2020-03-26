import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import Button from '../../components/Button';

import api from '../../services/api';

import { Container, Form, HeroesImg } from './styles';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Login() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/session', { id });
      const { name } = response.data;

      localStorage.setItem('@BeTheHero/id', id);
      localStorage.setItem('@BeTheHero/name', name);

      history.push('/profile');
    } catch (error) {
      alert(`Não foi encontrado nenhuma ong com o id ${id}`);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <img src={logoImg} alt="Be The Hero" />

        <input
          value={id}
          required
          onChange={(e) => setId(e.target.value)}
          placeholder="Sua ID"
        />

        <Button type="submit"> Entrar </Button>
        <Link to="/register">
          <FiLogIn size={18} color="#e02041" />
          Nâo tenho cadastro
        </Link>
      </Form>

      <HeroesImg src={heroesImg} alt="Heroes" />
    </Container>
  );
}
