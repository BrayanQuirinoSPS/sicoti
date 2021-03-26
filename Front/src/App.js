import Login from './pages/login'
import Home from './pages/home'
import CoachPage from './pages/CoachPage'
import AdminPage from './pages/AdminPage'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './index.css'
import { PrivateRoute } from './components/PrivateRote';
import {Rol} from './functions/rol'
function App() {
  return (
      <Router>
        <div className="App">
            <Switch>
              <PrivateRoute exact path ='/home' component={Home}/>
              <PrivateRoute exact path="/coach" rol={[Rol.coach]} component={CoachPage} />
              <PrivateRoute exact path="/admin" rol={[Rol.admin]} component={AdminPage} />
              <Route exact path="/" component={Login}/>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
