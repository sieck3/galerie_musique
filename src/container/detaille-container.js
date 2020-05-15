import React, { Component } from 'react'
import DetailleComponent from 'component/detaille-component'
import YouTube from 'react-youtube'

class DetailleContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            videoIndex: 0

        }
        this.returneTrack = this.returneTrack.bind(this)
        this.handleOnReady = this.handleOnReady.bind(this)
        this.handleOnEnd = this.handleOnEnd.bind(this)
        this.choissirChanson = this.choissirChanson.bind(this)
    }

    handleOnReady (event) {
        //  event.target.pauseVideo()
    }

    returneTrack (event) {
        const x = event.target.id
        fetch('/track', { method: 'POST', body: new URLSearchParams(x) })
    }

    handleOnEnd () {
        const addIndex = this.state.videoIndex + 1
        this.setState({ videoIndex: addIndex })
    }

    choissirChanson (event) {
        const choissir = event.target.id
        this.setState({ videoIndex: choissir })
    }

    render () {
        const opts = {
            height: '400',
            width: '600',
            playerVars: { autoplay: 1 }
        }

        const detailleObj = {
            detaille: this.props.detaille,
            link: this.props.detaille.videos[this.state.videoIndex].uri.substring(32)

        }
        return (

            <div className='container'>
                <div className='row align-items-start'><YouTube videoId={detailleObj.link} opts={opts} onReady={this.handleOnReady} onEnd={this.handleOnEnd} />
                </div>
                <DetailleComponent albumDetaille={detailleObj.detaille} returneVideo={this.returneTrack} changeVideo={this.choissirChanson} />
            </div>
        )
    }
}

export default DetailleContainer
