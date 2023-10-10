import '../Styles/App.css';
import Reserve from "../main-comps/reserve-banner";
import Specials from "../main-comps/specials-banner";
import Testimonials from "../main-comps/testimonials-banner";
import About from "../main-comps/about-banner";
import Nav from '../main-comps/Nav'
import Foot from '../main-comps/Footer'



export default function Home(){
    return(
        <>
            <Nav />
            <Reserve />
            <Specials />
            <Testimonials />
            <About/>
            <Foot />
        </>
    )
};