import React from "react";
import "./ContactUs.css";
import Footer from "../Footer/Footer";
import Map from '../Map/Maps'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ContactUs() {
  const notify = () => toast("Email has been sent!");


  function sendEmail(e) {
    e.preventDefault();

emailjs.sendForm('service_3iuzoor', 'template_4s132rl', e.target, 'user_FaUBF1FOyNzoLxjz3zrSS')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
    return true;
}


  return (
    <>
    <h1>Contact us TODAY</h1>
    <Map />
      <div className="container">
        <form onSubmit={sendEmail} method='post'>
          <div className="row">
            <div className="col-25">
              <label for="fname">First Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="lname">Last Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />
            </div>
          </div>
          <div className='email'>
            <div className="col-25">
              <label for="lname">Email</label>
            </div>
            <div className="col-75">
              <input
                type="email"
                id="lname"
                name="email"
                placeholder="Your Email.."
              />
            </div>
          </div>
          <div className='mobile'>
            <div className="col-25">
              <label for="number">Number</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="lname"
                name="number"
                placeholder="Your Number.."
              />
            </div>
          </div>
        {/* <div className="row">
          <div className="col-25">
            <label for="treamenttime">Appointment (date and time):</label>
            </div>
            <div className="datetime-local" className="col-75">
          {/* <DateTimePicker /> */}
          {/* <input type="datetime-local" format="ddMMyyy" onfocus="(this.type='date')" id="lname" name="datetime"></input>
          </div>
        </div> */} 
          <div className="row">
            <div className="col-25">
              <label>Subject</label>
            </div>
            <div className="col-75">
              <select name="subject">
                <option disabled selected>Select a subject</option>
                <option value="Bikini wax">Bikini wax</option>
                <option value="Nail treatment">Nail treatment</option>
                <option value="Leg Wax">Leg Wax</option>
                <option value="Bum cheeks hair removal">Bum cheeks hair removal</option>
                <option value="Refund my ticket">Refund my ticket</option>
                <option value="Rearrange my Booking">Rearrange my Booking</option>
                <option value="Cancel Booking">Cancel Booking</option>
                <option value="Bookings for event">Bookings for event</option>
                <option value="Something else">Something else</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="message">Message</label>
            </div>
            <div className="col-75">
              <textarea
                id="message"
                name="message"
                placeholder="What's on your mind'?.."
                style={{ height: "300px" }}
              />
            </div>
          </div>
          <div className="row">
            <input onClick={notify} type="submit" value="Submit" />
            <ToastContainer 
            position="top-right"
            autoClose="2000"
            hideProgressBar= "false"
            closeOnClick= "true"
            pauseOnHover= "true"
            draggable= "true"
            progress= "undefined" 
            />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}


