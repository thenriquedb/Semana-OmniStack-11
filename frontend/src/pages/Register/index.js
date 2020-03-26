import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../components/Button';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import { Container, Section, Content, Form } from './styles';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();
    const response = await api.post('/ongs', {
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    try {
      const { id } = response.data;

      alert(`Seu id de acesso: ${id}`);

      history.push('/');
    } catch (error) {
      alert('Erro ao se registrar. Tente novamente');
    }
  }

  return (
    <Container>
      <Content>
        <Section>
          <img src={logoImg} alt="Be The Hero" />
          <h1> Cadastro </h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude as pessoas a
            encontrarem os casos da sua ONG
          </p>

          <Link to="/">
            <FiArrowLeft size={18} color="#e02041" />
            Volte para o Login
          </Link>
        </Section>

        <Form onSubmit={handleRegister}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Nome da ONG"
          />

          <input
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />

          <input
            value={whatsapp}
            required
            onChange={(e) => setWhatsapp(e.target.value)}
            maxLength="11"
            placeholder="Whatsapp"
          />

          <div>
            <input
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
              placeholder="Cidade"
            />

            <input
              value={uf}
              required
              maxLength={2}
              onChange={(e) => setUf(e.target.value)}
              placeholder="UF"
              style={{ width: 80 }}
            />
          </div>

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
