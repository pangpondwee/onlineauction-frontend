import { Alert } from "react-bootstrap";

const PopupError = (props)=>{
    const error = props.error ? true : false;
    if(!error){
        return <div className="alertBox-container "></div>
    }
    setTimeout(()=>{
        props.setError("")
    },2000)
    return (
        <div className="alertBox-container ">
            <Alert show={true} className="alertBox" variant="danger" >
                {props.error}
            </Alert>
        </div>
    )
}

export default PopupError;