import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import {Route} from 'react-router-dom';
import Nav from './nav';
import Home from './home';
import AboutUs from './about_us';
import SecretDocs from './secret_docs';
import Operatives from './operatives';
import auth from '../hoc/auth'

const App = () => (
    <div>
        <div className="container">
            <Nav />

            <Route exact path='/' component={Home}/>
            <Route path='/about-us' component={AboutUs}/>
            <Route path='/secret-docs' component={auth(SecretDocs)}/>
            <Route path='/operatives' component={Operatives}/>
            
        </div>
    </div>
);

export default App;
