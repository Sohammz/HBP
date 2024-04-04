import { View, Text,StyleSheet, ScrollView ,Image} from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'

const fruits = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent} horizontal={true}>
        <View style={styles.card}>
            <Text style={styles.title}> LENTILS</Text>
            <Image source={require("@/assets/images/nutrition/pulses/Masoor-Dal.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
               Proteins : 24g{'\n'}Fats : 1.4g{'\n'}Carbs : 6g
            </Text>
        </View>

        <View style={styles.card}>
            <Text style={styles.title}> CHICKPEAS</Text>
            <Image source={require("@/assets/images/nutrition/pulses/chana-dal.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
               Proteins : 19g{'\n'}Fats : 4.3g{'\n'}Carbs : 61g
            </Text>
        </View>

        <View style={styles.card}>
            <Text style={styles.title}> GREEN-GRAM</Text>
            <Image source={require("@/assets/images/nutrition/pulses/3moong.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
               Proteins : 19g{'\n'}Fats : 1.2g{'\n'}Carbs : 62g
            </Text>
        </View>

        <View style={styles.card}>
            <Text style={styles.title}> PIGEON PEAS </Text>
            <Image source={require("@/assets/images/nutrition/pulses/toor-dal.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
               Proteins : 22g{'\n'}Fats : 1.6g{'\n'}Carbs : 62g
            </Text>
        </View>

        <View style={styles.card}>
            <Text style={styles.title}> BLACK GRAM</Text>
            <Image source={require("@/assets/images/nutrition/pulses/udrad dal.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
               Proteins : 25g{'\n'}Fats : 1.4g{'\n'}Carbs : 59g
            </Text>
        </View>

        <View style={styles.card}>
            <Text style={styles.title}> BENGAL GRAM</Text>
            <Image source={require("@/assets/images/nutrition/pulses/Bengal-Gram.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
               Proteins : 20g{'\n'}Fats : 5.3g{'\n'}Carbs : 61g
            </Text>
        </View>

        <View style={styles.card}>
            <Text style={styles.title}> RED-KIDNEY BEANS</Text>
            <Image source={require("@/assets/images/nutrition/pulses/rajma.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
               Proteins : 8.7g{'\n'}Fats : 0.5g{'\n'}Carbs : 22.8g
            </Text>
        </View>

        <View style={styles.card}>
            <Text style={styles.title}> SPLIT PEAS</Text>
            <Image source={require("@/assets/images/nutrition/pulses/green-splits.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
               Proteins : 8.9g{'\n'}Fats : 8.3g{'\n'}Carbs : 20.6g
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