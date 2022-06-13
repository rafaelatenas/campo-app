import {View, Text,StyleSheet } from 'react-native';
import Login from './src/pages/login';
import theme from './src/components/theme';

export default function App() {
  return (
    <View style={theme.container}>
      <Login/>
    </View>
  );
}

