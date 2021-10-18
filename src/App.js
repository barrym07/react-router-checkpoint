import { Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './Nav.js';
import Home from './Home.js';
import About from './About.js';

function App() {
  return (
    <div className="App">

      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        {/* <Route path="/profiles" exact component={Profiles} />
        <Route path="/profiles/:name" component={ProfileDetails} /> */}

      </Switch>



    </div>
  );
}

export default App;
