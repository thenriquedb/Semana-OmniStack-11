import React, { useEffect, useState } from 'react';
import Incident from '../../components/Incident';
import api from '../../services/api';

import logoImg from '../../assets/logo.png';
import {
  Container,
  Header,
  Logo,
  HeaderText,
  HeaderTextBold,
  Title,
  Description,
  IncidentsList,
} from './styles';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function loadIncidents() {
      try {
        const response = await api.get('/incidents');
        setIncidents(response.data);
        setTotal(response.headers['x-total-count']);
      } catch (error) {
        setIncidents([]);
      }
    }

    loadIncidents();
  }, []);

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <HeaderText>
          Total de <HeaderTextBold>{total} casos</HeaderTextBold>
        </HeaderText>
      </Header>

      <Title>Bem vindo! </Title>
      <Description>Escolha um dos casos abaixo e salve o dia. </Description>

      <IncidentsList
        keyExtractor={(incident) => String(incident.id)}
        data={incidents}
        renderItem={({ item: incident }) => <Incident incident={incident} />}
      />
    </Container>
  );
}
