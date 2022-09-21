import FollowObj from "../components/FollowObj";

const MyFollowing = () =>{
	return (
        <>
            <h1>My Following List</h1>
            <div className="all-review">
                {/* store each review */}
                <FollowObj/>
            </div>
        </>
	)
}
export default MyFollowing;