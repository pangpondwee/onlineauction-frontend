import classes from "../css/VerifyEmail.module.css";
import successIcon from "../pictures/blue_circle_check.png";

function SignupSuccess() {
    return (
        <>
        <div className={classes.successIconWrapper} >
            <img className={classes.successIcon} src={successIcon} />
        </div>
        <div className={classes.desc}>
            <h1></h1>
            <p>Please Click the Link in Your Email to Continue</p>
        </div>
        </>
    );
}

export default SignupSuccess;
