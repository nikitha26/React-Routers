import {BrowserRouter as Router, Switch,Route,Redirect } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/Services';
import About from './components/About';
import SignUp from './components/Signup';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={() => (<Redirect to='/home' />)} />
        <Route path="/home" exact component={Home}/>    
        <Route path="/services" exact component={Services}/>   
        <Route path="/about" exact component={About}/>    
        <Route path="/signup" exact component={SignUp}/>

      </Switch>
    </Router>
    
  );
}

export default App;
