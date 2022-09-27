import styles from "../css/AdminReport.module.css";
import { useEffect,useState } from "react";
import { getData } from "../components/fetchData"

const data = [
  {
    ReporterEmail: "abc@gmail.com",
    ReportedEmail: "xyz@gmail.com",
    ReportDate: "05/09/2022",
    Description: "Suspicious",
  },
  {
    ReporterEmail: "abc@gmail.com",
    ReportedEmail: "xyz@gmail.com",
    ReportDate: "05/09/2022",
    Description: "Suspicious",
  },
  {
    ReporterEmail: "abc@gmail.com",
    ReportedEmail: "xyz@gmail.com",
    ReportDate: "05/09/2022",
    Description: "Suspicious",
  },
  {
    ReporterEmail: "abc@gmail.com",
    ReportedEmail: "xyz@gmail.com",
    ReportDate: "05/09/2022",
    Description: "Suspicious",
  },
  {
    ReporterEmail: "abc@gmail.com",
    ReportedEmail: "xyz@gmail.com",
    ReportDate: "05/09/2022",
    Description: "Suspicious",
  },
];

const AdminReport = () => {
  const [data,setData] = useState([]);
  const [status,setStatus] = useState("loading")
  useEffect(()=>{
    getData("/admin/reports")
    .then(res=>{
      console.log(res)
      setData(res.reportList)
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
        <h1>Report System</h1>
        <div className={styles.App2}>
          <table className={styles.table}>
            <thead>
            <tr>
              <th className={styles.th}>Reporter Email</th>
              <th className={styles.th}>Reported Email</th>
              <th className={styles.th}>Report Date</th>
              <th className={styles.th}>Description</th>
            </tr>
            </thead>
            <tbody>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td className={styles.td}>{val.ReporterEmail}</td>
                  <td className={styles.td}>{val.reportedMail}</td>
                  <td className={styles.td}>{val.reportedDate}</td>
                  <td className={styles.td}>{val.description}</td>
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
export default AdminReport;
