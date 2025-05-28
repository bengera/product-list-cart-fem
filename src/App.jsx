import { useState, useEffect } from "react";
import data from "./data.json";
import { ProductList } from "./components/ProductList";
import { Cart } from "./components/Cart";
import { Modal } from "./components/Modal";

function App() {
  const [products, setProducts] = useState(data);
  const [cartItems, setCartItems] = useState([]);
  const [overlay, setOverlay] = useState(false);
  const [orderTotal, setOrderTotal] = useState(0);

  function handleReset() {
    setOverlay(false);
    setCartItems([]);
    setOrderTotal(0);
  }

  useEffect(() => {
    if (overlay) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [overlay]);

  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setOrderTotal(total.toFixed(2));
  }, [cartItems]);

  return (
    <>
      {overlay === true ? (
        <Modal
          cartItems={cartItems}
          orderTotal={orderTotal}
          handleReset={handleReset}
        />
      ) : null}
      <div className={overlay === true ? "overlay show" : "overlay"}></div>
      <div className="container">
        <div className="menu">
          <h1>Desserts</h1>
          <main>
            <ProductList
              products={products}
              setProducts={setProducts}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          </main>
        </div>
        <Cart
          cartItems={cartItems}
          setCartItems={setCartItems}
          overlay={overlay}
          setOverlay={setOverlay}
          orderTotal={orderTotal}
        />
      </div>
    </>
  );
}

export default App;
