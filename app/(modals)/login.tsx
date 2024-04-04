import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { defaultStyle } from '@/constants/Styles';
import { FontAwesome } from '@expo/vector-icons';
import { useOAuth } from '@clerk/clerk-expo';
import { router, useRouter } from 'expo-router';
enum Strategy{
  Google= 'oauth_google',
  Apple = 'oauth_apple'
}
const Page = () => {
    const router = useRouter();
    const {startOAuthFlow: googleAuth} =useOAuth({strategy: 'oauth_google'});
    const {startOAuthFlow : appleAuth} =useOAuth({strategy: 'oauth_apple'});

    const onSelectAuth = async (strategy:Strategy) =>{
      const selectedAuth = {
        [Strategy.Google]: googleAuth,
        [Strategy.Apple]: appleAuth
      }[strategy];
  
      try {
        const { createdSessionId, setActive } = await selectedAuth();
  
        if (createdSessionId) {
          setActive!({ session: createdSessionId });
          router.back();
        }
      } catch (err) {
        console.error('OAuth error', err);
      } 
    };
  return (
    <View style = {styles.container}>
     <TextInput autoCapitalize='none' placeholder='Email' style = {[defaultStyle.inputField,{marginBottom : 13}]}/>
     <TextInput autoCapitalize='none' placeholder='Password' secureTextEntry style = {[defaultStyle.inputField,{marginBottom : 13}]}/>
    <TouchableOpacity style = {defaultStyle.btn}>
      <Text style={defaultStyle.btnText}>Continue</Text>
    </TouchableOpacity>
    <View style ={styles.seperatorView}>
      <View style ={{
        flex :1,
        borderBottomColor : '#000',
        borderBottomWidth : StyleSheet.hairlineWidth,
      }}/>
      <Text style={styles.seperator}>LOGIN & SIGNUP</Text>
      <View style ={{
        flex :1,
        borderBottomColor : '#000',
        borderBottomWidth : StyleSheet.hairlineWidth,
      }}/>
    </View>
    <View style={{gap:20}}>
        <TouchableOpacity style = {styles.btnOutline} >
        <FontAwesome name="phone" size={24} color="black" style ={defaultStyle.btnIcon}/>
          <Text style = {
            styles.btnOutlineText
          }>Continue with Phone</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.btnOutline} onPress={()=>onSelectAuth(Strategy.Google)} >
        <FontAwesome name="google" size={24} color="black" style ={defaultStyle.btnIcon}/>
          <Text style = {
            styles.btnOutlineText
          }>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.btnOutline} onPress={()=>onSelectAuth(Strategy.Apple)} >
        <FontAwesome name="apple" size={24} color="black" style ={defaultStyle.btnIcon}/>
          <Text style = {
            styles.btnOutlineText
          }>Apple</Text>
        </TouchableOpacity>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor : 'white',
    padding:26,
  },
  seperatorView: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginVertical: 40,
  },
  seperator: {
    fontFamily: 'mon-b',
    color: '#808080',
    fontSize: 16,
  },
  btnOutline: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#808080',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  btnOutlineText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'mon-sb',
  },
})
export default Page