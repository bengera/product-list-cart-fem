import { useState, useEffect } from "react";
import data from "./data.json";

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
    overlay === true
      ? (document.body.className = "body fixed")
      : (document.body.className = "");
  });

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
        <div className="modal">
          <img
            src="/assets/images/icon-order-confirmed.svg"
            alt="order confirmed"
          />
          <h2 className="modal__heading">Order Confirmed</h2>
          <p className="modal__message">We hope you enjoy your food</p>
          <div className="modal__items-list">
            {cartItems.map((item, idx) => (
              <div className="modal__item-block" key={idx}>
                <div className="modal__left-cols">
                  <div className="modal__col-1">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="modal__item-img"
                    />
                  </div>
                  <div className="modal__col-2">
                    <div className="modal__col-2-top">
                      <p className="modal__item-name">{item.name}</p>
                    </div>
                    <div className="modal__col-2-bottom">
                      <p className="modal__quantity">x{item.quantity}</p>
                      <p className="modal__price">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
                <div className="modal__col-3">
                  <p className="modal__total">
                    ${(item.quantity * item.price).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
            <div className="modal__order-total-container">
              <p className="modal__order-text">Order Total:</p>
              <p className="modal__order-total-number">${orderTotal}</p>
            </div>
          </div>
          <button className="button modal__button" onClick={handleReset}>
            Start new order
          </button>
        </div>
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

function ProductList({ products, cartItems, setCartItems }) {
  function handleIncrement(item) {
    setCartItems((prev) =>
      prev.map((cartItem) =>
        cartItem.id === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  }

  function handleDecrement(item) {
    setCartItems((prev) =>
      prev.map((cartItem) =>
        cartItem.id === item.name && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  }

  function handleAddItem(item) {
    const newCartItem = {
      id: item.name,
      name: item.name,
      price: item.price,
      quantity: 1,
      img: item.image.desktop,
    };

    const existingItem = cartItems.find(
      (cartItem) => cartItem.id === item.name
    );

    if (existingItem) return;

    const updatedCart = [...cartItems, newCartItem];
    setCartItems(updatedCart);
  }

  return (
    <div className="product-list">
      {products.map((item, idx) => {
        const isInCart = cartItems.some(
          (cartItem) => cartItem.id === item.name
        );

        return (
          <div className="product-item" key={idx}>
            <div className="product-item__img-container">
              <img
                className="product-item__image"
                src={item.image.desktop}
                alt={item.name}
              />

              {isInCart ? (
                <div className="button quantity-button">
                  <button
                    className="btn-quantity__decrement"
                    onClick={() => handleDecrement(item)}
                  >
                    <img
                      className="quantity-icon"
                      src="/assets/images/icon-decrement-quantity.svg"
                      alt=""
                    />
                  </button>
                  <span>
                    {cartItems.find((cartItem) => cartItem.id === item.name)
                      ?.quantity || 1}
                  </span>
                  <button
                    className="btn-quantity__increment"
                    onClick={() => handleIncrement(item)}
                  >
                    <img
                      className="quantity-icon"
                      src="/assets/images/icon-increment-quantity.svg"
                      alt=""
                    />
                  </button>
                </div>
              ) : (
                <button
                  className="button product-item__button"
                  onClick={() => handleAddItem(item, idx)}
                >
                  <img
                    src="\assets\images\icon-add-to-cart.svg"
                    alt="add-to-cart"
                  />
                  Add to Cart
                </button>
              )}
            </div>

            <div className="product-item__info-container">
              <p className="product-item__type">{item.category}</p>
              <h2 className="product-item__name">{item.name}</h2>
              <p className="product-item__cost">${item.price.toFixed(2)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Cart({ cartItems, setCartItems, setOverlay, orderTotal }) {
  function removeItem(itemToRemove) {
    const updatedArr = cartItems.filter(
      (cartItem) => cartItem.id !== itemToRemove.id
    );
    setCartItems(updatedArr);
  }

  function handleConfirm() {
    console.log("Handling confirmation order");
    setOverlay((prev) => !prev);
  }

  const numCartItems = cartItems.length;
  return (
    <div className="cart">
      <h2 className="cart__heading">Your Cart ({numCartItems})</h2>
      {numCartItems > 0 ? (
        <div className="cart-items">
          <div className="items__container">
            {cartItems.map((item, idx) => (
              <div className="item" key={idx}>
                <div className="item-top">
                  <p className="item__name">{item.name}</p>
                </div>
                <div className="item-bottom">
                  <p className="item__quantity">{item.quantity}x</p>
                  <p className="item__price">@ ${item.price.toFixed(2)}</p>
                  <p className="item__total-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    className="item__btn-delete"
                    onClick={() => removeItem(item)}
                  >
                    <img
                      className="btn-delete-img"
                      src="/assets/images/icon-remove-item.svg"
                      alt="button delete"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-items__total">
            <p>Order Total</p>
            <p className="cart-items__cost-total">${orderTotal}</p>
          </div>
          <div className="environment-message">
            <img
              className="environment-icon"
              src="/assets/images/icon-carbon-neutral.svg"
              alt="tree icon"
            />
            <p className="environment-message__text">
              This is a <span style={{ fontWeight: 500 }}>carbon-neutral </span>
              delivery
            </p>
          </div>
          <button
            className="button btn-confirm"
            onClick={() => handleConfirm()}
          >
            Confirm Order
          </button>
        </div>
      ) : (
        <div className="cart-empty">
          <img
            className="cart-empty__img"
            src="assets/images/illustration-empty-cart.svg"
            alt="empty cart"
          />
          <p className="cart-empty__text">Your added items will appear here</p>
        </div>
      )}
    </div>
  );
}

export default App;
