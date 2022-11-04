import { c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component } from "../../immutable/chunks/index-3d9c31de.js";
import "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { p as protectedPages } from "../../immutable/chunks/constants-136cf0bc.js";
import { p as page, s as session } from "../../immutable/chunks/stores-fba00ce6.js";
var logo = "/_app/immutable/assets/logo-d29faeff.png";
var Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "header.svelte-vutf9p.svelte-vutf9p{--background:rgba(255, 255, 255, 1);background:var(--background);font-family:'Poppins', sans-serif}.container-header.svelte-vutf9p.svelte-vutf9p{display:flex;justify-content:space-between;max-width:1200px;margin:0 auto}.corner.svelte-vutf9p.svelte-vutf9p{width:4em;height:3.5em;margin:1em}.corner.svelte-vutf9p a.svelte-vutf9p{display:flex;align-items:left;justify-content:left;width:100%;height:100%}.corner.svelte-vutf9p img.svelte-vutf9p{width:20em;height:3em;object-fit:center}nav.svelte-vutf9p.svelte-vutf9p{display:flex;justify-content:right}ul.svelte-vutf9p.svelte-vutf9p{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:right;align-items:right;list-style:none;background:var(--background);background-size:contain}li.svelte-vutf9p.svelte-vutf9p{position:relative;height:100%}li.active.svelte-vutf9p.svelte-vutf9p::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--accent-color)}nav.svelte-vutf9p a.svelte-vutf9p{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-vutf9p.svelte-vutf9p:hover{color:var(--accent-color)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $session, $$unsubscribe_session;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  $$result.css.add(css$2);
  $$unsubscribe_page();
  $$unsubscribe_session();
  return `<header class="${"svelte-vutf9p"}"><div class="${"container-header svelte-vutf9p"}"><div class="${"corner svelte-vutf9p"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-vutf9p"}"><img${add_attribute("src", logo, 0)} alt="${"LetzTour"}" class="${"svelte-vutf9p"}"></a></div>
	
		<div></div>
	
		<div class="${"corner svelte-vutf9p"}"><nav class="${"svelte-vutf9p"}"><ul class="${"svelte-vutf9p"}"><li class="${["svelte-vutf9p", $page.url.pathname === "/book" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/book"}" class="${"svelte-vutf9p"}">Book</a></li>
					<li class="${["svelte-vutf9p", $page.url.pathname === "/om" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/om"}" class="${"svelte-vutf9p"}">Om</a></li>
					<li class="${["svelte-vutf9p", $page.url.pathname === "/kontakt" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/kontakt"}" class="${"svelte-vutf9p"}">Kontakt</a></li>
					<li class="${["svelte-vutf9p", $page.url.pathname === "/login" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/login"}" class="${"svelte-vutf9p"}">Login</a></li>
					${$session.user ? `<li class="${["svelte-vutf9p", $page.url.pathname === "/counter" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/counter"}" class="${"svelte-vutf9p"}">Counter</a></li>
						<li class="${["svelte-vutf9p", $page.url.pathname === "/todos" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/todos"}" class="${"svelte-vutf9p"}">Todos</a></li>` : ``}</ul></nav></div></div>
