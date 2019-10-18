import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'
import VideoImage from '../../components/video-image/video-image.component'

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  margin-bottom: 50px;
  `
const ContentTitle = styled.h1`
margin-top: 80px;`
const VideoContainer = styled.div`
  display: grid;
  grid-template-columns:1fr 1fr 1fr;
  width: 85%;
  grid-gap: 15px;
  @media screen and (max-width: 1200px) {
    grid-template-columns:1fr 1fr;
    width: 85%;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns:1fr;
    width: 95%;
  }
 `
const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
 `

  const CatCont = styled.div`
  width: 85%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const CatButton = styled.button`
  cursor: pointer;
  border-radius: 20px;
  background: rgba(230,230,255,0.2);
  
  color: rgba(0,0,0,0.5);
  padding: 5px 15px;
  font-size:12px;
  border: none;
  margin: 2% 5px;
  transition: all ease-in-out .2s;
  &:hover {
   background: #800020;
   color: rgba(255,255,255,0.8) ;
   transform: scale(1.05)
  }` 

const Content = () => {
  const [category, setCategory] = useState([])

       useEffect(() =>  {
           const catArray = []
        const catQuery = `*[_type == "categories"]{
            category
        }
        `
       sanityClient.fetch(catQuery).then(cat => {
        cat.forEach(cat => {
            catArray.push(cat)
        })
        setCategory(catArray)
    })}, [])
  const [videoArray, setVideoArray] = useState([])
  const [ogArray, setOgArray] = useState([])
  const [allArray, setAllArray] = useState([])
  const [isFiltered, setIsFiltered] = useState(false)
  useEffect(() =>  {
    const videoQuery = `*[_type == "video"] | order(date desc){
     clientWork, title, client[]->{clientName}, categories[]->{category}}
    `
    sanityClient.fetch(videoQuery).then(video => {
      const videoArray = []
      const allArray = []
    
      video.forEach(video => {
        allArray.push(video)
          if(videoArray.length <= 0) {
            
            videoArray.push(video)
          }
         else if (video.clientWork) {
           if(
            videoArray.filter(e => e.client !== undefined)
           ) {
            if(videoArray.filter(e => e.client[0].clientName === video.client[0].clientName).length > 0) {
            
            //  videoArray.splice(videoArray.filter(e => e.client[0].clientName === video.client[0].clientName), 1, video)
            
            }
           else {
        
            videoArray.push(video)
           }
           }
          }
          else {
            videoArray.push(video)
          }

      }
      )
      setAllArray(allArray)
      setOgArray(videoArray)
      setVideoArray(videoArray)
     
    })
    
  }, [])

  let filteredVideos = []
  function filter(cat) {
    if(cat.toLowerCase() === 'all') {
      setVideoArray(ogArray)
      setIsFiltered(false)
      return
    }
     filteredVideos = allArray.filter(v => {
       if(v.categories !== undefined) {
      return v.categories.every(c => cat === c.category)
       }
       return null
  })
  if (filteredVideos.length > 0) {
   
    setIsFiltered(true)
    setVideoArray(filteredVideos)
  } else {
    setIsFiltered(false)
    setVideoArray(ogArray)
  }}


    return (
      <ContentContainer>
       
        <ContentTitle>Share The Vision.</ContentTitle>
        <CatCont>
            {category.map((cat, id) => {
               return <CatButton key={id} onClick={() => {filter(cat.category)}}>{cat.category}</CatButton>
            })}
        </CatCont>
        { isFiltered ?
         <VideoContainer>
         {
               videoArray.map((contentVid, id) =>
               <ImageContainer key={id}>
                  <VideoImage filtered={true} video={contentVid} />
               </ImageContainer>
               )
             }
         </VideoContainer>
        :
        <VideoContainer>
        {
              videoArray.map((contentVid, id) =>
              <ImageContainer key={id}>
                 <VideoImage filtered={false} video={contentVid} />
              </ImageContainer>
              )
            }
        </VideoContainer>}
      </ContentContainer>

    )
  }


export default Content
