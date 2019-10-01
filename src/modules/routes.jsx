import * as React from "react";
import {Component} from "react";
import {Switch, Route} from "react-router-dom";
import Repositories from "../containers/Repositories";

export class Application extends Component {
    render() {
        return <Switch>
            <Route path="/" render={(routeProps) => <Repositories options={routeProps} />} />
        </Switch>;
    }
}

export default Application;
