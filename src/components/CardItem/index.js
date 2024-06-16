// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList

  return (
    <li className={className}>
      <h1 className="card-item-heading">{title}</h1>
      <p className="card-item-para"> {description}</p>
      <div className="image-card">
        <img src={imgUrl} alt={title} className="img-props" />
      </div>
    </li>
  )
}

export default CardItem
