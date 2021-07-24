import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screen/Home';
import Project from '../screen/Project';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator headerMode="none">
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="Project"
        component={Project}
      />
    </Navigator>
  </NavigationContainer>

);

export default Routes;
