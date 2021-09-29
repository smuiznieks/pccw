import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import GridExample from './GridExample';
import MenuItem from './MenuItem';
import Navi from './Navi';
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
  }, [data]);

  return (
    <Router>
      <Navi />
      <div className='container'>
        <Switch>
          <Route path="/locations">
            <h1>Locations</h1>
            {data && data.locations.map((location, i) => {
              return <Restaurant info={location} key={i} />
            })}
          </Route>
          <Route path="/menu">
            <h1>Menu</h1>
            <ul className='list-group' style={{ width: '20rem' }}>
              {data && data.menu.map((item, i) => {
                return <MenuItem menuItem={item} key={i} />
              })}
            </ul>
          </Route>
          <Route path="/grid">
            <GridExample />
          </Route>
          <Route path="/">
            <h1>It's taco time!!</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
