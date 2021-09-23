// Main Component
// Check out React Developer Tools
const Hello = props => {
  const course = props.course;

  return(
    <div>
      <h1>Hello, {course}!</h1>
      <Instructor />
      <OldHello />
    </div>
  );
};

// TODO: Create Instructor Component
// Check out React Developer Tools
const Instructor = props => {
  let [name, setName] = React.useState('Selga');
  let [day, setDay] = React.useState('W');

  React.useEffect(() => {
    console.log('You are in the instructor lifecycle!');
    console.log(`Name: ${name} / Day: ${day}`);
  }, [name, day]);

  function changeInstructor() {
    if (name === 'Selga') {
      setName('April');
    } else {
      setName('Selga');
    }
  };

  function changeDay() {
    let days = ['M', 'T', 'W'];
    let newDay = days[Math.floor(Math.random() * days.length)];
    setDay(newDay);
    console.log(newDay);
  }

  return(
    <div>
      <h2>Instructor Info</h2>
      <button onClick={() => changeInstructor()}>Change Instructor</button>
      <button onClick={() => changeDay()}>Change Day</button>
    </div>
  );
};

// TODO: Create OldClass component
// Check out React Developer Tools
class OldHello extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: 'Selga'
    }
  }

  // OG lifecycle methods
  componentDidMount() {
    console.log('Old Hello mounted!!');
  }

  componentDidUpdate() {
    console.log(this.state.name);
  }

  changeName = () => {
    this.setState({
      name: 'new name'
    })
  }

  render() {
    // does not work without 'this' keyword
    return <div>
      <h1>HELLO! This is the OldHello class</h1>
      <h2>{this.state.name}</h2>
      <button onClick={this.changeName}>Update Name!</button>
    </div>
  }
}


ReactDOM.render(
  <Hello course="Professional Certificate in Coding Women's Cohort"/>, document.getElementById('surprise')
);

// Review of classes and extending classes
class Polygon {
  constructor() {
    console.log('I am a polygon!');
  }
}

class Triangle extends Polygon {
  constructor() {
    super();
    console.log('I am a triangle!');
  }
}

// Compare the two:
// const poly1 = new Polygon();
// const poly2 = new Triangle();
