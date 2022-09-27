import styles from "../css/AdminConfirmPayment.module.css";
import { Link, useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import getData from "../components/fetchData";

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

const AdminConfirmPayment = () => {
  const [data,setData] = useState([]);
  const [status,setStatus] = useState("loading")
  useEffect(()=>{
    getData("/admin/transaction-list?filter=confirmSlip")
    .then(res=>{
      setData(res.transactionList)
      setStatus(res.status)
    })
    .catch(e=>{
      setStatus("error");
      setData(e.message)
    })
  },[])
  if(status == "success"){
    return (
      <>
        <h1>Confirm Payment</h1>
        <div className={styles.App3}>
          <table className={styles.table}>
            <thead>
            <tr>
              <th className={styles.th}>Auctioneer</th>
              <th className={styles.th}>Winner</th>
              <th className={styles.th}>Price</th>
              <th className={styles.th}></th>
            </tr>
            </thead>
            <tbody>
            {data.map((val, key) => {
              return (
                <tr key={key} className={styles.tr}>
                  <td className={styles.td}>{val.auctioneerEmail}</td>
                  <td className={styles.td}>{val.bidderEmail}</td>
                  <td className={styles.td}>{val.winningPrice}</td>
                  <td className={styles.td}>
                    <Link to="#">detail</Link>
                  </td>
                </tr>
              );
            })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
  else if(status == "loading"){
    return (
      <p>Loading...</p>
    )
  }
  else{
    return (
      <div>
        <h1>Error</h1>
        <p>{data}</p>
      </div>
    )
  }
};
export default AdminConfirmPayment;
