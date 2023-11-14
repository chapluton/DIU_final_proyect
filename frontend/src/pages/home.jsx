import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Card from '../components/card'


export const HomePage = () => {
  return (
    <div className='page'>
      <Header/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default HomePage
