import React from 'react'

const VideoDetail = ({video, loading}) => {
  if (!video && !loading) {
    return <div>Search for videos</div>
  }
  const videoURL = `https://www.youtube.com/embed/`
  return video ? (
    <div className="card">
      <div className="card-image iframe">
        <iframe src={videoURL + `${video.id.videoId}`} title={video.snippet.title} />
      </div>
      <div className="card-content">
        <h6>{video.snippet.title}</h6>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  ) : null
}

export default VideoDetail
