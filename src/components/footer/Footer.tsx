import { FC } from "react"
import { IFooter } from "../../interfaces/IFooter"
import "./style.css"

const Footer:FC<IFooter> = ({OnNextPage,OnPrevPage}) => {

  return (
    <footer >
      <button role="button" onClick={OnPrevPage} >
        &lt;&#32; Atras
      </button>
      <button role="button" onClick={OnNextPage} >
        Siguiente &#32; &gt;
      </button>
    </footer>
  )
}

export default Footer