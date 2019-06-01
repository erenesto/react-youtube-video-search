import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelect, loading}) => {
  const videoListMap = videos.map(video => {
    return <VideoItem video={video} key={video.id.videoId} onVideoSelect={onVideoSelect} />
  })
  return <ul className="collection">{videoListMap}</ul>
}

export default VideoList
