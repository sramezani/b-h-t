/* *
 * Global Util Functions

 * */
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const Util = {
	/**
	* Test if Obj is empty
	*/
	objIsEmpty: (obj) => {
		if (typeof obj === 'object' && !(obj instanceof Array)) {
			if (Object.keys(obj).length === 0) return true;
		}
		return false;
	},

	/**
	* Convert Obj to Arr
	*/
	objToArr: obj => Object.keys(obj).map(k => obj[k]),

	validateEmail: email => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/g.test(email),

	scale: (size, factor = 0.5) => size,
	// scale: (size, factor = 0.5) => size + ( (width / 350 * size) - size ) * factor,
	
	handleError: (err) => {
		let error = '';

		if (typeof err === 'string') {
			error = err;
		}
		else if (err && err.message === 'Error') {
			error = err.errors[0];
		}
		else if (err && err.error) {
			error = err.error;
		}
		else if (err && err.error && err.error.message) {
			error = err.error.message;
		}
		else if (err && err.data && err.data.message) {
			error = err.data.message;
		}

		return error;
	}

};

/* Export ================================ */
export default Util;
