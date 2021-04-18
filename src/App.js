import logo from './logo.svg';
import './App.css';
import Home from './pages'
import About from './pages/about'
import Client from './pages/client'
import Contact from './pages/contact'
import Process from './pages/process'
import Navbar from './components/navigationbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/client' component={Client} />
        <Route path='/contact' component={Contact} />
        <Route path='/process' component={Process} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
