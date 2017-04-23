import React from 'react';
import App from './index';
import {Provider} from 'react-redux';
import store from './store/Store';
const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default Root;