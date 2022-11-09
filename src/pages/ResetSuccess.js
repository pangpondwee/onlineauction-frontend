import { Link } from "react-router-dom";
import classes from "../css/VerifyEmail.module.css";
import successIcon from "../pictures/blue_circle_check.png";

function ResetSuccess() {
    return (
        <>
        <div className={classes.successIconWrapper} >
            <img className={classes.successIcon} src={successIcon} />
        </div>
        <div className={classes.desc}>
            <h1>Password Has Been Reset</h1>
            <div className={classes.returnsignin}>
              <Link to={"/signup"}>Return To Sign In</Link>
            </div>
        </div>
        </>
    );
}

export default ResetSuccess;
