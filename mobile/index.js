import { AppRegistry } from 'react-native';
import { name } from './app.json';
import App from './src';

global.Blob = null

// console.disableYellowBox = true;

AppRegistry.registerComponent(name, () => App);