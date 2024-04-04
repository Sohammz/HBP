import { View, Text,Image,StyleSheet, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';

const normal = () => {
  
  return (
    <ScrollView>
    <View style={styles.container} >
     
       <Image source={ require("assets/data/pdfs/overweight/1.jpg")} style={styles.img} />
       <Image source={ require("assets/data/pdfs/overweight/2.jpg")} style={styles.img} />
       <Image source={ require("assets/data/pdfs/overweight/3.jpg")} style={styles.img} />
       <Image source={ require("assets/data/pdfs/overweight/4.jpg")} style={styles.img} />
       <Image source={ require("assets/data/pdfs/overweight/5.jpg")} style={styles.img} />
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : Colors.white,
  },
  img:{
    width: 394,
    height: 580,
    resizeMode: 'cover',

  },
})
export default normal