export function Modal({ cartItems, orderTotal, handleReset }) {
  return (
    <div className="modal">
      <img
        src="/assets/images/icon-order-confirmed.svg"
        alt="order confirmed"
      />
      <h2 className="modal__heading">Order Confirmed</h2>
      <p className="modal__message">We hope you enjoy your food</p>
      <div
        className={
          cartItems.length > 3
            ? "modal__items-list scroll"
            : "modal__items-list"
        }
      >
        {cartItems.map((item) => (
          <div className="modal__item-block" key={item.name}>
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
          <p className="modal__order-text">Order Total</p>
          <p className="modal__order-total-number">${orderTotal}</p>
        </div>
      </div>
      <button className="button modal__button" onClick={handleReset}>
        Start new order
      </button>
    </div>
  );
}
