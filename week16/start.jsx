// Main Component
// Check out React Developer Tools
const Hello = props => {
  const course = props.course;

  return(
    <div>
      <h1>Hello, {course}!</h1>
      {/* <Instructor /> */}
      {/* <OldHello /> */}
    </div>
  );
};

// TODO: Create Instructor Component
// Check out React Developer Tools


// TODO: Create OldClass component
// Check out React Developer Tools


ReactDOM.render(
  <Hello course="Professional Certificate in Coding Women's Cohort"/>, document.getElementById('surprise')
);
