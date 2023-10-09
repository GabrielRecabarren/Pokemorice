import React, { useState, useEffect } from "react";
import { PokemonContext } from "./PokemonContext";

export const PokemonProvider = ({ children }) => {
  const [pokemon16, setPokemon16] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function obtenerDatosDe16Pokemon() {
      const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
      const numerosAleatorios = generarNumerosAleatorios(16);

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

        setPokemon16(datosPokemon);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    obtenerDatosDe16Pokemon();
  }, []);

  const getRandomPokemon = () => {
    const randomIndex = Math.floor(Math.random() * pokemon16.length);
    return pokemon16[randomIndex];
  };

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
        pokemon16,
        loading,
        error,
        getRandomPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
