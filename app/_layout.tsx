import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from '@/components/useColorScheme';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import fruits from './(nutrient)/fruits';
import inbox from 'app/(tabs)/inbox'
const CLERK_PUBLISHABLE_KEY = 'pk_test_dGlkeS10b2FkLTM0LmNsZXJrLmFjY291bnRzLmRldiQ' ;
const stack = createNativeStackNavigator();
const tokenCache = {
   async getToken(key : string){
    try{
      return SecureStore.getItemAsync(key);

    }catch (err){
      return null;
    }
  },
   async saveToken(key : string , value: string){
    try{
      return SecureStore.setItemAsync(key,value);

    }catch (err){
      return null;
    }
  },
}


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'mon':require('../assets/fonts/Poppins-Medium.ttf'),
    'mon-b':require('../assets/fonts/Poppins-Bold.ttf'),
    'mon-sb':require('../assets/fonts/Poppins-SemiBold.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
  <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY} tokenCache={tokenCache}>
     <RootLayoutNav />
  </ClerkProvider>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const { isLoaded , isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(()=>{
    if (isLoaded && !isSignedIn){
      router.push('/(modals)/login');
    } if (isLoaded && isSignedIn) {
      router.push('/');
    } 
    
  },[isLoaded, isSignedIn, router]);
  
  return ( 
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/booking" options={{
          presentation : 'modal',
          animation:'fade',
          
          headerTitleStyle :{
            fontFamily : 'mon-b'
          },
          title : "GET SET GO..!!"
          }} />
       <Stack.Screen name="(modals)/login" options={{ title: "SKIP",padding: 10 ,}}/>
           <Stack.Screen name="(nutrient)/dairy" options={{ title: "Diary Products"}}/>
           <Stack.Screen name="(nutrient)/fruits" options={{ title: "Fruits"}}/>
           <Stack.Screen name="(nutrient)/nutsandoils" options={{ title: "Nuts & Oils"}}/>
           <Stack.Screen name="(nutrient)/pulses" options={{ title: "Pulses"}}/>
           <Stack.Screen name="(nutrient)/vegetable" options={{ title: "Vegetable"}}/>
           <Stack.Screen name="(pdfs)/normal" options={{ title: "         Plan for your BMI"}}/>
           <Stack.Screen name="(pdfs)/underweight" options={{ title: "         Plan for your BMI"}}/>
           <Stack.Screen name="(pdfs)/overweight" options={{ title: "         Plan for your BMI"}}/>
           <Stack.Screen name="(pdfs)/obclassone" options={{ title: "         Plan for your BMI"}}/>
           <Stack.Screen name="(pdfs)/obclasstwo" options={{ title: "         Plan for your BMI"}}/>


           <Stack.Screen name="listing/[id]" options={{headerTitle : ''}}/>
          


      
      </Stack>
      
  );
}
