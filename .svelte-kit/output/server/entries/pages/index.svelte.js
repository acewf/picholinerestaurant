import { c as create_ssr_component, v as validate_component, e as escape, b as each, a as add_attribute } from "../../chunks/index-59524ad9.js";
import { GraphQLClient } from "graphql-request";
import { L as Link } from "../../chunks/Link-a239e066.js";
var gql = 'query {\n  homepage(where: {id: "ckb57lco01zns0199gz2zdtx3"}) {\n    title\n  }\n\n  about(where: {id: "ckawz74kw263101507au1tnm1"}) {\n    description {\n        html\n    }\n    imageDescription {\n      url\n    }\n    phone\n    email\n    mobile\n    address\n    openHours\n  }\n  menu(where: {id: "ckayfrgt42xa00150mejscmj3"}) {\n    title\n    description\n    typesList {\n      name\n      id\n      foodInfo {\n        dishName\n        dishView {\n          url\n          id\n        }\n        price\n        id\n        description\n      }\n    }\n  }\n  takeAways {\n    image {\n      url\n      width\n    }\n    url\n    alt\n  }\n}\n';
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"block w-full h-full"}"><div class="${"flex flex-row items-center h-full w-full relative"}">${slots.default ? slots.default({}) : ``}</div></section>`;
});
const SectionTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 class="${"bg-no-repeat bg-contain text-5xl p-3 drop-shadow-lg"}">${slots.default ? slots.default({}) : ``}</h2>`;
});
async function load({ params }) {
  console.log("params", params);
  console.log("https://api-eu-central-1.graphcms.com/v2/ckawwii4809yh01yx7lzl076f/master");
  const graphcms = new GraphQLClient("https://api-eu-central-1.graphcms.com/v2/ckawwii4809yh01yx7lzl076f/master", { authorization: `Bearer ${params.token}` });
  const data = await graphcms.request(gql);
  return { props: { ...data } };
}
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { homepage } = $$props;
  let { about } = $$props;
  let { menu } = $$props;
  let { takeAways } = $$props;
  console.log(takeAways);
  if ($$props.homepage === void 0 && $$bindings.homepage && homepage !== void 0)
    $$bindings.homepage(homepage);
  if ($$props.about === void 0 && $$bindings.about && about !== void 0)
    $$bindings.about(about);
  if ($$props.menu === void 0 && $$bindings.menu && menu !== void 0)
    $$bindings.menu(menu);
  if ($$props.takeAways === void 0 && $$bindings.takeAways && takeAways !== void 0)
    $$bindings.takeAways(takeAways);
  return `<div class="${"h-96"}">${validate_component(Section, "Section").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"w-full md:w-1/2"}"><div class="${""}"><div class="${""}"><h5 class="${"text-olive/70 text-2xl m-2"}">${escape(homepage.title)}</h5>
          <h1 class="${"text-5xl m-2 text-olive "}">Deliciousness jumping into the mouth
          </h1>
          <p class="${"m-2 w-2/3"}">Take your tastebuds on a Mediterranean fling no matter what the time
            of year.
          </p>
          <div class="${"m-2 my-5 flex md:opacity-0"}">${validate_component(Link, "Link").$$render($$result, { href: "/#" }, {}, {
        default: () => {
          return `Book now`;
        }
      })}</div></div></div></div>`;
    }
  })}</div>

${validate_component(Section, "Section").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"w-screen md:w-full relative z-10 shadow-xl bg-greener/10 rounded-lg -m-2 flex flex-row"}"><div class="${"w-1/2 trapezoid p-4 bg-lightblue text-white capitalize flex flex-col justify-between"}">especially for mums!
      <p>Treat your mum with a Picholine e-gift</p>
      <div class="${"flex"}">${validate_component(Link, "Link").$$render($$result, { href: "/#" }, {}, {
        default: () => {
          return `Buy Now`;
        }
      })}</div></div>
    <div><h3 class="${"bg-no-repeat bg-contain text-3xl p-3 capitalize"}">Get delivered
      </h3>
      <div class="${"flex flex-row justify-around md:justify-start items-center p-4"}">${each(takeAways, (item) => {
        return `<a${add_attribute("href", item.url, 0)} target="${"__blank"}" class="${"inline-block"}"><img${add_attribute("src", item.image.url, 0)}${add_attribute("alt", item.alt, 0)} width="${"80px"}" height="${"80px"}">
          </a>`;
      })}</div></div></div>`;
    }
  })}

<div><div class="${"mt-4"}">${validate_component(Section, "Section").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"w-full md:w-1/2 relative z-10 h-96 text-lightblue"}">${validate_component(SectionTitle, "SectionTitle").$$render($$result, {}, {}, {
        default: () => {
          return `From the Sea`;
        }
      })}</div>`;
    }
  })}</div>

  <div class="${"mt-4"}">${validate_component(Section, "Section").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"w-full md:w-1/2 relative z-10 h-96"}">${validate_component(SectionTitle, "SectionTitle").$$render($$result, {}, {}, {
        default: () => {
          return `From the Farm`;
        }
      })}</div>`;
    }
  })}</div></div>`;
});
export { Routes as default, load };
