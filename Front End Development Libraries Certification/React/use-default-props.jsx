const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
      <h2>Current items: {props.items}</h2>
      <h2>Price: {`$${props.price}`}</h2>
    </div>
  )
};
// Change code below this line
ShoppingCart.defaultProps = {
  items: 0, 
  price: 200
}