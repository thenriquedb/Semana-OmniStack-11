import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Button from '../../components/Button';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import { Container, Section, Content, Form } from './styles';

export default function NewIncident() {
  const ongId = localStorage.getItem('@BeTheHero/id');
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post('/incidents', data, {
        headers: {
          Authorization: ongId,
        },
      });

      history.push('/profile');
    } catch (error) {
      alert('Erro ao cadastrar. Tente novamente');
    }
  }

  return (
    <Container>
      <Content>
        <Section>
          <img src={logoImg} alt="Be The Hero" />
          <h1> Cadastrar novo caso </h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso
          </p>

          <Link to="/profile">
            <FiArrowLeft size={18} color="#e02041" />
            Voltar para home
          </Link>
        </Section>

        <Form onSubmit={handleSubmit}>
          <input
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título do caso"
          />

          <textarea
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição"
          />

          <input
            value={value}
            required
            onChange={(e) => setValue(e.target.value)}
            placeholder="Valor em reais"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
