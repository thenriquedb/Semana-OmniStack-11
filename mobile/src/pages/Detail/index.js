import React from 'react';
import { Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
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
  const route = useRoute();

  const { incident } = route.params;
  const message = `Olá ${
    incident.name
  }, estou entrando em contato pois gostaria de ajudar no caso ${
    incident.title
  } com o valor de R$ ${incident.value.toFixed(2).replace('.', ',')}`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Herói do caso: Cadelinha atropelada',
      recipients: [incident.email],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=${incident.whatsapp}&text=${message}`
    );
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
        <Value>
          {incident.name} de {incident.city}-{incident.uf}
        </Value>

        <Property>Caso</Property>
        <Value>{incident.title}</Value>

        <Property>Valor</Property>
        <Value>R$ {incident.value.toFixed(2).replace('.', ',')}</Value>
      </Incident>

      <ContactBox>
        <HeroTitle>Salve o dia</HeroTitle>
        <HeroTitle>Seja o herói desse caso!</HeroTitle>
        <HeroDescription> Entre em contato </HeroDescription>

        <Contacts>
          <ContactButton onPress={sendMail}>
            <ContactButtonText> Email </ContactButtonText>
          </ContactButton>

          <ContactButton onPress={sendWhatsapp}>
            <ContactButtonText> Whatsapp </ContactButtonText>
          </ContactButton>
        </Contacts>
      </ContactBox>
    </Container>
  );
}
