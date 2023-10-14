import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import Port1 from '../../assets/images/port1.png'
import Port2 from '../../assets/images/port2.png'
import Port3 from '../../assets/images/port3.png'
import Port4 from '../../assets/images/port4.png'
import Port5 from '../../assets/images/port5.png'
// import Port6 from '../../assets/images/port6.png'
// import Port7 fromd '../../assets/images/port7.png'
// import Port8 from '../../assets/images/port8.png'
// import Port9 from '../../assets/images/port9.png'

const Portfolio = () => {
  return (
    <>
      <div className="container portfolio-page">
        <div class="main-title">
          <h2>My Portfolio</h2>
        </div>
        <p class="port-text">
          Here are some of the projects I have worked on in various programming
          languages.
        </p>
        <div className="portfolios">
          <div className="portfolio-item">
            <div class="image">
              <img src={Port1} alt=""></img>
            </div>
            <div className="hover-items">
              <h1>Project Source</h1>
              <div class="icons">
                <a
                  target="_blank"
                  href="https://github.com/alonwilson/Welcome_Page"
                  class="icon"
                >
                  <FontAwesomeIcon icon={faGithub} color="#ffffff" />
                </a>
                <a
                  target="_blank"
                  href="https://alonwilson.github.io/Welcome_Page"
                  class="icon"
                >
                  <FontAwesomeIcon icon={faGlobe} color="#ffffff" />
                </a>
              </div>
              <p>
                Languages: HTML, CSS, JavaScript <br />
                Description: Created a landing page for a company with a focus
                of front-end development.
              </p>
            </div>
          </div>
          <div className="portfolio-item">
            <div class="image">
              <img src={Port2} alt=""></img>
            </div>
            <div className="hover-items">
              <h1>Project Source</h1>
              <div class="icons">
                <a
                  target="_blank"
                  href="https://github.com/alonwilson/Pokedex"
                  class="icon"
                >
                  <FontAwesomeIcon icon={faGithub} color="#ffffff" />
                </a>
                <a
                  target="_blank"
                  href="https://alonwilson.github.io/Pokedex"
                  class="icon"
                >
                  <FontAwesomeIcon icon={faGlobe} color="#ffffff" />
                </a>
              </div>
              <p>
                Languages: HTML, CSS, JavaScript <br />
                Description: Used the PokeAPI to create a front-end interface
                that displays the first 151 Pokemon.
              </p>
            </div>
          </div>
          <div className="portfolio-item">
            <div class="image">
              <img src={Port3} alt=""></img>
            </div>
            <div className="hover-items">
              <h1>Project Source</h1>
              <div class="icons">
                <a
                  target="_blank"
                  href="https://github.com/alonwilson/Portfolio"
                  class="icon"
                >
                  <FontAwesomeIcon icon={faGithub} color="#ffffff" />
                </a>
                <a
                  target="_blank"
                  href="https://alonwilson.github.io/Portfolio"
                  class="icon"
                >
                  <FontAwesomeIcon icon={faGlobe} color="#ffffff" />
                </a>
              </div>
              <p>
                Languages: React, CSS <br />
                Description: Used React to create a personalized portfolio that
                showcases all my current completed projects. Utilizing the
                EmailJS and LeafletJS libraries.
              </p>
            </div>
          </div>
          <div className="portfolio-item">
            <div class="image">
              <img src={Port4} alt=""></img>
            </div>
            <div className="hover-items">
              <h1>Project Source</h1>
              <div class="icons">
                <a
                  target="_blank"
                  href="https://github.com/alonwilson/Discord-Bot"
                  class="icon"
                >
                  <FontAwesomeIcon icon={faGithub} color="#ffffff" />
                </a>
              </div>
              <p>
                Languages: Python <br />
                Description: Used Python to create a simple Discord bot that
                returns a random anime recommendation by converting a RapidAPI
                to JSON to return a random recommendation. Used the online IDE
                Replit.
              </p>
            </div>
          </div>
          <div className="portfolio-item">
            <div class="image">
              <img src={Port5} alt=""></img>
            </div>
            <div className="hover-items">
              <h1>Project Source</h1>
              <div class="icons">
                <a
                  target="_blank"
                  href="https://github.com/alonwilson/Psuedostore"
                  class="icon"
                >
                  <FontAwesomeIcon icon={faGithub} color="#ffffff" />
                </a>
              </div>
              <p>
                Languages: Typescript, Node.js
                <br />
                Description: Used Typescript, front-end, to implement Angular
                materials to create a working full-stack application. Utilized
                Node.js for the backend to effectively interact with the
                FakeStoreAPI. Also integrated Stripe to complete the checkout
                process of the store.
              </p>
            </div>
          </div>
          {/* <div className="portfolio-item">
            <div class="image">
              <img src={Port1} alt=""></img>
            </div>
            <div className="hover-items">
              <h1>Project Source</h1>
              <div class="icons">
                <a
                  target="_blank"
                  href="https://github.com/alonwilson/Welcome_Page"
                  class="icon"
                >
                  <FontAwesomeIcon icon={faGithub} color="#ffffff" />
                </a>
                <a
                  target="_blank"
                  href="https://alonwilson.github.io/Welcome_Page"
                  class="icon"
                >
                  <FontAwesomeIcon icon={faGlobe} color="#ffffff" />
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio-item">
            <div class="image">
              <img src={Port1} alt=""></img>
            </div>
            <div className="hover-items">
              <h1>Project Source</h1>
              <div class="icons">
                <a
                  target="_blank"
                  href="https://github.com/alonwilson/Welcome_Page"
                  class="icon"
                >
                  <FontAwesomeIcon icon={faGithub} color="#ffffff" />
                </a>
                <a
                  target="_blank"
                  href="https://alonwilson.github.io/Welcome_Page"
                  class="icon"
                >
                  <FontAwesomeIcon icon={faGlobe} color="#ffffff" />
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio-item">
            <div class="image">
              <img src={Port1} alt=""></img>
            </div>
            <div className="hover-items">
              <h1>Project Source</h1>
              <div class="icons">
                <a
                  target="_blank"
                  href="https://github.com/alonwilson/Welcome_Page"
                  class="icon"
                >
                  <FontAwesomeIcon icon={faGithub} color="#ffffff" />
                </a>
                <a
                  target="_blank"
                  href="https://alonwilson.github.io/Welcome_Page"
                  class="icon"
                >
                  <FontAwesomeIcon icon={faGlobe} color="#ffffff" />
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio-item">
            <div class="image">
              <img src={Port1} alt=""></img>
            </div>
            <div className="hover-items">
              <h1>Project Source</h1>
              <div class="icons">
                <a
                  target="_blank"
                  href="https://github.com/alonwilson/Welcome_Page"
                  class="icon"
                >
                  <FontAwesomeIcon icon={faGithub} color="#ffffff" />
                </a>
                <a
                  target="_blank"
                  href="https://alonwilson.github.io/Welcome_Page"
                  class="icon"
                >
                  <FontAwesomeIcon icon={faGlobe} color="#ffffff" />
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio-item">
            <div class="image">
              <img src={Port1} alt=""></img>
            </div>
            <div className="hover-items">
              <h1>Project Source</h1>
              <div class="icons">
                <a
                  target="_blank"
                  href="https://github.com/alonwilson/Welcome_Page"
                  class="icon"
                >
                  <FontAwesomeIcon icon={faGithub} color="#ffffff" />
                </a>
                <a
                  target="_blank"
                  href="https://alonwilson.github.io/Welcome_Page"
                  class="icon"
                >
                  <FontAwesomeIcon icon={faGlobe} color="#ffffff" />
                </a>
              </div>
            </div>
          </div> */}
        </div> 
      </div>
    </>
  )
}

export default Portfolio
