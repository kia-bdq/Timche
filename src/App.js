import './static/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import SpecialCategory from './components/SpecialCategory';
import CommodityDetails from './components/CommodityDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/special-category/:category'>
              <SpecialCategory />
            </Route>
            <Route path='/commodity/:id'>
              <CommodityDetails />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
