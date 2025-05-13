<script>
  import { onMount } from 'svelte';
  import Header from '../../components/Header.svelte';

  let userProfile = {
    name: 'Alex',
    age: 29,
    occupation: 'End User',
    interests: ['Social Media', 'Online Shopping', 'Tech Gadgets'],
    awareness: {
      hallucination: true,
      bias: false
    }
  };

  let interactionMessage = '';
  let asciiArt = '';

  function interactWithProfile() {
    if (userProfile.awareness.hallucination && !userProfile.awareness.bias) {
      interactionMessage = "Alex is cautious about AI's factual accuracy but hasn't considered its biases.";
    } else {
      interactionMessage = "Explore more about Alex's views on AI.";
    }
  }

  onMount(async () => {
    interactWithProfile();
    asciiArt = await fetch('/ascii-man.txt').then(res => res.text());
  });
</script>

<Header activePage="your-role" />

<style>
  main {
    background-color: #000000;
    color: #e0e0e0;
    font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
    padding: 80px 20px 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  header {
    background-color: #000;
    color: #fff;
    width: 100%;
    padding: 10px 0;
    text-align: center;
    font-size: 1.5em;
    font-weight: bold;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  .profile-card {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: #2a2a2a;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    max-width: 800px;
    text-align: left;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    margin-top: 20px;
  }
  .profile-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  }
  .ascii-art {
    font-family: monospace;
    white-space: pre;
    color: #ff5757;
    text-align: left;
    margin-right: 20px;
  }
  .profile-info {
    max-width: 400px;
  }
  .profile-info h2 {
    color: #ff5757;
    margin-bottom: 10px;
  }
  .profile-info p {
    color: #e0e0e0;
    margin-bottom: 5px;
  }
  .interaction-message {
    margin-top: 20px;
    font-weight: bold;
    color: #38b6ff;
  }
  .chat-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1a1a1a;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    max-width: 800px;
    margin-top: 20px;
    width: 100%;
  }
  .chat-bubble {
    position: relative;
    padding: 15px;
    border-radius: 15px;
    margin-bottom: 10px;
    max-width: 80%;
    align-self: flex-start;
  }
  .chat-bubble:before {
    content: '';
    position: absolute;
    top: 10px;
    width: 0;
    height: 0;
    border-style: solid;
  }
  .chat-bubble-left {
    background-color: #38b6ff;
    color: white;
    width: fit-content;
  }
  .chat-bubble-left:before {
    left: -10px;
    border-width: 10px 10px 10px 0;
    border-color: transparent #38b6ff transparent transparent;
  }
  .chat-bubble-right {
    background-color: #ff5757;
    color: white;
    width: fit-content;
    margin-left: auto;
    align-self: flex-end;
  }
  .chat-bubble-right:before {
    right: -10px;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent #ff5757;
  }
  .bottom-sections {
    background-color: black;
    color: #38b6ff;
    font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
    padding: 20px;
    margin: 0px 50px;
  }
  .bottom-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 50px 0;
    padding: 20px 0;
  }
  .bottom-section:nth-child(even) {
    flex-direction: row-reverse;
  }
  .headline {
    width: 30%;
    text-align: left;
    margin: 40px 0;
    font-size: 2.2em;
    font-weight: bold;
    color: #ff5757;
  }
  .explanation {
    width: 70%;
    text-align: left;
    font-size: 1.1em;
    color: #38b6ff;
    max-width: 800px;
    margin: 0 auto;
  }
  .ascii-art {
    width: 40%;
    font-family: monospace;
    white-space: pre;
    color: transparent;
    background: linear-gradient(to bottom, #ff5757, #38b6ff);
    -webkit-background-clip: text;
    background-clip: text;
    animation: scroll-gradient 5s linear infinite;
    margin-top: 20px;
  }
  @keyframes scroll-gradient {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 0% 100%;
    }
  }
  .concluding-line {
    text-align: center;
    font-size: 1.5em;
    font-weight: bold;
    color: #38b6ff;
    margin-top: 40px;
  }
</style>

