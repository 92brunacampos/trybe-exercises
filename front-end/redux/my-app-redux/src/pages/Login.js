import React, { Component } from 'react';
import { connect } from 'react-redux'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            login: '',
            password: '',
        }
        
        this.handle = this.handle.bind(this);
        this.submit = this.submit.bind(this);
    };

    handle({ target: { value, name }}) {
        this.setState({ [name]: value })
    }

    submit() {
        const { setLogin,  setEmail } = this.state;
    }

    render() {
        const { logins } = this.props;
        const { login, password } = this.state;
        console.log(logins);
        return (
            <div>
                <label htmlFor="login">
                    Login:
                    <input name="login" type="text" value={  login } onChange={ this.handle }></input>
                </label>
                <label htmlFor="password">
                    Senha:
                    <input name="password" type="text" value={ password } onChange={ this.handle } ></input>
                </label>
                <button>Logar</button>
            </div>
        );
    }
}

const mapStateToProps = (store) => ({
    logins: store.login.login,
});

const mapDispatchToProps = (dispatch) => ({
    setLogin: () => dispatch({ type: 'SET_LOGIN'}),
    setEmail: (email, password) => dispatch({ type: 'SET_EMAIL', email, password})
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)