# Week 26

1. Create new Firebase project
2. Add app (under Settings)
3. Create realtime database
4. `npm init` 
5. `npm i firebase` (make sure to make a gitignore)
6. Create `index.html` and `firebase.js`
7. Copy and paste CDN
8. `console.log(app);` to see if everything is working as expected
9. Serve the app (might have to empty cache/hard reload)
10. Add database:
```
import { getDatabase } from "firebase/database";
const database = getDatabase();
```
11. Write data:
```
function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

// writeUserData(1, 'Selga', 'selga@email.com', 'selga.jpg')
```
12. Check database
13. Read data:
```
const userRef = ref(database, 'users/1');
onValue(userRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});
```

