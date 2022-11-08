import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Foundation, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './src/screens/HomeScreen/HomeScreen'
import OrderService from './src/screens/OrderService/OrderService'
import { StatusBar } from 'react-native'
import { OrderProvider } from './src/contexts/OrderContext'

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
      />
      <OrderProvider>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: () => (<Foundation name="home" size={24} color="black" />)
          }} />
          <Tab.Screen name="Solicitar Entrega" component={OrderService} options={{
            tabBarIcon: () => (<MaterialCommunityIcons name="drone" size={24} color="black" />)
          }} />
        </Tab.Navigator>
      </OrderProvider>
    </NavigationContainer>
  );
};