</header>`;
});
var facebookicon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAABRElEQVRYhe1X23GDMBDcy7iP0EnoBFIJ6QS7EuROcCWbD04TWZatJzNkxvsjEHqsVqs7ARwE0mIQkp0+Dt6nm4icW8wRJUBy4Wt08ZGAUwWJEcCsrysAo+VN6wYAfen4qSR6Z8XTkzZLjiKlROwkT1ecSyR7a3RLegBGRIxT3+HerFlKFHsEwMUh0QNYKsYqIvKlpXHqrBI/+DMrAKwisu5FJCS5rbukTuzjo6TTHkhSxDuir0w4kXQVaRdZSY6xiBmJrs2O76eWZwBXffZN+I3HKDoDQKlnHkBy0pWNGX2sinO89Ya9zXqNN9mQc3wHknab7kwYiKp2m9xYU4dEs86hBjnzpChisJnRIpTeLSk3srZTI4RQVs3NtCEcJrK+ifh4E/FxGCI1V0U35Vff1GuIJCfBFGT/cmrQCv1GrO6t/t/iF3F1M5d/Rfk1AAAAAElFTkSuQmCC";
var instagramicon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAByElEQVRYhe2XMW7CMBSG/1dxg64gwcjGztD0JOQAcAbCSQInYGWDzl24Aa3aIQsnAOnv4BdhguPEhAqk9kmRZfl/z5+dZ+cF+LdzkxAxyQ6A55ryvYh8hSOVTz4kuSKZMdwy9R1WzePdEZJTAIl2jwC2AL5rrqENYACgpf1ERGY1fc8hdFVHkuPgAKc4E41BXViQ89CC6F8LYcXrWzCVr8l2XKnTpCHANN8FkmONuQoJkJE8NIHQODuSqdU/kMzqOneU/L1CF5NMSa7zCUnGBU230H/X2J06IAMVLz2atefIpkUAy2+pmkFx7KmSzAEBIII51j0REQA9fRIAMYCw01EyUemOkIzyVXv8U9XEjrGb7chIW9/FlI+NPJoLCwWJAEBEPmponXlyK5BKgJqQjUEAmFzxjOW5sflNkIW2pcmKU24sPJpmICIyBzAH0NVLLALMxaXPDiaPNiIStCOtasmFzWByJQGwJlkc34jIa2hQF8he27bLQZNxRvITwAvM6ejC5MSb7lqZ5TH3Hs3JbvXRc8Qt/eiV5cgWQIsNCiIHxATmDWxDnB6jMFJnu1S8ukCiKYgqS8XHL54tmPv/Tjig7veD9efsB3CYMdqXwO5pAAAAAElFTkSuQmCC";
var mailicon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAABa0lEQVRYhe2WrU4DQRSFv0sIIUEQBL4NaDAE3QrQfQPKG1Rj2ho0b0B5A0wNiFYTDGgIRSMIgoRgDqK3ZDJpYbrLJiXZY+78nL3z7Z1JZqBUqX8imzYoqQXsAusp/jn0Ctyb2dmvTkl9Fa9+vK5FEAfAFXALnAAvOSsQaxM4BfaAQzO7nkwsR8Ytj5eh6S8lad9BtoHvNZYi36rH9yIgotwr4WAMollfS2pLaqeuJqk5jz/emllJK0AnaHfNbPSD9xyoef9iljdUXJGp8kRVYAQ0gcG0v5VUA54cYgTUUyCSQQKYOuPKVIBOCOPtgXd7ZlY1s2Fq/qStiWC6kp6BtsM0fbrCuArH8wBkAgmAepKGwBF+doChmdWz5MsM4jBhdTCzXtZcuUACoFwAEyUf1qJVghBduDHIp8e1AgEmuT/CwfiwPnhsSLqhmGdAw9uPPzoX4mEUwLSAHWAjZwXi2/wNuEt6KpYqtaj6AkZrRJhLGS08AAAAAElFTkSuQmCC";
var Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-7b4duf.svelte-7b4duf{background:linear-gradient(94deg, #408fa6 0%, #325b6a 100%);width:100vw;color:white;font-family:'Poppins', sans-serif}.container-footer.svelte-7b4duf.svelte-7b4duf{display:flex;justify-content:space-between;max-width:1200px;margin:0 auto}.corner.svelte-7b4duf.svelte-7b4duf{height:3.5em;margin:1em;justify-content:left;color:white}.corner.svelte-7b4duf a.svelte-7b4duf{transition:.3s;opacity:1;margin-top:20px}.corner.svelte-7b4duf a.svelte-7b4duf:hover{opacity:.5}.corner.svelte-7b4duf p.svelte-7b4duf{display:flex;justify-content:left;width:100%;height:100%;color:white}.corner.svelte-7b4duf img.svelte-7b4duf{width:20em;height:3em;margin-top:12px}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-7b4duf"}"><div class="${"container-footer svelte-7b4duf"}"><div class="${"corner svelte-7b4duf"}"><p class="${"svelte-7b4duf"}">Hjemmeside tilh\xF8re LetzTour</p></div>
		<div class="${"corner svelte-7b4duf"}"><a href="${"http://"}" class="${"svelte-7b4duf"}"><img style="${"width:34px; height:30px;"}"${add_attribute("src", facebookicon, 0)} alt="${"facebook social icon"}" class="${"svelte-7b4duf"}"></a>
			<a href="${"http://"}" class="${"svelte-7b4duf"}"><img style="${"width:34px; height:30px;"}"${add_attribute("src", instagramicon, 0)} alt="${"instagram social icon"}" class="${"svelte-7b4duf"}"></a>
			<a href="${"http://"}" class="${"svelte-7b4duf"}"><img style="${"width:34px; height:30px;"}"${add_attribute("src", mailicon, 0)} alt="${"mail icon"}" class="${"svelte-7b4duf"}"></a></div></div>
</footer>`;
});
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;0,700;1,300;1,500;1,700&display=swap');@import url('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap');main.svelte-13l4qsr{font-family:'Poppins', sans-serif;flex-direction:column;padding:1rem;width:100vw;max-width:100vw;margin:0 auto;box-sizing:border-box;padding:0}",
  map: null
};
const load = async function load2({ session: session2, url }) {
  if (!session2.user && protectedPages.has(url.pathname)) {
    return { redirect: "/", status: 302 };
  }
  return {};
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"svelte-13l4qsr"}">
	${slots.default ? slots.default({}) : ``}</main>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export { _layout as default, load };
