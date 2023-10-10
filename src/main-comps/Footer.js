import '../Styles/App.css';
import logoImage from '../Content/Logo .svg'
function footer (){
    return(
        <>
        <footer className="footer">
            <img className="footLogo" src={logoImage} alt="Logo">
            </img>
            <div className="footMenu">
            <h2>SiteMap</h2>
            <ul className="footNav">
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>About</a>
                </li>
                <li>
                    <a>Menu</a>
                </li>
                <li>
                    <a>Reservations</a>
                </li>
                <li>
                    <a>Order</a>
                </li>
                <li>
                    <a>Login</a>
                </li>
            </ul>
            </div>
    
            <div className="footMenu">
            <h2>
                Contact
            </h2>
            <ul>
                <li>
                    <a>Phone</a>
                </li>
                <li>
                    <a>Email</a>
                </li>
                <li>
                    <a>Address</a>
                </li>
            </ul>
            </div>
            <div className="footMenu">
            <h2>
                Social Media
            </h2>
            <ul>
                <li>
                    <a>Instagram</a>
                </li>
                <li>
                    <a>Twitter</a>
                </li>
                <li>
                    <a>Facebook</a>
                </li>
            </ul>
            </div>
        </footer>
        </>
    )
}
export default footer;