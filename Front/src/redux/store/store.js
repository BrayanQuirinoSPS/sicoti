import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk'
import LoginReducer from '../reducers/loginReducer';

const ConfigureStore = () => {
    var initialState = {};
    //console.log(sessionStorage)
    try {
        initialState = sessionStorage.getItem("app-evaluaciones-tih") ? JSON.parse(sessionStorage.getItem("app-evaluaciones-tih")) : {};
    } catch (error) {
        console.log('getError', error)
    }
    const saver = (store) => next => action => {
        let stateToSave = store.getState();
        sessionStorage.setItem("app-evaluaciones-tih", JSON.stringify({ ...stateToSave }))
        return next(action);
    }
        const rootReducer = combineReducers({
            login: LoginReducer,
        });
    return createStore(rootReducer,initialState,applyMiddleware(thunk,saver));
}

export default ConfigureStore;