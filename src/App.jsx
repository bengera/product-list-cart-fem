import { useState } from "react";
import data from "./data.json";

function App() {
  const [products, setProducts] = useState(data);

  return (
    <div className="container">
      <div className="menu">
        <h1>Desserts</h1>
        <main>
          <div className="product-list">
            {products.map((item, idx) => (
              <div className="product-item" key={idx}>
                <div className="product-item__img-container">
                  <img
                    className="product-item__image"
                    src={item.image.desktop}
                    alt="waffle"
                  />

                  <button className="product-item__button">
                    <img
                      src="\assets\images\icon-add-to-cart.svg"
                      alt="add-to-cart"
                    />
                    Add to Cart
                  </button>
                </div>
                <div className="product-item__info-container">
                  <p className="product-item__type">{item.category}</p>
                  <h2 className="product-item__name">{item.name}</h2>
                  <p className="product-item__cost">${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <div className="cart">
        <h2 className="cart__heading">Your Cart (0)</h2>
        {/* <div className="cart-empty">
          <img
            className="cart-empty__img"
            src="assets/images/illustration-empty-cart.svg"
            alt="empty cart"
          />
          <p className="cart-empty__text">Your added items will appear here</p>
        </div> */}
        <div className="cart-items">
          <div className="cart-items__total">
            <p>Order Total</p>
            <p className="cart-items__cost-total">$46.50</p>
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
          <button className="btn-confirm">Confirm Order</button>
        </div>
      </div>
    </div>
  );
}

export default App;
