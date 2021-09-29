const GridExample = () => (
  <div className="row">
    <div className="col-5" style={{ backgroundColor: 'blue' }}>
      <h1>Column 1</h1>
    </div>
    <div className="col-8" style={{ backgroundColor: 'red' }}>
      <h1>Column 2</h1>
    </div>
    <div className="col" style={{ backgroundColor: 'yellow' }}>
      <h1>Column 3</h1>
    </div>
    <div className="col" style={{ backgroundColor: 'green' }}>
      <h1>Column 4</h1>
    </div>
  </div>
);

export default GridExample;