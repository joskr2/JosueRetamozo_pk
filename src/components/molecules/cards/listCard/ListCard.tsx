import { FC } from "react"
import { IListCard } from "../../../../interfaces/IListCard"
import "./style.css"
const ListCard: FC<IListCard> = ({ source, number, name, bgColorIndex = "#7cbeb5" }) => {

  return (
    <div className="card" style={{ backgroundColor: `${bgColorIndex}`, border: `15px solid ${bgColorIndex}` }}>
      <img className="card__image" src={source} alt="pokemon image" />
      <p>#{number}</p>
      <p>{name}</p>
    </div>
  )
}

export default ListCard