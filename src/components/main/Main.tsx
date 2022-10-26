import Footer from "../footer/Footer"
import InfoCard from "../molecules/cards/infoCard/InfoCard"
import ListCard from "../molecules/cards/listCard/ListCard"
import "./style.css"

const Main = () => {
  return (
    <section>
      <div className="listContainer">
        <input className="main_input" placeholder="Buscar" />
        <div className="listCards__container">
          <ListCard source="https://via.placeholder.com/150" number={3} name="Pikachu" href="/" bgColorIndex="#8FD8CE" />
          <ListCard source="https://via.placeholder.com/150" number={3} name="Pikachu" href="/" bgColorIndex="#F2C29E" />
          <ListCard source="https://via.placeholder.com/150" number={3} name="Pikachu" href="/" bgColorIndex="#E9A1AC" />
          <ListCard source="https://via.placeholder.com/150" number={3} name="Pikachu" href="/" bgColorIndex="#C3D0D9" />
        </div>
      </div>
      <div className="detailContainer">
        <InfoCard source="https://via.placeholder.com/150" number={3} name="Pikachu" href="/" bgColorIndex="#B4AAF9" />
      </div>
    </section>
  )
}

export default Main