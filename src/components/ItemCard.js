import nintendo_switch from '../pictures/nintendo-switch.jpeg'

const ItemCard = () => {
  return (
    <div className="item-card">
      <img
        src={nintendo_switch}
        alt="nintendo switch"
        className="item-picture"
      ></img>
      <div className="item-card-detail">
        <div>Nintendo Switch (by Kong Pakkapol)</div>
        <div>Final Bid: 2000 Baht</div>
      </div>
    </div>
  )
}

export default ItemCard
