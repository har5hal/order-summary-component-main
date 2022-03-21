import React from 'react'
import Img from '../Img'
import Cardbody from './Cardbody'

function Card({illustrationHero, musicIllustration}) {
  return (
    <div className="card">
        <Img classes={"img-main"} imgSrc={illustrationHero} imgAlt="order-illustration" />
        <Cardbody musicIllustration={musicIllustration} />
      </div>
  )
}

export default Card