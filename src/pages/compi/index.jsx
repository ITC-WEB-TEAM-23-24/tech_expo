import React, { Component } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./style.css"
import AOS from "aos"
import "aos/dist/aos.css"
import i1 from "../../assets/av2.avif"



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
    }, 10);
    this.setState({
      mouseLeaveDelay: delay,
    });
  };

  render() {
    const { dataImage, aosDelay } = this.props;
    const { width, height, mouseX, mouseY } = this.state;

    const cardStyle = {
      transform: `rotateY(${(mouseX / width) * 50}deg) rotateX(${
        (mouseY / height) * -40
      }deg)`,
    };

    const cardBgTransform = {
      transform: `translateX(${(mouseX / width) * -70}px) translateY(${
        (mouseY / height) * -70
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
        <div className="card" style={cardStyle} data-aos="fade-left" data-aos-duration="1000" data-aos-delay={aosDelay}>
          <div
            className="card-bg"
            style={{ ...cardBgTransform, ...cardBgImage }}
          ></div>
          <div className="card-info" dela>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

class Compi extends Component {

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
        // dataImage: ,
        title: "Competition-1",
        description: "IIT Bombay SAC",
        aosDelay: "500",
      },
      {
        // dataImage: ,
        title: "Competition-2",
        description: "IIT Bombay SAC",
        aosDelay: "600",
      },
      {
        // dataImage: ,
        title: "Competition-3",
        description: "IIT Bombay SAC",
        aosDelay: "700",
      },
      {
        // dataImage: ,
        title: "Competition-4",
        description: "IIT Bombay SAC",
        aosDelay: "800",
      },
    ];

    
    return (
      <div className="App_cards">
            <h1 className="cards_title_list">Competitions</h1>
            <div id="app" className="cards_container">
                {cardData.map((card, index) => (
                  <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Card dataImage={i1} aosDelay={card.aosDelay}>
                      <h1>{card.title} </h1>
                      <p>{card.description}</p>
                      <button>Register</button>
                    </Card>
                  </motion.div>
                ))}
            </div>
      </div>
    );
  }
}

export default Compi;