<script>
  import { onMount } from 'svelte';
  
  let isVisible = false;
  let asciiVisible = false;
  let asciiArt = '';
  
  onMount(async () => {
    isVisible = true;
    try {
      const response = await fetch('/ascii.txt');
      asciiArt = await response.text();
      setTimeout(() => {
        asciiVisible = true;
      }, 500);
    } catch (error) {
      console.error('Error loading ASCII art:', error);
    }
  });
</script>

<svelte:head>
  <title>No Such Thing as Neutral: The Hidden Stakes of Building With AI</title>
</svelte:head>

<main class="min-h-screen bg-black text-[#38b6ff] font-mono">
  <!-- Text and GitHub Link Overlapping ASCII Art -->
  <div class="container mx-auto px-4 pt-8 text-center relative">
    <div class="absolute right-0 top-0 text-right pr-4 pt-8" style="z-index: 10;">
      <a href="https://github.com/paolordls" target="_blank" class="text-[#38b6ff]">
        <h1 class="text-lg font-bold mb-1">A project</h1>
        <h1 class="text-lg font-bold">by <span class="text-[#ff5757]">paolordls</span></h1>
      </a>
    </div>
    <div class="absolute left-0 top-0 text-left pl-4 pt-8" style="z-index: 10;">
      <h1 class="text-6xl font-bold text-[#38b6ff] mb-2">No Such</h1>
      <h1 class="text-6xl font-bold text-[#38b6ff] mb-2">Thing As</h1>
      <h1 class="text-6xl font-bold text-[#ff5757]">Neutral AI.</h1>
    </div>
    <pre class="ascii-art" class:visible={asciiVisible} style="z-index: 1;">{asciiArt}</pre>
  </div>

  <!-- Hero Section -->
  <section class="container mx-auto px-4 py-20 text-center">
    <div class="border-2 border-[#38b6ff] p-8 rounded-lg">
      <h1 class="text-4xl md:text-5xl font-bold mb-6 text-[#38b6ff]">
        No Such Thing as Neutral
      </h1>
      <h2 class="text-xl md:text-2xl text-[#ff5757] mb-8">
        The Hidden Stakes of Building With AI
      </h2>
      <p class="text-lg text-[#38b6ff] max-w-3xl mx-auto mb-12">
        Ideological biases in AI systems - and why developers should consider more than just performance when choosing LLMs for their apps.
      </p>
      <div class="flex justify-center gap-4">
        <a href="#learn-more" class="bg-[#38b6ff] hover:bg-[#ff5757] text-black px-8 py-3 rounded-none transition-colors border-2 border-[#38b6ff] hover:border-[#ff5757]">
          $> Learn More
        </a>
        <a href="#get-involved" class="bg-transparent border-2 border-[#38b6ff] text-[#38b6ff] hover:bg-[#ff5757] hover:text-black px-8 py-3 rounded-none transition-colors">
          $> Get Involved
        </a>
      </div>
    </div>
  </section>

  <!-- Key Points Section -->
  <section id="learn-more" class="container mx-auto px-4 py-20">
    <div class="grid md:grid-cols-3 gap-8">
      <a href="/news" class="border-2 border-[#38b6ff] p-8 rounded-none hover:border-[#ff5757] transition-colors relative block">
        <h3 class="text-xl font-bold mb-4 text-[#ff5757]">$> Why Should You Care?</h3>
        <p class="text-[#38b6ff]">
          AI biases are real, and end-users are susceptible to them.
        </p>
        <div class="absolute right-0 top-1/2 transform -translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#38b6ff" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </a>
      <div class="border-2 border-[#38b6ff] p-8 rounded-none hover:border-[#ff5757] transition-colors relative">
        <h3 class="text-xl font-bold mb-4 text-[#ff5757]">$> What the Experts Say</h3>
        <p class="text-[#38b6ff]">
          Uncover the hidden biases in AI systems as revealed by leading research. Know what you're dealing with.
        </p>
        <div class="absolute right-0 top-1/2 transform -translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#38b6ff" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      <div class="border-2 border-[#38b6ff] p-8 rounded-none hover:border-[#ff5757] transition-colors">
        <h3 class="text-xl font-bold mb-4 text-[#ff5757]">$> Your Role as a Developer</h3>
        <p class="text-[#38b6ff]">
          As a developer, your choices shape the future. Make informed decisions that reflect your principles.
        </p>
      </div>
    </div>
  </section>

  <!-- Call to Action Section -->
  <section id="get-involved" class="container mx-auto px-4 py-20 text-center">
    <div class="max-w-3xl mx-auto border-2 border-[#38b6ff] p-8">
      <h2 class="text-2xl font-bold mb-6 text-[#ff5757]">$> Join the Conversation</h2>
      <p class="text-lg text-[#38b6ff] mb-8">
        Help shape the future of AI development by considering the ethical and ideological implications of your choices.
      </p>
      <div class="flex justify-center gap-4">
        <a href="#" class="bg-[#38b6ff] hover:bg-[#ff5757] text-black px-8 py-3 rounded-none transition-colors border-2 border-[#38b6ff] hover:border-[#ff5757]">
          $> Subscribe
        </a>
        <a href="#" class="bg-transparent border-2 border-[#38b6ff] text-[#38b6ff] hover:bg-[#ff5757] hover:text-black px-8 py-3 rounded-none transition-colors">
          $> Contribute
        </a>
      </div>
    </div>
  </section>
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  }

  :global(a) {
    text-decoration: none;
  }

  :global(a:hover) {
    text-decoration: none;
  }

  .ascii-art {
    color: #38b6ff;
    font-size: 0.8rem;
    line-height: 1.2;
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
    white-space: pre;
    overflow-x: auto;
    background: linear-gradient(90deg, #38b6ff, #ff5757, #38b6ff);
    background-size: 200% 100%;
    animation: gradient-move 16s linear infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .ascii-art.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @keyframes gradient-move {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  @media (max-width: 768px) {
    .ascii-art {
      font-size: 0.5rem;
    }
  }
</style>
