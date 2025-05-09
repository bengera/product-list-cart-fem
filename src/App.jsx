function App() {
  return (
    <div className="container">
      <h1>Desserts</h1>
      <main>
        <div className="product-list">
          <div className="product-list__content">
            <div className="product-item">
              <img
                className="product-item__image"
                src="src\assets\images\image-waffle-desktop.jpg"
                alt="waffle"
              />
              <button>
                <img
                  src="src\assets\images\icon-add-to-cart.svg"
                  alt="add-to-cart"
                />
                Add to Cart
              </button>
              <p className="product-item__type">Waffle</p>
              <h2 className="product-item__name">Waffle with Berries</h2>
              <p className="product-item__cost">$6.50</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
