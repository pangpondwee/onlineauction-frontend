import pageNotFoundImg from '../pictures/page_not_found.jpg'
import '../css/PageNotFound.css'

const NoPage = () => {
  return (
    <div className="page-not-found">
      <div className="description-section">
        <div className="description">
          The page you requested could not be found
        </div>
      </div>
      <img
        src={pageNotFoundImg}
        className="page-not-found-img"
        alt="page not found"
      />
    </div>
  )
}

export default NoPage
