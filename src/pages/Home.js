import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AuctionCard from '../components/AuctionCard'
import '../css/Home.css'
import arrow_left from '../pictures/arrow_left.png'
import arrow_right from '../pictures/arrow_right.png'
import AuctionCardRow from '../components/AuctionCardRow'
import getData from '../components/fetchData'

const AuctionList = (props) => {
  const [data, setData] = useState([])
  const [status, setStatus] = useState('loading')
  useEffect(() => {
    getData(props.url, setData)
      .then((res) => {
        setStatus(res.status)
        setData(res.data)
      })
      .catch((e) => {
        setData(e.message)
        setStatus('error')
      })
  }, [])
  if (status == 'success') {
    return <AuctionCardRow data={data} />
  } else if (status == 'loading') {
    return <p style={{ marginLeft: '3em' }}>Loading...</p>
  } else {
    return (
      <>
        <p style={{ marginLeft: '3em' }}>Error: {data}</p>
      </>
    )
  }
}

const Home = () => {
  const displayName = localStorage.getItem('displayName')
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  return (
    <>
      <div id="jumbotron">
        <div>
          <h1>Get Anything at a SUPER AWESOME price</h1>
          <br></br>
          <Link to="/search?sort=time_remaining" className="">
            Ending Soon
          </Link>
        </div>
        <div>
          <img src="/image-auction.png" />
        </div>
      </div>
      {isLoggedIn ? (
        <>
          <p className="headHome">
            Welcome, {displayName}! Let’s see what you got...
          </p>
          <p className="detail">Your Recent Bids</p>
          <AuctionList
            message="You don't have any recent bids"
            url="/auction/auction-list?filter=recent_bidding"
          />
          <p className="detail">Recent Following List</p>
          <AuctionList
            message="You are not following any bids"
            url="/auction/auction-list?filter=my_following_list"
          />
        </>
      ) : (
        <></>
      )}
      <p id="#popular" className="detail">
        Popular
      </p>
      <AuctionList
        message="There are no popular bids"
        url="/auction/auction-list?filter=popular"
      />
      <p className="detail">Ending soon</p>
      <AuctionList
        message="There are no bids ending soon"
        url="/auction/auction-list?filter=ending_soon"
      />
    </>
  )
}
export default Home
