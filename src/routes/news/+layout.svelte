<script>
  import Header from '../../components/Header.svelte';
</script>

<Header activePage="news" />

<div class="pt-10"> <!-- Add padding to prevent content from being blocked by the header -->
  <slot /> <!-- This will render the page content below the header -->
</div>

<style>
  header {
    box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
  }
</style> 