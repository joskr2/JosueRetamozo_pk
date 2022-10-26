import { FC } from "react"
import { IInfoCard } from "../../../../interfaces/IInfoCard"
import "./style.css"
const InfoCard: FC<IInfoCard> = ({ source, number, name, types, weight, movements, sprites, bgColorIndex = "#B4AAF9" }) => {
  return (

    <div className="infocard" style={{ backgroundColor: `${bgColorIndex}`, borderColor: `${bgColorIndex}` }}>
      <img className="card__image" src={source} alt="pokemon image" />
      <p className="card__text">#{number}</p>
      <p className="card__text">{name}</p>
      <h3 className="card__text_info">Types</h3>
      <p className="card__text_info">{types}</p>
      <h3 className="card__text_info">Peso</h3>
      <p className="card__text_info">{weight}</p>
      <h3 className="card__text_info">Sprites</h3>
      <div className="sprites__container">
        {
          sprites?.map((sprite, i) =>
            <img key={i} src={sprite} alt={sprite} />
          )
        }
      </div>
      <h3 className="card__text_info">Movimientos</h3>
      <p className="card__text_info">{movements}</p>
    </div>

  )
}

export default InfoCard