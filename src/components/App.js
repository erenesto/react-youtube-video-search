import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import Spinner from './Spinner'

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    loading: false,
  }

  onSearchInputSubmit = async (inputText) => {
    this.setState({ loading: true })
    const response = await axios.get(
      'https://www.googleapis.com/youtube/v3/search',
      {
        params: {
          part: 'snippet',
          maxResults: 10,
          key: process.env.REACT_APP_API_KEY,
          q: inputText,
        },
      }
    )

    const withoutChannels = await response.data.items.filter(
      (video) => video.id.kind === 'youtube#video'
    )

    this.setState({
      videos: withoutChannels,
      selectedVideo: withoutChannels[0],
      loading: false,
    })
  }

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    })
  }

  render() {
    const showingContent = !this.state.loading ? (
      <div className="row">
        <div className="col s8">
          <VideoDetail
            video={this.state.selectedVideo}
            loading={this.state.loading}
          />
        </div>
        <div className="col s4">
          <VideoList
            videos={this.state.videos}
            loading={this.state.loading}
            onVideoSelect={this.onVideoSelect}
          />
        </div>
      </div>
    ) : null

    return (
      <div className="container">
        <h4 className="center">Youtube Search App</h4>

        <SearchBar onSearchInputSubmit={this.onSearchInputSubmit} />
        <div className="row">
          <Spinner loading={this.state.loading} />
        </div>
        {showingContent}
      </div>
    )
  }
}

export default App
