import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Orders from "./container/Reviews/Reviews";
import './App.css';
import About from "./container/About/About";

const App = () => (
    <Layout>
        <Switch>
            <Route path="/" exact component={About}/>
            <Route path="/orders" component={Orders}/>
            <Route render={() => <h1>404 Not Found</h1>}/>
        </Switch>
    </Layout>
);

export default App;
