import './static/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import SpecialCategory from './components/SpecialCategory';
import CommodityDetails from './components/CommodityDetails';
import StorePage from './components/StorePage';
import ShoppingCart from './components/ShoppingCart';
import PageNotFound from './components/PageNotFound';
import InProgress from './components/InProgress';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path='/Timche'>
              <Home />
            </Route>
            <Route exact path='/Timche/special-category/:category'>
              <SpecialCategory />
            </Route>
            <Route exact path='/Timche/commodity/:id'>
              <CommodityDetails />
            </Route>
            <Route exact path='/Timche/store/:id'>
              <StorePage />
            </Route>
            <Route exact path='/Timche/cart'>
              <ShoppingCart />
            </Route>
            <Route exact path='/Timche/shop-register'>
              <InProgress />
            </Route>
            <Route exact path='/Timche/about-us'>
              <InProgress />
            </Route>
            <Route exact path='/Timche/login'>
              <InProgress />
            </Route>
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
