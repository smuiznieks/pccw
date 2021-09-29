const MenuItem = ({menuItem}) => (
  <li className='list-group-item'>{menuItem.name} (${menuItem.price})</li>
)

export default MenuItem;
