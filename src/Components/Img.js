import React from 'react'

function Img({classes, imgSrc, imgAlt}) {
  return (
    <img className={`img-fluid ${classes}`} src={imgSrc} alt={imgAlt} />
  )
}

export default Img