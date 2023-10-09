import { useState, useEffect } from "react";
import { PokemonContext } from "./PokemonContext";

export const PokemonProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [numberOfPokemonToFetch, setNumberOfPokemonToFetch] = useState(8);

  useEffect(() => {
    async function obtenerDatosDePokemon() {
      const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
      const numerosAleatorios = generarNumerosAleatorios(numberOfPokemonToFetch);

      try {
        const datosPokemon = await Promise.all(
          numerosAleatorios.map(async (numero) => {
            const response = await fetch(`${baseUrl}${numero}`);
            if (!response.ok) {
              throw new Error(`Error al obtener datos del Pokémon ${numero}`);
            }
            const data = await response.json();
            return data;
          })
        );

        setPokemonList(datosPokemon);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    obtenerDatosDePokemon();
  }, [numberOfPokemonToFetch]); // Añade numberOfPokemonToFetch como dependencia

  // Función para generar números aleatorios únicos
  function generarNumerosAleatorios(cantidad) {
    const numerosAleatorios = new Set();
    while (numerosAleatorios.size < cantidad) {
      const numero = Math.floor(Math.random() * 150) + 1;
      numerosAleatorios.add(numero);
    }
    return Array.from(numerosAleatorios);
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemonList,
        loading,
        error,
        numberOfPokemonToFetch, // Puedes incluir este valor en el contexto si es necesario
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
