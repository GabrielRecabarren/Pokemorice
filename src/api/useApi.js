import { useState, useEffect } from 'react';
import axios from 'axios'; // Asegúrate de tener Axios instalado en tu proyecto


const useApi = (pokemonNumber) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = "https://pokeapi.co/api/v2/pokemon/"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}${pokemonNumber}`);
        setData(response.data);
        setLoading(false);
      } catch (err) {   
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [pokemonNumber]);

  return { data, loading, error };
};

export default useApi;
