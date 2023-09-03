import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Resume = () => {
  ;<>
    <div className="container resume-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters strArray={['R', 'e', 's', 'u', 'm', 'e']} />
        </h1>
        <h2>Experience</h2>
        <ul>
          <li>
            <h3>Nuubi Inc</h3>
            <p>
              ●Developed and integrated APIs to elevate app functionalities and
              user experience.
              <br />● Implemented enhancements to the user interface of a mobile
              application using React Native, resulting in an improved and more
              user-friendly front-end experience.
              <br />● Enhanced back-end proficiency by effectively implementing
              PostgreSQL and Node.js to seamlessly integrate front-end and
              back-end functionalities in mobile application development.
            </p>
          </li>
          <li>
            <h4>Scale AI</h4>
            <p>
              ●Improved accuracy by critiquing and debugging AI-generated code
              to identify and resolve coding errors.
              <br />
              ● Enhanced AI problem-solving capabilities for coding prompts,
              optimizing its performance.
              <br />
              ● Developed Java, SQL, and HTML code to guide future AI
              problem-solving approaches.
              <br />
            </p>
          </li>
          <li>
            <h5>Chipotle</h5>
            <p>
              ● Improved stored efficiency, ranking in the top 3%, through
              skillful coordination of shifts. <br />
              ● Optimized shift efficiency by providing expert guidance to
              service and kitchen managers. <br />● Demonstrated adeptness in
              talent acquisition by conducting interviews and recruiting
              passionate individuals to enhance team performance.
            </p>
          </li>
          <li>
            <h6>Chin Chin Cafe</h6>
            <p>
              ●Demonstrated exceptional customer service skills while managing
              high-volume, fast-paced operations <br />
              ●Managed and processed orders through various channels including
              online, call-in, and in-person using POS system.
            </p>
          </li>
        </ul>
        <div>
        <h7>
            To download a pdf verision of my resume click here.
        </h7>
        </div>
      </div>
    </div>
  </>
}
