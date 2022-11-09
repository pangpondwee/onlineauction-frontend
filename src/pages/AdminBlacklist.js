import { useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import { getData, patchData, postData } from "../components/fetchData"
import PopupError from "../components/PopupError";

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
  const emailRef = useRef()
  const [data,setData] = useState([])
  const [error,setError] = useState("")

  const getBlacklist = ()=>{
    getData("/admin/blacklist")
    .then(res=>{
      setData(res.blacklistedUsers)
    })
  }

  useEffect(()=>{
    getBlacklist();
  },[])

  const onSubmit = (e)=>{
    e.preventDefault()
    const email = emailRef.current.value.trim();
    if(!email.match(/.+@.+/)){
      setError("Error: Invalid Email")
      return
    }
    emailRef.current.value = ""
    patchData("/admin/blacklist/add",JSON.stringify(
      {
        email: email
      }
    ))
    .then(()=>{
      console.log("OK")
      getBlacklist();
    })
    .catch(e=>{
      setError(e.message)
    })
  }
  const removeEmail = (email)=>{
    patchData("/admin/blacklist/remove",JSON.stringify(
      {
        email: email
      }
    ))
    .then(()=>{
      console.log("OK")
      getBlacklist();
    })
    .catch(e=>{
      setError(e.message)
    })
  }
  return (
    <>
      <PopupError
      error={error}
      setError={setError}
      />
      <h1>Blacklist Management</h1>
      <div className={classes.Grid}>
        <div className={classes.App}>
          <table className={classes.table}>
            <thead>
            <tr>
              <th className={classes.th}>Name</th>
              <th className={classes.th}>User ID</th>
              <th className={classes.th}>Email</th>
              <th className={classes.th}>Remove</th>
            </tr>
            </thead>
            <tbody>
              {data.map((val, key) => {
                return (
                  <tr key={key}>
                    <td className={classes.td}>{val.displayName}</td>
                    <td className={classes.td}>{val.userID}</td>
                    <td className={classes.td}>{val.email}</td>
                    <td><a href="" onClick={(e)=>{removeEmail(val.email); e.preventDefault()}}>Remove</a></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Card className={classes.input}>
          <form onSubmit={onSubmit} className={classes.Form}>
            <h3>Add To Blacklist</h3>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" ref={emailRef} placeholder="Email" />
            <input type="submit" className={classes.button} value="Add" required/>
            {/* <div className={classes.button}>Add</div> */}
          </form>
        </Card>
      </div>
    </>
  );
};
export default AdminBlacklist;
