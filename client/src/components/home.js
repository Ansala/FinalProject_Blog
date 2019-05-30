import React, { Component } from 'react'
import './home.css'
import Carousel from './carousel.js'
import axios from 'axios'

const carouselSlidesData = [
    {
      content:
        "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.",
      author: "Marcel Proust",
      source: "in search of lost time"
    }, {
      content:
        "If you think adventure is dangerous, try routine, it's lethal.",
      author: "unknown",
      source: "travelquotes"
    }, {
      content:
        "Stop worrying about the potholes in the road and enjoy the journey.",
      author: "Babs Hoffman",
      source: "time regained"
    }, {
      content:
        "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
      author: "Andre Gide",
      source: "the fruits of the earth"
    }, {
      content:
        "Travel makes one modest, you see what a tiny place you occupy in the world.",
      author: "Gaustave Flaubert",
      source: "over strand and field"
    }
  ];

class Descriptions extends Component {
    state = {
        articles: []
    }

    componentDidMount(){
        this.getDescriptions()
    }

    getDescriptions = () => {
      axios.get("/all").then(res => {
        console.log(res.data)
      }) 
    }
}   

const Home = () => (
    <div className= "main-container">
        <h3>Contribute to a blog or create your own...</h3>
        <Carousel slides={carouselSlidesData} /> 
    </div>  
)

export default Home
