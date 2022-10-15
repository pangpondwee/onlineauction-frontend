import { Link } from "react-router-dom";
import classes from "../css/VerifyEmail.module.css";
import successIcon from "../pictures/blue_circle_check.png";

function ForgetSuccess() {
    return (
        <>
        <div className={classes.successIconWrapper} >
            <img className={classes.successIcon} src={successIcon} />
        </div>
        <div className={classes.desc}>
            <h1>Email has been sent!</h1>
            <p>Check your inbox and go to the received link
to reset your password</p>
            <div className={classes.returnsignin}>
              <Link to={"/signup"}>Return To Sign In</Link>
            </div>
        </div>
        </>
    );
}

export default ForgetSuccess;
