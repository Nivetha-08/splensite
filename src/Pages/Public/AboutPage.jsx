import React from 'react'
import Footer from '../../Components/Common/Footer';
import Banner from '../../Components/About/Banner';
import Content from '../../Components/About/Content';
import Nav from '../../Components/Common/Nav';

const AboutPage = () => {
    // console.log("AboutPage rendered");
    
  return (
    <>
        <Nav />
        <Banner />
        <Content />
        <Footer />
    </>
  )
}

export default AboutPage