import React from 'react';
import '../Styles/video.css';

export const Video: React.FC = () => {
  return (
    <section className="video">
      <div className="video__content">
        <h2>
          ALGUNA FRASE<br />
          MOTIVACIONAL O<br />
          PROMOCIONAL
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="video__buttons">
          <button className="primary">Start Now</button>
          <button className="secondary">More details</button>
        </div>
      </div>
      <div className="video__player">
        <video controls poster="https://via.placeholder.com/600x300">
          <source src="your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};
