import React from 'react'

function PostImage({imageSRC}) {
  return (
    <img src={imageSRC} className={` object-cover mb-4 w-full h-80  rounded-md`} loading='lazy' alt='post image' />  )
}

export default PostImage