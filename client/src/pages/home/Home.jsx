import React from 'react'
import Announcement from "../../components/announcement/Announcement";
import Footer from '../../components/footer/Footer';
import Accessories from '../../components/home/accessories/Accessories';
import Model3 from '../../components/home/model3/Model3'
import ModelS from '../../components/home/modelS/modelS';
import ModelX from '../../components/home/modelX/ModelX';
import ModelY from '../../components/home/modelY/ModelY'
import Navbar from '../../components/navbar/Navbar'
import './home.scss'

function Home() {
  return (
    <div className='home'>
      <Announcement />
      <Navbar />
      <Model3 />
      <ModelY />
      <ModelS />
      <ModelX />
      <Accessories />
      <Footer />
    </div>
  )
}

export default Home