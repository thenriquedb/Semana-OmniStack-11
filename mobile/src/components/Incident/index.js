import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  Property,
  Value,
  DetailsButton,
  DetailsButtonText,
} from './styles';

export default function Incident({ incident }) {
  const navigation = useNavigation();

  const { title, name, value } = incident;

  function navigateToDetail() {
    navigation.navigate('Detail', {
      incident,
    });
  }

  return (
    <Container>
      <Property>ONG</Property>
      <Value>{name}</Value>

      <Property>Caso</Property>
      <Value>{title}</Value>

      <Property>Valor</Property>
      <Value>R$ {value.toFixed(2).replace('.', ',')}</Value>

      <DetailsButton onPress={() => navigateToDetail()}>
        <>
          <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
          <Feather name="arrow-right" size={16} color="#e02041" />
        </>
      </DetailsButton>
    </Container>
  );
}
