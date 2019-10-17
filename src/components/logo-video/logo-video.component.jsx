import React from 'react'
import styled from 'styled-components'
import { Player} from 'video-react'

const Video = styled(Player)`
    width: 100px;
    height: auto;
    position: relative;
    top: 100px;
    video {
        width: 100px;
        height: auto;
        z-index: 100;
        cursor: pointer;
        position: absolute;
    }
`
const sources = {
    logo: '/fuegoBurnNegative.mp4',
  }

export default class LogoVideo extends React.Component {
    constructor(props, context) {
        super(props, context)
    
        this.state = {
          source: sources.logo
        }
    
        this.play = this.play.bind(this)
        this.pause = this.pause.bind(this)
        this.load = this.load.bind(this)
        this.changeCurrentTime = this.changeCurrentTime.bind(this)
        this.seek = this.seek.bind(this)
        this.changePlaybackRateRate = this.changePlaybackRateRate.bind(this)
        this.changeVolume = this.changeVolume.bind(this)
        this.setMuted = this.setMuted.bind(this)
      }
    
      componentDidMount() {
        // subscribe state change
        this.player.subscribeToStateChange(this.handleStateChange.bind(this))
      }
      setMuted(muted) {
        return () => {
          this.player.muted = muted
        }
      }
    
      handleStateChange(state) {
        // copy player state to this component's state
        this.setState({
          player: state
        })
      }
    
      play() {
        this.player.play()
      }
    
      pause() {
        this.player.pause()
        this.changeCurrentTime(0)
      }
    
      load() {
        this.player.load()
      }
    
      changeCurrentTime(seconds) {
        return () => {
          const { player } = this.player.getState()
          this.player.seek(player.currentTime + seconds)
        }
      }
    
      seek(seconds) {
        return () => {
          this.player.seek(seconds)
        }
      }
    
      changePlaybackRateRate(steps) {
        return () => {
          const { player } = this.player.getState()
          this.player.playbackRate = player.playbackRate + steps
        }
      }
    
      changeVolume(steps) {
        return () => {
          const { player } = this.player.getState()
          this.player.volume = player.volume + steps
        }
      }
    
      changeSource(name) {
        return () => {
          this.setState({
            source: sources[name]
          })
          this.player.load()
        }
      }
    
    
    render() {
        return (
            <div>
                <Video  ref={player => {this.player = player}}
                 >
                <source onMouseEnter={this.play} onMouseLeave={this.pause} src={this.state.source}/>
                 </Video>
            </div>
        )
    }
}
