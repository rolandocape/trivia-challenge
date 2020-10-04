import React from 'react';
import ReactDOM from 'react-dom';

import mountApp from './helpers/mountApp';

describe('Render app', () => {
    it(`should render successfully`, () => {
        const divElement = document.createElement('div');
        const mountedApp = mountApp();
        ReactDOM.render(mountedApp.app, divElement);
        ReactDOM.unmountComponentAtNode(divElement);
    })
});
