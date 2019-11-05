import React from 'react'
import styled from 'styled-components'
import MoreVids from '../more-videos/more-videos.component'
import BTS from '../bts/bts.component'


const BTSMoreVidCont = styled.div`
  width: 100%;
 ;`
 const MoreByCont = styled.div`
 width: 100%;
 height: auto`

const MoreBy = ({video}) => {

    return (
        <MoreByCont>
        { video.clientWork ? <div>
          {video.client.map((client, id) => {
                    return( <p key={id}> More By {client.clientName} </p>)
                  })}
                    <MoreVids currentVideo={video} category={video.client[0]._id}/> 
        </div>

          : <BTSMoreVidCont>
            <BTS video={video} />
            {video.categories ? <div>
              <MoreVids currentVideo={video} category={video.categories[0]._id}/> 
            </div> : null}
            
          </BTSMoreVidCont> 
          }
       </MoreByCont>
    )
}

export default MoreBy
