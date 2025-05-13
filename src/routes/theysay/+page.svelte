<script lang="ts">
  import { onMount } from 'svelte';
  import Header from '../../components/Header.svelte';

  let sections: {
    quote: string;
    source: string;
    sourceLink: string;
    analysis: string;
    asciiArt: string;
  }[] = [];

  onMount(async () => {
    sections = await Promise.all([
      {
        quote: "$> Increases in capabilities and autonomy may soon massively amplify AI's impact, with risks that include large-scale social harms, malicious uses, and an irreversible loss of human control over autonomous AI systems.",
        source: "Yoshua Bengio, 2024",
        sourceLink: "https://arxiv.org/pdf/2310.17688",
        analysis: "The question is not whether AI will affect society. It is whose words it will speak — and whose interests it will serve. As artificial intelligence grows in capability and autonomy, its influence will not remain subtle. It will shape public opinion, manipulate information, and introduce new risks at unprecedented scale. ",
        asciiArt: await fetch('/ascii1.txt').then(res => res.text())
      },
      {
        quote: "$> Imbalances in social discourse - where certain groups dominate public narratives - mean that their stereotypes and worldviews can be disseminated into training data.",
        source: "Tao et al., 2024",
        sourceLink: "https://academic.oup.com/pnasnexus/article/3/9/pgae346/7756548",
        analysis: "We might assume chatbots are neutral, when they could be subtly pushing certain ideas or perspectives. These chatbots are trained on massive datasets, but the choices made during training are invisible to us. Because we don't see what's been included or filtered out, we assume objectivity — even when these systems are quietly shaping our worldview. Biases that were once confined to smaller systems are now amplified across massive models.",
        asciiArt: await fetch('/ascii2.txt').then(res => res.text())
      },
      {
        quote: "$> AI models do not just process information — they absorb the biases, stereotypes, and ideological leanings embedded in their training data.",
        source: "Bolukbasi et al., 2016",
        sourceLink: "https://arxiv.org/abs/1607.06520",
        analysis: "LLMs absorb the stereotypes, misinformation, and cultural assumptions of their training data. Training an LLM is like raising a child… it soaks up everything — both knowledge and societal biases — without filtering.",
        asciiArt: await fetch('/ascii3.txt').then(res => res.text())
      },
      {
        quote: "$> China's AI policy requires developers to train their AI models to 'uphold Core Socialist Values.'",
        source: "China Law Translate, 2023",
        sourceLink: "https://www.chinalawtranslate.com/en/comparison-chart-of-current-vs-draft-rules-for-generative-ai/",
        analysis: "AI models like DeepSeek have been trained to 'uphold Core Socialist Values.' This is a clear example of ideological bias in AI. We find that it is not only researchers who have influence over the training data, but also governments.",
        asciiArt: await fetch('/ascii4.txt').then(res => res.text())
      },
      {
        quote: "$> There are dramatics on both sides.",
        source: "Reid Hoffman, 2024",
        sourceLink: "https://www.vanityfair.com/news/story/reid-hoffman-ai-revolution",
        analysis: "Reid Hoffman, founder of LinkedIn, argues these systems mostly reflect the broader societal biases we already have. He is cautious about overregulation - his concern is that if we clamp down too hard, we might end up slowing the very innovation we need to make AI safer and more useful.",
        asciiArt: await fetch('/ascii5.txt').then(res => res.text())
      },
      {
        quote: "$> As LLMs become central to how people access and interpret information, they risk consolidating immense political power in the hands of a few unaccountable entities.",
        source: "Steven Feldstein, 2023",
        sourceLink: "https://doi.org/10.1080/00396338.2023.2261260",
        analysis: "On the other hand, Feldstein highlights the danger that LLMs do not just provide information; they arbitrate it, functioning as a new kind of knowledge engine - one with immense power over public perception.",
        asciiArt: await fetch('/ascii6.txt').then(res => res.text())
      },
    ]);
  });
</script>

<Header activePage="theysay" />

<div class="video-container" style="display: flex; flex-direction: column; justify-content: center; align-items: center; background-color: black; padding-top: 60px;">
  <p style="text-align: center; color: #38b6ff; margin-bottom: 10px;" class="bold">Listen in to a conversation among undergraduate AI and HCI researchers at PCSC 2025 about the most pressing issues about the (mis)use of AI in elections.</p>
  <iframe width="960" height="540" src="https://www.youtube.com/embed/T0KF7vtsx-4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

  <p style="text-align: center; color: #38b6ff; margin-bottom: 10px;"><br><br>↓</p>
</div>

<div class="pt-10" style="background-color: black;">
  <main>
    {#each sections as { quote, source, sourceLink, analysis, asciiArt }, index (index)}
      <div class="section">
        <div class="quote">
          <blockquote>{quote}</blockquote>
          <cite>- <a href={sourceLink} target="_blank" rel="noopener noreferrer">{source}</a></cite>
          <p>{analysis}</p>
        </div>
        <div class="ascii-art">
          <pre>{asciiArt}</pre>
        </div>
      </div>
    {/each}
  </main>
</div>

<div class="ending-section" style="text-align: center; background-color: black; color: #38b6ff; padding: 50px 20px;">
  <h2 style="font-size: 2.5em; color: #ff5757; margin-bottom: 30px;">The Hidden Influence of AI</h2>
  <p style="font-size: 1.3em; max-width: 800px; margin: 0 auto; line-height: 1.6;">
    AI companies, sometimes under pressure from states, curate datasets, filter content, and decide what gets included or excluded - often behind closed doors. 
    This lack of transparency means that when an LLM delivers politically charged responses, users have no way of knowing whether those answers are the result of unbiased knowledge or deliberate influence.
  </p>
  <div style="margin-top: 30px;">
    <a href="/your-role" class="cta-button" style="display: inline-block; padding: 10px 20px; background-color: #ff5757; color: white; text-decoration: none; border-radius: 5px; font-weight: bold; transition: background-color 0.3s ease;">
      Explore Your Role
    </a>
  </div>
</div>

<style>
  main {
    min-height: 100vh;
    background-color: black;
    color: #38b6ff;
    font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
    padding: 20px;
    margin: 0px 50px;
  }
  .section {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 50px 0;
    padding: 20px 0;
  }
  .section:nth-child(even) {
    flex-direction: row-reverse;
  }
  .quote {
    width: 60%;
    text-align: left;
    margin-bottom: 20px;
  }
  .ascii-art {
    width: 40%;
    font-family: monospace;
    white-space: pre;
    color: transparent;
    background: linear-gradient(to bottom, #ff5757, #000000);
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
  blockquote {
    font-size: 1.5em;
    font-weight: bold;
    margin: 0 0 10px;
    color: #ff5757;
  }
  cite {
    display: block;
    font-size: 1em;
    color: #ff5757;
    margin-bottom: 10px;
  }
  p {
    font-size: 1.1em;
    color: #38b6ff;
    max-width: 800px;
    margin: 0 auto;
  }
  header {
    box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
  }
  .bold {
    font-weight: bold;
  }
  a {
    text-decoration: underline;
  }
</style> 