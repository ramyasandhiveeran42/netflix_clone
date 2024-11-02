import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
          <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
       <img src={hero_title} alt="" className='caption-img' />
       <p>Netflix’s Spellbound follows Ellian, a young princess who must save her kingdom after a curse turns her parents into monsters. With a magical quest and original songs, this animated film releases on November 22.</p>
       <div className="hero-btns">
        <button className='btn'><img src={play_icon} alt="" />Play</button>
        <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
       </div>
       <TitleCards />
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
      <TitleCards title={"Only on Netflix"} category={"popular"}/> 
      <TitleCards title={"Upcoming"} category={"upcoming"}/>
      <TitleCards title={"Top picks for you"} category={"now_playing"}/> 
      </div>
      <Footer/>
    </div>
  )
}

export default Home
