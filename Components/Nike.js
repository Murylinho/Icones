import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';
import nike1 from './../assets/Tenis/Nike/1.png';
import nike2 from './../assets/Tenis/Nike/2.png';
import nike3 from './../assets/Tenis/Nike/3.png';
import nike4 from './../assets/Tenis/Nike/4.png';
import nike5 from './../assets/Tenis/Nike/5.png';
export default function Nike(props) {
    return (
      <ScrollView>
        <ImageBackground style={styles.container}>

              <ImageBackground style={styles.card} source={nike1}>
                  <Text style={styles.card_tiutlo}>Nike Air Winflo 9 Rosa</Text>
                  <Text style={styles.card_valor}>R$ 341,99</Text>
              </ImageBackground>

            <ImageBackground style={styles.card} source={nike2}>
                <Text style={styles.card_tiutlo}>Nike Air Winflo 9 Preto</Text>
                <Text style={styles.card_valor}>R$ 484,49</Text>
            </ImageBackground>

            <ImageBackground style={styles.card} source={nike3}>
                <Text style={styles.card_tiutlo}>Nike Renew Ride 3</Text>
                <Text style={styles.card_valor}>R$ 427,49</Text>
            </ImageBackground>

            <ImageBackground style={styles.card} source={nike4}>
                <Text style={styles.card_tiutlo}>Nike Renew Ride 4</Text>
                <Text style={styles.card_valor}>R$ 417,99</Text>
            </ImageBackground>

            <ImageBackground style={styles.card} source={nike5}>
                <Text style={styles.card_tiutlo}>Nike Renew Run 3</Text>
                <Text style={styles.card_valor}>R$ 427,49</Text>
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