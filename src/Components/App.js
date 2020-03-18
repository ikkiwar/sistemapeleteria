import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from '../Pages/Login';
import panel from '../Pages/panel';

function App(){
return(
    <BrowserRouter>
    <Switch>
    <Route exact path="/Panel" component={panel}></Route>
        <Route component={Login}></Route>
    </Switch>
    </BrowserRouter>
)

}
export default App;

