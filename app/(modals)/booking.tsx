import Colors from '@/constants/Colors';
import React, { useState,useEffect, useRef  } from 'react';
import { View, Text, TextInput, Button, StyleSheet ,TouchableHighlight, TouchableOpacity,Animated} from 'react-native';
import { Link } from 'expo-router'
import { createStackNavigator } from '@react-navigation/stack';
import Slider from '@react-native-community/slider';



const Stack = createStackNavigator();
const Page = () => {
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const fadeAnim = useRef(new Animated.Value(0)).current;


  useEffect(() => {
    const intervalId = setInterval(() => {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [fadeAnim]);

  const calculateBMI = () => {
    if (!height || !weight) {
      alert('Please input height and weight.');
      return;
    }
    if (height === '' ||  height <= 50  ||  height >= 350 ) {
      alert('Please input Valid Height.');
      return;
    }
    if (weight === '' ||  weight <= 20  ||  weight >= 250 ) {
      alert('Please input Valid Weight.');
      return;
    }
    const heightInMeters = height / 100; // convert height to meters
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBMI(bmiValue);
  };

  

  const resetFields = () => {
    setHeight('');
    setWeight('');
    setBMI(null);
  };
  const bmiStatus = () => {
    if (!bmi) return '';
    if (bmi < 18.5) return 'Underweight, eat more..!';
    if (bmi >= 18.5 && bmi < 24.9) return 'Normal, keep it up! ';
    if (bmi >= 25 && bmi < 29.9) return 'Overweight, keep Control on Diet';
    if (bmi >= 30 && bmi < 34.9) return 'Obesity Class 1, start Woking Out..';
    if (bmi >= 35) return 'Obesity Class 2, hit the Gym...!';
  };


  
  return (
    <View style={styles.container}>
      <View style={styles.genderContainer}>
        <View style={[styles.genderOption, gender === 'male' && styles.selectedGender  ]}>
        <Text style={[styles.genderText, gender === 'male' && styles.selectedText]} onPress={() => setGender('male')}>Male</Text>
        </View>
        <View style={[styles.genderOption, gender === 'female' && styles.selectedGender]}>
        <Text style={[styles.genderText, gender === 'female' && styles.selectedText]} onPress={() => setGender('female')}>Female</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Height (cm)"
          keyboardType="numeric"
          onChangeText={text => setHeight(text)}
          value={height}
        />
        <TextInput
          style={styles.input}
          placeholder="Weight (kg)"
          keyboardType="numeric"
          onChangeText={text => setWeight(text)}
          value={weight}
        />
        <TouchableHighlight
          style={styles.btn}
          underlayColor= "#f44336"
          onPress={calculateBMI}
        >
          <Text style={styles.btnText}>Calculate BMI</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.btn, styles.resetButton]}
          underlayColor="red"
          onPress={resetFields}
        >
          <Text style={styles.btnText}>Reset</Text>
        </TouchableHighlight>
      </View>  
      



      {bmi && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>BMI : {bmi}</Text>
          <Text style={styles.bmiStatus}>{bmiStatus()}</Text>
          <View>
          {bmi < 18.5 ? (
              <Animated.View style={[styles.button, { opacity: fadeAnim }]}>
                <TouchableOpacity><Text style={styles.buttonText}><Link href={"/(pdfs)/underweight"} style={styles.text}>GET YOUR PLAN</Link></Text></TouchableOpacity>
              </Animated.View>
            ) : bmi >= 18.5 && bmi < 24.9 ? (
              <Animated.View style={[styles.button, { opacity: fadeAnim }]}>
                <TouchableOpacity><Text style={styles.buttonText}><Link href={"/(pdfs)/normal"} style={styles.text}>GET YOUR PLAN</Link></Text></TouchableOpacity>
              </Animated.View>
            ) : bmi >= 25 && bmi < 29.9 ? (
              <Animated.View style={[styles.button, { opacity: fadeAnim }]}>
                <TouchableOpacity><Text style={styles.buttonText}><Link href={"/(pdfs)/overweight"} style={styles.text}>GET YOUR PLAN</Link></Text></TouchableOpacity>
              </Animated.View>
            ) : bmi >= 30 && bmi < 34.9 ? (
              <Animated.View style={[styles.button, { opacity: fadeAnim }]}>
                <TouchableOpacity><Text style={styles.buttonText}><Link href={"/(pdfs)/obclassone"} style={styles.text}>GET YOUR PLAN</Link></Text></TouchableOpacity>
              </Animated.View>
            ) : (
              <Animated.View style={[styles.button, { opacity: fadeAnim }]}>
                <TouchableOpacity><Text style={styles.buttonText}><Link href={"/(pdfs)/obclasstwo"} style={styles.text}>GET YOUR PLAN</Link></Text></TouchableOpacity>
              </Animated.View>
            )}
          </View>
          
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor : Colors.white,
  },
  genderContainer: {
    flexDirection: 'row',
    marginBottom: 20,
   
  },
  selectedText: {
    color: 'white',
  },
  genderOption: {
    width: 140,
    height: 80,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 10,
    marginTop: 40,
    elevation :6,
  },
  selectedGender: {
    backgroundColor: Colors.red,
    borderWidth :0,
   
  },
  slider: {
    width: 300,
    height: 60,
    marginTop: 20,
  },
  genderText: {
    fontSize: 28,
    fontFamily: 'mon-sb',
    color: '#666666'
  },
  inputContainer: {
   // marginBottom: 20,
   padding : 10,
  },
  input: {
    width: 300,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 20,
    paddingBottom :-10,
    fontFamily : 'mon-sb',
    fontSize : 16,
    
  },
  btn: {
    backgroundColor: '#F44336',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom :5,
    marginTop :10,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'mon-b',
  },
  resultContainer: {
    alignItems: 'center',
    padding :12,
    marginHorizontal :10,
    gap :-14,
  },
  resultText: {
    fontSize: 36,
    fontFamily : 'mon-b',
  },
  bmiStatus: {
    fontSize: 32,
    color : Colors.red,
    fontFamily : 'mon-sb',
  },
  button:{
    borderWidth:2,
    padding:20,
    marginTop:30,
    borderRadius:50,
    backgroundColor: Colors.black,
    shadowColor: Colors.red, 
    elevation : 40,
    shadowOpacity : 80,
    shadowOffset: { width: 0, height: 7 }
  },
  buttonText:{
  color: Colors.white,
  fontFamily: 'mon-b',
  fontSize: 20, 
  },
  text:{

  }
});

export default Page;
