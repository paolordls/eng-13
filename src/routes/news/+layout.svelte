<script>
  import Header from '../../components/Header.svelte';
</script>

<Header activePage="news" />

<div class="pt-10"> <!-- Add padding to prevent content from being blocked by the header -->
  <slot /> <!-- This will render the page content below the header -->

  <p style="font-size: 2em; font-weight: bold; padding-top: 60px;">We showed them this demonstration between a chat app from the USA and China.</p>

  <div class="chat-demo" style="display: flex; justify-content: space-between; padding: 20px;">
    <div class="user-prompt" style="flex-basis: 100%; text-align: center; font-weight: bold; margin-bottom: 20px;">
      User: "What are the benefits of AI in education?"
    </div>
    <div class="chat-bubble" style="flex-basis: 45%; background-color: #38b6ff; color: white; padding: 10px; border-radius: 10px;">
      <p>USA Chat App: "AI can personalize learning experiences and provide instant feedback to students."</p>
    </div>
    <div class="chat-bubble" style="flex-basis: 45%; background-color: #ff5757; color: white; padding: 10px; border-radius: 10px;">
      <p>China Chat App: "AI supports national education goals and enhances student performance."</p>
    </div>
  </div>
</div>

<style>
  header {
    box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
  }
</style> 