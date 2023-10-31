  import React from 'react';
  import Typewriter from 'typewriter-effect';

  function TextCarousel(props) {
    const words = props.items;
    const loopDuration = 3000;
    const longestWordLength = Math.max(...words.map((word) => word.length));
    //console.log(longestWordLength);

    const wordDelays = words.map((word) => {
      //console.log(word);
      //console.log(word.length);
      return (loopDuration / (word.length*word.length)) ;
    });

    const endpause = words.map((word) => {
      if (word === "Everything") {return 10000};
      return 1000;
    });

    return (
      <div className='textc'>
        <Typewriter
          options={{
            strings: words,
            autoStart: true,
            loop: true,
            typeSpeed: wordDelays,
            pauseFor: endpause,
            deleteSpeed: wordDelays*2,
          }}
        />
      </div>
    );
  }

  export default TextCarousel;
