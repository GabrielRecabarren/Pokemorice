import React, { useContext } from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import Card from '../Card/Card';
import { PokemonContext } from '../../context/PokemonContext';

export const CardList = () => {
  const { pokemonList, loading, error } = useContext(PokemonContext);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : error ? (
        <Text>Error: {error.message}</Text>
      ) : (
        <View style={styles.cardsContainer}>
          {pokemonList.map((pokemon) => (
            <Card key={pokemon.id} uri={pokemon.sprites.front_default} />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    margin: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    shadowColor: 'rgba(31, 38, 135, 0.37)',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 32,
    shadowOpacity: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.18)',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default CardList;
