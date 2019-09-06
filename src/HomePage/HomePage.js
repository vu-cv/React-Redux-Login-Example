import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state ={}

		console.log('init home')
	}

	componentDidMount() {
        this.props.getUsers();
        console.log('did home')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    	console.log('did update home')	
    }

	render() {

		const { user, users } = this.props;
		// console.log(users)
		
		return(
			<div>
				<h1>Hi {user.user.username}</h1>
				<h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.name + ' ' + user.name}
                                
                            </li>
                        )}
                    </ul>
                }

				<Link to="/login">Logout</Link>
			</div>
		);
	}

}
function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedProfilePage = connect(mapState, actionCreators)(HomePage);
export { connectedProfilePage as HomePage };