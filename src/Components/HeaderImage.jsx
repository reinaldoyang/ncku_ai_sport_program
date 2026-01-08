import tabletennis from "../assets/table_tennis.jpg"
import '../headerimage.css'
function HeaderImage({title}){
    return (
        <div className="img-container">
            <img src={tabletennis} alt="table tennis" className="page_photo" />
            <h3 className="overlay-text">{title}</h3>
        </div>
    )
}

export default HeaderImage