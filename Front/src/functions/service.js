import { BehaviorSubject } from 'rxjs';


const currentUserSubject = new BehaviorSubject(JSON.parse(sessionStorage.getItem('app-evaluaciones-tih')));

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }};

/*function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);

            return user;
        });
}*/

function login(userDetails,location){
    if(JSON.parse(sessionStorage.getItem('app-evaluaciones-tih'))){
        let aux=JSON.parse(sessionStorage.getItem('app-evaluaciones-tih'))
        aux.login.userDetails=userDetails
        sessionStorage.setItem('app-evaluaciones-tih',JSON.stringify(aux));
        //console.log('login storage', JSON.parse(sessionStorage.getItem('app-evaluaciones-tih')))
        //authenticationService.login(aux)
        currentUserSubject.next(aux)
        const { from } = location || { from: { pathname: page(userDetails.rol)} };
        return from;
        //console.log(JSON.parse(sessionStorage.getItem("app-evaluaciones-tih")))
    }
}
function logout() {
    // remove user from local storage to log user out
    sessionStorage.removeItem('app-evaluaciones-tih');
    currentUserSubject.next(null);
}

/*function init(){
    return new BehaviorSubject(JSON.parse(sessionStorage.getItem('app-evaluaciones-tih')));
}*/
function page(rol){
    switch(rol){
        case 'coach':
            return '/coach';
        case 'admin':
            return '/admin'
        default:
            return '/home'
    }
}