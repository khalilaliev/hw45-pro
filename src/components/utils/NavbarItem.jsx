import Card from "../Card/Card";
import MyOrders from "../MyOrders/MyOrders";

const NAVBAR_ITEM = [
  {
    path: "/",
    title: "Products",
    element: <Card />,
  },
  {
    path: "/basket",
    title: "My orders",
    element: <MyOrders />,
  },
];

export { NAVBAR_ITEM };
