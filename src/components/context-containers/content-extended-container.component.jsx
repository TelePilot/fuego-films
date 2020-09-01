import React from 'react'
import ContentContextProvider from '../../store/ContentContext'
import VideoContainer from '../video-extended-container/video-extended-container.component'
const ContentExtendedContainer = () => {
	return (
		<ContentContextProvider>
			<VideoContainer />
		</ContentContextProvider>
	)
}

export default ContentExtendedContainer
