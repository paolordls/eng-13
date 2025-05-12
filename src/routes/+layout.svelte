<script>
  import './app.css';
  const { children } = $props();
</script>

<slot />

<style>
  header {
    box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
  }
</style>
