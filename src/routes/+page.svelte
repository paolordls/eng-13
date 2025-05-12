<script>
  import { onMount } from 'svelte';
  
  let isVisible = false;
  
  onMount(() => {
    isVisible = true;
  });
</script>

<svelte:head>
  <title>No Such Thing as Neutral: The Hidden Stakes of Building With AI</title>
</svelte:head>

<main class="min-h-screen bg-black text-[#38b6ff] font-mono">
  <!-- Hero Section -->
  <section class="container mx-auto px-4 py-20 text-center">
    <div class="border-2 border-[#38b6ff] p-8 rounded-lg">
      <h1 class="text-4xl md:text-5xl font-bold mb-6 text-[#38b6ff]">
        $> No Such Thing as Neutral
      </h1>
      <h2 class="text-xl md:text-2xl text-[#ff5757] mb-8">
        The Hidden Stakes of Building With AI
      </h2>
      <p class="text-lg text-[#38b6ff] max-w-3xl mx-auto mb-12">
        > Exploring the ideological biases in AI systems and why developers should consider more than just performance metrics when choosing their LLM partners.
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
      <div class="border-2 border-[#38b6ff] p-8 rounded-none hover:border-[#ff5757] transition-colors">
        <h3 class="text-xl font-bold mb-4 text-[#ff5757]">$> Beyond Performance</h3>
        <p class="text-[#38b6ff]">
          Speed, cost, and accuracy are important, but they're not the whole story. Discover why ideological alignment matters in AI development.
        </p>
      </div>
      <div class="border-2 border-[#38b6ff] p-8 rounded-none hover:border-[#ff5757] transition-colors">
        <h3 class="text-xl font-bold mb-4 text-[#ff5757]">$> Hidden Biases</h3>
        <p class="text-[#38b6ff]">
          Every AI system carries the values and biases of its creators. Learn how to identify and evaluate these hidden influences.
        </p>
      </div>
      <div class="border-2 border-[#38b6ff] p-8 rounded-none hover:border-[#ff5757] transition-colors">
        <h3 class="text-xl font-bold mb-4 text-[#ff5757]">$> Informed Choices</h3>
        <p class="text-[#38b6ff]">
          Make conscious decisions about which AI systems to use based on their underlying values and principles.
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
</style>
