<script context="module">
  import { GraphQLClient } from "graphql-request";

  export async function load({ params }) {
    const graphcms = new GraphQLClient(
      "https://api-eu-central-1.graphcms.com/v2/ckawwii4809yh01yx7lzl076f/master"
    );

    const data = await graphcms.request(
      `query {
        site {
          siteMetadata {
            location
          }
        }
      }`
    );

    console.log("Data::", data);

    return {
      props: {
        data,
      },
    };
  }
</script>

<script>
  import Link from "../components/Link.svelte";
  import Section from "../components/Section.svelte";
  import SectionTitle from "../components/SectionTitle.svelte";

  const deliveries = [
    {
      url: "https://deliveroo.co.uk/menu/london/upper-holloway/picholine",
      image: "/delivery/deliveroo-vertical.png",
      alt: "Deliveroo logo",
    },
    {
      url: "https://www.ubereats.com/gb/store/picholine-restaurant/901Afku9Tc61u6-9hn1W-w",
      image: "/delivery/uber-eats2124.png",
      alt: "Uber eats logo",
    },
    {
      url: "https://www.just-eat.co.uk/restaurants-picholine-restaurant-holloway/menu",
      image: "/delivery/just-eat-vertical.png",
      alt: "Just eat logo",
    },
  ];
</script>

<div class="h-96">
  <Section>
    <div class="w-full md:w-1/2">
      <div class="">
        <div class="">
          <h5 class="text-olive/70 text-2xl m-2">Let's go eat well</h5>
          <h1 class="text-5xl m-2 text-olive  ">
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
    class="w-screen md:w-full relative z-10 shadow-xl bg-greener/10 rounded-lg -m-2 flex flex-row"
  >
    <div
      class="w-1/2 trapezoid p-4 bg-lightblue text-white capitalize flex flex-col justify-between"
    >
      especially for mums!
      <p>Treat your mum with a Picholine e-gift</p>
      <div class="flex">
        <Link href="/#">Buy Now</Link>
      </div>
    </div>
    <div>
      <h3 class="bg-no-repeat bg-contain text-3xl p-3 capitalize">
        Get delivered
      </h3>
      <div
        class="flex flex-row justify-around md:justify-start items-center p-4"
      >
        {#each deliveries as item}
          <a href={item.url} target="__blank" class="inline-block">
            <img src={item.image} alt={item.alt} width="80px" height="80px" />
          </a>
        {/each}
      </div>
    </div>
  </div>
</Section>

<div>
  <div class="mt-4">
    <Section>
      <div class="w-full md:w-1/2 relative z-10 h-96 text-lightblue">
        <SectionTitle>From the Sea</SectionTitle>
      </div>
    </Section>
  </div>

  <div class="mt-4">
    <Section>
      <div class="w-full md:w-1/2 relative z-10 h-96">
        <SectionTitle>From the Farm</SectionTitle>
      </div>
    </Section>
  </div>
</div>
