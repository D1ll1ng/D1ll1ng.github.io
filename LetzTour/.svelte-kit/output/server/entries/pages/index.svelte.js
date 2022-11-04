import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../immutable/chunks/index-3d9c31de.js";
import { g as getCounterData, C as Counter } from "../../immutable/chunks/Counter-9c7ca11e.js";
import { s as session } from "../../immutable/chunks/stores-fba00ce6.js";
import "../../immutable/chunks/Document-1e035e83.js";
import "firebase/app";
import "firebase/firestore";
import "firebase/auth";
var Hero_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".hero.svelte-1k0u5am.svelte-1k0u5am{position:relative;height:480px;display:flex;align-items:center;flex-direction:column}.hero-bg.svelte-1k0u5am.svelte-1k0u5am{position:absolute;height:480px;width:100vw;margin:0 auto;z-index:-1}.hero-bg.svelte-1k0u5am img.svelte-1k0u5am{position:absolute;height:100%;width:100%;object-fit:cover}.hero.svelte-1k0u5am h1.svelte-1k0u5am,.hero.svelte-1k0u5am p.svelte-1k0u5am{color:white;margin:0;padding:0;font-family:'Fugaz One', cursive}.hero.svelte-1k0u5am h1.svelte-1k0u5am{font-size:3.2em;padding:90px 0 0 0}.hero.svelte-1k0u5am p.svelte-1k0u5am{font-size:1.2em;padding:0 0 60px 0}.hero.svelte-1k0u5am form.svelte-1k0u5am{width:90vw;max-width:900px}.hero.svelte-1k0u5am form div.svelte-1k0u5am{display:flex;flex-wrap:wrap;justify-content:center}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"hero svelte-1k0u5am"}"><div class="${"hero-bg svelte-1k0u5am"}"><img src="${"/media/dublin-cover.webp"}" alt="${""}" class="${"svelte-1k0u5am"}"></div>
		<h1 class="${"svelte-1k0u5am"}">Klar p\xE5 en fantastisk heretur?</h1>
		<p class="${"svelte-1k0u5am"}">S\xF8g her og f\xE5 forslag p\xE5 hereture\u2026 Tilpas din s\xF8gning og lav der perfekt til din gruppe</p>
		<form action="${"post"}" class="${"svelte-1k0u5am"}"><div class="${"HeroFormInput svelte-1k0u5am"}"><input type="${"input"}" name="${"lokation"}" id="${""}">
				<input type="${"date"}" name="${"Dato"}" id="${""}">
				<input type="${"input"}" name="${"Antal personer"}" id="${""}">
				<input type="${"search"}" name="${"s\xF8g"}" id="${""}">
				<input type="${"btn"}" name="${"Kultu"}" id="${""}">
				<input type="${"btn"}" name="${"Fest"}" id="${""}">
				<input type="${"btn"}" name="${"Aktiv"}" id="${""}"></div></form>
