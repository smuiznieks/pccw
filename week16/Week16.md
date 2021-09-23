# Week 16

1. index.html: `id="surprise"`
2. index.jsx: React Developer Tools
3. Create Instructor Component

```
const Instructor = () => {
  return (
    <div>
      <h2>Instructor Info</h2>
    </div>
  );
};
```

4. Uncomment Instructor Component in Hello Component
5. Add useEffect: Test by refreshing the page (discuss second optional parameter)

```  
React.useEffect(() => {
  console.log('You are in the instructor lifecycle!');
}, []);
```

6. Use State to track name

`let [name, setName] = React.useState('Selga');`

7. Add button to update name and changeInstructor function

`<button onClick={() => changeInstructor()}>Change Instructor</button>`

```
function changeInstructor() {
  // if (name === 'Selga') {
  //  setName('April');
  // } else {
  //  setName('Selga');
  // }

  // Refactor
  let newName = name === 'Selga' ? 'April' : 'Selga';
  setName(newName);
};
```

8. Click the button - nothing happens
9. Add `name` to empty array in useEffect and `console.log(`Name: ${name}`);`
10. Use State to track day

`let [day, setDay] = React.useState('W');`

11. Add button to update date and changeDay function

`<button onClick={() => changeOfficeHours()}>Change Office Hours</button>`

```
function changeOfficeHours() {
  let days = ['M', 'T', 'W'];
  let newDay = days[Math.floor(Math.random() * days.length)];
  console.log(newDay);
  setDay(newDay);
}
```

12. Add `day` to array in useEffect and update console message

13. Review of classes and extending classes (one at a time in console)

```
class Polygon {
  constructor() {
    console.log('you hit the constructor!');
    this.name = 'Polygon';
  }
}

const poly1 = new Polygon();

class Triangle extends Polygon {
  constructor() {
    super();
    console.log('this is a triangle');
  }
}

const poly2 = new Triangle();
```

14. Example in classes

```
class OldHello extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Selga'
    }
  }

  render() {
    // does not work without 'this' keyword
    return <div>
      <h1>HELLO! This is the OldHello class</h1>
      <h2>{this.state.name}</h2>
    </div>
  }
}
```

15. Add OG lifecycle method

```
// OG lifecycle method
componentDidMount() {
  console.log('Old Hello mounted!');
}
```

16. Add button and function to change name

`<button onClick={this.changeName}>Change Name</button>`

```
changeName = () => {
  this.setState({
    name: 'new name'
  })
}
```

17. Add another OG lifecycle method

```
componentDidUpdate() {
  console.log(this.state.name);
}
```
