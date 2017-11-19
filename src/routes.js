import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './Containers/Homepage';
import About from './Containers/About';
import History from './Containers/History';
import Members from './Containers/Members';
import Committ from './Containers/Committ';
import Events from './Containers/Events';
import Temple from './Containers/Temple';

const MainRoutes = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/About" component={About} />
    <Route exact path="/History" component={History} />
    <Route exact path="/Members" component={Members} />
    <Route exact path="/Committees" component={Committ} />
    <Route exact path="/Events" component={Events} />
    <Route exact path="/Temple" component={Temple} />
  </Switch>
);

export default MainRoutes;
