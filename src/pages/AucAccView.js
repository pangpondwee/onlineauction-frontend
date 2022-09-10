import AucProfile from "../components/AucProfile";
import AucReview from "../components/AucReview";
import Auctions from "../components/Auctions";
import AuctionReport from "../components/AuctionReport";
import PopupConfirm from "../components/PopupConfirm";
import PopupReview from "../components/PopupReview";

const AucAccView = () => {
    return (
        <div>
            <div className="btn-list">
                <PopupConfirm />
                <PopupReview />
                <AuctionReport />
            </div>
            <AucProfile />
            <AucReview />
            <Auctions />
        </div>
    )
}
export default AucAccView;