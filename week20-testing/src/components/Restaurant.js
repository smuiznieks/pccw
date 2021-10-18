import '../styles/Restaurant.css';

const Restaurant = ({info}) => (
  <div className='card restaurant-info' style={{ width: '25rem' }}>
    <div className='card-body'>
      <h5 className='card-title'>{info.name}</h5>
      <p className='card-text'>{info.address}</p>
      <button className='btn btn-primary'>Set as 'Favorite'</button>
    </div>
  </div>
)

export default Restaurant;
