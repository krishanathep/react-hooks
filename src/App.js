//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Detail from "./pages/Detail";
import Footer from "./components/Footer";
import IndexNews from "./pages/news/IndexNews";
import CreateNews from "./pages/news/CreateNews";
import EditNews from "./pages/news/EditNews";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import Countries from "./pages/Countries";
import WaterManagement from "./pages/WaterManagement";
import WaterManagementDetail from "./pages/WaterManagementDetail";
import Foods from "./pages/Foods";
import CountrieDetail from "./pages/CountrieDetail";

const App = () => {
  return (
    <>
      <HashRouter basename='/'>
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
          <Route
            path="/news"
            render={({ match: { url } }) => (
              <>
                <Route path={`${url}/indexnews`}>
                  <IndexNews />
                </Route>
                <Route path={`${url}/createnews`}>
                  <CreateNews />
                </Route>
                <Route path={`${url}/editnews`}>
                  <EditNews />
                </Route>
              </>
            )}
          ></Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/userdetail/:id">
            <UserDetail />
          </Route>
          <Route path="/countries">
            <Countries />
          </Route>
          <Route path='/countriedetail/:name'>
            <CountrieDetail />
          </Route>
          <Route path="/water-management">
            <WaterManagement />
          </Route>
          <Route path="/water-manatement-detail/:id">
            <WaterManagementDetail />
          </Route>
          <Route path="/foods">
            <Foods />
          </Route>
        </Switch>
        <Footer />
      </HashRouter>
    </>
  );
};

export default App;
