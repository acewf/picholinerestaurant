<script>
  export let href;
  export let variant = "primary";

  const variants = {
    primary: "rounded-3xl border-2 border-chalet-green-300 bg-chalet-green p-2",
    secondary: "rounded-3xl border-2 border-white bg-bondi-blue-600 p-2",
  };
</script>

<div class={variants[variant]}>
  <a {href} class="mx-2 text-white">
    <slot />
  </a>
</div>
