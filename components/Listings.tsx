
import { View, Alert, Text, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { Link, Stack } from 'expo-router'
import { Zocial } from '@expo/vector-icons';


const fadeInTitle = () => {
  return Animated.timing(titleOpacity, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  });
};

const fadeInParagraph = () => {
  return Animated.timing(paragraphOpacity, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  });
};
const titleOpacity = new Animated.Value(0);
  const paragraphOpacity = new Animated.Value(0);

  const onButtonPress = () => {
    Alert.alert('Floating Button Pressed');
}



  const Listings = () => {
  React.useEffect(() => {
    Animated.sequence([
      fadeInTitle(),
      fadeInParagraph(),
    ]).start();
  }, []);



  const dietView = useRef(null);
  const workoutView = useRef(null);
  const nutritionView = useRef(null);

  
  return (
    
    <ScrollView>
       
      <View style={styles.container}>
      {/* <TouchableOpacity
          style = {styles.folatingButton} onPress={onButtonPress}
      
      
      ><Text>Hi</Text></TouchableOpacity> */}
      
        <Animated.View  >
          <Animated.Text style={[styles.titlex, { opacity: titleOpacity }]}>"The body achieves what the mind believes"</Animated.Text>
          <Animated.Text style={[styles.paragraph, { opacity: paragraphOpacity }]}>
            👉 Embrace the Journey to Fitness and Health!
            {'\n'}
            👉 Our website is your ultimate destination for all things wellness.
            {'\n'}
            👉 Discover effective workouts, and nourishing tips to nurture your body and mind.
            {'\n'}
            👉 Start your transformation today and unlock the path to a vibrant, energetic, and wholesome life!
          </Animated.Text>
        </Animated.View>

        <Animatable.View animation="fadeInLeft" duration={1500} style={styles.cont}>
          <Animatable.View animation="slideInLeft" duration={1500} style={styles.col}>
            <Image source={require('@/assets/images/dietog.jpg')} style={styles.image} />
            <View style={styles.layer}>
              <Text style={styles.semititle}>DIET</Text>
              <Text style={styles.description}>
                A well-balanced diet is a cornerstone of good health, providing the body with the vitamins, and minerals it needs for optimal functioning. It fuels our daily activities, supports growth and bolsters the immune system's defenses. A diet rich in whole grains, lean proteins, healthy fats, and a variety of fruits and vegetables helps maintain a healthy weight and reduces the risk of chronic conditions like heart disease and obesity. Proper dietary choices can positively impact cognitive function, contributing to an overall sense of well-being.
              </Text>
            </View>
          </Animatable.View>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" duration={1500} style={styles.cont}>
          <Animatable.View animation="slideInUp" duration={1500} style={styles.col}>
            <Image source={require('@/assets/images/workoutog.jpg')} style={styles.image} />
            <View style={styles.layer}>
              <Text style={styles.semititle}>WORKOUT</Text>
              <Text style={styles.description}>
                Regular exercise is crucial for physical and mental well-being. It enhances cardiovascular health, strengthens muscles and bones, and improves flexibility and balance. Engaging in physical activity releases endorphins, reducing stress and promoting a positive mood. It aids in weight management by burning calories and boosting metabolism, while also reducing the risk of chronic conditions such as diabetes and hypertension. Incorporating workouts into daily life contributes to increased energy, better sleep, and an overall higher quality of life.
              </Text>
            </View>
          </Animatable.View>
        </Animatable.View>

        <Animatable.View animation="fadeInRight" duration={1500} style={styles.cont}>
          <Animatable.View animation="slideInRight" duration={1500} style={styles.col}>
            <Image source={require('@/assets/images/nutritionog.jpg')} style={styles.image} />
            <View style={styles.layer}>
              <Text style={styles.semititle}>NUTRITION</Text>
              <Text style={styles.description}>
                Nutrition is the foundation of a thriving body. It encompasses not only the intake of essential macronutrients and micronutrients but also the body's ability to absorb and utilize them effectively. Nutrition supports the body's biochemical processes, ranging from energy production to cellular repair. Essential vitamins and minerals obtained from a diverse range of foods are the building blocks that enable growth, sustain vitality, and maintain the delicate balance within our biological systems.
              </Text>
            </View>
          </Animatable.View>
        </Animatable.View>

        <View style={styles.container}>
          <Text style={styles.semititle}>ABOUT US</Text>
          <Text style={styles.groupMembers}>- Group Members -</Text>
          <View style={styles.memberList}>
            <Text style={styles.memberList}>» Soham Wanganekar</Text>
            <Text style={styles.memberList}>» Deeksha Upadhyay</Text>
            <Text style={styles.memberList}>» Tanish Shah</Text>
            <Text style={styles.memberList}>» Manthan Rathod</Text>
          </View>
          <Text style={styles.note}>This Website is created Only for the Purpose of Project and Grades...!</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    top: -10,
    backgroundColor: '#fff', // Background color
    //flex : 1,
    width:390,
    paddingTop: 30,
    paddingBottom:50,
    marginTop:-20,
  },
  titlex: {
    fontSize: 50,
    marginTop: 40,
    marginBottom: 10,
    fontFamily: 'mon-b',
    color: '#f44336',
  },
  semititle: {
    fontSize: 50,
    marginBottom: 20,
    fontFamily: 'mon-sb',
    alignSelf: 'center',
  },
  folatingButton:{
    position :'absolute',
    width :60,
    height : 60,
    alignItems : 'center',
    justifyContent : 'center',
    right :20,


  },
  
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'mon-sb',
  },
  cont: {
    flex: 1,
    marginTop: 30,
  },
  col: {
    alignItems: 'center',
  },
  image: {
    width: 500,
    height: 600,
    resizeMode: 'cover',
    opacity: 0.4,
  },
  layer: {
    position: 'absolute',
    paddingHorizontal: 20,
    paddingVertical: 80,
    bottom: 0,
    left: 0,
    right: 0,
  },
  description: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'mon',
    justifyContent: 'space-evenly',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'mon',
  },
  groupMembers: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'mon',
    alignSelf: 'center',
  },
  memberList: {
    marginLeft: 0,
    fontSize: 14,
    fontFamily: 'mon',
  },
  note: {
    marginTop: 20,
    fontFamily: 'mon-sb',
  },
});

export default Listings;
