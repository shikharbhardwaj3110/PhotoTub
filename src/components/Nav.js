import React from 'react'

const Nav = () => {

    const navStyle = {
        height : '2.5rem'
    }

    const textStyle = {
        'font-family' : ''
    }

  return (
    <div class="bg-dark w-100 text-light d-flex align-items-center justify-content-center" style={navStyle}>
        <span>Created by <a href='https://github.com/shikharbhardwaj3110?tab=repositories'>Shikhar Bhardwaj</a></span>
    </div>
  )
}

export default Nav