import { View, Text,StyleSheet, ScrollView ,Image} from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'

const fruits = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent} horizontal={true}>
        <View style={styles.card}>
            <Text style={styles.title}> BANANA  </Text>
            <Image source={require("@/assets/images/nutrition/fruits/banana.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
            Proteins : 1.09g{'\n'}Fiber : 2.63g{'\n'}Carbs : 22.0g
            </Text>
        </View>

        <View style={styles.card}>
            <Text style={styles.title}> MANGO </Text>
            <Image source={require("@/assets/images/nutrition/fruits/mango.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
            Proteins : 0.82g{'\n'}Fiber : 1.8g{'\n'}Carbs : 17g
            </Text>
        </View>

        <View style={styles.card}>
            <Text style={styles.title}> APPLE  </Text>
            <Image source={require("@/assets/images/nutrition/fruits/apple.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
            Proteins : 0.25g{'\n'}Fiber : 2.4g{'\n'}Carbs : 11.4g
            </Text>
        </View>


        <View style={styles.card}>
            <Text style={styles.title}> ORANGE  </Text>
            <Image source={require("@/assets/images/nutrition/fruits/orange.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
            Proteins : 1.2g{'\n'}Fiber : 2.4g{'\n'}Carbs : 8.3g
            </Text>
        </View>


        <View style={styles.card}>
            <Text style={styles.title}> GRAPES  </Text>
            <Image source={require("@/assets/images/nutrition/fruits/grapes.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
            Proteins : 0.72g{'\n'}Fiber : 0.9g{'\n'}Carbs : 17.17g
            </Text>
        </View>

        <View style={styles.card}>
            <Text style={styles.title}> POMOGRANATE  </Text>
            <Image source={require("@/assets/images/nutrition/fruits/pomogranate.jpeg")  } style={styles.image}/>
            <Text style={styles.description}>
            Proteins : 1.67g{'\n'}Fiber : 4g{'\n'}Carbs : 18.1g
            </Text>
        </View>

        <View style={styles.card}>
            <Text style={styles.title}> GUAVA  </Text>
            <Image source={require("@/assets/images/nutrition/fruits/guava.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
            Proteins : 2.6g{'\n'}Fiber : 5.4g{'\n'}Carbs : 11.0g
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
    elevation : 3,
  },
  description:{
    fontFamily : 'mon',
    paddingTop : 60,
    fontSize : 20,
    justifyContent : 'center',
  },
  
})
export default fruits