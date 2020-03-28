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

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function loadIncidents() {
    if (loading) return;

    if (total > 0 && incidents.length === total) return;

    setLoading(true);

    const response = await api.get('/incidents', {
      params: { page },
    });

    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
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
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        data={incidents}
        renderItem={({ item: incident }) => <Incident incident={incident} />}
      />
    </Container>
  );
}
