# Week 18

1. https://reactrouter.com/web/example/auth-workflow
2. Create `ProvideAuth.js` in `components` folder
3. Copy `lines 76 - 85` 
4. Add lines `import { createContext } from "react";` and `export default ProvideAuth;`
5. Create `hooks` folder
6. Create `useProvideAuth.js` in `hooks` folder
7. Copy `lines 91 - 113`
8. Add lines `import { useState } from "react";` and `export default useProvideAuth;`
9. Also copy `lines 60 - 70`
10. Add `import useProvideAuth from "../hooks/useProvideAuth";` to `ProvideAuth.js`
11. Add `<ProvideAuth>` component to `App.js`
12. Create `PrivateRoute.js` in `components` folder
13. Copy `lines 135 - 156`
14. Add lines `import { Route, Redirect } from "react-router-dom";` and `export default PrivateRoute;`
15. Copy `lines 87 - 89` to `ProvideAuth.js`, update import to include `useContext` and update export

```
function useAuth() {
  return useContext(authContext);
}
```

```
export { ProvideAuth, useAuth };
```

16. Update import in `App.js` to `import { ProvideAuth } from './ProvideAuth';`
17. Update import in `PrivateRoutes.js` to `import { useAuth } from './ProvideAuth';`
18. Verify that working correctly
19. Create `AuthButton.js` in `components`
20. Copy `lines 115 - 133`
21. Add lines `import { useHistory } from "react-router-dom";`, `import { useAuth } from "./ProvideAuth";` and `export default AuthButton;`
22. Add `<AuthButton />` to `App.js` outside the `<Switch>` component
23. Create `LoginPage.js` in `components`
24. Copy `lines 166 - 184`
25. Add lines `import { useHistory, useLocation } from "react-router-dom";`, `import { useAuth } from "./ProvideAuth";` and `export default LoginPage;`
26. Add `/login` to as a route in `App.js`

```
<Route path="/login">
  <LoginPage />
</Route>
```

27. Add `logout` to `Navi.js`...  but have to do some refactoring
28. Change `line 13` to `function Navi() {`
29. Add lines `import { Link, useHistory } from "react-router-dom";` and `import { useAuth } from './ProvideAuth';`
30. Add lines and console.log

```
let history = useHistory();
  console.log(history);
  let auth = useAuth();
  console.log(auth);
```

31. Add Log Out / Log In text

```
<NavItem>
  { auth.user ? 
    <NavLink>Log Out</NavLink>
    :
    <NavLink>Log In</NavLink>
  }
</NavItem>
```

32. Add Log Out / Log In onClick / link

```
<NavLink onClick={() => {
  auth.signout(() => history.push('/'));
}}>
  Log Out
</NavLink>
:
<NavLink tag={Link} to="/login">Log In</NavLink>
```

33. SEE NOTES on Line 43 in Navi.js for follow up on converation from office hours
