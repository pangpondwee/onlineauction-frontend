import ItemCard from '../components/ItemCard'
import AddressBox from '../components/Address-box'
import TrackingCard from '../components/TrackingCard'
import SummaryCard from '../components/SummaryCard'

const BillingInfo = () => {
  return (
    <div class="billing-info-page">
      <ItemCard></ItemCard>
      <div class="billing-info">
        <div class="billing-info-subcard vertical-align-card">
          <AddressBox></AddressBox>
          <SummaryCard></SummaryCard>
        </div>
        <div class="billing-info-subcard">
          <TrackingCard></TrackingCard>
        </div>
      </div>
    </div>
  )
}

export default BillingInfo
