import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

// Redux-Persist
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native
import AsyncStorage from '@react-native-community/async-storage';

// All redux reducers (rolled into one mega-reducer)
import RootReducer, { SaveSubsetFilter } from '@redux/index';

// Load middleware
const middlewares = [
	// Allows action creators to return functions (not just plain objects)
	thunk
];

let composer;
/* istanbul ignore if  */
if (__DEV__) {
	/* istanbul ignore next */ 
	global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest;
	const { composeWithDevTools } = require('redux-devtools-extension');
	composer = composeWithDevTools;
	middlewares.push(require('redux-immutable-state-invariant').default());
}
else {
	composer = compose;
	console.log = () => {};
	console.warn = () => {};
	console.error = () => {};
}

// Persist Config
const config = {
	timeout: 12000,
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['core'],
	debug: false,
	transforms: SaveSubsetFilter
};
// Init redux store (using the given reducer & middleware)
const enhancer = composer(
	applyMiddleware(...middlewares)
);

const reducer = persistReducer(config, RootReducer);
let store = createStore(reducer, enhancer);

if (module.hot) {
	// console.log('Hot reload!');
	module.hot.accept(() => {
		const nextRootReducer = require('@redux/index').default;
		const nextReducer = persistReducer(config, nextRootReducer);
		store.replaceReducer(nextReducer);
	});
}

export default store;
