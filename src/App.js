import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './containers/Home/Home';
import Quiz from './containers/Quiz/Quiz';
import Results from './containers/Results/Results';
import './App.css';

const App = () => (
        <BrowserRouter className="App">
            <Switch>
                <Route path='/quiz' exact component={Quiz}/>
                <Route path='/results' exact component={Results}/>
                <Route path='/' exact component={Home}/>
                <Redirect to='/' />
            </Switch>
        </BrowserRouter>
);

export default App;
