export function ProductList({ products, cartItems, setCartItems }) {
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
      img: item.image.thumbnail,
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
            <div
              className="product-item__img-container"
              style={
                isInCart
                  ? { border: "2px solid #c73b0f", borderRadius: "10px" }
                  : undefined
              }
            >
              <picture>
                <source
                  media="(max-width: 25.75em)"
                  srcSet={item.image.mobile}
                />
                <source
                  media="(max-width: 67.5em)"
                  srcSet={item.image.tablet}
                />

                <img
                  className="product-item__image"
                  src={item.image.desktop}
                  alt={item.name}
                />
              </picture>

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
