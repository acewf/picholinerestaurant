<script>
  export let href;
</script>

<div class="rounded-3xl border-2 border-olive/40 bg-olive p-2 text-white">
  <a {href} class="mx-2">
    <slot />
  </a>
</div>
