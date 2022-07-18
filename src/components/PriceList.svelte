<script>
  import {
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
  } from "@rgossiaux/svelte-headlessui";

  export let items = [];
</script>

<TabGroup>
  <TabList
    class="flex p-1 space-x-1 bg-chalet-green-100/20 rounded-xl justify-center"
  >
    {#each items as item}
      <Tab
        class="w-full max-w-[220px] py-2.5 text-sm leading-5 font-medium rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 bg-white shadow"
        >{item.name}</Tab
      >
    {/each}
  </TabList>
  <TabPanels>
    {#each items as item}
      <TabPanel class="flex flex-row flex-wrap">
        {#each item.foodInfo as dish}
          <div
            class="w-full md:w-1/2 relative p-2 flex even:bg-chalet-green-400/20 md:even:bg-transparent"
          >
            <span class="block w-1/2 md:w-full">{dish.dishName}</span>
            <span
              class="before:content-['£'] w-1/2 text-right md:absolute right-2"
              >{dish.price?.toFixed(2)}</span
            >
          </div>
        {/each}
      </TabPanel>
    {/each}
  </TabPanels>
</TabGroup>
