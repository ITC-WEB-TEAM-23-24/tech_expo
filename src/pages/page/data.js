import i1 from "../../assets/sumo-robot-fight.webp"
import i2 from "../../assets/robosoccer.webp"
import i3 from "../../assets/tba.webp"
import i4 from "../../assets/tba.webp"
import w1 from "../../assets/ai.png"
import w2 from "../../assets/web3.png"

const compi_data = [
    {   id: 1,
        dataImage: i1,
        title: "Sumo Bot Fight",
        description: "Location : IIT Bombay",
        detail: 'The Sumo Bot Fight organized by Institute Technical Council, IIT Bombay is a sumo-style competition where teams bring fully assembled and programmed robots to engage in wrestling matches within a specially designed sumo ring. The primary goal is to outmaneuver and push the opponent out of the ring. This is not a "battle bots" event, so intentionally destructive robots are not allowed. The emphasis is on skill, strategy, and technical finesse, not causing harm or damage to the robots.',
        aosDelay: "500",
        link: "https://unstop.com/p/sumo-bot-fight-tech-rnd-expo-iit-bombay-803095?lb=WePEzs0a",
        iitbLink: "https://forms.gle/eTRhiYEgXWMWWtXi7"
      },
      {
        id: 2,
        dataImage: i2,
        title: "Robo Soccer",
        description: "Location : IIT Bombay",
        detail: "The sports industry is on the brink of a revolution, where human-made robots are poised to showcase their skills in the beloved game of football. These robots are as good as the individuals controlling them. Let's design a versatile robot capable of excelling both in scoring goals and defending its own goal line, positioning itself as the new football champion.",
        aosDelay: "600",
        link: "https://unstop.com/p/robo-soccer-tech-rnd-expo-iit-bombay-803307?lb=WePEzs0a",
        iitbLink: "https://forms.gle/aQUKsrYFH98dX2SG7"
      },
      { 
        id: 3,
        dataImage: i3,
        title: "Crime Scene Investigation",
        description:  "Location : IIT Bombay",
        aosDelay: "700",
        link:"abc",
      },
      {
        id: 4,
        dataImage: i4,
        title: "Air Crash Investigation",
        description:  "Location : IIT Bombay",
        aosDelay: "800",
        link:"abc",
      },
]

const workshop_data = [
  {   id: 1,
      dataImage: w1,
      title: "Ai Workshop",
      description: "Location : IIT Bombay",
      detail: 'This workshop is designed to provide a holistic learning experience for students, enthusiasts, and aspiring technologists, encompassing both the foundational principles of Artificial Intelligence and the specialized world of Natural Language Processing (NLP).  Firsly we shall understand fundamentals in AI. And then we learn NLP techniques and hands on development.',
      aosDelay: "500",
      iitbLink: 'https://docs.google.com/forms/d/e/1FAIpQLScc-DPOKK55mgweC6fOmBD14zVBuAzDL9nnPB92XjV-Keo4Sg/viewform',
      link: "https://unstop.com/o/Ti73fjw?lb=WePEzs0a",

    },
    {
      id: 2,
      dataImage: w2,
      title: "Web3.0 Workshop",
      description: "Location : IIT Bombay",
      detail: "This workshop is a comprehensive exploration of Web 3.0, offering a two-part journey that begins with the fundamentals of decentralized applications (dApps) and culminates with the captivating world of Non-Fungible Tokens (NFTs) and digital collectibles. This workshop will also involve Hands-on NFT creation.",
      aosDelay: "600",
      iitbLink: 'https://docs.google.com/forms/d/e/1FAIpQLScc-DPOKK55mgweC6fOmBD14zVBuAzDL9nnPB92XjV-Keo4Sg/viewform',
      link: "https://unstop.com/o/cuhbkfS?lb=WePEzs0a",
    },
]

export {compi_data, workshop_data};