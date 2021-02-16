import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
import Delivery from './pages/Delivery/Delivery.jsx';
import About from './pages/About/About.jsx';
import Contacts from './pages/Contacts/Contacts.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import GoodsContainer from './containers/GoodsContainer.jsx';
import CartContainer from './containers/CartContainer.jsx';
import NotFound from './pages/Errors/NotFound.jsx';

function App() {
  return (
    <div className="main">
      <div className="wrapper">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={CartContainer} />
          <Route exact path="/delivery" component={Delivery} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/products/:name" component={GoodsContainer} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
