import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { Button, Pressable, StatusBar, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './src/stack/HomeStack';
import PTStack from './src/stack/PTStack';
import CustomerExerciseDetailScreen from './src/screens/CustomerExerciseDetailScreen';

// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle={"light-content"} />
        <Stack.Navigator screenOptions={{
          title: "Customer",
          headerStyle: {
            backgroundColor: "#1D2125",
          },
          headerTitleStyle: {
            color: "#FFFFFF",
          },
          headerTitleAlign: 'center',
          headerTintColor: "#FFFFFF",
        }}>
          <Stack.Screen
            name='Login'
            component={LoginScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='CustomerExerciseDetail'
            component={CustomerExerciseDetailScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name='Home'
            component={HomeStack}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='PT'
            component={PTStack}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

