import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  Property,
  Value,
  DetailsButton,
  DetailsButtonText,
} from './styles';

export default function Incident({ handleDetails }) {
  return (
    <Container>
      <Property>ONG</Property>
      <Value>Sociedade Vencer</Value>

      <Property>Caso</Property>
      <Value>Cadela atropelada</Value>

      <Property>Valor</Property>
      <Value>R$ 120,00</Value>

      <DetailsButton onPress={handleDetails}>
        <>
          <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
          <Feather name="arrow-right" size={16} color="#e02041" />
        </>
      </DetailsButton>
    </Container>
  );
}
