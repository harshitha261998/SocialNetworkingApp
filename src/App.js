import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login/Login';
import {Switch,Route} from 'react-router-dom';
function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default App;
