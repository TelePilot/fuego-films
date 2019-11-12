import React, { useEffect, useState } from 'react'
import sanityClient from '../../Client'
import Player from '../player/player.component'

const ShowreelCont = () => {

    const [showreel, setShowreel] = useState('')
  useEffect(() => {
    const showQuery = `*[_type == "showreel"] `
    sanityClient.fetch(showQuery).then(showreel => {
      showreel.forEach(showreel => {
        setShowreel(showreel)
      }
    )})},[]) 
  
    return (
    

      <div style={{marginBottom: '50px'}}>
        <Player video={showreel}/>
      </div>
    )
  }



export default ShowreelCont
