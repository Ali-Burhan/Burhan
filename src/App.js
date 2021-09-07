
import './App.css';
import Header from './mycomponent/Header';
import Blog from './mycomponent/Blog';
import Footer from './mycomponent/Footer';
import Contact from './mycomponent/Contact';
import Body from './mycomponent/Body'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Personal from './mycomponent/Personal';
import Address from './mycomponent/Address';
function App() {

  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
          <Route  path="/Contact">
          <Contact />
          </Route>
          <Route  path="/Address">
          <Address />
          </Route>
          <Route  path="/Personal">
          <Personal />
          </Route>
          <Route  path="/Blog">
          <Blog />
          </Route>
          <Route path = "/">
    <Body name = "BurhanSE" />  
          </Route>
        </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
