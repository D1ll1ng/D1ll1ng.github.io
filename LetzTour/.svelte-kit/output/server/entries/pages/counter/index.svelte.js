import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../immutable/chunks/index-3d9c31de.js";
import { g as getCounterData, C as Counter } from "../../../immutable/chunks/Counter-9c7ca11e.js";
import { s as session } from "../../../immutable/chunks/stores-fba00ce6.js";
import "../../../immutable/chunks/Document-1e035e83.js";
import "firebase/app";
import "firebase/firestore";
import "firebase/auth";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1jlhe5t{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}",
  map: null
};
const load = async function load2({ session: session2, fetch }) {
  return {
    props: {
      counterData: await getCounterData(fetch, session2)
    }
  };
};
const Counter_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  let { counterData } = $$props;
  if ($$props.counterData === void 0 && $$bindings.counterData && counterData !== void 0)
    $$bindings.counterData(counterData);
  $$result.css.add(css);
  $$unsubscribe_session();
  return `<section class="${"svelte-1jlhe5t"}">${$session.user && counterData ? `${validate_component(Counter, "Counter").$$render($$result, { counterData }, {}, {})}` : ``}
</section>`;
});
export { Counter_1 as default, load };
