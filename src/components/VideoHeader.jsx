import React from 'react'

const VideoHeader = () => {
  return (
    <div className='w-full' style={{height:"70vh"}}>
        <iframe className='w-full h-full' src="https://www.youtube.com/embed/Nkl8WnH6tDU?si=69m7cUQDqXF2XSIq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default VideoHeader