import { useCartState } from "../components/Cart/CartContext";

const CartContent = () => {
  const cartState = useCartState();

  return (
    <div className="col-span-2 px-8">
      <ul className="divide-y">
        {cartState.items.map((item, index) => (
          <li
            key={index}
            className="flex justify-between py-4 group items-center"
          >
            <div>
              {item.count} x {item.title}
            </div>
            <div>
              <span>$ {item.price}</span>
              <span className="text-gray-400 group-hover:text-red-600 ml-5">
                <button onClick={() => cartState.removeItemFromCart(item.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-label="Remove item"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CartSummary = () => {
  const cartState = useCartState();

  return (
    <div className="py-4">
      <div className="pb-2">Cart summary:</div>
      <div className="font-bold">{`You have ${cartState.items.length} items in your cart`}</div>
    </div>
  );
};

const CartPage = () => {
  return (
    <div className="grid grid-cols-3">
      <CartContent />
      <CartSummary />
    </div>
  );
};

export default CartPage;
