import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import NoFound from './components/NoFound/NoFound';
import CountryDetails from './components/CountryDetails/CountryDetails';



function App() {
  return (
    <div className="app">
      <Router>
      <Header></Header>
      <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/country/:name">
            <CountryDetails></CountryDetails>
          </Route>
          <Route path="*">
            <NoFound></NoFound>
          </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
