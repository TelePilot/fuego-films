import React, { createContext, useState, useEffect} from 'react'
import sanityClient from '../Client'
export const ContentContext = createContext()

const ContentContextProvider = (props) => {
  const [category, setCategory] = useState([])
  const [videoArray, setVideoArray] = useState([])
  const [ogArray, setOgArray] = useState([])
  const [allArray, setAllArray] = useState([])
  const [isFiltered, setIsFiltered] = useState(false)

       useEffect(() =>  {
        const catArray = []
        const catQuery = `*[_type == "categories"] | order(date desc){
            category
        }
        `
       sanityClient.fetch(catQuery).then(cat => {
        cat.forEach(cat => {
            catArray.push(cat)
        })
        setCategory(catArray)
    })
  return}, [])
  

  useEffect(() =>  {
    const videoQuery = `*[_type == "video"] | order(date desc){
    _id, clientWork, justLogo, removeOverlay, title, thumbnail, client[]->{clientName, _id, logo}, categories[]->{category, _id}}
    `
    console.log('fetch')
    sanityClient.fetch(videoQuery).then(video => {
      const videoArray = []
      const allArray = []
    
      video.forEach(video => {
        allArray.push(video)
          if(videoArray.length <= 0) {
          
            videoArray.push(video)
          }
         else if (video.clientWork && video.client !== undefined) {
           
           if(
            videoArray.filter(e => e.clientWork && e.client !== undefined)
           ) {
  
           
            if(videoArray.filter(e => e.clientWork && e.client[0].clientName === video.client[0].clientName).length > 0) {
             
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
    return
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
        <ContentContext.Provider value={{category,videoArray, allArray, isFiltered, filter}}>
            
            {props.children}
            
        </ContentContext.Provider>
    )
}

export default ContentContextProvider
