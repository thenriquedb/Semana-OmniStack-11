import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';
import { Container, Section, Content, Form } from './styles';

export default function Register() {
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

        <Form>
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="Email" />
          <input maxLength="11" placeholder="Whatsapp" />
          <div>
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
