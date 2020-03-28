import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Incident from '../../components/Incident';

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
  const navigation = useNavigation();

  function navigateToDetail() {
    navigation.navigate('Detail');
  }

  const incidents = [1, 2, 3, 4];

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <HeaderText>
          Total de <HeaderTextBold>0 casos</HeaderTextBold>
        </HeaderText>
      </Header>

      <Title>Bem vindo! </Title>
      <Description>Escolha um dos casos abaixo e salve o dia. </Description>

      <IncidentsList
        keyExtractor={(incident) => String(incident)}
        data={incidents}
        renderItem={({ incident }) => (
          <Incident handleDetails={navigateToDetail} />
        )}
      />
    </Container>
  );
}
