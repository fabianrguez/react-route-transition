import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { About, Contact, Home } from '../pages';
import Navbar from './Navbar';

export default function Main() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/contact" exact>
          <Contact/>
        </Route>
        <Route path="/about" exact>
          <About/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}