import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import generateStore from '../../store';
import App from '../../App';

const mountApp = () => {
    const store = generateStore();
    const app = mount(
        <Provider store={store}>
            <App/>
        </Provider>
    );
    return { app, store };
}

export default mountApp;