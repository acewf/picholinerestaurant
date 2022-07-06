<script>
  import "../app.css";
  import Link from "../components/Link.svelte";
</script>

<div class="sticky top-0 bg-white shadow-xl p-3 text-black/80 z-20">
  <nav
    class="p-2 w-full max-w-7xl flex mx-auto flex-col md:flex-row justify-between items-center text-lg capitalize"
  >
    <a class="h-11 w-11 overflow-hidden" href="index.html">
      <img class="h-full" src="/logo.jpg" alt="logo" />
    </a>

    <div class="flex flex-row w-full max-w-md justify-around">
      <a class="mx-2" href="/">Home</a>
      <a class="mx-2" href="/#menu">Menu</a>
      <a class="mx-2" href="/#contact">Contact</a>
    </div>
    <div class="hidden md:block">
      <Link href="/#">Book now</Link>
    </div>
  </nav>
</div>
<div class="relative">
  <span
    class="bg-[url('/olive-branch.jpg')] w-[100px] h-[300px] md:w-[220px] md:h-[600px] bg-no-repeat bg-contain absolute top-[150px] grayscale -right-10 opacity-40"
  />
  <span
    class="bg-[url('/olive-tree.png')] w-[200px] h-[150px] md:w-[400px] md:h-[300px] bg-no-repeat bg-contain absolute bottom-0 opacity-10 -scale-x-100"
  />
  <div class="w-full h-full relative z-10">
    <div class="max-w-7xl mx-auto p-2 w-full text-olive">
      <div class="relative">
        <slot />
      </div>
    </div>
  </div>
</div>
