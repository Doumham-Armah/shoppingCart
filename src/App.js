import logo from './logo.svg';
import './App.css';
import Cart from './Cart.js'
import CartItem from './CartItem'

const items = [
  { id: 1, itemName: "Taco Seasoning", price: 2.25, qty: 2 },
  { id: 2, itemName: "Pinto Beans", price: 1.99, qty: 3 },
  { id: 3, itemName: "Sour Cream", price: 3.5, qty: 1 }
];

function App() {
  return (
   <Cart initialItems= {items} />
  );
}

export default App;
