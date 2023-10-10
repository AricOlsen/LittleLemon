import '../Styles/App.css'
import store from '../Content/restaurant.jpg'

function reserveNow(){
    console.log("Reserved")
}

export default function reserve(){
    return(
    <>
    <div className="reserve">        
        <h1 className="reserve">Little Lemon</h1>
        <h2 className="reserve">Chicago</h2>
        <p className="reserve">Little lemon is a family owned mediterainian restaurant in chicago. We offer a healthy, midscale experience. </p>
        <img className="reserve" src={store} alt="FoodPic"></img>
        <button className="reserve" onClick={reserveNow}>Reserve a Table</button>
    </div>

    </>
    )
} 