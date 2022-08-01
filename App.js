import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CountriesDetailScreen from './screens/CountriesDetailScreen';
import CountriesOverviewScreen from './screens/CountriesOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "CountriesOverview" component={CountriesOverviewScreen}/>
          <Stack.Screen name = "CountriesDetail" component={CountriesDetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
