import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_z4ft599',
        'template_du5hyhs',
        refForm.current,
        '1aKZShPoMN-_jOBFk'
      )
      .then(
        () => {
          alert('Message successsfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message')
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            If you are impressed with my skillset please don't hesitate to reach
            out.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Alon Wilson,
          <br />
          United States,
          <br />
          Ashburn, VA 20147 <br />
          <span>alonjwilson@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[39.0438, -77.4874]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[39.0438, -77.4874]}>
              <Popup>Alon is located in this city.</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  )
}

export default Contact
