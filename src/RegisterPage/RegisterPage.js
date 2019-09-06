import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';

class RegisterPage extends Component {
	constructor(props) {
		super(props);
		// this.props.logout();

		this.state = {
			user: {
				username: '',
				password: '',
				email: '',
				provider: ''
			},
			submitted: false
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {

		const { name, value } = e.target;
        const { user } = this.state;

        // console.log(...user);
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });


	}

	 handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.email && user.provider && user.username && user.password) {
            this.props.register(user);
        }
    }
	render() {
		console.log(this.state.user)
		const { loggingIn } = this.props;
		const { username, password, email, provider, submitted } = this.state;
		return(
			<form name="form" onSubmit={this.handleSubmit}>

			  <legend>Form title</legend>
			  
			  <div className="form-group">
			    <label htmlFor="">username</label>
			    <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange}/>
			    {submitted && !username &&
                    <div className="help-block">Username is required</div>
                }
			  </div>
			  <div className="form-group">
			    <label htmlFor="">password</label>
			    <input type="text" className="form-control" name="password" value={password} onChange={this.handleChange}/>
			    {submitted && !password &&
                    <div className="help-block">Password is required</div>
                }
			  </div>
			  <div className="form-group">
			    <label htmlFor="">emaill</label>
			    <input type="text" className="form-control" name="email" value={email} onChange={this.handleChange}/>
			    {submitted && !password &&
                    <div className="help-block">email is required</div>
                }
			  </div>
			  <div className="form-group">
			    <label htmlFor="">provider</label>
			    <input type="text" className="form-control" name="provider" value={provider} onChange={this.handleChange}/>
			    {submitted && !password &&
                    <div className="help-block">provider is required</div>
                }
			  </div>
			  
			  <button type="submit" className="btn btn-primary">Submit</button>
			  {loggingIn &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
			<Link to="/login" className="btn btn-link">Login</Link>
			</form>
		);
	}

}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedLoginPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedLoginPage as RegisterPage };