import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthButton from './AuthButton';
import LoginPage from './LoginPage';

import MenuItem from './MenuItem';
import Navi from './Navi';
import PrivateRoute from './PrivateRoute';
import { ProvideAuth } from './ProvideAuth';
import Restaurant from './Restaurant';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getRestaurants() {
      const response = await fetch('/tacobell.json');
      const json = await response.json();
      setData(json);
    }
    getRestaurants();
  }, []);

  return (
    <ProvideAuth>
      <Router>
        <Navi />
        <div className='container'>
          <AuthButton/>
          <Switch>
            <PrivateRoute path="/locations">
              <h1>Locations</h1>
              {data && data.locations.map((location, i) => {
                return <Restaurant info={location} key={i} />
              })}
            </PrivateRoute>
            <Route path="/menu">
              <h1>Menu</h1>
              <ul className='list-group' style={{ width: '20rem' }}>
                {data && data.menu.map((item, i) => {
                  return <MenuItem menuItem={item} key={i} />
                })}
              </ul>
            </Route>
            <Route path="/login">
              <LoginPage/>
            </Route>
            <Route path="/">
              <h1>It's taco time!!</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

export default App;
