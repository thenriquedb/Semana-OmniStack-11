import React from 'react';
import { SafeAreaView } from 'react-native';
import Routes from './src/routes';
import GlobalStyles from './src/styles/GlobalStyles';

export default function App() {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <Routes />
    </SafeAreaView>
  );
}