</div>`;
});
var SingleView_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "section.svelte-15uqq7x.svelte-15uqq7x{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1;padding:40px}.singleProduct.svelte-15uqq7x.svelte-15uqq7x{background:linear-gradient(129deg, rgb(225, 198, 60) 0%, rgb(225, 160, 60) 100%);display:flex;flex-direction:row;padding:40px 0}.col1.svelte-15uqq7x.svelte-15uqq7x{display:flex;justify-content:right;flex-wrap:wrap;width:27.4vw;text-align:right}.col1.svelte-15uqq7x img.svelte-15uqq7x{padding-bottom:40px}.col1.svelte-15uqq7x h2.svelte-15uqq7x{font-family:'Fugaz One', cursive;text-align:right;color:white;font-size:4em;margin:40px 20px 0 0}.col1.svelte-15uqq7x p.svelte-15uqq7x{padding:0 0 1em 0;font-size:1.1em;color:white;margin:0 20px 0 0}.col2.svelte-15uqq7x.svelte-15uqq7x{width:19vw}.col2.svelte-15uqq7x .SingleProductImages-3Small.svelte-15uqq7x{display:flex;flex-direction:column}",
  map: null
};
const SingleView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="${"singleProduct svelte-15uqq7x"}"><div class="${"col1 svelte-15uqq7x"}"><h2 class="${"svelte-15uqq7x"}">Dublin Tur
		</h2>
		<p class="${"svelte-15uqq7x"}">Her er en kort tisser af vores smellerfede dublin tur!</p> 
		<div class="${"SingleProductImages-Big"}"><img loading="${"lazy"}" style="${"width:512px; height:512px;"}" src="${"/media/dublin-square02.webp"}" alt="${"facsade of a nice old building"}" class="${"svelte-15uqq7x"}"></div>
		<p class="${"svelte-15uqq7x"}">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi id ipsa corporis distinctio? Quibusdam, atque? Sapiente, iste qui. Amet numquam aperiam, beatae alias vero tempore. Expedita molestias autem odit provident!</p>
		<p class="${"svelte-15uqq7x"}">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi id ipsa corporis distinctio? Quibusdam, atque? Sapiente, iste qui. Amet numquam aperiam, beatae alias vero tempore. Expedita molestias autem odit provident!</p></div>
	<div class="${"col2 svelte-15uqq7x"}"><div class="${"SingleProductImages-3Small svelte-15uqq7x"}"><img loading="${"lazy"}" style="${"width:312px; height:312px;"}" src="${"/media/dublin-square02.webp"}" alt="${"facsade of a nice old building"}">
			<img loading="${"lazy"}" style="${"width:256px; height:256px;"}" src="${"/media/dublin-square02.webp"}" alt="${"facsade of a nice old building"}">
			<img loading="${"lazy"}" style="${"width:200px; height:200px;"}" src="${"/media/dublin-square02.webp"}" alt="${"facsade of a nice old building"}"></div></div>
</section>`;
});
const ImageSeries = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"singleProduct"}"><img loading="${"lazy"}" style="${"width:19.8vw; margin:0; padding:0; "}" src="${"/media/dublin-square02.webp"}" alt="${"facsade of a nice old building"}">
			<img loading="${"lazy"}" style="${"width:19.8vw; margin:0; padding:0; "}" src="${"/media/dublin-square02.webp"}" alt="${"facsade of a nice old building"}">
			<img loading="${"lazy"}" style="${"width:19.8vw; margin:0; padding:0; "}" src="${"/media/dublin-square02.webp"}" alt="${"facsade of a nice old building"}">
			<img loading="${"lazy"}" style="${"width:19.8vw; margin:0; padding:0; "}" src="${"/media/dublin-square02.webp"}" alt="${"facsade of a nice old building"}">
			<img loading="${"lazy"}" style="${"width:19.8vw; margin:0; padding:0; "}" src="${"/media/dublin-square02.webp"}" alt="${"facsade of a nice old building"}">
			<img loading="${"lazy"}" style="${"width:19.8vw; margin:0; padding:0; "}" src="${"/media/dublin-square02.webp"}" alt="${"facsade of a nice old building"}">
			<img loading="${"lazy"}" style="${"width:19.8vw; margin:0; padding:0; "}" src="${"/media/dublin-square02.webp"}" alt="${"facsade of a nice old building"}">
			<img loading="${"lazy"}" style="${"width:19.8vw; margin:0; padding:0; "}" src="${"/media/dublin-square02.webp"}" alt="${"facsade of a nice old building"}">
			<img loading="${"lazy"}" style="${"width:19.8vw; margin:0; padding:0; "}" src="${"/media/dublin-square02.webp"}" alt="${"facsade of a nice old building"}">
			<img loading="${"lazy"}" style="${"width:19.8vw; margin:0; padding:0; "}" src="${"/media/dublin-square02.webp"}" alt="${"facsade of a nice old building"}">
