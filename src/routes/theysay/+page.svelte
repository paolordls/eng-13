<script lang="ts">
  import { onMount } from 'svelte';
  import { readFileSync } from 'fs';
  import { join } from 'path';

  let sections: {
    quote: string;
    source: string;
    analysis: string;
    asciiArt: string;
  }[] = [];

  onMount(() => {
    sections = [
      {
        quote: "Quote 1",
        source: "Source 1",
        analysis: "Analysis 1",
        asciiArt: readFileSync(join('static', 'ascii1.txt'), 'utf-8')
      },
      {
        quote: "Quote 2",
        source: "Source 2",
        analysis: "Analysis 2",
        asciiArt: readFileSync(join('static', 'ascii2.txt'), 'utf-8')
      },
      {
        quote: "Quote 3",
        source: "Source 3",
        analysis: "Analysis 3",
        asciiArt: readFileSync(join('static', 'ascii3.txt'), 'utf-8')
      },
      {
        quote: "Quote 4",
        source: "Source 4",
        analysis: "Analysis 4",
        asciiArt: readFileSync(join('static', 'ascii4.txt'), 'utf-8')
      },
      {
        quote: "Quote 5",
        source: "Source 5",
        analysis: "Analysis 5",
        asciiArt: readFileSync(join('static', 'ascii5.txt'), 'utf-8')
      }
    ];
  });
</script>

<style>
  .section {
    display: flex;
    justify-content: space-between;
    margin: 50px 0;
  }
  .quote {
    width: 60%;
  }
  .ascii-art {
    width: 35%;
    font-family: monospace;
    white-space: pre;
  }
</style>

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