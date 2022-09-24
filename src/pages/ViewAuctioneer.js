import AuctioneerProfile from "../components/AuctioneerProfile";
import Auctions from "../components/Auctions";
import AuctioneerReport from "../components/AuctioneerReport";
import PopupConfirm from "../components/PopupConfirm";
import PopupReview from "../components/PopupReview";
import "../css/ViewAuctioneer.css"

const ViewAuctioneer = () => {
    return (
        <div>
            <div style={{display:"flex"}}>
                <PopupConfirm />
                <PopupReview />
                <AuctioneerReport />
            </div>
            <AuctioneerProfile />
            <Auctions />
        </div>
    )
}
export default ViewAuctioneer;