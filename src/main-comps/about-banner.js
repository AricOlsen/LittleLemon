import mario from '../Content/MarioAdrian.jpg'

export default function About(){
    return(
    <>
    <h1 className='titleBar'>About Little Lemon</h1>
    <>
    <div className="reserve">        
        <h1 className="reserve">Little Lemon is a mediterainian restaurant in Chicago</h1>
        <h2 className="reserve">Mario is our Owner and head Chef</h2>
        <p className="reserve">Little lemon is a family owned mediterainian restaurant in chicago. We offer a healthy, midscale experience. </p>
        <img className="reserve" src={mario} alt="OwnerPic"></img>
    </div>

    </>
    </>
    )
}