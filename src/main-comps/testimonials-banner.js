import personOne from '../Content/Morillo.jpg'
import Tyler from '../Content/Tyler.jpg'
import Avi from '../Content/Avi.jpg'
import Jon from '../Content/Jonathan.jpg'


export default function testimonials() {
    return(
    <>
        <div className="titleBar">            
            <h1 className="titleTest">Testimonials</h1>
        </div>
        <section className="testiSec">
            <div id="Morillo" className="cardConT">
                <div className="cardT">
                    <img src={personOne} alt="Morillo"></img>
                    <div className="cardHedT">                    
                        <h2>Morilla</h2>
                        <span>Been eating here for years</span>
                    </div>
                    <div className="cardFootT">
                        <p>Ever since I was a little girl I have always loved coming to little lemon. Delicious food and better service than anywhere else in Chicago.</p>
                    </div>
                </div>
            </div>
            <div id="Jon" className="cardConT">
                <div className="cardT">
                    <img src={Jon} alt="Jonathan"></img>
                    <div className="cardHedT">                    
                        <h2>Jon</h2>
                        <span>My Favourite restaurant in town</span>
                    </div>
                    <div className="cardFootT">
                        <p>I'm New to Chicago, but Little Lemon is the best place in town, I am sure of it</p>
                    </div>
                </div>
            </div>
            <div id="Tyler" className="cardConT">
                <div className="cardT">
                    <img src={Tyler} alt="Tyler"></img>
                    <div className="cardHedT">                    
                        <h2>Onikanabiwe</h2>
                        <span>Great for the kids</span>
                    </div>
                    <div className="cardFootT">
                        <p>My whole family loves the little lemon. It is hands down our favourite place to eat.</p>
                    </div>
                </div>
            </div>
            <div id="Avi" className="cardConT">
                <div className="cardT">
                    <img src={Avi} alt="Avi"></img>
                    <div className="cardHedT">                    
                        <h2>Avi</h2>
                        <span>Never eaten anything like it</span>
                    </div>
                    <div className="cardFootT">
                        <p>The best food I've ever had. Especially the lemon cakes. Yummy!</p>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}