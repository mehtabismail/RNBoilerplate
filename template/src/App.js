import './translations';
import React, { useEffect } from "react";
import { LogBox, Text, TextInput, View } from "react-native";
import { Provider } from "react-redux";
import ApplicationNavigator from "./navigators/Application";
import { persistor, store } from "./store/store";
import { PersistGate } from 'redux-persist/lib/integration/react';
import Toast from 'react-native-toast-notifications';

LogBox.ignoreAllLogs(true);

function App() {
  useEffect(() => {
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    TextInput.defaultProps = TextInput.defaultProps || {};
    TextInput.defaultProps.allowFontScaling = false;
    View.defaultProps = View.defaultProps || {};
    View.defaultProps.allowFontScaling = false;
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApplicationNavigator />
        <Toast ref={ref => (global.toast = ref)} />
      </PersistGate>
    </Provider>
  );
}

export default App;
