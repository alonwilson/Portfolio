import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/A.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState } from 'react'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['l', 'o', 'n', ',']
  const jobArray = [
    'a',
    ' ',
    's',
    'e',
    'n',
    'i',
    'o',
    'r',
    ' ',
    'a',
    't',
    ' ',
    'V',
    'i',
    'r',
    'g',
    'i',
    'n',
    'i',
    'a',
    ' ',
    'T',
    'e',
    'c',
    'h',
    '.',
  ]

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="Computer Science Student" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Virginia Tech Student / Computer Science / Full Stack</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
