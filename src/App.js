import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import SignUp from './components/Signup';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/signup" exact component={SignUp}/>

      </Switch>
    </Router>
    
  );
}

export default App;
