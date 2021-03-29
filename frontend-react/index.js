import registerRootComponent from 'expo/build/launch/registerRootComponent';
import React from 'react';
import { Provider } from 'react-redux';
import App from "./App"
import {store} from "./store/store"

const RNRedux=()=>(
    <Provider store={store}>
        App
    </Provider>
)

registerRootComponent(()=>RNRedux);
