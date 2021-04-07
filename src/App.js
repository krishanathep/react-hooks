import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Detail from "./pages/Detail";
import Footer from "./components/Footer";
import Foods from "./pages/Foods";
import FoodDetail from "./pages/FoodDetail";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/detail/:id/title/:title">
            <Detail />
          </Route>
          <Route path='/foods'>
            <Foods/>
          </Route>
          <Route path='/food-detail/:id'>
            <FoodDetail/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
