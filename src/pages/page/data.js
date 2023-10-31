import i1 from "../../assets/sumo-robot-fight.webp"
import i2 from "../../assets/robosoccer.webp"
import i3 from "../../assets/tba.webp"
import i4 from "../../assets/tba.webp"
import w1 from "../../assets/ai.png"
import w2 from "../../assets/web3.png"
import w3 from "../../assets/robotics.png"
import w4 from "../../assets/ui.png"
import logo from "../../assets/robobox.png"


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
      // { 
      //   id: 3,
      //   dataImage: i3,
      //   title: "Crime Scene Investigation",
      //   description:  "Location : IIT Bombay",
      //   aosDelay: "700",
      //   link:"abc",
      // },
      // {
      //   id: 4,
      //   dataImage: i4,
      //   title: "Air Crash Investigation",
      //   description:  "Location : IIT Bombay",
      //   aosDelay: "800",
      //   link:"abc",
      // },
]

const workshop_data = [
  {   id: 1,
      dataImage: w1,
      title: "Ai Workshop",
      highlights: [
        {title: "AI Fundamentals for Students",
        content: [
          {
            subtitle: 'AI Essentials', 
            subcontent: 'Begin your journey with a comprehensive introduction to the fundamentals of AI, including machine learning, deep learning, and their real-world applications.'
          },
          {
            subtitle: 'AI in Career Pathways',
            subcontent: 'Explore diverse career opportunities in AI and the educational pathways to help you kickstart your AI career journey.'
          },
          {
            subtitle: 'Hands-on Basics',
            subcontent: "Engage in interactive sessions, and get hands-on experience with coding and building simple AI models."
          }
        
        ]
        },
        {
          title: "Concepts of Natural Language Processing (NLP)",
          content: [
            {
              subtitle: 'NLP Foundations:',
              subcontent: 'Dive into the captivating world of NLP, understanding the basics of language processing, tokenization, and linguistic features.'
            },
            {
              subtitle: 'NLP Applications',
              subcontent: 'Explore real-world NLP applications, from sentiment analysis and chatbots to machine translation and text generation.'
            },
            {
              subtitle: 'Ethical NLP',
              subcontent: 'Discuss the ethical considerations and challenges in NLP, emphasizing responsible AI practices in language-based AI applications.'
            },
            {
              subtitle: 'NLP Tools and Frameworks',
              subcontent: 'Get an overview of essential NLP tools, libraries, and platforms, and learn how to work with them effectively.'
            },
            {
              subtitle: 'NLP in Action',
              subcontent: 'Participate in practical NLP exercises, creating your own language models and text-based AI solutions.'
            }
          ]

        }
      ],
      learningOutcomes: [
        {
          subtitle: 'AI Essential',
          subcontent: 'Gain a strong foundation in AI, covering machine learning and deep learning for real-world applications.'
        },
        {
          subtitle: 'Career Path Insights',
          subcontent: 'Explore diverse AI career paths and educational routes, providing clarity for aspiring technologists.'
        },
        {
          subtitle: 'Hands-On Coding',
          subcontent: 'Engage in interactive sessions for practical coding experience, building simple AI models.'
        },
        {
          subtitle: 'NLP Basics Mastery',
          subcontent: 'Dive into NLP concepts—language processing, tokenization, and linguistic features—for a solid understanding.'
        },
        {
          subtitle: 'Real-World NLP Applications',
          subcontent: 'Explore practical NLP use cases, from sentiment analysis to chatbots, ensuring hands-on experience and ethical considerations.'
        },

      ],
      description: "Location : IIT Bombay",
      detail: 'This workshop is designed to provide a holistic learning experience for students, enthusiasts, and aspiring technologists, encompassing both the foundational principles of Artificial Intelligence and the specialized world of Natural Language Processing (NLP).  Firsly we shall understand fundamentals in AI. And then we learn NLP techniques and hands on development.',
      aosDelay: "500",
      iitbLink: 'https://docs.google.com/forms/d/e/1FAIpQLScc-DPOKK55mgweC6fOmBD14zVBuAzDL9nnPB92XjV-Keo4Sg/viewform',
      link: "https://unstop.com/o/1zFrDj5?lb=WePEzs0a",

    },
    {
      id: 2,
      dataImage: w2,
      title: "Web 3.0 Workshop",
      highlights: [
        {title: "AI Fundamentals for Students",
        content: [
          {
            subtitle: 'Introduction to dApps', 
            subcontent: 'Gain a solid understanding of decentralized applications, exploring their architecture, key principles, and their disruptive potential in the digital landscape.'
          },
          {
            subtitle: 'Blockchain Backbone',
            subcontent: 'Dive into the role of blockchain technology as the foundation of dApps, and the significance of different blockchain platforms.'
          },
          {
            subtitle: 'Smart Contracts',
            subcontent: "Explore how smart contracts automate processes on the blockchain and revolutionize business logic."
          },
          {
            subtitle: 'Building dApps',
            subcontent: 'Take a step-by-step journey into building your own basic dApp, using industry tools and development languages.'
          },
          {
            subtitle: 'Decentralized Apps in Action',
            subcontent: "Explore real-world dApp applications across diverse sectors, such as finance, gaming, supply chain, and DeFi."
          }


        
        ]
        },
        {
          title: "NFTs and Digital Collectibles",
          content: [
            {
              subtitle: 'NFTs Unveiled',
              subcontent: 'Delve into the captivating world of Non-Fungible Tokens (NFTs), understanding their uniqueness and their impact on digital art, entertainment, and beyond.              '
            },
            {
              subtitle: 'NFT Applications',
              subcontent: 'Explore the versatility of NFTs and their use cases, from collectibles and virtual real estate to digital identity and intellectual property.'
            },
            {
              subtitle: 'NFT Marketplace',
              subcontent: 'Discover the ecosystem of NFT marketplaces, how to create, buy, and sell NFTs, and the potential for artists and creators.'
            },
            {
              subtitle: 'The Future of Ownership',
              subcontent: 'Discuss the transformative potential of NFTs in redefining digital ownership, royalties, and provenance in the digital age.'
            },
            {
              subtitle: 'Hands-on NFT Creation (important)',
              subcontent: 'Get hands-on experience by creating and minting your own NFTs, guided by experts in the field'
            }
          ]

        }
      ],
      learningOutcomes: [
        {
          subtitle: 'Web 3.0 Mastery',
          subcontent: 'Understand the core of Web 3.0, covering decentralized apps (dApps) and NFTs, crucial for staying current in the digital landscape.'
        },
        {
          subtitle: 'Hands-On dApp Development',
          subcontent: 'Learn practical skills in building dApps, enabling participants to contribute to the evolving tech solutions across industries.'
        },
        {
          subtitle: 'Blockchain Insight',
          subcontent: "Gain a clear understanding of blockchain's role as the foundation for dApps, applicable knowledge for professionals in finance, supply chain, and related fields."
        },
        {
          subtitle: 'NFT Expertise',
          subcontent: 'Dive into NFTs, exploring creation, buying, and selling processes, with a hands-on session for practical experience in this transformative digital space.'
        },
        {
          subtitle: 'Real-World Application Exposure',
          subcontent: 'Explore actual uses of dApps in finance, gaming, supply chain, and DeFi, inspiring participants to apply these technologies creatively in their domains.'
        },

      ],
      description: "Location : IIT Bombay",
      detail: "This workshop is a comprehensive exploration of Web 3.0, offering a two-part journey that begins with the fundamentals of decentralized applications (dApps) and culminates with the captivating world of Non-Fungible Tokens (NFTs) and digital collectibles. This workshop will also involve Hands-on NFT creation.",
      aosDelay: "600",
      iitbLink: 'https://docs.google.com/forms/d/e/1FAIpQLScc-DPOKK55mgweC6fOmBD14zVBuAzDL9nnPB92XjV-Keo4Sg/viewform',
      link: "https://unstop.com/o/sOxUSLy?lb=WePEzs0a",
    },
    { 
        id: 3,
        dataImage: w3,
        companyLogo: logo,
        title: "Robotics Workshop",
        description:  "Location : IIT Bombay",
        detail: "Explore the cutting-edge world of robotics at our Bluetooth, Voice, and Gesture-controlled robot workshop. Learn to command robots with your voice and gestures, and delve into the future of human-robot interaction. Join us for an exciting hands-on experience that bridges technology and innovation.",
        aosDelay: "800",
        iitbLink:"https://docs.google.com/forms/d/e/1FAIpQLScxGhlepsEREwv0NI2IJKD8hOTE3IHLT5nj5k6R7MSJO1kgSQ/viewform",
        link:"https://unstop.com/o/eEpTof4?lb=WePEzs0a",
      },
    { 
        id: 4,
        dataImage: w4,
        companyLogo: logo,
        title: "UI/UX Workshop",
        description:  "Location : IIT Bombay",
        detail: "Elevate your design skills and create user-centric digital experiences at our UI/UX workshop. Dive into the art of crafting intuitive interfaces, understanding user behavior, and optimizing user journeys. Join us for a transformative learning experience in the world of user experience design.",
        aosDelay: "800",
        iitblink:"",
        link:"",
        common_link: "https://docs.google.com/forms/d/e/1FAIpQLSfV5OXcEvCzGv0IoWw8QeuuUn5fVA7Z5oRLyOIa6V-AZtunKg/viewform"
      },
]

export {compi_data, workshop_data};