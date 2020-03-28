import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
`;

export const Incident = styled.View`
  padding: 20px;
  background-color: #fff;
  margin: 32px 0 16px;
  border-radius: 8px;
`;

export const Logo = styled.Image``;

export const BackButton = styled.TouchableOpacity``;

export const Property = styled.Text`
  font-size: 14px;
  color: #41414d;
  font-weight: bold;
`;

export const Value = styled.Text`
  font-size: 15px;
  margin: 8px 0 24px;
  color: #737380;
`;

export const ContactBox = styled.View`
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;
`;

export const HeroTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #13131a;
  line-height: 30px;
`;

export const HeroDescription = styled.Text`
  font-size: 15px;
  color: #737380;
  margin-top: 16px;
`;

export const Contacts = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContactButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #e02041;
  height: 50px;
  width: 48%;
`;

export const ContactButtonText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #fff;
`;
