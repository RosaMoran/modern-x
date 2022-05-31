import './possibility.css'
import possibilityImage from '../../assets/possibility.png'
import React from 'react'

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3___possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
    </div>
  )
}

export default Possibility