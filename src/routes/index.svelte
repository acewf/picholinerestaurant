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

    return {
      props: {
        ...data,
      },
    };
  }
</script>

<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  import Fa from "svelte-fa";
  import {
    faMapMarkerAlt,
    faClock,
    faPhone,
    faEnvelope,
    faMobile,
  } from "@fortawesome/free-solid-svg-icons";

  import Link from "../components/Link.svelte";
  import Section from "../components/Section.svelte";
  import SectionTitle from "../components/SectionTitle.svelte";
  import DishesList from "../components/DishesList.svelte";
  import Promo from "../components/Promo.svelte";
  import PriceList from "../components/PriceList.svelte";

  export let homepage;
  export let contact;
  export let menu;
  export let drinksMenu;
  export let foodMenu;
  export let seaFoodDishes;
  export let meatDishes;
  export let takeAways;

  let index = 0;
  const imageLoop = 1000 * 20;

  const updateHeroBkg = () => {
    index = (index + 1) % homepage.background.length;
  };

  onMount(() => {
    setTimeout(updateHeroBkg, imageLoop);
  });
</script>

<div class="h-96 scroll-m-20" id="home">
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
    class="w-screen md:w-full relative z-10 bg-chalet-green-50/50 rounded-lg m-2 flex flex-col md:flex-row"
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
    <div id="booking-widget" class="w-full mt-6">
      <SectionTitle>Book now</SectionTitle>
      <iframe
        src={import.meta.env.VITE_BOOKING}
        class="h-[720px] md:h-[520px] w-full"
        title="booking widget"
      />
    </div>
  </Section>

  <Section>
    <div class="w-full my-6" id="menu">
      <SectionTitle>{menu.title}</SectionTitle>
      <div class="">
        <PriceList items={foodMenu} />
      </div>
      <div class="md:min-h-[260px]">
        <PriceList items={drinksMenu} />
      </div>
    </div>
  </Section>
  <Section>
    <div class="w-full my-6" id="contact">
      <SectionTitle>Contact</SectionTitle>
      <div class="text-md text-center">
        <div class="flex w-full justify-evenly flex-col md:flex-row">
          <div class="block max-w-sm m-1">
            <Fa class="inline-block mr-1" icon={faClock} />
            <span class="">{contact.openHours}</span>
          </div>
          <div class="block m-1">
            <Fa class="inline-block mr-1" icon={faMapMarkerAlt} />
            <span>{contact.address}</span>
          </div>
          <div class="block m-1">
            <Fa class="inline-block mr-1" icon={faEnvelope} />
            <span>{contact.email}</span>
          </div>
        </div>
        <div class="flex w-full justify-around">
          <div class="block m-1">
            <Fa class="inline-block mr-1" icon={faPhone} />
            <span>{contact.phone}</span>
          </div>
          <div class="block m-1">
            <Fa class="inline-block mr-1" icon={faMobile} />
            <span>{contact.mobile}</span>
          </div>
        </div>
      </div>
    </div>
  </Section>
</div>
