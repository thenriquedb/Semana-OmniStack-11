import styled from 'styled-components/native';
import { FlatList } from 'react-native';

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

export const Logo = styled.Image``;

export const IncidentsList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 32px;
`;

export const HeaderText = styled.Text`
  font-size: 15px;
  color: #737380;
`;

export const HeaderTextBold = styled.Text`
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: 30px;
  margin: 48px 0 16px 0;
  color: #13131a;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #737380;
`;
