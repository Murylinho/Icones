import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Adidas from './Components/Adidas';
import Mizuno from './Components/Mizuno';
import Nike from './Components/Nike';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Adidas' component={Adidas}/>
        <Drawer.Screen name='Mizuno' component={Mizuno}/>
        <Drawer.Screen name='Nike' component={Nike}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}