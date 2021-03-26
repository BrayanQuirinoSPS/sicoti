import { LOGIN, LOGIN_ERROR } from '../constan';

const initial_state = {
    userDetails: {
        usuario:"",
        contrasena:"",
        rol:""
    }
}
const LoginReducer = (state = initial_state, action) => {
    switch (action.type) {
        case LOGIN:
            return {...state, data:action.userData, userDetails: { ...action.userDetails}};
        case LOGIN_ERROR:
            return {...state, ...action.payload }
        default:
            return state;
    }
}
export default LoginReducer;