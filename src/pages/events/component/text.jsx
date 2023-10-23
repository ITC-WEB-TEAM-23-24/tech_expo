import React from 'react';
import Typewriter from 'typewriter-effect';

function TextCarousel(props) {
  const words = props.items;
  const loopDuration = 5000;
  const longestWordLength = Math.max(...words.map((word) => word.length));
  console.log(longestWordLength);

  const wordDelays = words.map((word) => {
    console.log(word.length);
    return (loopDuration / word.length) ;
  });

  return (
    <div className='textc'>
      <Typewriter
        options={{
          strings: words,
          autoStart: true,
          loop: true,
          typeSpeed: wordDelays,
          deleteSpeed: wordDelays,
        }}
      />
    </div>
  );
}

export default TextCarousel;
