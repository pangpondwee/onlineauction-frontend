import { useEffect } from "react";
import Card from "../components/Card";
import { getData } from "../components/fetchData"

import classes from "../css/AdminBlacklist.module.css";

const data = [
  {
    Email: "uvxyzt@gmail.com",
  },
  {
    Email: "uvxyzt@gmail.com",
  },
  {
    Email: "uvxyzt@gmail.com",
  },
  {
    Email: "uvxyzt@gmail.com",
  },
];

const AdminBlacklist = () => {
  useEffect(()=>{
    getData("/admin/blacklist")
    .then(res=>{
      console.log(res)
    })
  },[])
  return (
    <>
      <h1>Blacklist Management</h1>
      <div className={classes.Grid}>
        <div className={classes.App}>
          <table className={classes.table}>
            <thead>
            <tr>
              <th className={classes.th}>Email</th>
            </tr>
            </thead>
            <tbody>
              {data.map((val, key) => {
                return (
                  <tr key={key}>
                    <td className={classes.td}>{val.Email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Card className={classes.input}>
          <div className={classes.Form}>
            <h3>Add To Blacklist</h3>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" placeholder="Email" />
            <div className={classes.button}>Add</div>
          </div>
        </Card>
      </div>
    </>
  );
};
export default AdminBlacklist;
