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
        <Route exact path="/" component={Home} /> 
        <Route path="/services" component={Services}/>   
        <Route path="/about" component={About}/>    
        <Route path="/signup" component={SignUp}/>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
