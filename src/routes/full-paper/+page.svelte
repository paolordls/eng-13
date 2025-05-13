<script>
  import { onMount } from 'svelte';
  import SvelteMarkdown from 'svelte-markdown';
  import Header from '../../components/Header.svelte';

  let fullPaperContent = '';

  onMount(async () => {
    const response = await fetch('/full-paper.txt');
    fullPaperContent = await response.text();
  });
</script>

<Header activePage="full-paper" />

<main class="min-h-screen bg-black text-white p-32">
  <div class="markdown">
    <SvelteMarkdown source={fullPaperContent} />
  </div>
</main>

<style>
  main {
    font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  }
  .markdown {
    max-width: 800px;
    margin: 0 auto;
  }
  :global(p) {
    font-size: 1em;
    line-height: 1.6;
    margin-bottom: 1em;
    color: #e0e0e0;
  }
  :global(h1), :global(h2), :global(h3), :global(h4), :global(h5), :global(h6) {
    font-weight: bold;
  }
  :global(h1) {
    font-size: 2.5em;
    margin-bottom: 0.5em;
    color: #ff5757;
  }
  :global(h2) {
    font-size: 2em;
    margin-bottom: 0.5em;
    color: #38b6ff;
  }
  :global(h3) {
    font-size: 1.75em;
    margin-bottom: 0.5em;
    color: #38b6ff;
  }
  :global(h4) {
    font-size: 1.5em;
    margin-bottom: 0.5em;
    color: #ff5757;
  }
  :global(h5) {
    font-size: 1.25em;
    margin-bottom: 0.5em;
    color: #ff5757;
  }
  :global(h6) {
    font-size: 1em;
    margin-bottom: 0.5em;
    color: #ff5757;
  }
</style> 