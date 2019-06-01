import React from 'react'

const VideoItem = ({video, onVideoSelect}) => {
  const onVideoClick = () => {
    onVideoSelect(video)
  }
  return (
    <li className="collection-item avatar video-item" onClick={onVideoClick}>
      <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      <div className="title">{video.snippet.title}</div>
    </li>
  )
}

export default VideoItem
