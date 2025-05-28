export function Cart({ cartItems, setCartItems, setOverlay, orderTotal }) {
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
