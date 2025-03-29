import React from 'react'
import Footer from '../../Components/Common/Footer';
import Banner from '../../Components/Jobs/Banner'
import Responsibilities from '../../Components/Jobs/Responsibilities';
import Requirements from '../../Components/Jobs/Requirements';
import Microservices from '../../Components/Jobs/Microservices';
import Benefit from '../../Components/Jobs/Benefit';
import Content from '../../Components/Jobs/Content';
import Apply from '../../Components/Internships/Apply';
import Nav from '../../Components/Common/Nav';

const JobsPage = () => {
    // console.log("JobsPage render");
    
  return (
    <>
        <Nav />
        <Banner />
        <Responsibilities />
        <Requirements />
        <Microservices />
        <Benefit />
        <Content />
        <Apply />
        <Footer />
    </>
  )
}

export default JobsPage