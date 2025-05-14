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
        <h2 class="text-lg font-bold mb-1">A project</h2>
        <h2 class="text-lg font-bold">by <span class="text-[#ff5757]">paolordls</span></h2>
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
        No Such Thing as Neutral AI
      </h1>
      <h2 class="text-xl md:text-2xl text-[#ff5757] mb-8">
        The Hidden Stakes of Building With AI
      </h2>
      <p class="text-lg text-[#38b6ff] max-w-3xl mx-auto mb-12">
        Ideological biases in AI systems - and why developers should consider more than just performance when choosing LLMs for their apps.
      </p>
      <div class="flex justify-center gap-4">
        <a href="/news" class="bg-[#38b6ff] hover:bg-[#ff5757] text-black px-8 py-3 rounded-none transition-colors border-2 border-[#38b6ff] hover:border-[#ff5757]">
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
      <a href="/theysay" class="border-2 border-[#38b6ff] p-8 rounded-none hover:border-[#ff5757] transition-colors relative block">
        <h3 class="text-xl font-bold mb-4 text-[#ff5757]">$> What the Experts Say</h3>
        <p class="text-[#38b6ff]">
          Uncover the hidden biases in AI systems as revealed by leading research. Know what you're dealing with.
        </p>
        <div class="absolute right-0 top-1/2 transform -translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#38b6ff" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </a>
      <a href="/your-role" class="border-2 border-[#38b6ff] p-8 rounded-none hover:border-[#ff5757] transition-colors relative block">
        <h3 class="text-xl font-bold mb-4 text-[#ff5757]">$> Your Role as a Developer</h3>
        <p class="text-[#38b6ff]">
          As a developer, your choices shape the future. Make informed decisions that reflect your principles.
        </p>
        <div class="absolute right-0 top-1/2 transform -translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#38b6ff" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </a>
    </div>
  </section>

  <section id="get-involved" class="container mx-auto px-4 py-20">
    <div class="grid md:grid-cols-2 gap-8">
      <a href="/full-paper" class="border-2 border-[#38b6ff] p-8 rounded-none hover:border-[#ff5757] transition-colors">
        <h3 class="text-xl font-bold mb-4 text-[#ff5757]">$> Read the Full Whitepaper</h3>
        <p class="text-[#38b6ff]">
          Dive deep into the comprehensive analysis of AI biases and their implications.
        </p>
        <div class="absolute right-0 top-1/2 transform -translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#38b6ff" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </a>
      <a href="mailto:?subject=Interesting%20Blog%20on%20AI%20Bias&body=Hey%20team,%0D%0A%0D%0AI%20came%20across%20this%20interesting%20blog%20about%20bias%20in%20AI.%20Tl;dr:%20optimize%20not%20only%20on%20capability%20but%20also%20on%20bias.%20Check%20it%20out:%20[link]" class="border-2 border-[#38b6ff] p-8 rounded-none hover:border-[#ff5757] transition-colors">
        <h3 class="text-xl font-bold mb-4 text-[#ff5757]">$> Share to Your Colleagues</h3>
        <p class="text-[#38b6ff]">
          Spread the word about the importance of considering biases in AI development.
        </p>
        <div class="absolute right-0 top-1/2 transform -translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#38b6ff" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </a>
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
