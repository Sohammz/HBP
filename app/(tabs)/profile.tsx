import Colors from '@/constants/Colors';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useRef } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Animated, SectionList, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Page = () => {
  const data = [
    { key: '1', name: 'Avocado Toast', image: require("@/assets/images/toast.jpg"), pro: 'Begin by toasting your bread slices until they are golden brown and crispy. While the bread is toasting, cut the avocado in half, remove the pit, and scoop the flesh into a small bowl. Mash the avocado with a fork until it reaches your desired consistency. You can leave it slightly chunky or make it smooth. Once the bread is toasted, spread the mashed avocado evenly onto each slice. Season the avocado with a pinch of salt and pepper to taste. Top each slice with sliced tomato and any other optional toppings you prefer, such as sliced radishes, microgreens, or red pepper flakes. Serve immediately and enjoy your nutritious and delicious avocado toast!' },
    { key: '2', name: 'Moong Dal Khichdi', image: require("@/assets/images/khichdi.jpg"), pro: 'Moong dal khichdi is made by first washing and soaking moong dal and rice for about 30 minutes. In a pressure cooker, heat ghee and add cumin seeds, cloves, and cinnamon. Once the spices start to sizzle, add chopped onions, ginger-garlic paste, and green chilies, and sauté until the onions turn golden brown. Drain the water from the soaked moong dal and rice and add them to the pressure cooker. Pour in the appropriate amount of water and season with salt. Close the lid of the pressure cooker and cook until the khichdi reaches the desired consistency. Serve hot with a dollop of ghee on top.' },
    { key: '3', name: 'Masala Oats', image: require("@/assets/images/oats.jpg"), pro: 'To prepare masala oats, start by heating a teaspoon of oil in a pan over medium heat. Add mustard seeds, curry leaves, chopped onions, and green chilies to the pan and sauté until the onions turn translucent. Next, add chopped vegetables such as carrots, peas, and bell peppers to the pan and stir-fry for a few minutes. Then, add rolled oats to the pan and cook for a couple of minutes. Pour in water, season with salt, turmeric, cumin powder, and coriander powder, and stir well. Cook until the oats are soft and have absorbed the flavors of the spices. Finally, garnish with fresh coriander leaves and serve hot.' },
    { key: '4', name: 'Vegetable Upma', image: require("@/assets/images/upma.webp"), pro: 'To make vegetable upma, start by dry roasting semolina in a pan until it turns light golden brown and aromatic. In another pan, heat oil and add mustard seeds, urad dal, and chana dal. Once the dals turn golden, add chopped onions, green chilies, ginger, and curry leaves, and sauté until the onions become translucent. Then, add chopped vegetables like carrots, peas, and beans, and cook until they are slightly tender. Pour in water, season with salt, and bring it to a boil. Gradually add the roasted semolina while stirring continuously to avoid lumps. Cook until the upma is thick and all the water is absorbed. Garnish with chopped coriander leaves and serve hot.' },
    { key: '5', name: 'Chana Chaat', image: require("@/assets/images/chana2.jpg"), pro: 'Chana chaat is a healthy and flavorful snack made with boiled chickpeas, chopped onions, tomatoes, cucumber, and green chilies. In a mixing bowl, combine the boiled chickpeas with chopped vegetables and toss well. Add chaat masala, roasted cumin powder, black salt, lemon juice, and chopped coriander leaves, and mix until everything is well coated. Adjust the seasoning according to taste. Serve the chana chaat immediately as a refreshing and nutritious snack.' },
    { key: '6', name: 'Sprout Salad', image: require("@/assets/images/sprouts.jpg"), pro: 'To prepare sprout salad, start by soaking mixed sprouts in water overnight. Drain the soaked sprouts and rinse them thoroughly. In a mixing bowl, combine the sprouts with chopped onions, tomatoes, cucumber, and bell peppers. Add freshly squeezed lemon juice, salt, roasted cumin powder, and chopped coriander leaves, and toss well to combine. Refrigerate the salad for a while before serving to enhance the flavors. Enjoy the sprout salad as a healthy and refreshing dish.' },
  ];

  const backgroundColors = {
    '1': '#cbf078',
    '2': '#f5dd7b',
    '3': '#ff9a3c',
    '4': '#fbf2d5',
    '5': '#b5592a',
    '6': '#97cba9',
  };

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ScrollView>
    <View style={{ flex: 1 }}>
           <Text style={styles.heading}>Eat Healthy..!</Text>
           <Text style={styles.paragraph}>
          Taaa-Daaaa..! 
          {"\n"}
          Welcome to TODAYS-SPECIAL'S

        </Text>
     <View style={styles.container}>
  
      <FlatList
      
        data={data}
        
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <TouchableOpacity disabled={true}>
            <Animatable.View animation={"slideInRight"} duration={1000} style={styles.container}>
              <View style={[styles.bg, { backgroundColor: backgroundColors[item.key] }]}>
                <Text style={styles.name}>{item.name}</Text>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.how}>{item.pro}</Text>
              </View>
            </Animatable.View>
          </TouchableOpacity>
        )}
      />
      </View> 
     
    </View></ScrollView>
  );
};

/////////////////////////////////////////////////////////
const Stack = createStackNavigator();
const CustomHeader = () => {
  return (
    <View style={{ backgroundColor: '#fff', paddingTop: 50 ,paddingLeft:20,paddingBottom:5,elevation:3}}>
      <Text style={{ fontSize: 32, fontFamily:'mon-sb' ,}}>RECIPE</Text>
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
    paddingLeft:10,
    paddingRight:10,
    paddingBottom: 20,
    paddingTop:10,
    backgroundColor : 'white',
  },
  how: {
    padding: 10,
    fontFamily: 'mon',
  },
  name: {
    fontFamily: 'mon-b',
    fontSize: 25,
    marginTop: .10,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 0,
    paddingTop : 20,
    fontFamily:'mon-sb',
    padding: 5,
    backgroundColor : Colors.white,
  },
  heading: {
    fontSize: 49,
    textAlign: 'center',
    color:'#F44336',
    marginBottom: -20,
    paddingTop: 15,
    fontFamily:'mon-b',
    backgroundColor : 'white',
  },
  bg: {
    backgroundColor: '#c7f2e3',
    borderRadius: 30,
    padding: 20,
    marginBottom: 2,
    alignItems: 'center',
    shadowColor: '#808080',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 8,
  },
  image: {
    width: 320,
    height: 151,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 20,
    resizeMode: 'cover',
  },
});


