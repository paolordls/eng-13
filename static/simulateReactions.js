const reactions = [
  {
    "profile_pic": "https://example.com/profiles/juan.jpg",
    "name": "Juan Dela Cruz",
    "comment": "Parang delikado ang mga chatbots na ito, we should study them more. Hindi mo ba nakikita ang risk @Maria?",
    "in_reply_to": "Voter Info Chatbots Powered by Chinese AI Tilt Philippine Elections",
    "hearts": 230
  },
  {
    "profile_pic": "https://example.com/profiles/maria.jpg",
    "name": "Maria Clara",
    "comment": "Ano kaya ang impact nito sa voters? @Juan overreacting ka lang. Hindi naman lahat ng AI masama.",
    "in_reply_to": "Voter Info Chatbots Powered by Chinese AI Tilt Philippine Elections",
    "hearts": 12
  },
  {
    "profile_pic": "https://example.com/profiles/pedro.jpg",
    "name": "Pedro Penduko",
    "comment": "Mukhang biased ang mga chatbots. @Maria tama si Juan. Dapat maging cautious tayo.",
    "in_reply_to": "Voter Info Chatbots Powered by Chinese AI Tilt Philippine Elections",
    "hearts": 47
  },
  {
    "profile_pic": "https://example.com/profiles/rosa.jpg",
    "name": "Rosa Rosal",
    "comment": "We should focus more on AI transparency. @Pedro agree ako pero hindi lahat ng AI biased.",
    "in_reply_to": "Voter Info Chatbots Powered by Chinese AI Tilt Philippine Elections",
    "hearts": 231
  },
  {
    "profile_pic": "https://example.com/profiles/andres.jpg",
    "name": "Andres Bonifacio",
    "comment": "Kailangan ng thorough research sa paggamit ng AI sa elections. @Rosa hindi ba obvious na may problema?",
    "in_reply_to": "Voter Info Chatbots Powered by Chinese AI Tilt Philippine Elections",
    "hearts": 568
  },
  {
    "name": "Luzviminda Santos",
    "comment": "Nakakabahala kung paano ito makakaapekto sa elections. @Andres hindi naman lahat ng epekto negative.",
    "hearts": 1877
  },
  {
    "name": "Jose Rizal",
    "comment": "Dapat may regulations sa paggamit ng AI sa politics. @Luzviminda hindi ba dapat mas open tayo sa innovation?",
    "hearts": 1762
  },
  {
    "name": "Emilio Aguinaldo",
    "comment": "@Luzviminda tama ka. We need thorough research. Pero @Jose, hindi lahat ng innovation good.",
    "hearts": 103
  },
  {
    "name": "Gabriela Silang",
    "comment": "Ano ang magiging epekto nito sa voters? @Emilio hindi ba dapat mas focus tayo sa education?",
    "hearts": 9
  },
  {
    "name": "Diego Silang",
    "comment": "@Gabriela, sana hindi ito magamit sa masama. Pero @Jose hindi ba dapat mas cautious tayo?",
    "hearts": 115
  }
];

function displayReaction(reaction) {
  console.log(`Name: ${reaction.name}`);
  console.log(`Comment: ${reaction.comment}`);
  console.log(`Hearts: ${reaction.hearts}`);
  console.log('---');
}

function simulateReactions() {
  let delay = 0;
  reactions.forEach((reaction, index) => {
    delay += Math.floor(Math.random() * 3000) + 4000; // Random delay between 4-7 seconds
    setTimeout(() => {
      displayReaction(reaction);
    }, delay);
  });
}

simulateReactions(); 