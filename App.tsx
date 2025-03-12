import {View} from 'react-native';
import RootNavigator from './src/navigations/RootNavigator.tsx';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigator></RootNavigator>
    </NavigationContainer>
  );
}

export default App;
