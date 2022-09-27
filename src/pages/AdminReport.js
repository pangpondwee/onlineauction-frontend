import styles from "../css/AdminReport.module.css";

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
  return (
    <>
      <h1>Report System</h1>
      <div className={styles.App2}>
        <table className={styles.table}>
          <tr>
            <th className={styles.th}>Reporter Email</th>
            <th className={styles.th}>Reported Email</th>
            <th className={styles.th}>Report Date</th>
            <th className={styles.th}>Description</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td className={styles.td}>{val.ReporterEmail}</td>
                <td className={styles.td}>{val.ReportedEmail}</td>
                <td className={styles.td}>{val.ReportDate}</td>
                <td className={styles.td}>{val.Description}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};
export default AdminReport;
