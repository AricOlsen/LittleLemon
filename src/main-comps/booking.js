import '../Styles/App.css'
import ReservationForm from "./bookingform";

export default function Reservation() {
  return (
    <div>
      <div>
        <div className='reserve'>
          <h1 className='titleBar'>Reserve a Table</h1>
          <p className='cardCon'>
            Please fill in and submit form to book your reservation at Little
            Lemon.
          </p>
          <ReservationForm />
        </div>
      </div>
    </div>
  );
}