<header class="bg-black text-white py-2 fixed w-full z-10">
  <div class="container mx-auto flex justify-between items-center">
    <a href="/" class="text-xl font-bold hover:underline">No Such Thing As Neutral AI</a>
    <nav>
      <ul class="flex space-x-8">
        <li><a href="#" class="hover:underline font-bold">Why Care</a></li>
        <li><a href="#" class="hover:underline">What Experts Say</a></li>
        <li><a href="#" class="hover:underline">Your Role</a></li>
      </ul>
    </nav>
  </div>
</header>

<div class="pt-10"> <!-- Add padding to prevent content from being blocked by the header -->
  <slot /> <!-- This will render the page content below the header -->
</div>

<style>
  header {
    box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
  }
</style> 