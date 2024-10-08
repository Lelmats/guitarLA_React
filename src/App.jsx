import { useEffect, useState } from "react";
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import { db } from "./data/db";

function App() {

  const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
  }

  const [data] = useState(db);
  const [cart, setCart] = useState(initialCart);

  const minItem = 1
  const maxItem = 5

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])

  function addToCart(item) {
    const itemsExists = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (itemsExists >= 0 ) {
      if(cart[itemsExists].quantity >= maxItem) return
      const updatedCart = [...cart];
      updatedCart[itemsExists].quantity++;
      setCart(updatedCart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
  }
  
  function removeFromCart(id) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  function increaseQuantity(id) {
    const updatedCart = cart.map(item => {
      if(item.id === id && item.quantity < maxItem ) {
        return{
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    });
    setCart(updatedCart)
  }
  function decreaseQuantity(id) {
    const updatedCart = cart.map(item => {
      if(item.id === id && item.quantity > minItem) {
        return{
          ...item,
          quantity: item.quantity - 1
        }
      } 
      return item
    });
    setCart(updatedCart)
  }
  function emptyCart() {
    setCart([])
  }


  return (
    <div>
      <Header
        cart={cart}
        emptyCart={emptyCart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar} addToCart={addToCart} />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
