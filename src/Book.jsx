import './App.css'
import { Link } from 'react-router-dom';

function Book() {

  return (
    <>
      <div className="bg-[url('/public\BP--Image-Dispatch-Rider-Web.png')]">
        <div>
          <div></div>
          <div>
            <Link>Home</Link>
            <Link>Track order</Link>
            <Link>payment</Link>
            <Link>report rider</Link>
            <Link>Book Now</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Book
