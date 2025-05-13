<script>
  export let activePage = '';
</script>

<header class="bg-black text-white py-2 fixed w-full z-10">
  <div class="container mx-auto flex justify-between items-center">
    <a href="/" class="text-xl font-bold hover:underline">No Such Thing As <span style="color: #38b6ff;">Neutral</span> <span style="color: #ff5757;">AI</span></a>
    <nav>
      <ul class="flex space-x-8">
        <li><a href="/news" class="hover:underline {activePage === 'news' ? 'font-bold' : ''}">Why Care</a></li>
        <li><a href="/theysay" class="hover:underline {activePage === 'theysay' ? 'font-bold' : ''}">What Experts Say</a></li>
        <li><a href="/your-role" class="hover:underline {activePage === 'your-role' ? 'font-bold' : ''}">Your Role</a></li>
        <li><a href="/full-paper" class="hover:underline {activePage === 'full-paper' ? 'font-bold' : ''}">Full Paper</a></li>
      </ul>
    </nav>
  </div>
</header>

<style>
  header {
    box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
  }
</style> 