import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CardList } from './src/components/CardList/CardList';
import { PokemonProvider } from './src/context/PokemonProvider';

export default function App() {
  return (
    <PokemonProvider>

    <View style={styles.container}>
      <Text style={styles.title}>Pokemorice</Text>
      <CardList/>
      
      <StatusBar style="auto" />
    </View>
</PokemonProvider>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:20,    
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: 'rgba(199, 46, 46, 0.6)',
    shadowColor: 'rgba(31, 38, 135, 0.37)',
    height:"100%",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 32,
    shadowOpacity: 1,
    elevation: 8, // solo en Android
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.18)',
  },
  title:{
    fontSize:40,
  }
});
