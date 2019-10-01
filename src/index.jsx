import React from "react";
import {render} from "react-dom";
import {Route} from "react-router-dom";
import {ConnectedRouter} from "react-router-redux";
import {Provider} from "react-redux";
import {AppContainer} from "react-hot-loader";

import history from "./utils/history";
import createStore from "./utils/createStore";

import "./reset.less";
import "./styles.less";

import Routes from "./modules/routes";

const initialState = {};
const store = createStore(initialState, history);

render(
	<AppContainer>
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<Route component={Routes}/>
			</ConnectedRouter>
		</Provider>
	</AppContainer>, document.getElementById("application")
);
