import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import { history } from '../_helpers';
import {LoginPage} from '../LoginPage';
import { HomePage }from '../HomePage';
import { RegisterPage }from '../RegisterPage';

import { connect } from 'react-redux';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';

class App extends Component {
	constructor(props) {
		super(props);

		history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
	}

	render() {
		const { alert } = this.props;
		// console.log('thong bao:')
		// console.log(alert)
		return(
			<div className="App">
			{alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
		    	<Router history={history}>
		    		<PrivateRoute exact path="/" component={HomePage}/>
		    		<PrivateRoute path="/abc" component={HomePage}/>
		    		<Route path="/login" component={LoginPage} />
		    		<Route path="/register" component={RegisterPage} />
		    	</Router>
		    </div>
		);
	}

}

function mapState(state) {
	const { alert } = state;
	return {alert};
}

const actionCreators = {
    clearAlerts: alertActions.clear
};
const connectedApp = connect(mapState, actionCreators)(App);

export {connectedApp as App };
