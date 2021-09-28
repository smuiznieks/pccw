import { useEffect, useState } from 'react';
import MenuItem from './MenuItem';

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
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1>Locations</h1>
          {data && data.locations.map((location, i) => {
            return <Restaurant info={location} key={i} />
          })}
        </div>
        <div className="col-6">
          <h1>Menu</h1>
          <ul className="list-group" style={{ width: '20rem' }}>
            {data && data.menu.map((item, i) => {
              return <MenuItem menuItem={item} key={i} />
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
