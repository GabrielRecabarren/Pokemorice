// Importa las bibliotecas necesarias

import React, { useContext, useState } from "react";
import { Text, View, Image, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { PokemonContext } from "../../context/PokemonContext";

// Define tu componente Card como una función
const Card = ({ uri }) => {
  const [showImage, setShowImage] = useState(false);
  const { number } = useContext(PokemonContext);

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  return (
    <TouchableWithoutFeedback onPress={toggleImage}>
      <View style={styles.cardContainer}>
        {showImage && uri ? (
          <Image
            source={{
              uri: uri,
            }}
            style={styles.cardImage}
             // Ajusta la imagen al contenedor
          />
        ) : (
          <View style={styles.cardContent}>
            <Text style={{ textAlign: "center" }}>{showImage ? "Cargando..." : number}</Text>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "rgba(74, 144, 226, 0.6)",
    height: 120,
    width: 90,
    shadowColor: "rgba(31, 38, 135, 0.37)",
    marginBottom:10,
    marginTop: 10,
    
    shadowOffset: {
      width: 0,
      height: 8,
      
    },
    shadowRadius: 32,
    shadowOpacity: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.18)",
    alignItems: "center",
    justifyContent: "center",
    overflow:"hidden",
    
  },
  cardImage: {
    height: 200,
    width: 120,
    objectFit:"scale-down",

    

  },
});

// Exporta tu componente Card
export default Card;
