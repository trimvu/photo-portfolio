import React from 'react'
import Header from './Header'
import Footer from './Footer'

const BaseLayout = (props) => {
  // console.log(props.children.props.children[0].props.path)
  return (
    <>
        {
          props.children.props.children[0].props.path === '/'
          ?
          <Header />
          :
          ''
        }
        
        <br />
        <br />
        
        {props.children}

        <br />
        <br />

        <Footer />
    </>
  )
}

export default BaseLayout