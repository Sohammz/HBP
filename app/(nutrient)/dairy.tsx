import { View, Text,StyleSheet, ScrollView ,Image} from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'

const fruits = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent} horizontal={true}>
        <View style={styles.card}>
            <Text style={styles.title}> MILK  </Text>
            <Image source={require("@/assets/images/nutrition/dairy/glass-of-milk.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
            Proteins : 32g{'\n'}Fats : 36g{'\n'}Carbs : 47g
            </Text>
        </View>

        <View style={styles.card}>
            <Text style={styles.title}> CHEESE  </Text>
            <Image source={require("@/assets/images/nutrition/dairy/cheese.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
            Proteins : 250g{'\n'}Fats : 330g{'\n'}Carbs : Negligible           
            </Text>
        </View>

        <View style={styles.card}>
            <Text style={styles.title}> YOUGURT  </Text>
            <Image source={require("@/assets/images/nutrition/dairy/Yogurt.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
            Proteins : 35g{'\n'}Fats : 33g{'\n'}Carbs : 47g
            </Text>
        </View>

        <View style={styles.card}>
            <Text style={styles.title}> BUTTER  </Text>
            <Image source={require("@/assets/images/nutrition/dairy/butter.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
            Proteins : 9g{'\n'}Fats : 81g{'\n'}Carbs : 4g
            </Text>
        </View>


        <View style={styles.card}>
            <Text style={styles.title}> CREAM  </Text>
            <Image source={require("@/assets/images/nutrition/dairy/whipped-cream.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
            Proteins : 21g{'\n'}Fats : 360g{'\n'}Carbs : 26g
            </Text>
        </View>


        <View style={styles.card}>
            <Text style={styles.title}> ICE-CREAME  </Text>
            <Image source={require("@/assets/images/nutrition/dairy/icecream.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
            Proteins : 35g{'\n'}Fats : 72g{'\n'}Carbs : 215g
            </Text>
        </View>


        <View style={styles.card}>
            <Text style={styles.title}> SOUR-CREAM  </Text>
            <Image source={require("@/assets/images/nutrition/dairy/condom milk.jpg")  } style={styles.image}/>
            <Text style={styles.description}>
            Proteins : 21g{'\n'}Fats : 200g{'\n'}Carbs : 544g
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