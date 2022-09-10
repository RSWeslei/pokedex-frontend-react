/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Main from './src/components/Main';
import PokemonViewer from './src/components/PokemonViewer';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => PokemonViewer);
// AppRegistry.registerComponent(appName, () => Home);
