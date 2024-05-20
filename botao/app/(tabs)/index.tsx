import { Image, StyleSheet, View, Text  } from 'react-native';

import Botao from "../../components/Botao"
import { useLinkProps } from '@react-navigation/native';


export default function HomeScreen() {

  const  Clicar = () =>{
    alert ('VOCÊ É LINDO')
     
  }
  return (
  <View style={styles.container}>
    <Text style={styles.title}> Olá mundo, atualização de plataforma </Text>
    <Botao title="Clique aqui"  onPress={Clicar}/>
  </View>
  );
}

const styles = StyleSheet.create({
  container : {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "black",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    padding: 20,


  },

});
