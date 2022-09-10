import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AucProfile = () => {
    return (
        <div className="AucPro">
            <div className="AucProImg"></div>
            <div className="AucDetail">
                <div className="AucDes">
                    <h2>Pakkapol Kong</h2>
                    <h6>Auctioneer Veteran</h6>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus commodo elit et tincidunt. Quisque interdum, arcu sed euismod faucibus, metus nisi laoreet sem, ac dictum nisi ante eu dolor. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </div>
                </div>
                <div className="AucAllStat">
                    <div className="AucRating">
                        <h6>Rating</h6>
                        <h6>4</h6>
                        <FontAwesomeIcon icon="fa-solid fa-star" />
                        <FontAwesomeIcon icon="fa-solid fa-star" />
                        <FontAwesomeIcon icon="fa-solid fa-star" />
                        <FontAwesomeIcon icon="fa-solid fa-star" />
                        <FontAwesomeIcon icon="fa-regular fa-star" />
                    </div>
                    <div className="AucBadges">
                        <h6>Badges</h6>
                    </div>
                    <div className="AucStat">
                        <h6>Auction Statistic</h6>
                        <h6>Items submitted : 20</h6>
                        <h6>Items sold : 13</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AucProfile;