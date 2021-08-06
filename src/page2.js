import React, { useState } from "react";

const Page2 = () => {
  const [isOkay, setIsOkay] = useState(false);
  const [text, setText] = useState("");


  const handleClick = () => {
    const element = document.getElementById("cute");
    setTimeout(() => {
      window.scrollTo({
        behavior: element ? "smooth" : "auto",
        top: element ? element.offsetTop : 0
      });
    }, 100);
  };

  const iter = Array.from(new Array(25));

  return(
    <div className="container">
      <p>I know you must be feeling like I am celebrating your birthday, but I am not. </p>
      <p>It's not about you, it's actually about the number 26. Look at everything, 26 is resonating and is surrounding the world with its echo.</p>
      <p>So dont be expecting me to celebrate the number 27 too, okay? Say okay in the input box to continue.</p>
      <div className='input'>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => {
          if (text.trim().toLowerCase() === "okay") setIsOkay(true);
        }}>
          Submit
        </button>
      </div>
      {isOkay && (
        <>
          <img src="./meme4.jpg" />
          <p>Dwight (the guy in the image) is literally correct. While we want to believe that an individual at any age can do any shit,</p>
          <p>the measure of how old you are still matters when it comes to biological processes. Don't worry, I am not gonna tell you further on it.</p>
          <p>What I have is some cool facts about the number 26:</p>
          <p>* 26 is the only integer that is one greater than a square (5<sup>2</sup> + 1) and one less than a cube (3<sup>3</sup> − 1).<sup><a target="_blank" href="http://www.normalesup.org/~baglio/maths/26number.pdf">[1]</a></sup></p>
          <p>* Taking A=1 and Z=26, GOD = G + O + D = 26</p>
          <p>* In numerology, number 26 represents diplomacy, family and teamwork. It's also considered lucky for business!</p>
          <img src="./meme5.gif" />
          <p>Guess how many sides this shape has! It's called rhombicuboctahedron as it has 26 faces, btw. Try spelling it until you get it right!</p>
          <p>26 is an okay number, nothing much too great about it. * waits until you are 33 years old</p>
          <p>One can say a lot of things about you and they might not be true, but if they pick any quality from the following list, they will never be wrong:</p>
          <ol>
            <li>Explorer</li>
            <li>Adventure-seeking</li>
            <li>Mindful</li>
            <li>Weird o.O</li>
            <li>Beautiful</li>
            <li>Good Kisser :*</li>
            <li>Activist</li>
            <li>Feminist</li>
            <li>Curious</li>
            <li>Ambitious</li>
            <li>Commander</li>
            <li>Controlling</li>
            <li>Debugger</li>
            <li>Reader</li>
            <li>Spiritual</li>
            <li>Friendly</li>
            <li>Cute (yes, you are! <a onClick={handleClick}>proof</a>)</li>
            <li>Animal lover</li>
            <li>Old school</li>
            <li>Raw</li>
            <li>Reliable</li>
            <li>Nurturer</li>
            <li>Balance (or, atleast always moving towards it)</li>
            <li>Assertive</li>
            <li>Conscious</li>
            <li>Responsible</li>
          </ol>

          <p>I know I just wrote one word (max two) word adjectives to describe you, which clearly isn't satisfying.</p>
          <p>Even words have a limit of expression.</p>
          <p>Pictures on the other hand tries to fill the verbal gaps. Here are some to help you see how you have grown over the years:</p>

          <div className="img-group">
            {iter.map((_, idx) => {
              const ext = idx === 15 ? "gif" : "jpg";
              return (<img className="img-item" src={`./n${idx + 1}.${ext}`} id="cute" />);
            })}
          </div>

          <img src="./n26.jpg" className="final-img" />

          <p>Look at you! All mature and shit. Well, if it wasn't obvious, I want you know that</p>
          <p>you mean a lot to me and I am glad that you exist!</p>
          <p>I love you and yeah, happy birthday! :D</p>

          <img src="./meme11.gif" style={{width: "400px", "margin": "0 auto", "display": "block"}} />
        </>
      )}
    </div>
  );
};

export default Page2;
