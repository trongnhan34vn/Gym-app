import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Schedule from './src/screens/ScheduleScreen';
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'react-native';
import ExerciseScreen from './src/screens/ExerciseScreen';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import WorkScreen from './src/screens/WorkScreen';
import UserInfoScreen from './src/screens/UserInfoScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={"light-content"} />
      <Tab.Navigator screenOptions={{
        tabBarStyle: { backgroundColor: "#1D2125" },
        tabBarLabelStyle: { fontSize: 15, color: "#B6C2CF" },
      }}>
        <Tab.Screen
          name='Lịch trình'
          component={Schedule}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return (<FontAwesome name="list-ul" size={20} color="#B6C2CF" />);
            }
          }}
        />
        <Tab.Screen
          name='Luyện tập'
          component={ExerciseScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return (<Ionicons name="barbell" size={20} color="#B6C2CF" />);
            }
          }}
        />
        <Tab.Screen
          name='Bài Tập'
          component={WorkScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return (<FontAwesome5 name="running" size={24} color="#B6C2CF" />);
            }
          }}
        />
        <Tab.Screen
          name='Hồ sơ'
          component={UserInfoScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return (<FontAwesome5 name="user-circle" size={24} color="#B6C2CF" />);
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

