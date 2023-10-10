import '../Styles/App.css'
import storePic from '../Content/restaurant.jpg'
import { useNavigate } from "react-router-dom"


export default function Reserve(){
    const reserveNow = useNavigate();
    return(
    <>
    <div className="reserve">        
        <h1 className="reserve">Little Lemon</h1>
        <h2 className="reserve">Chicago</h2>
        <p className="reserve">Little lemon is a family owned mediterainian restaurant in chicago. We offer a healthy, midscale experience. </p>
        <img className="reserve" src={storePic} alt="FoodPic"></img>
        <button className="reserve" onClick={()=>reserveNow('/reservationPage')}>Reserve a Table</button>
    </div>

    </>
    )
} 