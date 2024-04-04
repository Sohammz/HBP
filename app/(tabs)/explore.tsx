import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Dimensions} from 'react-native';
import WebView from 'react-native-webview';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Page = () => {
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
     
        <Text style={styles.heading}>Rise & Grind</Text>
        <Text style={styles.paragraph}>
          Your go-to source for daily fitness inspiration and exercises to elevate your energy, strength, and well-being.
          {"\n"}
          Choose Your Intensity: Unlock Your Ideal Workout Duration - 10, 30, or 60 Minutes!
        </Text>
        {/* <Text style={styles.dum}>Pick Your Today's Time...!</Text>
        <View style={styles.anchor}>
          <TouchableOpacity style={styles.hero}><Text style={styles.heroText}>10-MIN</Text></TouchableOpacity>
          <TouchableOpacity style={styles.hero}><Text style={styles.heroText}>30-MIN</Text></TouchableOpacity>
          <TouchableOpacity style={styles.hero}><Text style={styles.heroText}>60-MIN</Text></TouchableOpacity>
        </View> */}
        <View style={styles.row}>
          
  <WebView
    style={styles.col}
    javaScriptEnabled={true}
    source={{ uri: 'https://www.youtube.com/embed/kfWorWINXk4' }}
  />
</View>
<View style={styles.row}>
  <View style={styles.col2}>
    <Text style={styles.planHeading}>10 Minutes Plan</Text>
    <ScrollView>
      <Text style={styles.planText}>
         Boosts Energy: Engaging in a quick workout can provide a burst of energy that lasts throughout the day.{"\n"}
         Improves Mood: Exercise releases endorphins, which are natural mood lifters. It's fantastic to see you making time for this positivity!{"\n"}
         Enhances Focus: Physical activity can sharpen your mental focus and concentration, which is crucial for a productive day.{"\n"}
         Builds Consistency: Committing to a daily routine, even if it's just for 10 minutes, builds a strong foundation for long-term fitness goals.{"\n"}
         Increases Flexibility: Daily movement keeps your muscles and joints flexible, reducing the risk of injuries in the long run.{"\n"}
         Boosts Self-Esteem: Achieving your daily workout goals can give you a sense of accomplishment and boost your self-confidence.
      </Text>
    </ScrollView>
  </View>
</View>

        <Text style={styles.lol}>Keep up the great work! Your dedication to a 10-minute daily workout is a testament to your commitment to a healthier and happier lifestyle. Your efforts are impressive and they serve as a reminder that taking care of ourselves is an essential part of living our best lives. Well done! 🏋️‍♀️🌟</Text>
        {/* Other sections for 30 and 60 minutes plans go here */}

        <View style={styles.row}>
  <WebView
    style={styles.col}
    javaScriptEnabled={true}
    source={{ uri: 'https://www.youtube.com/embed/Wbv0dxtgh4o' }}
  />
</View>
<View style={styles.row}>
  <View style={styles.col2}>
    <Text style={styles.planHeading}>30 Minutes Plan</Text>
    <ScrollView>
      <Text style={styles.planText}>
       Time-Efficiency: Choosing to invest 30 minutes each day is a brilliant way to make the most out of a busy schedule. Your ability to prioritize your health is truly commendable.{"\n"}
         Increased Intensity: With a little more time, you can engage in more challenging exercises that lead to better cardiovascular fitness and muscle toning. Your determination to push yourself is inspiring!{"\n"}
        Calorie Burn: A 30-minute workout allows for a more substantial calorie burn, aiding in weight management and achieving fitness goals. Your commitment to your journey is truly motivating!{"\n"}
        Cardiovascular Health: A longer workout contributes to a stronger heart and better circulation, supporting your long-term cardiovascular health.{"\n"}
         Empowerment: Your dedication to a 30-minute workout reflects your commitment to your health and empowerment. Your effort is truly remarkable and motivating!
       </Text>
    </ScrollView>
  </View>
</View>

        <Text style={styles.lol}>Your consistent 30-minute daily workout is a testament to your dedication to a healthier lifestyle. Keep up the great work - you're inspiring us all! 🏋️‍♀️🌟</Text>
       



        <View style={styles.row}>
  <WebView
    style={styles.col}
    javaScriptEnabled={true}
    source={{ uri: 'https://www.youtube.com/embed/EOSWIY9XXp8' }}
  />
</View>
<View style={styles.row}>
  <View style={styles.col2}>
    <Text style={styles.planHeading}>60 Minutes Plan</Text>
    <ScrollView>
      <Text style={styles.planText}>
      Comprehensive Fitness: Devoting a full hour to your workout enables you to engage in a comprehensive routine that targets various fitness aspects - strength, endurance, flexibility, and more.{"\n"}
         Deeper Focus: With 60 minutes, you can allocate more time to each exercise, allowing for better form and technique. Your attention to detail is truly inspiring!{"\n"}
         Enhanced Recovery: After 60 minutes, your body has more time to cool down and recover, reducing the risk of post-workout soreness.{"\n"}
         Long-term Benefits: Your commitment to a 60-minute daily workout reflects your dedication to long-term health and happiness. Your effort is extraordinary and sets a fantastic example for others!
     </Text>
    </ScrollView>
  </View>
</View>

        <Text style={styles.lol}>Your consistent 60-minute daily workout is a testament to your dedication to a healthier lifestyle. Keep up the great work - you're inspiring us all! 🏋️‍♀️🌟</Text>
       
      
    </SafeAreaView>
    </ScrollView>
  );

}
/////////////////////////////////////////////////////////
const Stack = createStackNavigator();
const CustomHeader = () => {
  return (
    <View style={{ backgroundColor: '#fff', paddingTop: 50 ,paddingLeft:20,paddingBottom:5,elevation:3}}>
      <Text style={{ fontSize: 32, fontFamily:'mon-sb' ,}}>WORKOUT</Text>
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
////////////////////////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    color: 'white',
   paddingLeft :10,
   paddingRight: 10,
    fontFamily:'mon',
  },
  heading: {
    fontSize: 50,
    //fontWeight: 'bold',
    textAlign: 'center',
    color: '#F44336' ,
    marginBottom: 10,
    fontFamily:'mon-b',
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    fontFamily:'mon-sb',
    padding: 5,
  },
  dum: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily:'mon',
  },
  anchor: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
    fontFamily:'mon',
  },
  hero: {
    backgroundColor: 'transparent',
    borderRadius: 40,
    paddingVertical: 18,
    paddingHorizontal: 38,
    borderWidth: 1,
    borderColor: '#F44336',
    fontFamily:'mon',
  },
  heroText: {
    color: 'red',
    fontSize: 20,
    fontFamily:'mon',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
    fontFamily:'mon',
  },
  col: {
    flex: 1,
    marginRight: 2,
    height : 209,
    fontFamily:'mon',
  },
  col2: {
    flex: 1,
    marginLeft: 10,
    fontFamily:'mon',
  },
  planHeading: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily:'mon-sb',
    alignContent : 'center',
    alignSelf:'center',
    borderColor : '#F44336',
    borderWidth: 0.5,
    paddingLeft : 60,
    paddingRight : 50,
    paddingTop:10,
    paddingBottom : 10, 
      
  },
  planText: {
    fontSize: 14,
    marginBottom: 0,
    fontFamily:'mon',
    justifyContent : 'space-around',
  },
  lol: {
    textAlign: 'center',
    marginBottom: 30,
    fontFamily:'mon',
    fontSize : 10,
  },
});
