import React from "react";
import kong from "../pictures/kong.png";
import fullStar from "../pictures/fullStar.png";
import emptyStar from "../pictures/emptyStar.png";
import badge1 from "../pictures/badge1.png";
import badge2 from "../pictures/badge2.png";
import badge3 from "../pictures/badge3.png";
import stat from "../pictures/stat.png";

const AuctioneerProfile = () => {
    return (
        <div className="AucPro">
            <img className="AucProImg" src={kong} alt="this-is-kong-desuwa" />
            <div className="AucDetail">
                <div className="AucDes">
                    <h1>Pakkapol Kong</h1>
                    <h6>Auctioneer Veteran</h6>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus commodo elit et tincidunt. Quisque interdum, arcu sed euismod faucibus, metus nisi laoreet sem, ac dictum nisi ante eu dolor. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </div>
                </div>
                <div className="AucAllStat">
                    <div className="AucRating">
                        <h6>Rating</h6>
                        <div className="rating-star">
                            <h6>4</h6>
                            <img src={fullStar} alt="full-star" />
                            <img src={fullStar} alt="full-star" />
                            <img src={fullStar} alt="full-star" />
                            <img src={fullStar} alt="full-star" />
                            <img src={emptyStar} alt="empty-star" />
                        </div>
                    </div>
                    <div className="AucBadges">
                        <h6>Badges</h6>
                        <div className="badges">
                            <img src={badge1} alt="badge1" />
                            <img src={badge2} alt="badge2" />
                            <img src={badge3} alt="badge3" />
                        </div>
                    </div>
                    <div className="AucStat">
                        <h6>Auction Statistic</h6>
                        <div className="stat">
                            <img src={stat} alt="stat" />
                            <h6>Items submitted : 20<br></br>Items sold : 13</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuctioneerProfile;