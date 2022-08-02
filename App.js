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
      <StatusBar style="auto" backgroundColor={'#468faf'} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {backgroundColor: '#468faf'},
          headerTintColor: 'white',
          contentStyle: {backgroundColor: '#014f86'}
        }}>
          <Stack.Screen name = "CountriesOverview" component={CountriesOverviewScreen} options={{
            title: 'All Countries'
          }}/>
          <Stack.Screen name = "CountriesDetail" component={CountriesDetailScreen} options={{
            title: 'Country Detail'
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
