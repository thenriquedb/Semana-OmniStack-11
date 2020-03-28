import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';
import {
  Container,
  Header,
  BackButton,
  Logo,
  Incident,
  Property,
  Value,
  ContactBox,
  HeroTitle,
  HeroDescription,
  Contacts,
  ContactButton,
  ContactButtonText,
} from './styles';

export default function Detail() {
  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <BackButton onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </BackButton>
      </Header>

      <Incident>
        <Property>ONG</Property>
        <Value>Sociedade Vencer</Value>

        <Property>Caso</Property>
        <Value>Cadela atropelada</Value>

        <Property>Valor</Property>
        <Value>R$ 120,00</Value>
      </Incident>

      <ContactBox>
        <HeroTitle>Salve o dia</HeroTitle>
        <HeroTitle>Seja o herói desse caso!</HeroTitle>
        <HeroDescription> Entre em contato </HeroDescription>

        <Contacts>
          <ContactButton onPress={() => {}}>
            <ContactButtonText> Email </ContactButtonText>
          </ContactButton>

          <ContactButton onPress={() => {}}>
            <ContactButtonText> Whatsapp </ContactButtonText>
          </ContactButton>
        </Contacts>
      </ContactBox>
    </Container>
  );
}
