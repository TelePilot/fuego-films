import React from 'react'
import ContentContextProvider from '../../store/ContentContext'
import Content from '../../pages/content/content.component'

const ContentContextContainer = () => {
	return (
		<ContentContextProvider>
			<Content />
		</ContentContextProvider>
	)
}

export default ContentContextContainer
