# Week 17

BEFORE CLASS: comment out bootstrap.min.css from index.js

https://www.scrapehero.com/location-reports/Taco%20Bell-USA/
https://www.fastfoodmenuprices.com/taco-bell-prices/

1. Overview: simple web app (doesn't do anything really than load a JSON file)
2. `npm install bootstrap`
3. Add the following line to `index.js`

```
import 'bootstrap/dist/css/bootstrap.min.css';
```

4. `className='container'`
5. Bootstrap rows/columns
6. Get Started (click Web): https://reactrouter.com/
7. `npm install react-router-dom`
8. Going to focus on 1st example. Copy and paste the following from the quick state guide into App.js

```
import {
  BrowserRouter as Router, // re-naming BrowserRouter to Router
  Switch,
  Route,
  Link
} from "react-router-dom";
```

Be cautious renaming certain things! Good trick when you have several imports named the same.

9. Add `<Router>` component
10. Add `<Switch>` component
11. Add `<Route>` component, including default path `<Route path="/">`
12. Get Started: https://reactstrap.github.io/
13. `npm install --save reactstrap react react-dom`
14. Important callout: bootstrap must be installed!!
15. Create new component `<Navi>` and copy starter file from React Strap
- rename from `Example`
- remove props
- remove state
- remove toggle, dropdown, text, extra div on outside
- remove unused imports
- rename 'brand'

Why can't this component be called `Navbar`?

16. Update hrefs

Note the page is actually still reloading

17. React-router expects the following component: `<Link to="/">Home</Link>`

See `Navbar Properties` for details about `tag`, which will allow us to use the `<Link>` component from react-router.

Make sure to import to Navi.js: `import { Link } from "react-router-dom";`

```
<NavbarBrand tag={Link} to='/'>Taco Time</NavbarBrand>

<NavLink tag={Link} to='/locations'>Locations</NavLink>

<NavLink tag={Link} to='/menu'>Menu</NavLink>
```
