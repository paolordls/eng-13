<script lang="ts">
  import { onMount } from 'svelte';

  let sections: {
    quote: string;
    source: string;
    analysis: string;
    asciiArt: string;
  }[] = [];

  onMount(async () => {
    sections = await Promise.all([
      {
        quote: "Increases in capabilities and autonomy may soon massively amplify AI's impact, with risks that include large-scale social harms, malicious uses, and an irreversible loss of human control over autonomous AI systems.",
        source: "Yoshua Bengio, 2024",
        analysis: "The question is not whether AI will affect society. It is whose words it will speak — and whose interests it will serve. As artificial intelligence grows in capability and autonomy, its influence will not remain subtle. It will shape public opinion, manipulate information, and introduce new risks at unprecedented scale. ",
        asciiArt: await fetch('/ascii1.txt').then(res => res.text())
      },
      {
        quote: "We might assume chatbots are neutral, when they could be subtly pushing certain ideas or perspectives.",
        source: "",
        analysis: "These chatbots are trained on massive datasets, but the choices made during training are invisible to us. Because we don't see what's been included or filtered out, we assume objectivity — even when these systems are quietly shaping our worldview. Biases that were once confined to smaller systems are now amplified across massive models.",
        asciiArt: await fetch('/ascii2.txt').then(res => res.text())
      },
      {
        quote: "AI models do not just process information — they absorb the biases, stereotypes, and ideological leanings embedded in their training data.",
        source: "Bolukbasi et al., 2016",
        analysis: "LLMs absorb the stereotypes, misinformation, and cultural assumptions of their training data. Training an LLM is like raising a child… it soaks up everything — both knowledge and societal biases — without filtering.",
        asciiArt: await fetch('/ascii3.txt').then(res => res.text())
      },
      {
        quote: "China's AI policy requires developers to train their AI models to 'uphold Core Socialist Values.'",
        source: "China Law Translate, 2023",
        analysis: "AI models like DeepSeek have been trained to 'uphold Core Socialist Values.' This is a clear example of ideological bias in AI.",
        asciiArt: await fetch('/ascii4.txt').then(res => res.text())
      },
      {
        quote: "There are dramatics on both sides.",
        source: "Reid Hoffman, 2024",
        analysis: "He argues these systems mostly reflect the broader societal biases we already have. He is cautious about overregulation - his concern is that if we clamp down too hard, we might end up slowing the very innovation we need to make AI safer and more useful.",
        asciiArt: await fetch('/ascii5.txt').then(res => res.text())
      },
      {
        quote: "As LLMs become central to how people access and interpret information, they risk consolidating immense political power in the hands of a few unaccountable entities.",
        source: "Steven Feldstein, 2023",
        analysis: "We explored how AI companies, sometimes under pressure from states, curate datasets, filter content, and decide what gets included or excluded - often behind closed doors. This lack of transparency means that when an LLM delivers politically charged responses, users have no way of knowing whether those answers are the result of unbiased knowledge or deliberate influence. Feldstein highlights this danger. LLMs do not just provide information; they arbitrate it, functioning as a new kind of knowledge engine - one with immense power over public perception.",
        asciiArt: await fetch('/ascii6.txt').then(res => res.text())
      }
    ]);
  });
</script>

<header class="bg-black text-white py-2 fixed w-full z-10">
  <div class="container mx-auto flex justify-between items-center">
    <a href="/" class="text-xl font-bold hover:underline">No Such Thing As Neutral AI</a>
    <nav>
      <ul class="flex space-x-8">
        <li><a href="/news" class="hover:underline">Why Care</a></li>
        <li><a href="#" class="hover:underline font-bold">What Experts Say</a></li>
        <li><a href="#" class="hover:underline">Your Role</a></li>
      </ul>
    </nav>
  </div>
</header>

<div class="pt-10">
  <main>
    {#each sections as { quote, source, analysis, asciiArt }}
      <div class="section">
        <div class="quote">
          <blockquote>{quote}</blockquote>
          <cite>- {source}</cite>
          <p>{analysis}</p>
        </div>
        <div class="ascii-art">
          <pre>{asciiArt}</pre>
        </div>
      </div>
    {/each}
  </main>
</div>

<style>
  main {
    min-height: 100vh;
    background-color: black;
    color: #38b6ff;
    font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
    padding: 20px;
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
    color: #ff5757;
    margin-top: 20px;
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
</style> 