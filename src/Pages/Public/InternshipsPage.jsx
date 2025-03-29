import React from 'react'
import Footer from '../../Components/Common/Footer';
import Banner from '../../Components/Internships/Banner';
import Cards from '../../Components/Internships/Cards';
import Content from '../../Components/Internships/Content';
import Apply from '../../Components/Internships/Apply';
import Nav from '../../Components/Common/Nav';

const InternshipsPage = () => {
    // console.log("InternshipsPage render");
    
  return (
   <>
        <Nav />
        <Banner />
        <Cards />
        <Content />
        <Apply />
        <Footer />
   </>
  )
}

export default InternshipsPage