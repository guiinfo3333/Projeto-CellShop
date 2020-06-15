import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Produto from './pages/Produto';
import Celulares from './pages/Celulares';
import Acessorios from './pages/Acessorios';
import NotFound from './pages/NotFound';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/produto/:name/:id" component={ Produto }/>
        <Route exact path="/celulares" component={ Celulares }/>
        <Route exact path="/acessorios" component={ Acessorios }/>
        <Route component={NotFound}/>
    </Switch>
);

export default Routes;
