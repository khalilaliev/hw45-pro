// import Button from "../Button/Button";

import { useContext } from "react";
import Button from "../Button/Button";
import { CartContext } from "../../contexts/CartContext";

const CardItem = ({ card }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  if (card.length === 0)
    return (
      <svg className="spinner-ring" viewBox="25 25 50 50" strokeWidth="5">
        <circle cx="50" cy="50" r="20" />
      </svg>
    );

  return (
    <>
      {card.map((item) => {
        return (
          <div
            className="   h-fit overflow-hidden card card-image-cover flex-col-reverse"
            key={item.id}
          >
            <div className="card-body p-5">
              <h2 className="card-header">{item.name}</h2>
              <p className="text-content2">{item.description}</p>
              <p className="text-content2">{item.price} $</p>
              {/* <Button /> */}
              <div className="card-footer">
                <Button
                  text="Add to basket"
                  onClick={() => handleAddToCart(item)}
                />
              </div>
            </div>

            <img src={item.photo} alt="" />
          </div>
        );
      })}
    </>
  );
};

export default CardItem;
