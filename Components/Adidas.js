import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

import adidas1 from './../assets/Tenis/Adidas/10.png';
import adidas2 from './../assets/Tenis/Adidas/9.png';
import adidas3 from './../assets/Tenis/Adidas/8.png';
import adidas4 from './../assets/Tenis/Adidas/7.png';
import adidas5 from './../assets/Tenis/Adidas/6.png';

export default function Adidas(props) {
    return (
      <ScrollView>
        <ImageBackground style={styles.container}>
            <ImageBackground style={styles.card} source={adidas1}>
                <Text style={styles.card_tiutlo}>Adidas Coreracer Masculino</Text>
                <Text style={styles.card_valor}>R$ 179,99</Text>
            </ImageBackground>

            <ImageBackground style={styles.card} source={adidas2}>
                <Text style={styles.card_tiutlo}>Adidas Breaknet Masculino</Text>
                <Text style={styles.card_valor}>R$ 208,99</Text>
            </ImageBackground>

            <ImageBackground style={styles.card} source={adidas3}>
                <Text style={styles.card_tiutlo}>Adidas Lite Racer Rebold 1</Text>
                <Text style={styles.card_valor}>R$ 379,99</Text>
            </ImageBackground>

            <ImageBackground style={styles.card} source={adidas4}>
                <Text style={styles.card_tiutlo}>Adidas Lite Racer Rebold 2</Text>
                <Text style={styles.card_valor}>329,05 </Text>
            </ImageBackground>

            <ImageBackground style={styles.card} source={adidas5}>
                <Text style={styles.card_tiutlo}>Adidas Lite Racer Rebold 3</Text>
                <Text style={styles.card_valor}>R$ 218,49</Text>
            </ImageBackground>
        </ImageBackground>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'Black',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
    },
    card: {
        width: 300,
        height: 300,
        marginTop: 20,
        marginBottom: 20,
    },
    card_tiutlo: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor:'#0f0f0fdb',
        paddingLeft:10,
        color:'#FFF'
    },
      card_valor: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor:'#0f0f0fdb',
        color:'Black',
        marginTop: 250,
        textAlign:'center'
    },
});