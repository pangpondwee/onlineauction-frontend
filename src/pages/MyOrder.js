import OrderObj from "../components/OrderObj";
import MyAuctionNav from "../components/MyOrderNav";
import MyBidNav from "../components/MyOrderNav";

const MyOrder = () =>{
	return (
        <>
            <MyBidNav/>
            <div className="all-review">
                {/* store each order */}
                <OrderObj status="Currently Bid" status_class="currently_bid" text_alert="Your last bid: 1800$" by_who="(By Kong Pakkapol)"/>
                <OrderObj status="To Pay" status_class="bidder-to-pay" text_alert="Waiting for your payment" by_who="(By Kong Pakkapol)"/>
                <OrderObj status="To Pay" status_class="bidder-to-pay-wait-admin" text_alert="Waiting for admin to confirm your payment" by_who="(By Kong Pakkapol)"/>
                <OrderObj status="To Delivered" status_class="to-delivered" text_alert="Waiting for auctioneer to ship your item" by_who="(By Kong Pakkapol)"/>
                <OrderObj status="To Confirm" status_class="bidder-to-confirm" text_alert="An item is on its way to you. You can check a tracking number here.
If you’re satisfy with your item, click accept." by_who="(By Kong Pakkapol)" />
                <OrderObj status="Completed" status_class="completed" by_who="(By Kong Pakkapol)"/>
                <OrderObj status="On Auction" status_class="on-auction" text_alert="Time left: 13 hr 13 m 13 s"/>
                <OrderObj status="To Pay" status_class="auctioneer-to-pay" text_alert="Waiting for payment from Pongsatorn (Bidder)"/>
                <OrderObj status="To Shipped" status_class="to-shipped" text_alert="Waiting for shipping"/>
                <OrderObj status="To Confirm" status_class="auctioneer-to-confirm" text_alert="Waiting for bidder to confirm"/>
                <OrderObj status="Completed" status_class="completed"/>
            </div>
        </>
	)
}
export default MyOrder;