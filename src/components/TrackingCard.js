import Package from '../pictures/package.jpeg'
const TrackingCard = () => {
  return (
    <div class="grey-box">
      <div>Shipping</div>
      <div>Shipping company: Kerry Express</div>
      <div>Tracking Number: LEXPU0121395915</div>
      <div>Package Picture</div>
      <div class="center-pic">
        <img class="package-picture" src={Package} alt="package"></img>
      </div>
    </div>
  )
}

export default TrackingCard
