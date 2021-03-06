import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './Containers/Homepage';
import About from './Containers/About';
import History from './Containers/History';
import Members from './Containers/Members';
import Family1 from './Containers/Family1';
import Family2 from './Containers/Family2';
import Family3 from './Containers/Family3';
import Family4 from './Containers/Family4';
import Committ from './Containers/Committ';
import cps from './Containers/cps';
import mns from './Containers/mns';
import ncs from './Containers/ncs';
import Events from './Containers/Events';
import Temple from './Containers/Temple';

const MainRoutes = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/About" component={About} />
    <Route path="/History" component={History} />
    <Route exact path="/Members" component={Members} />
    <Route path="/Members/Family1" component={Family1} />
    <Route path="/Members/Family2" component={Family2} />
    <Route path="/Members/Family3" component={Family3} />
    <Route path="/Members/Family4" component={Family4} />
    <Route exact path="/Committees" component={Committ} />
    <Route path="/Committees/cps" component={cps} />
    <Route path="/Committees/mns" component={mns} />
    <Route path="/Committees/ncs" component={ncs} />
    <Route exact path="/Events" component={Events} />
    <Route exact path="/Temple" component={Temple} />
  </Switch>
);

export default MainRoutes;
