<script context="module">
  import { GraphQLClient } from "graphql-request";
  import gql from "./index.gql?raw";

  export async function load({ params }) {
    console.log("params", params);

    const requestHeaders = {
      authorization: `Bearer ${import.meta.env.VITE_CMS_TOKEN}`,
    };

    const graphcms = new GraphQLClient(import.meta.env.VITE_GRAPH_ENDPOINT);

    const data = await graphcms.request(gql, {}, requestHeaders);

    //console.log("Data", data);

    return {
      props: {
        ...data,
      },
    };
  }
</script>

<script>
  import Link from "../components/Link.svelte";
  import Section from "../components/Section.svelte";
  import SectionTitle from "../components/SectionTitle.svelte";
  import DishesList from "../components/DishesList.svelte";
  import Promo from "../components/Promo.svelte";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  import {
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
  } from "@rgossiaux/svelte-headlessui";

  export let homepage;
  export let about;
  export let menu;
  export let seaFoodDishes;
  export let meatDishes;
  export let takeAways;

  let index = 0;
  const imageLoop = 1000 * 20;

  console.log(menu.typesList[0].foodInfo);

  const updateHeroBkg = () => {
    index = (index + 1) % homepage.background.length;
  };

  let selectedCategory = menu.typesList[0];

  onMount(() => {
    setTimeout(updateHeroBkg, imageLoop);
  });
</script>

<div class="h-96">
  <Section>
    {#each [homepage.background[index]] as heroBkg (index)}
      <span class="absolute -z-10 hidden md:block">
        <img
          transition:fade
          class="object-center object-cover w-full h-full"
          src={heroBkg.url}
          alt="a"
          width="1260px"
          height="320px"
          on:load={() => setTimeout(updateHeroBkg, imageLoop)}
        />
      </span>
    {/each}
    <div class="w-full md:bg-white/60 h-full flex items-end">
      <div class="">
        <div class="drop-shadow-md">
          <h5 class="text-chalet-green-300 text-2xl m-2">{homepage.title}</h5>
          <h1 class="text-5xl m-2 text-chalet-green">
            Deliciousness jumping into the mouth
          </h1>
          <p class="m-2 w-2/3">
            Take your tastebuds on a Mediterranean fling no matter what the time
            of year.
          </p>
          <div class="m-2 my-5 flex md:opacity-0">
            <Link href="/#">Book now</Link>
          </div>
        </div>
      </div>
    </div>
  </Section>
</div>

<Section>
  <div
    class="w-screen md:w-full relative z-10 shadow-xl bg-chalet-green-50/50 rounded-lg m-2 flex flex-col md:flex-row"
  >
    <Promo />
    <div class="">
      <h3 class="bg-no-repeat bg-contain text-3xl p-3 capitalize">
        Get delivered
      </h3>
      <div
        class="flex flex-row justify-around md:justify-start items-center p-4"
      >
        {#each takeAways as item}
          <a href={item.url} target="__blank" class="inline-block">
            <img
              src={item.image.url}
              alt={item.alt}
              width="80px"
              height="80px"
            />
          </a>
        {/each}
      </div>
    </div>
  </div>
</Section>

<div class="">
  <div class="mt-6">
    <Section>
      <div class="w-full relative z-10">
        <SectionTitle>From the Sea</SectionTitle>
        <DishesList items={seaFoodDishes} />
      </div>
    </Section>
  </div>

  <div class="mt-6">
    <Section>
      <div class="w-full relative z-10">
        <SectionTitle>From the Farm</SectionTitle>
        <DishesList items={meatDishes} />
      </div>
    </Section>
  </div>
  <Section>
    <div id="booking-widget" class="w-full my-6">
      <SectionTitle>Book now</SectionTitle>
      <iframe
        src={import.meta.env.VITE_BOOKING}
        class="h-[760px] md:h-[520px] w-full"
        title="booking widget"
      />
    </div>
  </Section>

  <Section>
    <div class="w-full my-6">
      <SectionTitle>{menu.title}</SectionTitle>
      <TabGroup>
        <TabList class="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
          {#each menu.typesList as item}
            <Tab
              class="w-full max-w-[220px] py-2.5 text-sm leading-5 font-medium rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 bg-white shadow"
              >{item.name}</Tab
            >
          {/each}
        </TabList>
        <TabPanels>
          {#each menu.typesList as item}
            <TabPanel>
              {#each item.foodInfo as dish}
                <div class="w-1/2 relative p-2 inline-block">
                  <span>{dish.dishName}</span>
                  <span class="before:content-['£'] absolute right-2"
                    >{dish.price?.toFixed(2)}</span
                  >
                </div>
              {/each}
            </TabPanel>
          {/each}
        </TabPanels>
      </TabGroup>
    </div>
  </Section>
</div>
