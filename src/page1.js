import React, { useState } from "react";

const Page1 = () => {
  const dob = new Date("1995-08-05 13:16");
  const now = new Date();
  const [duration, setDuration] = useState((now - dob) / (1000 * 3600 * 24));

  setInterval(() => setDuration(parseInt((new Date() - dob) / (1000 * 3600 * 24)), 1000));

  return (
    <div className="container">
      <p>Birthdays are great, aren't they? They have been a wonderful source of excitement throughout the human civilization, irrespective of caste, creed, race, gender or disability.</p>
      <p>Everyone celebrates them. Did you know that the Bible mentions the birthday celebrations of Egyptian Pharaohs happened around 3,000 BCE.</p>
      <p>While these Pharaohs were religious, the celebration of a common man's birthday is found to be in Roman civilization (8th century BCE).</p>
      <p>Unfortunately, female birthdays weren't celebrated until around 12th century AD.</p>
      <img src="./meme1.jpg" />
      <p>As far as I see, celebrations are usually composed of many common elements.</p>
      <p>Some of which you might be familiar with are the birthday wishes that you will be receiving throughout the day,</p>
      <p>marking the people who wished important in your attention scope. Cake is another major element to be consumed on these days.</p>
      <p>Then comes the element of sweetness, the cake! The major element which brings people together. Depending on the closeness of individuals</p>
      <p>and the stupidity, someone or the other does use the cake to humiliate the individual by showing everyone that they like to waste the best element of the party, for no good reason.</p>
      <p>Another important element is the concept of gifts. Sometimes, they are disappointing, but then even if they don't know</p>
      <p>you well enough, your folks do try to make you feel good, however they can.</p>
      <div className="blank" />
      <p>Many do celebrate in more or less the similar way, but there are cultures which have their own way of doing things.</p>
      <p>For instance, before 1950, Japan had just one day on which everybody celebrated their birthday, as it was believed that was the day everyone got older.</p>
      <p>Similarly, if you were born in Bhutan, your birthday will fall on January 1st just like everybody else.</p>
      <p>Germans are pretty ruthless when it comes to single adults. Bachelors turning 30 have to sweep the town hall steps on their birthdays to show that they are available for marriage.</p>
      <img src="./meme3.jpg" />
      <p>Even animals are not spared.</p>
      <div className="blank" />
      <p>In this physical world, an individual's birthday is always in context to their place of birth and the time at which they were conceived.</p>
      <p>Let me show you your own contextual markers. You were born <a href="https://goo.gl/maps/SuZvv6ticpy9KbQh6" target="_blank">here</a> which is currently labeled as District Hospital, Shivpuri, Madhya Pradesh, India.</p>
      <p>It has been {duration} days since you have been breathing in this world we call Earth.</p>
      <div className="blank" />
      <p>The physical world is feeble and temporary. It always has a TTL (Time To Live) associated with every being there is.</p>
      <p>Comparing you with an average Indian, you have ~15,690 days left in this universe.</p>
      <p>Well, that's too less! How are we all supposed to get the best out of you in such a small window.</p>
      <p>Since I can't change it, I can always help you to save some time, by doing something or another :)</p>
      <p>Death is imminent, so please hurry and tap on "Continue".</p>
      <button onClick={() => window.location.href="/#/page2"}>Continue</button>
    </div>
  );
};

export default Page1;
