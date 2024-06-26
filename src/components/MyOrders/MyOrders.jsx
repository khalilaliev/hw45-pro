import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { MdDeleteForever } from "react-icons/md";

const MyOrders = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const sum = cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0);

  const handleDelete = (id) => {
    removeFromCart(id);
  };

  return (
    <div className="text-center table w-1/3 my-11 mx-auto">
      <h1 className="text-center my-5 text-3xl">
        My orders <span>{sum.toFixed(2)}$</span>
      </h1>
      <ul className="flex flex-col gap-5 p-5">
        {cartItems.map((item, index) => (
          <li
            className="text-2xl flex items-center justify-between gap-5 border border-gray-500 border-opacity-50 p-4 rounded-lg"
            key={index}
          >
            {item.name} - {item.price}$
            <MdDeleteForever
              className="text-3xl cursor-pointer"
              onClick={() => handleDelete(item.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyOrders;
