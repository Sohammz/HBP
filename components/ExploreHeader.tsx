import { View,Alert, Text,Image, TouchableOpacity, ScrollView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import * as Haptics from 'expo-haptics';
const logo = require("@/assets/images/oglogo.png");
const categories = [
   
    {
      name: 'Information',
      icon: 'anchor',
    },
    {
        name: 'Diet',
        icon: 'monitor-weight',
      },
    {
      name: 'Workout',
      icon: 'align-vertical-center',
    },
    {
      name: 'Nutrition',
      icon: 'food-bank',
    },
    
    {
        name: 'About Us',
        icon: 'all-inclusive',
      },


      
  ];

  interface Props{
    onCatergoryChanged : (category : string) => void
  }
const ExploreHeader = ({onCatergoryChanged}:Props) => {
  const scrollRef = useRef<ScrollView>(null);
    const itemsRef = useRef<Array<TouchableOpacity | null >>([]);
    const [activeIndex,setActiveIndex] = useState(1);
    const selectCategory = (index: number) =>{
      const selected = itemsRef.current[index];
      setActiveIndex(index);
      selected?.measure((x) => {
        scrollRef.current?.scrollTo({ x: x - 16, y: 0, animated: true });
      });
            setActiveIndex(index);
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
            onCatergoryChanged(categories[index].name);
    };



    const onButtonPress = () => {
      Alert.alert('Floating Button Pressed');
  }
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <View style={styles.actionRow}>
        <Image source={logo} style={{width:60,height:60,marginTop:20}}/>
            <TouchableOpacity disabled={true}  style={styles.searchBtn}><Text style={styles.categoryText}>Happy Body Plans</Text></TouchableOpacity>
       
        </View>
        {/* <View>
        <ScrollView
          ref={scrollRef}
                  
        horizontal ={true}  showsHorizontalScrollIndicator ={false} contentContainerStyle ={{
            alignItems: 'center',
            gap:20,
            paddingHorizontal: 16,

        }}>
            { categories.map((item,index) =>(
                <TouchableOpacity key={index}
                onPress={()=> selectCategory(index)}
                 ref ={(el)=> itemsRef.current[index] = el}
                 style={activeIndex === index ? styles.categoriesBtnActive : styles.categoriesBtn}>
                    <MaterialIcons size={28} name = {item.icon as any} style={{alignSelf:'center',marginLeft:0}} />
                    <Text style={{alignSelf:'center',marginLeft:2}}>{item.name}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
        </View> */}
       
      </View>
   
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      height: 105,
      elevation: 1,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 6,
      shadowOffset: {
        width: 1,
        height: 10,
      },
    },
    actionRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 24,
      paddingBottom: 16,
    },
    folatingButton:{
      position :'absolute',
      width :60,
      height : 60,
      alignItems : 'center',
      justifyContent : 'center',
      right :30,
      bottom : 50,
  
    },
    searchBtn: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      gap: 2,
      padding: 14,
      alignItems: 'center',
      width: 220,
      textDecorationColor : '#000',
      marginTop : 20,
      marginLeft:14,
      borderWidth: 0.2,
      borderColor: '#808080',
      borderRadius: 30,
      elevation: 8,
      shadowColor: '#000',
      shadowOpacity: 0.3,
      shadowRadius: 8,
      shadowOffset: {
        width: 1,
        height: 1,
      },
    },
    filterBtn: {
      padding: 10,
      borderWidth: 1,
      borderColor: '#A2A0A2',
      borderRadius: 24,
      marginTop:20,
      elevation :1,
      fontFamily : 'mon-b',
      shadowColor: '#808080',
      shadowOpacity: 0.1,
      shadowRadius: 6,
      shadowOffset: {
        width: 1,
        height: 5,
      },
    },
    categoryText: {
      fontSize: 18,
      fontFamily: 'mon-b',
      color: '#000',
      marginLeft:13,
    },
    categoryTextActive: {
      fontSize: 1,
      fontFamily: 'mon-sb',
      color: '#000',
    },
    categoriesBtn: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 8,
    },
    categoriesBtnActive: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomColor: '#f44336',
      borderBottomWidth: 4,
      paddingBottom: 10,
    },
  });
export default ExploreHeader