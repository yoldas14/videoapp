import {Alert} from 'react-native';
import {
  JSExceptionHandler,
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';

const errorHandler: JSExceptionHandler = (e: Error, isFatal: boolean) => {
  if (isFatal) {
    Alert.alert('Error'); // TODO
  } else {
    console.log(e);
  }
};

export default {
  init() {
    setNativeExceptionHandler(exceptionString => {
      console.log(exceptionString);
    }, false);

    setJSExceptionHandler(errorHandler, true);
  },
};
