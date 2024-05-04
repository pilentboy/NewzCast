import React from 'react'

function PostInfoContainer({ children,styles }) {
    return (
        <div className={`border-t border-gray-200 flex items-center font-medium  text-gray-600 text-[11px]  pt-2 ${styles}`}>
            {children}
        </div>)
}

export default PostInfoContainer