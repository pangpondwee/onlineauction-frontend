import styles from "../css/AdminConfirmDelivery.module.css";
import { Link, useLocation } from "react-router-dom";

const data = [
  {
    Auctioneer: "abcdefg@gmail.com",
    Winner: "peeranat.sri@ku.th",
    Price: "2000$",
  },
  {
    Auctioneer: "abcdefg@gmail.com",
    Winner: "kittipak.wi@ku.th",
    Price: "2500$",
  },
  {
    Auctioneer: "abcdefg@gmail.com",
    Winner: "peeranat.sri@ku.th",
    Price: "7000$",
  },
  {
    Auctioneer: "abcdefg@gmail.com",
    Winner: "pakapol.na@ku.th",
    Price: "6969$",
  },
];

const AdminConfirmDelivery = () => {
  return (
    <>
      <h1>Confirm Delivery</h1>
      <div className={styles.App4}>
        <table className={styles.table}>
          <tr>
            <th className={styles.th}>Auctioneer</th>
            <th className={styles.th}>Winner</th>
            <th className={styles.th}>Price</th>
            <th className={styles.th}></th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key} className={styles.tr}>
                <td className={styles.td}>{val.Auctioneer}</td>
                <td className={styles.td}>{val.Winner}</td>
                <td className={styles.td}>{val.Price}</td>
                <td className={styles.td}>
                  <Link to="#">detail</Link>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};
export default AdminConfirmDelivery;
