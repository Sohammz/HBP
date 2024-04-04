import { View, Text,StyleSheet, ScrollView ,Image} from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'

const fruits = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent} horizontal={true}>
        <View style={styles.card}>
            <Text style={styles.title}> ALMONDS </Text>
            <Image source={require("@/assets/images/nutrition/oils/almond.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
            Proteins : 21.15g{'\n'}Fats : 49.42g{'\n'}Carbs : 21.67g
            </Text>
        </View>

        <View style={styles.card}>
            <Text style={styles.title}> CASHEW </Text>
            <Image source={require("@/assets/images/nutrition/oils/kaju2.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
            Proteins : 18.22g{'\n'}Fats : 43.85g{'\n'}Carbs : 30.19g
            </Text>
        </View>

        <View style={styles.card}>
            <Text style={styles.title}> PISTACHIOS </Text>
            <Image source={require("@/assets/images/nutrition/oils/pista.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
            Proteins : 20.27g{'\n'}Fats : 43.39g{'\n'}Carbs : 27.97g
            </Text>
        </View>

        <View style={styles.card}>
            <Text style={styles.title}> GROUNDNUTS </Text>
            <Image source={require("@/assets/images/nutrition/oils/Groundnuts.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
            Proteins : 25.8g{'\n'}Fats : 49.24g{'\n'}Carbs : 23.45g
            </Text>
        </View>

        <View style={styles.card}>
            <Text style={styles.title}> OLIVE OIL </Text>
            <Image source={require("@/assets/images/nutrition/oils/ooil.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
            Proteins : 1g{'\n'}Fats : 100g{'\n'}Carbs : 2.97g
            </Text>
        </View>

        <View style={styles.card}>
            <Text style={styles.title}> MUSTARD OIL </Text>
            <Image source={require("@/assets/images/nutrition/oils/moil.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
            Proteins : 5.45g{'\n'}Fats : 100g{'\n'}Carbs : 9.87g
            </Text>
        </View>

        <View style={styles.card}>
            <Text style={styles.title}> SUNFLOWER-OIL </Text>
            <Image source={require("@/assets/images/nutrition/oils/sunflower.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
            Proteins : 4.21g{'\n'}Fats : 100g{'\n'}Carbs : 3.01g
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