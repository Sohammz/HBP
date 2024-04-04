import { View, Text, Touchable, StyleSheet,TouchableOpacity, Button, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import fruits from '../(nutrient)/fruits'
import { Link } from 'expo-router'
import Colors from '@/constants/Colors'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const Page = () => {
  return (
   
    <ScrollView>
    <View style={styles.containerx}>
      <View >
      <ImageBackground 
      source={require('@/assets/images/inboxx/fruits.jpg')} 
      style={styles.container}
      resizeMode="cover"
    ><TouchableOpacity style={styles.button} ><Text style={styles.buttonText}><Link href={"/fruits"} style={styles.text}>FRUITS</Link></Text></TouchableOpacity>
    </ImageBackground>


    <ImageBackground 
      source={require('@/assets/images/inboxx/vegetables.jpg')} 
      style={styles.container}
      resizeMode="cover"
    ><TouchableOpacity style={styles.button} ><Text style={styles.buttonText}><Link href={"/vegetable"} style={styles.text}>VEGETABLES</Link></Text></TouchableOpacity>
    </ImageBackground>


    <ImageBackground 
      source={require('@/assets/images/inboxx/pulses.jpg')} 
      style={styles.container}
      resizeMode="cover"
    ><TouchableOpacity style={styles.button} ><Text style={styles.buttonText}><Link href={"/pulses"} style={styles.text}>PULSES</Link></Text></TouchableOpacity>
    </ImageBackground>


    <ImageBackground 
      source={require('@/assets/images/inboxx/dairy.jpg')} 
      style={styles.container}
      resizeMode="cover"
    ><TouchableOpacity style={styles.button} ><Text style={styles.buttonText}><Link href={"/dairy"} style={styles.text}>DAIRY</Link></Text></TouchableOpacity>
    </ImageBackground>


    <ImageBackground 
      source={require('@/assets/images/inboxx/nuts.jpg')} 
      style={styles.container}
      resizeMode="cover"
    ><TouchableOpacity style={styles.button} ><Text style={styles.buttonText}><Link href={"/nutsandoils"} style={styles.text}>NUTS & OILS</Link></Text></TouchableOpacity>
    </ImageBackground>
      
      </View>
       
    </View>
    </ScrollView>
  );
};
///////////////////////////////////////////////////////////
const CustomHeader = () => {
  return (
    <View style={{ backgroundColor: '#fff', paddingTop: 50 ,paddingLeft:20,paddingBottom:5,elevation:3}}>
      <Text style={{ fontSize: 32, fontFamily:'mon-sb' ,}}>NUTRITIONS</Text>
    </View>
  );
};

const header = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <CustomHeader />,
      }}>
      <Stack.Screen
        name="YourScreen"
        component={Page}
      />
    </Stack.Navigator>
  );
};
export default header
/////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  container : {
  backgroundColor : Colors.white,
  alignItems : 'center',
  alignSelf:'center',
  padding : 40,
  marginBottom:20,
  width: 340,
  height: 200,
  borderRadius: 10,
  flex :1,
  
  },
  containerx:{
backgroundColor: Colors.white,
paddingTop:60,
marginTop:-20,
  },
  button: {
    width: 340, 
    height: 130, 
    borderRadius: 10, 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    
  },
  buttonText: {
    color: '#fff', 
    fontFamily : 'mon-b',
    fontSize : 50,
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow color
    textShadowOffset: { width: 2, height: 2 }, // Shadow offset
    textShadowRadius: 100,

  },
  text :{

  },
 
 
})
