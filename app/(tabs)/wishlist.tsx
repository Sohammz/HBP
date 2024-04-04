import { View,TextInput, Text, Button,StyleSheet, SafeAreaView,Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAuth, useUser } from '@clerk/clerk-expo'
import { Link } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { defaultStyle } from '@/constants/Styles';
import { createStackNavigator } from '@react-navigation/stack';
const Page = () => {
  const {signOut, isSignedIn } = useAuth();
  const { user } = useUser();
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [email, setEmail] = useState(user?.emailAddresses[0].emailAddress);
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    if (!user) {
      return;
    }

    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.emailAddresses[0].emailAddress);
  }, [user]);

  const onSaveUser = async () => {
    try {
      await user?.update({
        firstName: firstName!,
        lastName: lastName!,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setEdit(false);
    }
  };
  const onCaptureImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.75,
      base64: true,
    });

    if (!result.canceled) {
      const base64 = `data:image/png;base64,${result.assets[0].base64}`;
      user?.setProfileImage({
        file: base64,
      });
    }
  };

  return (
    <SafeAreaView style={defaultStyle.container}>
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Profile</Text>
      <Ionicons name="notifications-outline" size={26} />
    </View>

    {user && (
      <View style={styles.card}>
        <TouchableOpacity onPress={onCaptureImage}>
          <Image source={{ uri: user?.imageUrl }} style={styles.avatar} />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', gap: 6 }}>
          {!edit && (
            <View style={styles.editRow}>
              <Text style={{ fontFamily: 'mon-b', fontSize: 22 }}>
                {firstName} {lastName}
              </Text>
              <TouchableOpacity onPress={() => setEdit(true)}>
                <Ionicons name="create-outline" size={24} color={'#000'} />
              </TouchableOpacity>
            </View>
          )}
          {edit && (
            <View style={styles.editRow}>
              <TextInput
                placeholder="First Name"
                value={firstName || ''}
                onChangeText={setFirstName}
                style={[defaultStyle.inputField, { width: 100 }]}
              />
              <TextInput
                placeholder="Last Name"
                value={lastName || ''}
                onChangeText={setLastName}
                style={[defaultStyle.inputField, { width: 100 }]}
              />
              <TouchableOpacity onPress={onSaveUser}>
                <Ionicons name="checkmark-outline" size={24} color={'#000'} />
              </TouchableOpacity>
            </View>
          )}
        </View>
        <Text>{email}</Text>
        <Text>Since {user?.createdAt!.toLocaleDateString()}</Text>
      </View>
    )}

    {isSignedIn &&

    
      <TouchableOpacity onPress={() => signOut()}
        style= {{ width: 200, height: 50, backgroundColor: '#f44336', alignItems: 'center', justifyContent: 'center',marginLeft:90, borderRadius:20 }}
      >
        <Text style={{ color: 'white' }}>LOGOUT</Text>
      </TouchableOpacity>
      
      

    }
    {!isSignedIn && (

      <Link href={'/(modals)/login'} asChild>
        <TouchableOpacity 
          style={{ width: 200, height: 50, backgroundColor: '#f44336', alignItems: 'center', justifyContent: 'center',marginLeft:90, borderRadius:20 }}
        >
          <Text style={{ color: 'white' }}>Log In</Text>
        </TouchableOpacity>
      </Link>
      
    )}
  </SafeAreaView>
  )
}



/////////////////////////////////////////////////////////
const Stack = createStackNavigator();
const CustomHeader = () => {
  return (
    <View style={{ backgroundColor: '#fff', paddingTop: 50 ,paddingLeft:20,paddingBottom:5,elevation:3}}>
      <Text style={{ fontSize: 32, fontFamily:'mon-sb' ,}}>ACCOUNT</Text>
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
  },
  header: {
    fontFamily: 'mon-b',
    fontSize: 24,
  },
  card: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 16,
    marginHorizontal: 24,
    marginTop: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    alignItems: 'center',
    gap: 14,
    marginBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#808080',
  },
  editRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
});
