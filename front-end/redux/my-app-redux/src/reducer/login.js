const INITIAL_STATE = {
    login: false,
    email: '',
    password: '',
};

// const action = (value) => ({
//     type: "SET_LOGIN",
//     nome: value
// })

// action('bruna');

// const action = {
//     type: "SET_LOGIN_TRUE",
// }

// const action = {
//     type: "SET_LOGIN_FALSE",
// }

// const action = {
//     type: "SET_LOGIN_TRUE",
// }

// const action = {
//     type: "SET_COLOR",
// }

const reducerLogin = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_LOGIN':
            return { ...state, login: true }
        case 'SET_EMAIL':
            return { ...state, email: action.email, password:  action.password}
            return state
    }
}

export default reducerLogin;