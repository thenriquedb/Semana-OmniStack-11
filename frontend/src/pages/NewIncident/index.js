import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';
import { Container, Section, Content, Form } from './styles';

export default function NewIncident() {
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

        <Form>
          <input placeholder="Tulo do caso" />
          <textarea placeholder="Descrição" />
          <input placeholder="Valor em reais" />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
