import ReviewObj from "../components/ReviewObj";

const MyReview = () =>{
	return (
        <>
            <h1>My Review</h1>
            <div className="all-review">
                {/* store each review */}
                <ReviewObj/>
            </div>
        </>
	)
}
export default MyReview;