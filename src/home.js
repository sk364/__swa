import React from "react";

const Home = () => {
  return (
    <div className="container">
      <img src="./meme0.jpg" />
      <p>Here's another "personal" project that I have been working on!</p>
      <p>Let's see if you enjoy as much as I did developing it. :)</p>
      <p>Tap on "Continue" to check it out.</p>
      <button onClick={() => window.location.href="/#/page1"}>Continue</button>
    </div>
  );
};

export default Home;
