import { View, Text ,StyleSheet} from 'react-native'
import React, { useMemo, useState } from 'react'
import { Link, Stack } from 'expo-router'
import ExploreHeader from '@/components/ExploreHeader'
import Listings from '@/components/Listings'
//import listingData from '@/assets/data/airbnb-listings.json'
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import ListScreen from '@/app/(tabs)/profile';
//import DetailScreen from '@/components/receipedetail';
import { useAuth, useUser } from '@clerk/clerk-expo'


const Page = () => {
  const [category,setCategory] = useState('Information');
 // const items = useMemo(()=> listingData as any,[]);
  const onDataChanged = ( category:string) =>{
       setCategory(category);
  };
  const {signOut, isSignedIn } = useAuth();
   
  return (

    <View style ={{flex:1,marginTop:40}}>
    <Stack.Screen options={{
      header:()=> <ExploreHeader onCatergoryChanged={onDataChanged} />,

    }}/>
        <View style={styles.container}>
        <View style={styles.button}>
          <Link href={"/(modals)/booking"}>
            <Text style={styles.buttonText}>START MY JOURNEY</Text>
          </Link>
        </View>


        <Listings listings={[]} category={category} />
      </View>

   <>
   
   

   </>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    position: 'fixed', 
    top: 630, 
    right: 0, 
    backgroundColor: '#F44336', 
    padding: 10, 
    zIndex : 99999,
    borderRadius: 23, 
    padding: 13,
    elevation: 8,
  },
  buttonText: {
    color: '#fff', 
    fontFamily : 'mon-b',
    fontSize: 14,
  },
});
export default Page
