import { useEffect, useState } from "react";
import "./widgetLg.css";
import { userRequest } from "../../requestMethods";
import { format } from "timeago.js";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const res = await userRequest.get("/orders");
      setOrders(res.data);
    };
    getOrders();
  }, [])

  // useEffect(() => {
  //   const mergeUsers = async () => {
  //     console.log(orders)
  //     const data = orders?.map(async(order) => {
  //       const res = await userRequest.get(`/users/find/${order.userId}`);
  //       return {...order, name:res.data.fullname};
  //     })
  //     console.log(data)
  //     setOrders(data);
  //   }
  //   mergeUsers();
  // }, [orders])


  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          {orders.map((order) => (
            <tr className="widgetLgTr" key={order._id}>
              <td className="widgetLgUser">
                <img
                  src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">{order.userId}</span>
              </td>
              <td className="widgetLgDate">{format(order.createdAt)}</td>
              <td className="widgetLgAmount">$ {order.amount/4000}</td>
              <td className="widgetLgStatus">
                <Button type={order.status} />
              </td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}
