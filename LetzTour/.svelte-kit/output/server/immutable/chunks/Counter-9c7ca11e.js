import { n as now, l as loop, c as create_ssr_component, a as subscribe, e as escape } from "./index-3d9c31de.js";
import { D as Document, w as writable, g as getDocumentStore } from "./Document-1e035e83.js";
class Count extends Document {
  constructor(data = {}) {
    super(data);
    this._collection = "counters";
    this.count = 0;
    this._load(data);
    this._dbFields.push("count");
  }
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map((_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i]));
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
var Counter_svelte_svelte_type_style_lang = "";
const css = {
  code: ".counter.svelte-139m1ow.svelte-139m1ow{display:flex;border-top:1px solid rgba(0, 0, 0, 0.1);border-bottom:1px solid rgba(0, 0, 0, 0.1);margin:1rem 0}.counter.svelte-139m1ow button.svelte-139m1ow{width:2em;padding:0;display:flex;align-items:center;justify-content:center;border:0;background-color:transparent;color:var(--text-color);font-size:2rem}.counter.svelte-139m1ow button.svelte-139m1ow:hover{background-color:var(--secondary-color)}svg.svelte-139m1ow.svelte-139m1ow{width:25%;height:25%}path.svelte-139m1ow.svelte-139m1ow{vector-effect:non-scaling-stroke;stroke-width:2px;stroke:var(--text-color)}.counter-viewport.svelte-139m1ow.svelte-139m1ow{width:8em;height:4em;overflow:hidden;text-align:center;position:relative}.counter-viewport.svelte-139m1ow strong.svelte-139m1ow{position:absolute;display:flex;width:100%;height:100%;font-weight:400;color:var(--accent-color);font-size:4rem;align-items:center;justify-content:center}.counter-digits.svelte-139m1ow.svelte-139m1ow{position:absolute;width:100%;height:100%}",
  map: null
};
async function getCounterData(fetch, session) {
  if (session.user) {
    const res = await fetch(`/api/data?collectionPath=counters&createIfNone=true`);
    if (res.ok) {
      const counterDataList = await res.json();
      return counterDataList[0];
    }
    const { message } = await res.json();
    throw Error(message);
  } else {
    return null;
  }
}
function modulo(n, m) {
  return (n % m + m) % m;
}
const Counter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let offset;
  let $displayed_count, $$unsubscribe_displayed_count;
  let $countStore, $$unsubscribe_countStore;
  let { counterData } = $$props;
  const countStore = getDocumentStore(Count, new Count(counterData));
  $$unsubscribe_countStore = subscribe(countStore, (value) => $countStore = value);
  let count;
  const displayed_count = spring();
  $$unsubscribe_displayed_count = subscribe(displayed_count, (value) => $displayed_count = value);
  if ($$props.counterData === void 0 && $$bindings.counterData && counterData !== void 0)
    $$bindings.counterData(counterData);
  $$result.css.add(css);
  count = $countStore || new Count({ count: 0 });
  {
    displayed_count.set(count.count);
  }
  offset = modulo($displayed_count, 1);
  $$unsubscribe_displayed_count();
  $$unsubscribe_countStore();
  return `<div class="${"counter svelte-139m1ow"}"><button aria-label="${"Decrease the counter by one"}" class="${"svelte-139m1ow"}"><svg aria-hidden="${"true"}" viewBox="${"0 0 1 1"}" class="${"svelte-139m1ow"}"><path d="${"M0,0.5 L1,0.5"}" class="${"svelte-139m1ow"}"></path></svg></button>

	<div class="${"counter-viewport svelte-139m1ow"}"><div class="${"counter-digits svelte-139m1ow"}" style="${"transform: translate(0, " + escape(100 * offset, true) + "%)"}"><strong style="${"top: -100%"}" aria-hidden="${"true"}" class="${"svelte-139m1ow"}">${escape(Math.floor($displayed_count + 1))}</strong>
			<strong class="${"svelte-139m1ow"}">${escape(Math.floor($displayed_count))}</strong></div></div>

	<button aria-label="${"Increase the counter by one"}" class="${"svelte-139m1ow"}"><svg aria-hidden="${"true"}" viewBox="${"0 0 1 1"}" class="${"svelte-139m1ow"}"><path d="${"M0,0.5 L1,0.5 M0.5,0 L0.5,1"}" class="${"svelte-139m1ow"}"></path></svg></button>
</div>`;
});
export { Counter as C, getCounterData as g };
