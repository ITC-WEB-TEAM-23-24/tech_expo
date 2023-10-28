import React, { Component } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import "./style.css"
import AOS from "aos"
import "aos/dist/aos.css"
import i1 from "../../assets/botsumo.webp"
import i2 from "../../assets/robosoccer.webp"
import i3 from "../../assets/tba.webp"
import i4 from "../../assets/tba.webp"



class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      mouseX: 0,
      mouseY: 0,
      mouseLeaveDelay: null,
    };
  }

  componentDidMount() {
    this.setState({
      width: this.cardRef.offsetWidth,
      height: this.cardRef.offsetHeight,
    });
  }

  handleMouseMove = (e) => {
    this.setState({
      mouseX: e.pageX - this.cardRef.offsetLeft - this.state.width / 2,
      mouseY: e.pageY - this.cardRef.offsetTop - this.state.height / 2,
    });
  };

  handleMouseEnter = () => {
    clearTimeout(this.state.mouseLeaveDelay);
  };

  handleMouseLeave = () => {
    const delay = setTimeout(() => {
      this.setState({
        mouseX: 0,
        mouseY: 0,
      });
    }, 1000);
    this.setState({
      mouseLeaveDelay: delay,
    });
  };

  render() {
    const { dataImage, aosDelay } = this.props;
    const { width, height, mouseX, mouseY } = this.state;
    const cardStyle = {
      transform: `rotateY(${(mouseX / width) * 30}deg) rotateX(${
        (mouseY / height) * -30
      }deg)`,
    };

    const cardBgTransform = {
      transform: `translateX(${(mouseX / width) * -40}px) translateY(${
        (mouseY / height) * -40
      }px)`,
    };

    const cardBgImage = {
      backgroundImage: `url(${dataImage})`,
    };
    
    return (
      <div
      id="compi"
        className="card-wrap"
        onMouseMove={this.handleMouseMove}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        ref={(ref) => (this.cardRef = ref)}
      >
        <div className="card" style={cardStyle} data-aos="fade-left" data-aos-duration="10" >
          <div
            className="card-bg"
            style={{ ...cardBgTransform, ...cardBgImage }}
          ></div>
          <div className="card-info" delay>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

class Workshops extends Component {

  render() {
    const cardData = [
      // {
      //   // dataImage: ,
      //   title: "Hackathon-1",
      //   description: "Located in H15 C wing",
      //   dataImage: "i1",
      //   aosDelay: "100",
      // },
      // {
      //   // dataImage:,
      //   title: "Hackathon-2",
      //   description: "IIT Bombay SAC",
      //   aosDelay: "200",
      // },
      // {
      //   // dataImage: ,
      //   title: "Hackathon-3",
      //   description: "IIT Bombay SAC",
      //   aosDelay: "300",
      // },
      // {
      //   // dataImage: ,
      //   title: "Hackathon-4",
      //   description: "IIT Bombay SAC",
      //   aosDelay: "400",
      // },
      {
        dataImage: i1,
        title: "Sumo Bot Fight",
        description: "Location : IIT Bombay",
        aosDelay: "500",
        link: "https://unstop.com/p/sumo-bot-fight-tech-rnd-expo-iit-bombay-803095?lb=WePEzs0a",
      },
      {
        dataImage: i2,
        title: "ROBO SOCCER",
        description: "Location : IIT Bombay",
        aosDelay: "600",
        link: "https://unstop.com/p/robo-soccer-tech-rnd-expo-iit-bombay-803307?lb=WePEzs0a",
      },
      {
        dataImage: i3,
        title: "Crime Scene Investigation",
        description:  "Location : IIT Bombay",
        aosDelay: "700",
        link:"abc",
      },
      {
        dataImage: i4,
        title: "Air Crash Investigation",
        description:  "Location : IIT Bombay",
        aosDelay: "800",
        link:"abc",
      },
    ];

    
    return (
      <div className="App_cards">
            <h1 className="cards_title_list">WORKSHOPS</h1>
            <div id="app" className="cards_container">
                {cardData.map((card, index) => (
                  <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Card dataImage={card.dataImage} aosDelay={card.aosDelay}>
                      <h1 style={{fontFamily: 'Montserrat', fontSize: '1.7rem'}}>{card.title} </h1>
                      <p>{card.description}</p>
                      <a href={card.link}>
                      <button><a href={`/register/${index}`}>Register</a></button>
                      </a>
                    </Card>
                  </motion.div>
                ))}
            </div>
      </div>
    );
  }
}

export default Workshops;