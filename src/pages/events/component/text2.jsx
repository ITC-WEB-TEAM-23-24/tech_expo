import React, { Component } from 'react';
import '../style.css';

class TextAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTextIndex: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(this.changeText, 3000); 
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  changeText = () => {
    this.setState((prevState) => ({
      currentTextIndex: (prevState.currentTextIndex + 1) % this.props.texts.length,
    }));
  };

  render() {
    const { texts } = this.props;
    const { currentTextIndex } = this.state;

    return (
      <div className="text-animation">
        <div className='constant-text'>We have </div>
        <div className="animated-text">{texts[currentTextIndex]}</div>
      </div>
    );
  }
}

export default TextAnimation;