import { mycondoproimg, campfirevid, chronododgevid } from "../../assets";

const projectList = [
  {
    id: 0,
    type: "exp",
    title: "OCR",
    example: "Image/video",
    exampleType: "",
    desc:
      "This was an experimental project That I worked on with a friend." +
      "The goal was to have a better understanding on the applications of machine learning and AI." +
      "In the end we made a python program that could intake an image of a hand drawn digit, compress it, and recognize it with 90%+ accuracy." +
      "We used small batch sizes in order to train the model which is why our accuracy was high" +
      "Over all it was a very interesting and fun project, but looking back it would have been smoother if we studied first then applied.",
    git: 1,
    gitLink: "https://github.com/SkylarSL/numberRecognizer",
    webLink: "",
    downloadLink: "",
    tech: "Python",
  },
  {
    id: 1,
    type: "web",
    title: "MyCondoPro",
    example: mycondoproimg,
    exampleType: "image",
    desc:
      "MyCondoPro was a project I worked on while at Simplistics Web Design using Developer WordPress. " +
      "Mosre specifically, I worked on the projects page as there was a new design to be implemented." +
      "However, with the new design the load times were significantly increased and too slow to be used. " +
      "Luckily, I was able to increase load times significantly by improving the query logic and adding lazy loading. " +
      "In general this was a fun and interesting project that was a challenge at the time. " +
      "I unfortunately do not have access to the code.",
    git: 0,
    gitLink: "",
    webLink: "https://mycondopro.ca/projects/",
    downloadLink: "",
    tech: "HTML, CSS, PHP",
  },
  {
    id: 2,
    type: "game",
    title: "Chronododge (game)",
    example: chronododgevid,
    exampleType: "video",
    desc:
      "This was the first game that I created on my own. " +
      "I was inspired by time manipulation, slowing it down, going back in it, etc. " +
      "I wanted to incorporate those elements in a game and thought this was a fun simple way to do so. " +
      "The concept is similar the asteroids with a twist. " +
      "You can slow down time, go back in time 3 seconds and when you've collected enough 'sparks' you can blast away projectiles. " +
      "Unfortunately I wasn't good enough at my own game to show off the last ability. " +
      "Sound has not been added yet.",
    git: 1,
    gitLink:
      "https://github.com/SkylarSL/Unity/tree/master/Projects/ChronoDodge",
    webLink: "",
    downloadLink: "",
    tech: "Unity, C#",
  },
  {
    id: 3,
    type: "game",
    title: "Campfire (game)",
    example: campfirevid,
    exampleType: "video",
    desc:
      "I wanted to further increase my understanding of Unity while applying different game mechanics. " +
      "This incorporates the idea of using your own life force to fend off enemies. " +
      "As a little living magical campfire in the dark, you fire fireballs (haha) at approaching 'monsters'. " +
      "If you miss a fireball you can redirect it, and if you have enough light left you can create a massive explosion that wipes out enemies. " +
      "When youre out of light you can collect ember to fuel more firepower and abilities. " +
      "I focused more on the functional aspect of the game. " +
      "Sound has not been added yet. ",
    git: 1,
    gitLink: "https://github.com/SkylarSL/Unity/tree/master/Projects/CampFire",
    webLink: "",
    downloadLink: "",
    tech: "Unity, C#",
  },
  {
    id: 4,
    type: "",
    title: "Covid Survey",
    example: "Image/video",
    exampleType: "",
    desc:
      "A mobile application that was developed by 4 coops (including me) for WSIB. " +
      "The intent was to make the workplace safer for return to office by screening employees before they entered the building. " +
      "The application consisted of a simple survey that would display a result depending on the questions answered. " +
      "This relied heavily on the honour system and did not have any backend. " +
      "For any memory needs we relied on the cache, since the memory requirements were short term this was perfect. " +
      "The cache would reset daily." +
      "I unfortunately do not have access to the product or code.",
    git: 0,
    gitLink: "",
    webLink: "",
    downloadLink: "",
    tech: "React",
  },
  {
    id: 5,
    type: "",
    title: "Digital ID POC",
    example: "Image/video",
    exampleType: "",
    desc:
      "The JWT POC is a project I worked on while at WSIB. " +
      "The intent was to give a basic understanding of Digital ID to future coops. " +
      "It focuses on basic concepts from Digital ID and applies JWT to verify users. " +
      "Since this was essentially a tutorial I was challenged with keeping things as simple as possible and explaining every step/concept." +
      "I unfortunately do not have access to the product or code.",
    git: 0,
    gitLink: "",
    webLink: "",
    downloadLink: "",
    tech: "React, Node.js/Express.js",
  },
  {
    id: 6,
    type: "web",
    title: "Memepo",
    example: "",
    exampleType: "",
    desc:
      "A website where you can make a user profile and post memes freely." +
      "One issue with some current meme browsing sites is losing your scroll place when making an update, such as adding your own meme." +
      "I wanted to solve this problem by making desynchronous updates, so the user just has to reload the page if they want to see fresh memes." +
      "Even though this was a project for Shopify, I plan to further develop this site in the future.",
    git: 1,
    gitLink: "https://github.com/SkylarSL/img-repo",
    webLink: "https://image-repository-3e3f2.web.app/",
    downloadLink: "",
    tech: "React, Firebase",
  },
  {
    id: 7,
    type: "",
    title: "Security Assignments",
    example: "",
    exampleType: "",
    desc:
      "These are a package of cyber security related assignments I have completed during my studies. " +
      "They cover a broad range of concepts such as memory faults, system security, cryptography, network security, etc. " +
      "All of the assignment were fun to complete!" +
      "They can all be seen in my git repos under \"Security\", \"Networks\", and \"Cryptography\"",
    git: 1,
    gitLink: "https://github.com/SkylarSL/img-repo",
    webLink: "https://image-repository-3e3f2.web.app/",
    downloadLink: "",
    tech: "Javascript, SQL, C, C++, Python",
  },
];

export default projectList;
