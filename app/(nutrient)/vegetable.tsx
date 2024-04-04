import { View, Text,StyleSheet, ScrollView ,Image} from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'

const fruits = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent} horizontal={true}>
        <View style={styles.card}>
            <Text style={styles.title}>SPINACH  </Text>
            <Image source={require("@/assets/images/nutrition/vegetable/spinach.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
            Proteins : 22.86g{'\n'}Fats : 0.39g{'\n'}Carbs : 3.36g
            </Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.title}>FENUGREEK </Text>
            <Image source={require("@/assets/images/nutrition/vegetable/fenugreek.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
            Proteins : 4.4g{'\n'}Fats : 0.9g{'\n'}Carbs : 6.4g
            </Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.title}>POTATO  </Text>
            <Image source={require("@/assets/images/nutrition/vegetable/potato.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
            Proteins : 2.02g{'\n'}Fats : 0.1g{'\n'}Carbs : 20.13g
            </Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.title}>ONION </Text>
            <Image source={require("@/assets/images/nutrition/vegetable/onion.jpeg")  } style={styles.image}/>
            <Text style={styles.description}>
            Proteins : 1.1g{'\n'}Fats : 0.1g{'\n'}Carbs : 9.34g
            </Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.title}>CAULIFLOWER  </Text>
            <Image source={require("@/assets/images/nutrition/vegetable/cauliflower.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
            Proteins : 1.92g{'\n'}Fats : 0.28g{'\n'}Carbs : 4.97g
            </Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.title}>BRINJAL  </Text>
            <Image source={require("@/assets/images/nutrition/vegetable/brinjal.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
            Proteins : 0.98g{'\n'}Fats : 0.28g{'\n'}Carbs : 4.97g
            </Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.title}>BELLPAPER  </Text>
            <Image source={require("@/assets/images/nutrition/vegetable/bellpaper.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
            Proteins : 0.99g{'\n'}Fats : 0.3g{'\n'}Carbs : 6g
            </Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.title}>LADY-FINGER  </Text>
            <Image source={require("@/assets/images/nutrition/vegetable/lady-finger.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
            Proteins : 1.93g{'\n'}Fats : 0.1g{'\n'}Carbs : 5.8g
            </Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.title}>CABBAGE  </Text>
            <Image source={require("@/assets/images/nutrition/vegetable/cabbage.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
            Proteins : 1.28g{'\n'}Fats : 0.1g{'\n'}Carbs : 5.8g
            </Text>
        </View>

       
        
       
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingLeft: 17,
    paddingRight : 26,
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  card: {
    backgroundColor: Colors.white,
    width: 310, 
    height: '80%',
    borderRadius: 10,
    marginHorizontal: 20, 
    alignItems: 'center',
    elevation : 10,
    borderWidth :1,
    borderColor: Colors.white,
  },
  image: {
    width: 260,
    height: 151,
    marginTop: 0,
    marginBottom: 0,
    borderRadius: 20,
    resizeMode: 'cover',
    elevation :1,
    paddingBottom: 20,
  },
  title:{
    fontFamily : 'mon-sb',
    fontSize: 34,
    paddingTop : 30,
    paddingBottom: 20,
  },
  description:{
    fontFamily : 'mon',
    paddingTop : 60,
    fontSize: 20,
  },
  
})
export default fruits