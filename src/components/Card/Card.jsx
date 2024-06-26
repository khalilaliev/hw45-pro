import { useEffect, useState } from "react";
import { API } from "../../services/cardApi";
import CardItem from "./CardItem";

const Card = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    const getCardData = async () => {
      try {
        const res = await fetch(API);
        if (!res.ok) throw new Error("Data not found!");
        const data = await res.json();
        setCard(data);
      } catch (err) {
        console.error(err.message);
      }
    };
    getCardData();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-4xl text-center my-7">Product cards</h1>
        <div className=" flex flex-wrap  justify-around gap-5 ">
          <CardItem card={card} />
        </div>
      </div>
    </>
  );
};

export default Card;
