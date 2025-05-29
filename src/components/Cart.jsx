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
                    <svg
                      className="btn-delete-img"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="none"
                      viewBox="0 0 10 10"
                    >
                      <path
                        fill="currentColor"
                        d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                      />
                    </svg>
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
