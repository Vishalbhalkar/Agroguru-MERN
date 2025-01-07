import React from 'react'
import Features from '../../Component/Features'
import image1 from '../../images/2.jpg'
import { MainNavbar } from '../../Component/MainNavbar'
import Slider from '../../Component/Slider'
import "../../Styles/About_us_ui.css"
import FooterWeb from '../../Component/FooterWeb'

export const About = () => {
  return (
    <div>
      <MainNavbar/>
      <section id="abt_us">
        <div id="logo_info">
            <div id="abt_img">
                <div id="abt_img_cover">
                    <p id="abt_logo"><span id="sp_1">Agro</span><span id="sp_2">Guru</span></p>
                    <p id="abt_logo_info">Empowering farmers with knowledge and resources for successful farming
                        practices.</p>
                </div>
            </div>
            <p id="abt_desc" class="pcnt">Agroguru is an innovative online platform designed to support farmers in their
                journey towards successful farming practices. Our cutting-edge features include machine learning-based
                crop prediction, a plant nursery service, and a plant laboratory. We also offer a unique marketplace for
                farmers to sell and buy their crops. Our comprehensive resources and expert community make agroguru the
                go-to destination for farmers looking to improve their yields, reduce costs, and increase profits. Start
                exploring now and revolutionize your farming practices!</p>
        </div>
        <div id="our_msn">
            <h2>Our Mission</h2>
            <p class="pcnt">Our mission at agroguru is to revolutionize the farming industry by providing farmers with
                the latest technology, research, and expert guidance for sustainable and profitable farming practices.
            </p>
        </div>
       
    </section>
    <FooterWeb/>
    </div>
  )
}