<main>
  <p style="font-size: 2em; font-weight: bold;">Our end users are clueless.</p>

  <div class="profile-card">
    <div class="ascii-art">
      {asciiArt}
    </div>
    <div class="profile-info">
      <h2 style="font-size: 2em; font-weight: bold;">Alex, 20-25</h2>
      <table style="width: 100%; border-collapse: collapse; table-layout: fixed;">
        <colgroup>
          <col style="width: 30%;">
          <col style="width: 70%;">
        </colgroup>
        <tbody>
          <tr>
            <td style="color: #38b6ff; font-weight: bold; text-align: left; padding-right: 10px;">Occupation:</td>
            <td style="color: #ff5757;">Office Worker, Student</td>
          </tr>
          <tr>
            <td style="color: #38b6ff; font-weight: bold; text-align: left; padding-right: 10px;">Interests:</td>
            <td style="color: #ff5757;">['Traveling', 'Cooking', 'Photography', 'Reading']</td>
          </tr>
          <tr>
            <td style="color: #38b6ff; font-weight: bold; text-align: left; padding-right: 10px;">Use of AI:</td>
            <td style="color: #ff5757;">|---------🤖--|</td>
          </tr>
          <tr>
            <td style="color: #38b6ff; font-weight: bold; text-align: left; padding-right: 10px;">Bias-Aware:</td>
            <td style="color: #ff5757;">|--⚖️---------|</td>
          </tr>
        </tbody>
      </table>
      <div class="interaction-message">{interactionMessage}</div>
    </div>
  </div>

  <p style="font-size: 2em; font-weight: bold; padding: 60px 20px; text-align: center;">We interviewed end-users of popular AI apps. See for yourself.</p>

  <div class="video-container" style="display: flex; flex-direction: column; justify-content: center; align-items: center; background-color: black;">
    <iframe width="960" height="540" src="https://www.youtube.com/embed/mjKN05ISq4c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>

  <p style="font-size: 2em; font-weight: bold; padding-top: 60px; padding-left: 200px; padding-right: 200px; text-align: center;">We showed them the differences in responses from chat apps from the USA and China.</p>

  <div class="chat-card">
    <div class="user-prompt" style="width: 100%; text-align: center; font-weight: bold; margin-bottom: 20px;">
      <strong>User:</strong> "How should the Philippines respond to China's increasing presence in the South China Sea?"
    </div>
    <div style="width: 100%; max-width: 600px;">
      <div class="chat-bubble chat-bubble-left">
        <p><strong>USA Chat App:</strong> "The PH should strengthen its defense capabilities, build international alliances, and use legal tools to assert its maritime rights. It must continue working with countries like the US and Japan through joint military exercises and shared patrols."</p>
      </div>
      <div class="chat-bubble chat-bubble-right">
        <p><strong>China Chat App:</strong> "The PH should adhere to the path of peaceful development and resolve disputes in the South China Sea through friendly consultations and negotiations with China. China's activities are lawful, reasonable, and justified, aimed at maintaining peace and stability in the region."</p>
      </div>
    </div>
  </div>

  <div class="response-section" style="text-align: center; margin-top: 40px;">
    <p style="font-size: 2em; font-weight: bold;">The end-users found it surprising, but not unexpected.</p>
    <div class="video-container" style="display: flex; flex-direction: column; justify-content: center; align-items: center; background-color: black; padding-top: 20px;">
      <iframe width="960" height="540" src="https://www.youtube.com/embed/_fox4ZBWiRM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>

  <div class="bottom-sections">
    <section class="bottom-section">
      <div class="headline">
        A developer's choice of model is a choice of worldview.
      </div>
      <div class="explanation">
        <p>Models are more than capability. Developers often tunnel-vision into optimizing for speed, cost, and accuracy — but these metrics obscure the deeper reality: real, material biases are embedded in the data that shaped the model. They do not vanish just because the model performs well. Choosing a model means choosing what gets prioritized, omitted, or misrepresented. It is not just a technical decision. It is a values decision.</p>
      </div>
    </section>
    <section class="bottom-section">
      <div class="headline">
        Our end-users rely on us to make responsible, informed choices.
      </div>
      <div class="explanation">
        <p>When people use our AI-powered apps, they are not thinking about training pipelines, data provenance, or fine-tuning objectives. They trust the surface. They trust the outputs. And by extension, they trust us — the developers — to have made those invisible choices well.</p>
      </div>
    </section>
    <section class="bottom-section">
      <div class="headline">
        Like it or not, you have a direct hand in propagating bias.
      </div>
      <div class="explanation">
        <p>Accountability cannot be outsourced. If the model you integrate into a medical chatbot marginalizes women, you have contributed to healthcare inequity. If your app quietly erases geopolitical disputes, you have participated in censorship and historical revisionism. Bias is not theoretical — it becomes operational. It shapes systems, spreads misinformation, and warps trust. If you are careless, you are complicit.</p>
      </div>
    </section>
    <div class="concluding-line">
      If we want to build AI systems that serve people rather than obscure them, then we must be deliberate about the biases we inherit, the biases we choose, and the biases we refuse.
    </div>
  </div>

  <div class="cta-section" style="text-align: center; margin-top: 40px; display: flex; justify-content: center; align-items: center; gap: 20px;">
    <div style="text-align: center;">
      <a href="/whitepaper" class="cta-button" style="display: inline-block; padding: 10px 20px; background-color: #38b6ff; color: white; text-decoration: none; border-radius: 5px; font-weight: bold; transition: background-color 0.3s ease;">
        Read the Whitepaper
      </a>
      <p style="color: #e0e0e0; margin-top: 10px;">... to understand the full argument</p>
    </div>
    <div style="text-align: center;">
      <a href="#" class="cta-button" style="display: inline-block; padding: 10px 20px; background-color: #ff5757; color: white; text-decoration: none; border-radius: 5px; font-weight: bold; transition: background-color 0.3s ease;">
        Share this with your colleagues
      </a>
      <p style="color: #e0e0e0; margin-top: 10px;">... to spread the ideas and convince your team to optimize on bias too</p>
    </div>
  </div>
</main>