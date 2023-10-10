import './Styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/home'
import ReservationPage from './Pages/book'

function App() {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="description" content="This is the website for the little lemon's website"/>
    <meta name="og:title" content="Little Lemon"/>
    <meta name="og:description" content="This is the website for the little lemon's website"/>
    <meta name="og:image" content="Little Lemon Logo"/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/ReservationPage' element={<ReservationPage />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;