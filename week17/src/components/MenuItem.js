const MenuItem = ({menuItem}) => (
  <li class='list-group-item'>{menuItem.name} (${menuItem.price})</li>
)

export default MenuItem;
