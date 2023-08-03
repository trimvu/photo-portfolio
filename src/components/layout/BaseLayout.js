import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'

const BaseLayout = (props) => {
  
  let location = useLocation()
  // console.log(location.pathname)

  // console.log(props.children.props.children[0].props.path)
  return (
    <>
        {
          location.pathname === '/'
          ?
          ''
          :
          <Header />
        }
        
        {/* <br /> */}
        {/* <br /> */}
        
        {props.children}

        {/* <br /> */}
        {/* <br /> */}

        {
          location.pathname === '/'
          ?
          ''
          :
          <Footer />
        }
    </>
  )
}

export default BaseLayout