import React, { lazy, Suspense } from 'react'
import { Route, Switch} from 'react-router-dom'
import './App.css'
import Header from './components/header/header.component'
import Spinner from './components/spinner/spinner.component'
import VideoContainer from './components/video-extended-container/video-extended-container.component'
import ErrorBoundary from './components/error-boundary/error-boundary.component'

const HomePage = lazy(() => import('./pages/home/home.component'))
const AboutPage = lazy(() => import('./pages/about/about.component'))
const ContentPage = lazy(() => import('./pages/content/content.component'))

const App = () => {
   
      return (
       
          <div id="outer-container" className="App">
            <Header />
            <div id="page-wrap">
            <Switch >
            <ErrorBoundary>
                <Suspense fallback={<Spinner/>}>
                
                  <Route
                    path={'/'}
                    component={HomePage}
                    exact/>
                  <Route
                    path={'/about'}
                    component={AboutPage}/>
                  <Route exact
                    path={'/content'}
                    component={ContentPage}/>
                    <Switch>
                    <Route exact path={`/content/:videoId`} children={VideoContainer}
                  />
                    </Switch>
                  
                  <Route
                    path={'/home'}
                    component={HomePage}/>
                </Suspense>  
                </ErrorBoundary>
            </Switch>
            </div>
            
          </div>
         
       )
}

export default App
