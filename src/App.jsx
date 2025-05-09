import { useState } from "react";
import data from "../src/data.json";

function App() {
  const [products, setProducts] = useState(data);

  return (
    <div className="container">
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
  );
}

export default App;
