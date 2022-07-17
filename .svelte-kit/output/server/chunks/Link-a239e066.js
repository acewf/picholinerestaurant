import { c as create_ssr_component, a as add_attribute } from "./index-59524ad9.js";
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<div class="${"rounded-3xl border-2 border-olive/40 bg-olive p-2 text-white"}"><a${add_attribute("href", href, 0)} class="${"mx-2"}">${slots.default ? slots.default({}) : ``}</a></div>`;
});
export { Link as L };
