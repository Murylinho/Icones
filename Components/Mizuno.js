import { StyleSheet, Text, ScrollView, ImageBackground } from 'react-native';

import mizuno1 from './../assets/Tenis/Mizuno/11.png';
import mizuno2 from './../assets/Tenis/Mizuno/12.png';

export default function Mizuno(props) {
    return (
      <ScrollView>
        <ImageBackground style={styles.container}>
            <ImageBackground style={styles.card} source={mizuno1}>
                <Text style={styles.card_tiutlo}>Mizuno Cometa</Text>
                <Text style={styles.card_valor}>R$ 199,40</Text>
            </ImageBackground>

            <ImageBackground style={styles.card} source={mizuno2}>
                <Text style={styles.card_tiutlo}>Mizuno Cometa</Text>
                <Text style={styles.card_valor}>R$ 249,90</Text>
            </ImageBackground>

            <ImageBackground style={styles.card} source={mizuno2}>
                <Text style={styles.card_tiutlo}>Mizuno Cometa</Text>
                <Text style={styles.card_valor}>R$ 249,90</Text>
            </ImageBackground>

            <ImageBackground style={styles.card} source={mizuno2}>
                <Text style={styles.card_tiutlo}>Mizuno Cometa</Text>
                <Text style={styles.card_valor}>R$ 249,90</Text>
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
        width: 360,
        height: 250,
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
        marginTop: 197,
        textAlign:'center'
    },
});