<script>
  export let items;
</script>

<div class="flex flex-col md:flex-row w-full">
  {#each items as item}
    <div
      class="w-full aspect-square overflow-hidden max-h-[240px] md:max-h-[200px] my-2 md:m-2 flex border rounded-lg shadow-md relative"
    >
      <img
        class="w-full m-auto"
        src={item.dishView[0]?.url}
        alt={item.description}
        width="80px"
        height="80px"
      />
      <span
        class="absolute bottom-0 w-full bg-chalet-green-100/80 p-1 text-white font-bold drop-shadow-sm"
      >
        <spa>{item.dishName}</spa>
        <span class="before:content-['£'] absolute right-2"
          >{item.price.toFixed(2)}</span
        >
      </span>
    </div>
  {/each}
</div>
