import "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { d as noop, f as safe_not_equal } from "./index-3d9c31de.js";
const subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe };
}
function getDocumentStore(type, document) {
  return readable(document, (set) => {
    const unsub = () => {
    };
    return unsub;
  });
}
function getCollectionStore(type, collectionPath, uid, initialData = []) {
  return readable(initialData, (set) => {
    const unsub = () => {
    };
    return unsub;
  });
}
class Document {
  constructor(data = {}) {
    this._collection = "";
    this._dbFields = ["uid"];
    this._id = "";
    this.uid = "";
    this._load(data);
  }
  _load(data) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
export { Document as D, getCollectionStore as a, getDocumentStore as g, writable as w };