</section>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: `section.svelte-1vg10x3.svelte-1vg10x3.svelte-1vg10x3{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1;padding:40px;margin:40px 0}h2.svelte-1vg10x3.svelte-1vg10x3.svelte-1vg10x3{font-family:'Fugaz One', cursive;display:block;font-size:1em;color:#3A798C;font-weight:500;float:left;width:100%}.container.svelte-1vg10x3.svelte-1vg10x3.svelte-1vg10x3{max-width:905px;width:100%}.container.svelte-1vg10x3 span.svelte-1vg10x3.svelte-1vg10x3{margin-bottom:5px}span.headline.svelte-1vg10x3.svelte-1vg10x3.svelte-1vg10x3{font-size:2em;font-weight:700;padding-right:8px}.ProductOverview-FirstRow.svelte-1vg10x3.svelte-1vg10x3.svelte-1vg10x3,.ProductOverview-SecondRow.svelte-1vg10x3.svelte-1vg10x3.svelte-1vg10x3{display:flex;flex-wrap:wrap;justify-content:center}.ProductOverview-FirstRow.svelte-1vg10x3 a.svelte-1vg10x3.svelte-1vg10x3:hover,.ProductOverview-SecondRow.svelte-1vg10x3 a.svelte-1vg10x3.svelte-1vg10x3:hover{cursor:pointer;opacity:0.5;transition:0.5s}.ProductOverview-FirstRow.svelte-1vg10x3 a.svelte-1vg10x3 span.svelte-1vg10x3,.ProductOverview-SecondRow.svelte-1vg10x3 a.svelte-1vg10x3 span.svelte-1vg10x3{color:#fff;position:relative;top:20px;left:20px}.ProductOverview-FirstRow.svelte-1vg10x3 a.svelte-1vg10x3.svelte-1vg10x3{display:block;object-fit:cover;object-position:bottom;text-decoration:none;width:48.5%;height:300px;min-width:450px;margin:.2em}.ProductOverview-FirstRow.svelte-1vg10x3 a.svelte-1vg10x3.svelte-1vg10x3:nth-child(1){background-image:url("../media/dublin-square01.webp");background-size:cover}.ProductOverview-FirstRow.svelte-1vg10x3 a.svelte-1vg10x3.svelte-1vg10x3:nth-child(2){background-image:url("../media/dublin-square01.webp");background-size:cover}.ProductOverview-SecondRow.svelte-1vg10x3 a.svelte-1vg10x3.svelte-1vg10x3{display:block;object-fit:cover;object-position:bottom;text-decoration:none;width:30%;height:250px;min-width:298px;margin:.2em}.ProductOverview-SecondRow.svelte-1vg10x3 a.svelte-1vg10x3.svelte-1vg10x3:nth-child(1){background-image:url("../media/dublin-square01.webp");background-size:cover}.ProductOverview-SecondRow.svelte-1vg10x3 a.svelte-1vg10x3.svelte-1vg10x3:nth-child(2){background-image:url("../media/dublin-square01.webp");background-size:cover}.ProductOverview-SecondRow.svelte-1vg10x3 a.svelte-1vg10x3.svelte-1vg10x3:nth-child(3){background-image:url("../media/dublin-square01.webp");background-size:cover}.testimonial.svelte-1vg10x3.svelte-1vg10x3.svelte-1vg10x3{display:flex;max-width:500px;font-size:1.4em;align-items:flex-start;margin:40px auto}.testimonial.svelte-1vg10x3 span.svelte-1vg10x3.svelte-1vg10x3{display:flex;font-size:1rem;color:rgb(40, 40, 40);margin-top:20px}.testimonial.svelte-1vg10x3 p.svelte-1vg10x3.svelte-1vg10x3{margin:0}`,
  map: null
};
const load = async function load2({ fetch, session: session2 }) {
  return {
    props: {
      counterData: await getCounterData(fetch, session2)
    }
  };
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  let { counterData } = $$props;
  if ($$props.counterData === void 0 && $$bindings.counterData && counterData !== void 0)
    $$bindings.counterData(counterData);
  $$result.css.add(css);
  $$unsubscribe_session();
  return `${$$result.head += `${$$result.title = `<title>Forside</title>`, ""}<meta name="${"description"}" content="${"Herre tur hjemmeside"}" data-svelte="svelte-uqobcz">`, ""}

${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}

<section class="${"svelte-1vg10x3"}"><div class="${"container svelte-1vg10x3"}"><h2 class="${"svelte-1vg10x3"}"><span class="${"headline svelte-1vg10x3"}">Herre tur -</span> Vores testede ture!
		</h2></div>

	<div class="${"ProductOverview"}"><div class="${"ProductOverview-FirstRow svelte-1vg10x3"}"><a href="${"http://"}" rel="${"noopener noreferrer"}" class="${"svelte-1vg10x3"}"><span class="${"svelte-1vg10x3"}"><b>Danmark</b> - K\xF8benhavn</span></a>
			<a href="${"http://"}" rel="${"noopener noreferrer"}" style="${"border-radius: 0 80px 0 0;"}" class="${"svelte-1vg10x3"}"><span class="${"svelte-1vg10x3"}"><b>Irland</b> - Dublin</span></a></div>
		<div class="${"ProductOverview-SecondRow svelte-1vg10x3"}"><a href="${"http://"}" rel="${"noopener noreferrer"}" class="${"svelte-1vg10x3"}"><span class="${"svelte-1vg10x3"}"><b>Belgien</b> - Lorem</span></a>
			<a href="${"http://"}" rel="${"noopener noreferrer"}" class="${"svelte-1vg10x3"}"><span class="${"svelte-1vg10x3"}"><b>Tyskland</b> - Lorem</span></a>
			<a href="${"http://"}" rel="${"noopener noreferrer"}" class="${"svelte-1vg10x3"}"><span class="${"svelte-1vg10x3"}"><b>Findland</b> - Lorem</span></a></div></div>
	${$session.user && counterData ? `${validate_component(Counter, "Counter").$$render($$result, { counterData }, {}, {})}` : ``}</section>

${validate_component(SingleView, "SingleView").$$render($$result, {}, {}, {})}

<section class="${"testimonial svelte-1vg10x3"}"><p class="${"svelte-1vg10x3"}">&quot;build our style. Learn how to use these documentation 
		pages in combination with Framer to start building 
		new projects in no-time.&quot;</p>
		<span class="${"svelte-1vg10x3"}"><img loading="${"lazy"}" style="${"width:50px; height:50px; padding: 0 15px 0 0;"}" src="${"/media/dublin-square02.webp"}" alt="${"et billede af Jens Jensen, man kan se han er en kraftig mand"}">
			<p class="${"svelte-1vg10x3"}">Jens Jensen <br> En kraftig mand</p></span></section>
${validate_component(ImageSeries, "ImageSeries").$$render($$result, {}, {}, {})}`;
});
export { Routes as default, load };
