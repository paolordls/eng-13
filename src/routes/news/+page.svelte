<script>
  import { onMount } from 'svelte';
  /** @type {{ title: string, blurb: string, image: string, expanded: boolean }[]} */
  let headlines = [];
  /** @type {{ profile_pic: string, name: string, comment: string, in_reply_to: string, hearts: number }[]} */
  let netizenReactions = [];

  onMount(async () => {
    const response = await fetch('/headlines.json');
    headlines = await response.json();
    // Initialize expanded state
    headlines = headlines.map(h => ({ ...h, expanded: false }));

    // Fetch netizen reactions
    const reactionsResponse = await fetch('/netizen_reactions.json');
    netizenReactions = await reactionsResponse.json();
  });

  /**
   * Toggle the expanded state of an article.
   * @param {number} index - The index of the article to toggle.
   */
  function toggleExpand(index) {
    headlines = headlines.map((h, i) => ({ ...h, expanded: i === index ? !h.expanded : false }));
  }
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
        <img src="https://cdn-live.foreignaffairs.com/sites/default/files/styles/_webp_large_2x/public/public-assets/images/articles/2016/05/26/heydarian_dutertephilippines_campaigning.jpg.webp?itok=v3M8uwD9" alt="Breaking News Image" class="w-full h-64 object-cover mb-4" />
        <h2 class="text-2xl font-bold mb-4 text-[#ff5757]">BREAKING NEWS: Pro-China Chatbots May Have Swayed Voters in Tight Senatorial Elections</h2>
        <p class="text-[#38b6ff]">A new report by COMELEC reveals that several election help chatbots used during the 2025 polls were powered by Chinese language models that subtly boosted Beijing-friendly candidates. These bots praised infrastructure-linked bets as 'practical nationalists,' while casting critics of China as 'destabilizers.' At least three provinces swung by narrow margins.</p>
      </div>
      <div class="grid md:grid-cols-2 gap-8">
        {#each headlines as { title, blurb, image, expanded }, i}
          <div class="article {expanded ? 'expanded' : ''} border-2 border-[#38b6ff] p-4 rounded hover:border-[#ff5757] transition-colors" on:click={() => toggleExpand(i)}>
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
      <ul class="space-y-4">
        {#each netizenReactions as { name, comment, hearts }}
          <li class="p-4 bg-[#2a2a2a] rounded-lg">
            <div class="flex-1">
              <div class="flex items-center space-x-2 mb-2">
                <p class="text-[#38b6ff] font-bold">{name}</p>
              </div>
              <p class="text-[#38b6ff] mb-2">{comment}</p>
              <div class="text-sm text-[#ff5757] flex justify-end items-center">
                <span class="flex items-center">
                  ❤️ {hearts}
                </span>
              </div>
            </div>
          </li>
        {/each}
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
    transition: max-height 2s ease; /* Apply expansion animation */
    max-height: 3em; /* Approximate height for two lines */
  }

  .article.expanded p {
    -webkit-line-clamp: unset;
    max-height: 100em; /* Expand to show full content */
  }

  .article {
    transition: transform 0.3s ease, max-height 0.3s ease; /* Smooth transition for deselection */
  }

  .article:not(.expanded) {
    transform: scale(1);
  }
</style> 