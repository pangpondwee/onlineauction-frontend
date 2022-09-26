import blank_star from "../pictures/star_blank.png";
import half_star from "../pictures/star_half.png";
import star from "../pictures/star.png";
import goods from "../pictures/nintendo.png";

const ReviewObj = (props) =>{
    const allstar = []
    let tmp = props.rating
    while(tmp>=1){
        allstar.push(<img src={star} className="star" alt="star"/>)
        tmp-=1
    }
    if(tmp===0.5) allstar.push(<img src={half_star} className="star" alt="star"/>)
    while(allstar.length<5) allstar.push(<img src={blank_star} className="star" alt="star"/>)

	return (
		<div className="Review-box">
			<img src={goods} alt="Review_goods" className="mini-pic-goods"/>
            <span>
                <h4>{props.name}</h4>
                <h6>Bidder : A</h6><br></br>
                {allstar}
            </span>
            <p>{props.reviewing}</p>
            
		</div>
	)
}

export default ReviewObj;