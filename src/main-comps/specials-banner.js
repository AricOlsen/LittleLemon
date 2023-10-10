import '../Styles/App.css'
import bruschetta from '../Content/Bruschetta.jfif'
import greek from '../Content/Greek-Salad.jfif'
import lemon from '../Content/lemoncake.jpg'

export default function Specials() {
    return(
    <>
        <div className="titleBar">
            <h1>Weekly Specials</h1>
            <button>Order Online</button>
        </div>
        <section className="specials">
            <div id="bruschetta" className="cardCon">
                <div className="card">
                <img src={bruschetta} className="card" alt="Bruschetta"></img>
                    <div className="cardHed">                    
                        <h2>Bruschetta</h2>
                        <span>$6.99</span>
                    </div>
                    <div className="cardFoot">
                        <p>Our Bruschetta is made inn house and is  reliable and the same for you every time.</p>
                        <button className="card">Order This Dish</button>
                        <i href={""}></i>
                    </div>
                </div>
            </div>
            <div id="greek" className="cardCon">
                <div className="card">
                    <img src={greek} className="card" alt="food2"></img>
                    <div className="cardHed">                    
                        <h2>Greek Salad</h2>
                        <span>$8.99</span>
                    </div>
                    <div className="cardFoot">
                        <p>Our greek salad is both healthy and delicious</p>
                        <button className="card">Order This Dish</button>
                        <i href={""}></i>
                    </div>
                </div>
            </div>
            <div id="lemonCake" className="cardCon">
                <div className="card">
                    <img src={lemon} alt="food3"></img>
                    <div className="cardHed">                    
                        <h2>Lemon Cake</h2>
                        <span>$4.99</span>
                    </div>
                    <div className="cardFoot">
                        <p>Sweet and Sour. Our lemon cake is the perfect way to wrap up your meal.</p>
                        <button className="card">Order This Dish</button>
                        <i href={""}></i>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}