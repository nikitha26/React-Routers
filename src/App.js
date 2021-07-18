import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Services from './components/Services';
import Product from './components/Product';
import SignUp from './components/Signup';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>    
        <Route path="/services" exact component={Services}/>   
        <Route path="/product" exact component={Product}/>    
        <Route path="/signup" exact component={SignUp}/>

      </Switch>
    </Router>
    
  );
}

export default App;
