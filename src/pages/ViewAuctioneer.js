import AuctioneerProfile from "../components/AuctioneerProfile";
import AuctioneerReview from "../components/AuctioneerReview";
import Auctions from "../components/Auctions";
import AuctioneerReport from "../components/AuctioneerReport";
import PopupConfirm from "../components/PopupConfirm";
import PopupReview from "../components/PopupReview";

const ViewAuctioneer = () => {
    return (
        <div>
            <div style={{display:"flex"}}>
                <PopupConfirm />
                <PopupReview />
                <AuctioneerReport />
            </div>
            <AuctioneerProfile />
            <AuctioneerReview />
            <Auctions />
        </div>
    )
}
export default ViewAuctioneer;