import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'
import BTS from '../bts/bts.component'
import MoreVids from '../more-videos/more-videos.component'


const VideoOuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  margin-bottom: 50px`

const VideoInnerWrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-flow: column;
 margin-top: 80px;
 min-width: 80%;`

const VideoContainer = styled.div`
  min-width: 100%;
  padding:52.73% 0 0 0;
  position:relative;
  iframe {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;

  }`
const BTSMoreVidCont = styled.div`
  width: 100%;`
const VideoTitle = styled.h2`
  margin: 5px 0;`
const MoreBy = styled.div`
  width: 100%;
  height: auto`
const VideoDescContainer = styled.div`
  text-align: left;
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;`

const VideoDesc = styled.p`

  `  



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

 console.log(video)
  return (
      <VideoOuterWrapper>
             <VideoInnerWrapper>
             <VideoTitle>{video.title}</VideoTitle>
                 {video.client ?
                   video.client.map((client, id) => {
                     return( <VideoDesc key={id}> {client.clientName} </VideoDesc>)
                   }): null}
             <VideoContainer>
             {/* <div 
             style="padding:52.73% 0 0 0;position:relative;">
               <iframe src="https://player.vimeo.com/video/365038866?color=9f00ef&title=0&byline=0&portrait=0" 
               style="position:absolute;top:0;left:0;width:100%;height:100%;" 
               frameborder="0" 
               allowfullscreen>
                 </iframe>
                 </div> */}
                
                 <iframe title={video.title} frameBorder="0" allow="autoplay" 
                 src={`https://player.vimeo.com/video/${video.vimeoLink}?color=9f00ef&byline=0&portrait=0`}>

                 </iframe>
                 <script src="https://player.vimeo.com/api/player.js"></script>
                
             </VideoContainer>
             <MoreBy>
              { video.clientWork ? <div>
                {video.client.map((client, id) => {
                          return( <p key={id}> More By {client.clientName} </p>)
                        })}
                          <MoreVids currentVideo={video} category={video.client[0]._id}/> 
              </div>

                : <BTSMoreVidCont>
                  <BTS video={video} />
                  {video.categories ? <div>
                    <p>More Like This</p>
                    <MoreVids currentVideo={video} category={video.categories[0]._id}/> 
                  </div> : null}
                  
                </BTSMoreVidCont> 
                }
             </MoreBy>
             
             {video.description ? 
             <VideoDescContainer>
               <div>
                <VideoTitle>About</VideoTitle>
                
                 <VideoDesc>{video.description}</VideoDesc>
               </div> 
             </VideoDescContainer>
             : null}
        
           </VideoInnerWrapper>
           
           
       </VideoOuterWrapper>
  )
}


export default VideoExtended
