import blank_star from "../pictures/star_blank.png";
import star from "../pictures/star.png";
import goods from "../pictures/nintendo.png"

const ReviewObj = () =>{
	return (
		<div className="Review-box">
			<img src={goods} alt="Review_goods" className="mini-pic-goods"/>
            <span>
                <h4>Nintendo Switch</h4>
                <h6>Bidder : A</h6><br></br>
                <img src={star} alt="Review_star" className="star"/>
                <img src={star} alt="Review_star" className="star"/>
                <img src={star} alt="Review_star" className="star"/>
                <img src={blank_star} alt="Review_star" className="star"/>
                <img src={blank_star} alt="Review_star" className="star"/>
            </span>
            <p>Incididunt officia sit mollit qui ullamco enim quis deserunt aliqua nostrud pariatur aliquip. Ullamco pariatur incididunt commodo duis eu amet nulla. Minim sunt velit tempor nostrud id et. Veniam excepteur non deserunt adipisicing elit do ut nisi consectetur. Lorem proident eu laboris velit dolore. Nulla ad ut sunt labore est duis voluptate cupidatat duis laboris. Amet sint nostrud reprehenderit aliquip tempor in reprehenderit occaecat et do. Commodo sint magna nostrud ea ad elit quis.</p>
            
		</div>
	)
}

export default ReviewObj;