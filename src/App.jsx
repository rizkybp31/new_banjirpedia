import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Logo from "./components/Logo/Logo";
import NavigationBar from "./components/Navbar/Navbar";
import Welcome from "./components/Sections/Welcome/Welcome";
import Footer from "./components/Footer/Footer";
import Banjir from "./components/Sections/Banjir/Banjir";
import EmergencyCall from "./components/Sections/EmergencyCall/EmergencyCall";
import BlogDetails from "./components/Sections/Blog/BlogDetails";
import BlogList from "./components/Sections/Blog/Blog";
import NotFound from "./components/NotFound/NotFound";
import Lapor from "./components/Sections/Lapor/Lapor";
import About from "./components/Sections/About/About";

function App() {
  return (
    <Router>
      <div className="bg-dark px-2 px-lg-0 min-vh-100">
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/lapor">
            <Lapor />
          </Route>
          <Route path="/blog">
            <BlogList />
          </Route>
          <Route path="/blogdetail/:id">
            <BlogDetails />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/banjir">
            <Banjir />
          </Route>
          <Route path="/call">
            <EmergencyCall />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Logo />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
