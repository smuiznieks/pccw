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
    <div className='container'>
      <h1>Locations</h1>
      {data && data.locations.map((location, i) => {
        return <Restaurant info={location} key={i} />
      })}
    
      <h1>Menu</h1>
      <ul className='list-group' style={{ width: '20rem' }}>
        {data && data.menu.map((item, i) => {
          return <MenuItem menuItem={item} key={i} />
        })}
      </ul>
    </div>
  );
}

export default App;
