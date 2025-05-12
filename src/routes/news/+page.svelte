<script>
  import { onMount } from 'svelte';
  /** @type {{ title: string, blurb: string, image: string }[]} */
  let headlines = [];

  onMount(async () => {
    const response = await fetch('/headlines.json');
    headlines = await response.json();
    // Remove the featured article from the list
    headlines = headlines.filter(h => h.title !== 'Voter Info Chatbots Powered by Chinese AI Tilt Philippine Elections');
  });
</script>

<svelte:head>
  <title>Developer News</title>
</svelte:head>

<header class="bg-[#38b6ff] text-black py-4">
  <div class="container mx-auto flex justify-between items-center">
    <h1 class="text-3xl font-bold">Developer News</h1>
    <nav>
      <ul class="flex space-x-4">
        <li><a href="#" class="hover:underline">Home</a></li>
        <li><a href="#" class="hover:underline">Technology</a></li>
        <li><a href="#" class="hover:underline">Business</a></li>
      </ul>
    </nav>
  </div>
</header>

<main class="min-h-screen bg-black text-[#38b6ff] font-mono">
  <section class="ticker bg-[#ff5757] text-black py-2">
    <div class="container mx-auto overflow-hidden">
      <div class="ticker-content whitespace-nowrap animate-marquee">
        {#each headlines as { title }, i}
          <span class="mx-4">{title}</span>
        {/each}
      </div>
    </div>
  </section>
  <section class="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="md:col-span-2">
      <div class="featured-article bg-[#1a1a1a] p-6 mb-8">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShVDvofx_SRSzNNEHf0XF6gJTypDFpxR9HUQ&s" alt="Breaking News Image" class="w-full h-64 object-cover mb-4" />
        <h2 class="text-2xl font-bold mb-4 text-[#ff5757]">BREAKING NEWS: Voter Info Chatbots Powered by Chinese AI Tilt Philippine Elections</h2>
        <p class="text-[#38b6ff]">Investigations reveal that over a dozen popular election help chatbots were fine-tuned on Chinese LLMs with pro-CCP leanings. These bots subtly praised populist candidates with ties to infrastructure deals with China - framing them as "practical nationalists" - while portraying opposition leaders as "destabilizers." The candidates won by narrow margins in three provinces.</p>
      </div>
      <div class="grid md:grid-cols-2 gap-8">
        {#each headlines as { title, blurb, image }, i}
          <div class="article border-2 border-[#38b6ff] p-4 rounded hover:border-[#ff5757] transition-colors">
            <img src={image} alt={title} class="w-full h-48 object-cover mb-4" />
            <h3 class="text-xl font-bold mb-2 text-[#ff5757]">$> {title}</h3>
            <p class="text-[#38b6ff]">
              {blurb}
            </p>
          </div>
        {/each}
      </div>
    </div>
    <aside class="bg-[#1a1a1a] p-6">
      <h2 class="text-xl font-bold mb-4 text-[#ff5757]">Netizen Reactions</h2>
      <ul class="space-y-2">
        <li><a href="#" class="hover:underline">"These chatbots are just propaganda machines!" - @user1</a></li>
        <li><a href="#" class="hover:underline">"Why is our culture being dismissed by AI?" - @user2</a></li>
        <li><a href="#" class="hover:underline">"Is this AI or just a copy-paste from the US?" - @user3</a></li>
        <li><a href="#" class="hover:underline">"Stop telling us how to raise our kids!" - @user4</a></li>
        <li><a href="#" class="hover:underline">"This app is spreading hate, not education!" - @user5</a></li>
        <li><a href="#" class="hover:underline">"Why can't it say West Philippine Sea?" - @user6</a></li>
        <li><a href="#" class="hover:underline">"Local banks are better than this biased advice!" - @user7</a></li>
      </ul>
    </aside>
  </section>
</main>

<footer class="bg-[#38b6ff] text-black py-4">
  <div class="container mx-auto text-center">
    <p>&copy; 2023 Developer News. All rights reserved.</p>
    <div class="flex justify-center space-x-4 mt-2">
      <a href="#" class="hover:underline">Contact</a>
      <a href="#" class="hover:underline">Privacy Policy</a>
      <a href="#" class="hover:underline">Terms of Service</a>
    </div>
  </div>
</footer>

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

  .ticker {
    position: relative;
    overflow: hidden;
    white-space: nowrap;
  }

  .ticker-content {
    display: inline-block;
    padding-left: 100%;
    animation: marquee 60s linear infinite; /* Slowed down the ticker further */
  }

  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }

  .featured-article {
    background-image: url('https://via.placeholder.com/800x400');
    background-size: cover;
    background-position: center;
    color: white;
  }

  .article p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    transition: max-height 2s ease; /* Slow expansion and de-expansion */
    max-height: 3em; /* Approximate height for two lines */
  }

  .article:hover p {
    -webkit-line-clamp: unset;
    max-height: 100em; /* Expand to show full content */
  }
</style> 