import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'
import ClientSlider from '../carousel/carousel.component'
import BTS from '../bts/bts.component'
import MoreVids from '../more-videos/more-videos.component'


const VideoOuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  margin-bottom: 100px`

const VideoInnerWrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-flow: column;
 margin-top: 100px;
 min-width: 80%;`

const VideoContainer = styled.div`
  min-width: 100%;
  position: relative;
  
  iframe {
    width: 100%;
    height: 600px;
  }`
const BTSMoreVidCont = styled.div`
  width: 80%;`
const VideoTitle = styled.h2``

const VideoDescContainer = styled.div`
  text-align: left;
  width: 75%;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;`

const VideoDesc = styled.p`
  `  

// const Team = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   width: 100%;
  
//   * {
//     padding: 0;
//     margin: 2px 0;
//     margin-right: 5px; 
//   }`



const VideoExtended = (props) => {
  const [video, setVideo] = useState('')
  useEffect(() => {
    const videoQuery = `*[_type == "video" && title == "${props.match.params.videoId}"]{
      date, description,categories[]->{_id, category}, clientWork, title, vimeoLink, bts, client[]->{_id, clientName}}
    `
    sanityClient.fetch(videoQuery).then(video => {
      video.forEach(video => {
        setVideo(video)
      })
    })
  }, [props.match.params.videoId]) 
 
  return (
      <VideoOuterWrapper>
             <VideoInnerWrapper>
             <VideoTitle>{video.title}</VideoTitle>
                 {video.client ?
                   video.client.map((client, id) => {
                     return( <p key={id}> {client.clientName} </p>)
                   }): null}
             <VideoContainer>
                 <iframe title={video.title} frameBorder="0" allow="autoplay" src={`https://player.vimeo.com/video/${video.vimeoLink}`}></iframe>
             </VideoContainer>
             <VideoDescContainer>
               {video.description ? <div>
                <VideoTitle>About</VideoTitle>
                
                 <VideoDesc>{video.description}</VideoDesc>
               </div> : null}
              
                

             </VideoDescContainer>
        { video.clientWork ? <div>
          {video.client.map((client, id) => {
                     return( <p key={id}> More By {client.clientName} </p>)
                   })}
                    <ClientSlider clientId={video.client[0]._id} />
        </div>
       
          : <BTSMoreVidCont>
            <BTS video={video} />
            {video.categories ? <div>
              <h2>More {video.categories[0].category} Videos</h2>
              <MoreVids category={video.categories[0]._id}/> 
            </div> : null}
            
          </BTSMoreVidCont> 
          }
           </VideoInnerWrapper>
           
           
       </VideoOuterWrapper>
  )
}


export default VideoExtended
