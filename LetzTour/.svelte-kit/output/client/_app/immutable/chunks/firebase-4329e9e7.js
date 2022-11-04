import{N as fl}from"./index-c547a399.js";import{r as la}from"./index-1323b221.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},pl=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},da={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(f=64)),s.push(n[l],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ha(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pl(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||u==null||h==null)throw Error();const f=r<<2|a>>4;if(s.push(f),u!==64){const g=a<<4&240|u>>2;if(s.push(g),h!==64){const m=u<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},gl=function(t){const e=ha(t);return da.encodeByteArray(e,!0)},fa=function(t){return gl(t).replace(/\./g,"")},ml=function(t){try{return da.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pa(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(H())}function ga(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ma(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vl(){return H().indexOf("Electron/")>=0}function ya(){const t=H();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wl(){return H().indexOf("MSAppHost/")>=0}function El(){return typeof indexedDB=="object"}function Il(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl="FirebaseError";class et extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Tl,Object.setPrototypeOf(this,et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,on.prototype.create)}}class on{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?_l(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new et(i,a,s)}}function _l(t,e){return t.replace(bl,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const bl=/\{\$([^}]+)}/g;function Sl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Kn(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(jr(r)&&jr(o)){if(!Kn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function jr(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Al(t,e){const n=new Cl(t,e);return n.subscribe.bind(n)}class Cl{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");kl(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=js),i.error===void 0&&(i.error=js),i.complete===void 0&&(i.complete=js);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kl(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function js(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t){return t&&t._delegate?t._delegate:t}class ze{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new yl;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Rl(e))try{this.getOrInitializeService({instanceIdentifier:Fe})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Fe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fe){return this.instances.has(e)}getOptions(e=Fe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Nl(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Fe){return this.component?this.component.multipleInstances?e:Fe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nl(t){return t===Fe?void 0:t}function Rl(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Dl(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(N||(N={}));const Ml={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},Ll=N.INFO,Pl={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},xl=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Pl[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mi{constructor(e){this.name=e,this._logLevel=Ll,this._logHandler=xl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ml[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}const Ul=(t,e)=>e.some(n=>t instanceof n);let qr,Hr;function Fl(){return qr||(qr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vl(){return Hr||(Hr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const va=new WeakMap,oi=new WeakMap,wa=new WeakMap,qs=new WeakMap,Li=new WeakMap;function Bl(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(De(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&va.set(n,t)}).catch(()=>{}),Li.set(e,t),e}function $l(t){if(oi.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});oi.set(t,e)}let ai={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return oi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return De(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jl(t){ai=t(ai)}function ql(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Hs(this),e,...n);return wa.set(s,e.sort?e.sort():[e]),De(s)}:Vl().includes(t)?function(...e){return t.apply(Hs(this),e),De(va.get(this))}:function(...e){return De(t.apply(Hs(this),e))}}function Hl(t){return typeof t=="function"?ql(t):(t instanceof IDBTransaction&&$l(t),Ul(t,Fl())?new Proxy(t,ai):t)}function De(t){if(t instanceof IDBRequest)return Bl(t);if(qs.has(t))return qs.get(t);const e=Hl(t);return e!==t&&(qs.set(t,e),Li.set(e,t)),e}const Hs=t=>Li.get(t);function Kl(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=De(o);return s&&o.addEventListener("upgradeneeded",c=>{s(De(o.result),c.oldVersion,c.newVersion,De(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const zl=["get","getKey","getAll","getAllKeys","count"],Gl=["put","add","delete","clear"],Ks=new Map;function Kr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ks.get(e))return Ks.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Gl.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||zl.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return Ks.set(e,r),r}jl(t=>({...t,get:(e,n,s)=>Kr(e,n)||t.get(e,n,s),has:(e,n)=>!!Kr(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ql(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ql(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ci="@firebase/app",zr="0.7.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new Mi("@firebase/app"),Xl="@firebase/app-compat",Yl="@firebase/analytics-compat",Jl="@firebase/analytics",Zl="@firebase/app-check-compat",eh="@firebase/app-check",th="@firebase/auth",nh="@firebase/auth-compat",sh="@firebase/database",ih="@firebase/database-compat",rh="@firebase/functions",oh="@firebase/functions-compat",ah="@firebase/installations",ch="@firebase/installations-compat",uh="@firebase/messaging",lh="@firebase/messaging-compat",hh="@firebase/performance",dh="@firebase/performance-compat",fh="@firebase/remote-config",ph="@firebase/remote-config-compat",gh="@firebase/storage",mh="@firebase/storage-compat",yh="@firebase/firestore",vh="@firebase/firestore-compat",wh="firebase",Eh="9.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea="[DEFAULT]",Ih={[ci]:"fire-core",[Xl]:"fire-core-compat",[Jl]:"fire-analytics",[Yl]:"fire-analytics-compat",[eh]:"fire-app-check",[Zl]:"fire-app-check-compat",[th]:"fire-auth",[nh]:"fire-auth-compat",[sh]:"fire-rtdb",[ih]:"fire-rtdb-compat",[rh]:"fire-fn",[oh]:"fire-fn-compat",[ah]:"fire-iid",[ch]:"fire-iid-compat",[uh]:"fire-fcm",[lh]:"fire-fcm-compat",[hh]:"fire-perf",[dh]:"fire-perf-compat",[fh]:"fire-rc",[ph]:"fire-rc-compat",[gh]:"fire-gcs",[mh]:"fire-gcs-compat",[yh]:"fire-fst",[vh]:"fire-fst-compat","fire-js":"fire-js",[wh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new Map,ui=new Map;function Th(t,e){try{t.container.addComponent(e)}catch(n){Pi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dt(t){const e=t.name;if(ui.has(e))return Pi.debug(`There were multiple attempts to register component ${e}.`),!1;ui.set(e,t);for(const n of zn.values())Th(n,t);return!0}function xi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Ge=new on("app","Firebase",_h);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ge.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=Eh;function Sh(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ea,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Ge.create("bad-app-name",{appName:String(s)});const i=zn.get(s);if(i){if(Kn(t,i.options)&&Kn(n,i.config))return i;throw Ge.create("duplicate-app",{appName:s})}const r=new Ol(s);for(const a of ui.values())r.addComponent(a);const o=new bh(t,n,r);return zn.set(s,o),o}function Ia(t=Ea){const e=zn.get(t);if(!e)throw Ge.create("no-app",{appName:t});return e}function Ne(t,e,n){var s;let i=(s=Ih[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pi.warn(a.join(" "));return}dt(new ze(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="firebase-heartbeat-database",Ch=1,Kt="firebase-heartbeat-store";let zs=null;function Ta(){return zs||(zs=Kl(Ah,Ch,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Kt)}}}).catch(t=>{throw Ge.create("storage-open",{originalErrorMessage:t.message})})),zs}async function kh(t){var e;try{return(await Ta()).transaction(Kt).objectStore(Kt).get(_a(t))}catch(n){throw Ge.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function Gr(t,e){var n;try{const i=(await Ta()).transaction(Kt,"readwrite");return await i.objectStore(Kt).put(e,_a(t)),i.done}catch(s){throw Ge.create("storage-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message})}}function _a(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=1024,Nh=30*24*60*60*1e3;class Rh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Mh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Wr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Nh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Wr(),{heartbeatsToSend:n,unsentEntries:s}=Oh(this._heartbeatsCache.heartbeats),i=fa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Wr(){return new Date().toISOString().substring(0,10)}function Oh(t,e=Dh){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Qr(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qr(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Mh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return El()?Il().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await kh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Qr(t){return fa(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(t){dt(new ze("platform-logger",e=>new Wl(e),"PRIVATE")),dt(new ze("heartbeat",e=>new Rh(e),"PRIVATE")),Ne(ci,zr,t),Ne(ci,zr,"esm2017"),Ne("fire-js","")}Lh("");var Ph="firebase",xh="9.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ne(Ph,xh,"app");var Uh=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},y,Ui=Ui||{},I=Uh||self;function Gn(){}function li(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function un(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Fh(t){return Object.prototype.hasOwnProperty.call(t,Gs)&&t[Gs]||(t[Gs]=++Vh)}var Gs="closure_uid_"+(1e9*Math.random()>>>0),Vh=0;function Bh(t,e,n){return t.call.apply(t.bind,arguments)}function $h(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function W(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?W=Bh:W=$h,W.apply(null,arguments)}function Dn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Y(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function xe(){this.s=this.s,this.o=this.o}var jh=0;xe.prototype.s=!1;xe.prototype.na=function(){!this.s&&(this.s=!0,this.M(),jh!=0)&&Fh(this)};xe.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ba=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Sa=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,i=typeof t=="string"?t.split(""):t;for(let r=0;r<s;r++)r in i&&e.call(n,i[r],r,t)};function qh(t){e:{var e=Ld;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in s&&e.call(void 0,s[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Xr(t){return Array.prototype.concat.apply([],arguments)}function Fi(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Wn(t){return/^[\s\xa0]*$/.test(t)}var Yr=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ee(t,e){return t.indexOf(e)!=-1}function Ws(t,e){return t<e?-1:t>e?1:0}var te;e:{var Jr=I.navigator;if(Jr){var Zr=Jr.userAgent;if(Zr){te=Zr;break e}}te=""}function Vi(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Aa(t){const e={};for(const n in t)e[n]=t[n];return e}var eo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ca(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<eo.length;r++)n=eo[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Bi(t){return Bi[" "](t),t}Bi[" "]=Gn;function Hh(t){var e=Gh;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Kh=ee(te,"Opera"),ft=ee(te,"Trident")||ee(te,"MSIE"),ka=ee(te,"Edge"),hi=ka||ft,Da=ee(te,"Gecko")&&!(ee(te.toLowerCase(),"webkit")&&!ee(te,"Edge"))&&!(ee(te,"Trident")||ee(te,"MSIE"))&&!ee(te,"Edge"),zh=ee(te.toLowerCase(),"webkit")&&!ee(te,"Edge");function Na(){var t=I.document;return t?t.documentMode:void 0}var Qn;e:{var Qs="",Xs=function(){var t=te;if(Da)return/rv:([^\);]+)(\)|;)/.exec(t);if(ka)return/Edge\/([\d\.]+)/.exec(t);if(ft)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(zh)return/WebKit\/(\S+)/.exec(t);if(Kh)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Xs&&(Qs=Xs?Xs[1]:""),ft){var Ys=Na();if(Ys!=null&&Ys>parseFloat(Qs)){Qn=String(Ys);break e}}Qn=Qs}var Gh={};function Wh(){return Hh(function(){let t=0;const e=Yr(String(Qn)).split("."),n=Yr("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Ws(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Ws(i[2].length==0,r[2].length==0)||Ws(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var di;if(I.document&&ft){var to=Na();di=to||parseInt(Qn,10)||void 0}else di=void 0;var Qh=di,Xh=function(){if(!I.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{I.addEventListener("test",Gn,e),I.removeEventListener("test",Gn,e)}catch{}return t}();function Z(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Z.prototype.h=function(){this.defaultPrevented=!0};function zt(t,e){if(Z.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Da){e:{try{Bi(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Yh[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&zt.Z.h.call(this)}}Y(zt,Z);var Yh={2:"touch",3:"pen",4:"mouse"};zt.prototype.h=function(){zt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ln="closure_listenable_"+(1e6*Math.random()|0),Jh=0;function Zh(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=i,this.key=++Jh,this.ca=this.fa=!1}function ps(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function gs(t){this.src=t,this.g={},this.h=0}gs.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=pi(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new Zh(e,this.src,r,!!s,i),e.fa=n,t.push(e)),e};function fi(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=ba(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(ps(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function pi(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==s)return i}return-1}var $i="closure_lm_"+(1e6*Math.random()|0),Js={};function Ra(t,e,n,s,i){if(s&&s.once)return Ma(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ra(t,e[r],n,s,i);return null}return n=Hi(n),t&&t[ln]?t.N(e,n,un(s)?!!s.capture:!!s,i):Oa(t,e,n,!1,s,i)}function Oa(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=un(i)?!!i.capture:!!i,a=qi(t);if(a||(t[$i]=a=new gs(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=ed(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Xh||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Pa(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ed(){function t(n){return e.call(t.src,t.listener,n)}var e=td;return t}function Ma(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ma(t,e[r],n,s,i);return null}return n=Hi(n),t&&t[ln]?t.O(e,n,un(s)?!!s.capture:!!s,i):Oa(t,e,n,!0,s,i)}function La(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)La(t,e[r],n,s,i);else s=un(s)?!!s.capture:!!s,n=Hi(n),t&&t[ln]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=pi(r,n,s,i),-1<n&&(ps(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=qi(t))&&(e=t.g[e.toString()],t=-1,e&&(t=pi(e,n,s,i)),(n=-1<t?e[t]:null)&&ji(n))}function ji(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[ln])fi(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Pa(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=qi(e))?(fi(n,t),n.h==0&&(n.src=null,e[$i]=null)):ps(t)}}}function Pa(t){return t in Js?Js[t]:Js[t]="on"+t}function td(t,e){if(t.ca)t=!0;else{e=new zt(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&ji(t),t=n.call(s,e)}return t}function qi(t){return t=t[$i],t instanceof gs?t:null}var Zs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hi(t){return typeof t=="function"?t:(t[Zs]||(t[Zs]=function(e){return t.handleEvent(e)}),t[Zs])}function K(){xe.call(this),this.i=new gs(this),this.P=this,this.I=null}Y(K,xe);K.prototype[ln]=!0;K.prototype.removeEventListener=function(t,e,n,s){La(this,t,e,n,s)};function Q(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Z(e,t);else if(e instanceof Z)e.target=e.target||t;else{var i=e;e=new Z(s,t),Ca(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Nn(o,s,!0,e)&&i}if(o=e.g=t,i=Nn(o,s,!0,e)&&i,i=Nn(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Nn(o,s,!1,e)&&i}K.prototype.M=function(){if(K.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ps(n[s]);delete t.g[e],t.h--}}this.I=null};K.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};K.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Nn(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&fi(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Ki=I.JSON.stringify;function nd(){var t=Ua;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class sd{constructor(){this.h=this.g=null}add(e,n){const s=xa.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var xa=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new id,t=>t.reset());class id{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function rd(t){I.setTimeout(()=>{throw t},0)}function zi(t,e){gi||od(),mi||(gi(),mi=!0),Ua.add(t,e)}var gi;function od(){var t=I.Promise.resolve(void 0);gi=function(){t.then(ad)}}var mi=!1,Ua=new sd;function ad(){for(var t;t=nd();){try{t.h.call(t.g)}catch(n){rd(n)}var e=xa;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}mi=!1}function ms(t,e){K.call(this),this.h=t||1,this.g=e||I,this.j=W(this.kb,this),this.l=Date.now()}Y(ms,K);y=ms.prototype;y.da=!1;y.S=null;y.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Q(this,"tick"),this.da&&(Gi(this),this.start()))}};y.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Gi(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}y.M=function(){ms.Z.M.call(this),Gi(this),delete this.g};function Wi(t,e,n){if(typeof t=="function")n&&(t=W(t,n));else if(t&&typeof t.handleEvent=="function")t=W(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:I.setTimeout(t,e||0)}function Fa(t){t.g=Wi(()=>{t.g=null,t.i&&(t.i=!1,Fa(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class cd extends xe{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Fa(this)}M(){super.M(),this.g&&(I.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gt(t){xe.call(this),this.h=t,this.g={}}Y(Gt,xe);var no=[];function Va(t,e,n,s){Array.isArray(n)||(n&&(no[0]=n.toString()),n=no);for(var i=0;i<n.length;i++){var r=Ra(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Ba(t){Vi(t.g,function(e,n){this.g.hasOwnProperty(n)&&ji(e)},t),t.g={}}Gt.prototype.M=function(){Gt.Z.M.call(this),Ba(this)};Gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ys(){this.g=!0}ys.prototype.Aa=function(){this.g=!1};function ud(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function ld(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function rt(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+dd(t,n)+(s?" "+s:"")})}function hd(t,e){t.info(function(){return"TIMEOUT: "+e})}ys.prototype.info=function(){};function dd(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ki(n)}catch{return e}}var tt={},so=null;function vs(){return so=so||new K}tt.Ma="serverreachability";function $a(t){Z.call(this,tt.Ma,t)}Y($a,Z);function Wt(t){const e=vs();Q(e,new $a(e))}tt.STAT_EVENT="statevent";function ja(t,e){Z.call(this,tt.STAT_EVENT,t),this.stat=e}Y(ja,Z);function ne(t){const e=vs();Q(e,new ja(e,t))}tt.Na="timingevent";function qa(t,e){Z.call(this,tt.Na,t),this.size=e}Y(qa,Z);function hn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return I.setTimeout(function(){t()},e)}var ws={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Ha={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Qi(){}Qi.prototype.h=null;function io(t){return t.h||(t.h=t.i())}function Ka(){}var dn={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Xi(){Z.call(this,"d")}Y(Xi,Z);function Yi(){Z.call(this,"c")}Y(Yi,Z);var yi;function Es(){}Y(Es,Qi);Es.prototype.g=function(){return new XMLHttpRequest};Es.prototype.i=function(){return{}};yi=new Es;function fn(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Gt(this),this.P=fd,t=hi?125:void 0,this.W=new ms(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new za}function za(){this.i=null,this.g="",this.h=!1}var fd=45e3,vi={},Xn={};y=fn.prototype;y.setTimeout=function(t){this.P=t};function wi(t,e,n){t.K=1,t.v=Ts(we(e)),t.s=n,t.U=!0,Ga(t,null)}function Ga(t,e){t.F=Date.now(),pn(t),t.A=we(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),ec(n.h,"t",s),t.C=0,n=t.l.H,t.h=new za,t.g=Ec(t.l,n?e:null,!t.s),0<t.O&&(t.L=new cd(W(t.Ia,t,t.g),t.O)),Va(t.V,t.g,"readystatechange",t.gb),e=t.H?Aa(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Wt(),ud(t.j,t.u,t.A,t.m,t.X,t.s)}y.gb=function(t){t=t.target;const e=this.L;e&&ge(t)==3?e.l():this.Ia(t)};y.Ia=function(t){try{if(t==this.g)e:{const l=ge(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||hi||this.g&&(this.h.h||this.g.ga()||co(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Wt(3):Wt(2)),Is(this);var n=this.g.ba();this.N=n;t:if(Wa(this)){var s=co(this.g);t="";var i=s.length,r=ge(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Ve(this),Ft(this);var o="";break t}this.h.i=new I.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,ld(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Wn(a)){var u=a;break t}}u=null}if(n=u)rt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ei(this,n);else{this.i=!1,this.o=3,ne(12),Ve(this),Ft(this);break e}}this.U?(Qa(this,l,o),hi&&this.i&&l==3&&(Va(this.V,this.W,"tick",this.fb),this.W.start())):(rt(this.j,this.m,o,null),Ei(this,o)),l==4&&Ve(this),this.i&&!this.I&&(l==4?mc(this.l,this):(this.i=!1,pn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ne(12)):(this.o=0,ne(13)),Ve(this),Ft(this)}}}catch{}finally{}};function Wa(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Qa(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=pd(t,n),i==Xn){e==4&&(t.o=4,ne(14),s=!1),rt(t.j,t.m,null,"[Incomplete Response]");break}else if(i==vi){t.o=4,ne(15),rt(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else rt(t.j,t.m,i,null),Ei(t,i);Wa(t)&&i!=Xn&&i!=vi&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ne(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),or(e),e.L=!0,ne(11))):(rt(t.j,t.m,n,"[Invalid Chunked Response]"),Ve(t),Ft(t))}y.fb=function(){if(this.g){var t=ge(this.g),e=this.g.ga();this.C<e.length&&(Is(this),Qa(this,t,e),this.i&&t!=4&&pn(this))}};function pd(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Xn:(n=Number(e.substring(n,s)),isNaN(n)?vi:(s+=1,s+n>e.length?Xn:(e=e.substr(s,n),t.C=s+n,e)))}y.cancel=function(){this.I=!0,Ve(this)};function pn(t){t.Y=Date.now()+t.P,Xa(t,t.P)}function Xa(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=hn(W(t.eb,t),e)}function Is(t){t.B&&(I.clearTimeout(t.B),t.B=null)}y.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(hd(this.j,this.A),this.K!=2&&(Wt(),ne(17)),Ve(this),this.o=2,Ft(this)):Xa(this,this.Y-t)};function Ft(t){t.l.G==0||t.I||mc(t.l,t)}function Ve(t){Is(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Gi(t.W),Ba(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ei(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ii(n.i,t))){if(n.I=t.N,!t.J&&Ii(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)es(n),Ss(n);else break e;rr(n),ne(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=hn(W(n.ab,n),6e3));if(1>=sc(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Be(n,11)}else if((t.J||n.g==t)&&es(n),!Wn(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const l=u[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.i;!r.g&&(ee(m,"spdy")||ee(m,"quic")||ee(m,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(er(r,r.h),r.h=null))}if(s.D){const C=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(s.sa=C,L(s.F,s.D,C))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=wc(s,s.H?s.la:null,s.W),o.J){ic(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Is(a),pn(a)),s.g=o}else pc(s);0<n.l.length&&As(n)}else u[0]!="stop"&&u[0]!="close"||Be(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Be(n,7):ir(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}Wt(4)}catch{}}function gd(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(li(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Ji(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(li(t)||typeof t=="string")Sa(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(li(t)||typeof t=="string"){n=[];for(var s=t.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,t)n[s++]=i;s=gd(t),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}}function bt(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof bt)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}y=bt.prototype;y.R=function(){Zi(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};y.T=function(){return Zi(this),this.g.concat()};function Zi(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];We(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)s=t.g[e],We(i,s)||(t.g[n++]=s,i[s]=1),e++;t.g.length=n}}y.get=function(t,e){return We(this.h,t)?this.h[t]:e};y.set=function(t,e){We(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};y.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);t.call(e,r,i,this)}};function We(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Ya=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function md(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Qe(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Qe){this.g=e!==void 0?e:t.g,Yn(this,t.j),this.s=t.s,Jn(this,t.i),Zn(this,t.m),this.l=t.l,e=t.h;var n=new Qt;n.i=e.i,e.g&&(n.g=new bt(e.g),n.h=e.h),ro(this,n),this.o=t.o}else t&&(n=String(t).match(Ya))?(this.g=!!e,Yn(this,n[1]||"",!0),this.s=Vt(n[2]||""),Jn(this,n[3]||"",!0),Zn(this,n[4]),this.l=Vt(n[5]||"",!0),ro(this,n[6]||"",!0),this.o=Vt(n[7]||"")):(this.g=!!e,this.h=new Qt(null,this.g))}Qe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Pt(e,oo,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Pt(e,oo,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Pt(n,n.charAt(0)=="/"?Id:Ed,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Pt(n,_d)),t.join("")};function we(t){return new Qe(t)}function Yn(t,e,n){t.j=n?Vt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Jn(t,e,n){t.i=n?Vt(e,!0):e}function Zn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ro(t,e,n){e instanceof Qt?(t.h=e,bd(t.h,t.g)):(n||(e=Pt(e,Td)),t.h=new Qt(e,t.g))}function L(t,e,n){t.h.set(e,n)}function Ts(t){return L(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function yd(t){return t instanceof Qe?we(t):new Qe(t,void 0)}function vd(t,e,n,s){var i=new Qe(null,void 0);return t&&Yn(i,t),e&&Jn(i,e),n&&Zn(i,n),s&&(i.l=s),i}function Vt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Pt(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,wd),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function wd(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var oo=/[#\/\?@]/g,Ed=/[#\?:]/g,Id=/[#\?]/g,Td=/[#\?@]/g,_d=/#/g;function Qt(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ue(t){t.g||(t.g=new bt,t.h=0,t.i&&md(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}y=Qt.prototype;y.add=function(t,e){Ue(this),this.i=null,t=St(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ja(t,e){Ue(t),e=St(t,e),We(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,We(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Zi(t)))}function Za(t,e){return Ue(t),e=St(t,e),We(t.g.h,e)}y.forEach=function(t,e){Ue(this),this.g.forEach(function(n,s){Sa(n,function(i){t.call(e,i,s,this)},this)},this)};y.T=function(){Ue(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var i=t[s],r=0;r<i.length;r++)n.push(e[s]);return n};y.R=function(t){Ue(this);var e=[];if(typeof t=="string")Za(this,t)&&(e=Xr(e,this.g.get(St(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Xr(e,t[n])}return e};y.set=function(t,e){return Ue(this),this.i=null,t=St(this,t),Za(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};y.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function ec(t,e,n){Ja(t,e),0<n.length&&(t.i=null,t.g.set(St(t,e),Fi(n)),t.h+=n.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),t.push(o)}}return this.i=t.join("&")};function St(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function bd(t,e){e&&!t.j&&(Ue(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Ja(this,s),ec(this,i,n))},t)),t.j=e}var Sd=class{constructor(t,e){this.h=t,this.g=e}};function tc(t){this.l=t||Ad,I.PerformanceNavigationTiming?(t=I.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(I.g&&I.g.Ea&&I.g.Ea()&&I.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ad=10;function nc(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function sc(t){return t.h?1:t.g?t.g.size:0}function Ii(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function er(t,e){t.g?t.g.add(e):t.h=e}function ic(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}tc.prototype.cancel=function(){if(this.i=rc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function rc(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Fi(t.i)}function tr(){}tr.prototype.stringify=function(t){return I.JSON.stringify(t,void 0)};tr.prototype.parse=function(t){return I.JSON.parse(t,void 0)};function Cd(){this.g=new tr}function kd(t,e,n){const s=n||"";try{Ji(t,function(i,r){let o=i;un(i)&&(o=Ki(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Dd(t,e){const n=new ys;if(I.Image){const s=new Image;s.onload=Dn(Rn,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Dn(Rn,n,s,"TestLoadImage: error",!1,e),s.onabort=Dn(Rn,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Dn(Rn,n,s,"TestLoadImage: timeout",!1,e),I.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Rn(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function gn(t){this.l=t.$b||null,this.j=t.ib||!1}Y(gn,Qi);gn.prototype.g=function(){return new _s(this.l,this.j)};gn.prototype.i=function(t){return function(){return t}}({});function _s(t,e){K.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=nr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Y(_s,K);var nr=0;y=_s.prototype;y.open=function(t,e){if(this.readyState!=nr)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Xt(this)};y.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||I).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,mn(this)),this.readyState=nr};y.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Xt(this)),this.g&&(this.readyState=3,Xt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof I.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;oc(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function oc(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}y.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?mn(this):Xt(this),this.readyState==3&&oc(this)}};y.Ua=function(t){this.g&&(this.response=this.responseText=t,mn(this))};y.Ta=function(t){this.g&&(this.response=t,mn(this))};y.ha=function(){this.g&&mn(this)};function mn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Xt(t)}y.setRequestHeader=function(t,e){this.v.append(t,e)};y.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Xt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(_s.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Nd=I.JSON.parse;function F(t){K.call(this),this.headers=new bt,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ac,this.K=this.L=!1}Y(F,K);var ac="",Rd=/^https?$/i,Od=["POST","PUT"];y=F.prototype;y.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():yi.g(),this.C=this.u?io(this.u):io(yi),this.g.onreadystatechange=W(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){ao(this,r);return}t=n||"";const i=new bt(this.headers);s&&Ji(s,function(r,o){i.set(o,r)}),s=qh(i.T()),n=I.FormData&&t instanceof I.FormData,!(0<=ba(Od,e))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{lc(this),0<this.B&&((this.K=Md(this.g))?(this.g.timeout=this.B,this.g.ontimeout=W(this.pa,this)):this.A=Wi(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){ao(this,r)}};function Md(t){return ft&&Wh()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function Ld(t){return t.toLowerCase()=="content-type"}y.pa=function(){typeof Ui!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Q(this,"timeout"),this.abort(8))};function ao(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,cc(t),bs(t)}function cc(t){t.D||(t.D=!0,Q(t,"complete"),Q(t,"error"))}y.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Q(this,"complete"),Q(this,"abort"),bs(this))};y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),bs(this,!0)),F.Z.M.call(this)};y.Fa=function(){this.s||(this.F||this.v||this.l?uc(this):this.cb())};y.cb=function(){uc(this)};function uc(t){if(t.h&&typeof Ui!="undefined"&&(!t.C[1]||ge(t)!=4||t.ba()!=2)){if(t.v&&ge(t)==4)Wi(t.Fa,0,t);else if(Q(t,"readystatechange"),ge(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(Ya)[1]||null;if(!i&&I.self&&I.self.location){var r=I.self.location.protocol;i=r.substr(0,r.length-1)}s=!Rd.test(i?i.toLowerCase():"")}n=s}if(n)Q(t,"complete"),Q(t,"success");else{t.m=6;try{var o=2<ge(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",cc(t)}}finally{bs(t)}}}}function bs(t,e){if(t.g){lc(t);const n=t.g,s=t.C[0]?Gn:null;t.g=null,t.C=null,e||Q(t,"ready");try{n.onreadystatechange=s}catch{}}}function lc(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(I.clearTimeout(t.A),t.A=null)}function ge(t){return t.g?t.g.readyState:0}y.ba=function(){try{return 2<ge(this)?this.g.status:-1}catch{return-1}};y.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Nd(e)}};function co(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ac:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}y.Da=function(){return this.m};y.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Pd(t){let e="";return Vi(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function sr(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Pd(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):L(t,e,n))}function Lt(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function hc(t){this.za=0,this.l=[],this.h=new ys,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Lt("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Lt("baseRetryDelayMs",5e3,t),this.$a=Lt("retryDelaySeedMs",1e4,t),this.Ya=Lt("forwardChannelMaxRetries",2,t),this.ra=Lt("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new tc(t&&t.concurrentRequestLimit),this.Ca=new Cd,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}y=hc.prototype;y.ma=8;y.G=1;function ir(t){if(dc(t),t.G==3){var e=t.V++,n=we(t.F);L(n,"SID",t.J),L(n,"RID",e),L(n,"TYPE","terminate"),yn(t,n),e=new fn(t,t.h,e,void 0),e.K=2,e.v=Ts(we(n)),n=!1,I.navigator&&I.navigator.sendBeacon&&(n=I.navigator.sendBeacon(e.v.toString(),"")),!n&&I.Image&&(new Image().src=e.v,n=!0),n||(e.g=Ec(e.l,null),e.g.ea(e.v)),e.F=Date.now(),pn(e)}vc(t)}y.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Ss(t){t.g&&(or(t),t.g.cancel(),t.g=null)}function dc(t){Ss(t),t.u&&(I.clearTimeout(t.u),t.u=null),es(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&I.clearTimeout(t.m),t.m=null)}function ei(t,e){t.l.push(new Sd(t.Za++,e)),t.G==3&&As(t)}function As(t){nc(t.i)||t.m||(t.m=!0,zi(t.Ha,t),t.C=0)}function xd(t,e){return sc(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=hn(W(t.Ha,t,e),yc(t,t.C)),t.C++,!0)}y.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new fn(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=Aa(r),Ca(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=fc(this,i,e),n=we(this.F),L(n,"RID",t),L(n,"CVER",22),this.D&&L(n,"X-HTTP-Session-Id",this.D),yn(this,n),this.o&&r&&sr(n,this.o,r),er(this.i,i),this.Ra&&L(n,"TYPE","init"),this.ja?(L(n,"$req",e),L(n,"SID","null"),i.$=!0,wi(i,n,null)):wi(i,n,e),this.G=2}}else this.G==3&&(t?uo(this,t):this.l.length==0||nc(this.i)||uo(this))};function uo(t,e){var n;e?n=e.m:n=t.V++;const s=we(t.F);L(s,"SID",t.J),L(s,"RID",n),L(s,"AID",t.U),yn(t,s),t.o&&t.s&&sr(s,t.o,t.s),n=new fn(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=fc(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),er(t.i,n),wi(n,s,e)}function yn(t,e){t.j&&Ji({},function(n,s){L(e,s,n)})}function fc(t,e,n){n=Math.min(t.l.length,n);var s=t.j?W(t.j.Oa,t.j,t):null;e:{var i=t.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let u=i[c].h;const l=i[c].g;if(u-=r,0>u)r=Math.max(0,i[c].h-100),a=!1;else try{kd(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function pc(t){t.g||t.u||(t.Y=1,zi(t.Ga,t),t.A=0)}function rr(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=hn(W(t.Ga,t),yc(t,t.A)),t.A++,!0)}y.Ga=function(){if(this.u=null,gc(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=hn(W(this.bb,this),t)}};y.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ne(10),Ss(this),gc(this))};function or(t){t.B!=null&&(I.clearTimeout(t.B),t.B=null)}function gc(t){t.g=new fn(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=we(t.oa);L(e,"RID","rpc"),L(e,"SID",t.J),L(e,"CI",t.N?"0":"1"),L(e,"AID",t.U),yn(t,e),L(e,"TYPE","xmlhttp"),t.o&&t.s&&sr(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ts(we(e)),n.s=null,n.U=!0,Ga(n,t)}y.ab=function(){this.v!=null&&(this.v=null,Ss(this),rr(this),ne(19))};function es(t){t.v!=null&&(I.clearTimeout(t.v),t.v=null)}function mc(t,e){var n=null;if(t.g==e){es(t),or(t),t.g=null;var s=2}else if(Ii(t.i,e))n=e.D,ic(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=vs(),Q(s,new qa(s,n)),As(t)}else pc(t);else if(i=e.o,i==3||i==0&&0<t.I||!(s==1&&xd(t,e)||s==2&&rr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Be(t,5);break;case 4:Be(t,10);break;case 3:Be(t,6);break;default:Be(t,2)}}}function yc(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Be(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=W(t.jb,t);n||(n=new Qe("//www.google.com/images/cleardot.gif"),I.location&&I.location.protocol=="http"||Yn(n,"https"),Ts(n)),Dd(n.toString(),s)}else ne(2);t.G=0,t.j&&t.j.va(e),vc(t),dc(t)}y.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ne(2)):(this.h.info("Failed to ping google.com"),ne(1))};function vc(t){t.G=0,t.I=-1,t.j&&((rc(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Fi(t.l),t.l.length=0),t.j.ua())}function wc(t,e,n){let s=yd(n);if(s.i!="")e&&Jn(s,e+"."+s.i),Zn(s,s.m);else{const i=I.location;s=vd(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Vi(t.aa,function(i,r){L(s,r,i)}),e=t.D,n=t.sa,e&&n&&L(s,e,n),L(s,"VER",t.ma),yn(t,s),s}function Ec(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new F(new gn({ib:!0})):new F(t.qa),e.L=t.H,e}function Ic(){}y=Ic.prototype;y.xa=function(){};y.wa=function(){};y.va=function(){};y.ua=function(){};y.Oa=function(){};function ts(){if(ft&&!(10<=Number(Qh)))throw Error("Environmental error: no available transport.")}ts.prototype.g=function(t,e){return new oe(t,e)};function oe(t,e){K.call(this),this.g=new hc(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Wn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Wn(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new At(this)}Y(oe,K);oe.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),zi(W(t.hb,t,e))),ne(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=wc(t,null,t.W),As(t)};oe.prototype.close=function(){ir(this.g)};oe.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,ei(this.g,e)}else this.v?(e={},e.__data__=Ki(t),ei(this.g,e)):ei(this.g,t)};oe.prototype.M=function(){this.g.j=null,delete this.j,ir(this.g),delete this.g,oe.Z.M.call(this)};function Tc(t){Xi.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Y(Tc,Xi);function _c(){Yi.call(this),this.status=1}Y(_c,Yi);function At(t){this.g=t}Y(At,Ic);At.prototype.xa=function(){Q(this.g,"a")};At.prototype.wa=function(t){Q(this.g,new Tc(t))};At.prototype.va=function(t){Q(this.g,new _c)};At.prototype.ua=function(){Q(this.g,"b")};ts.prototype.createWebChannel=ts.prototype.g;oe.prototype.send=oe.prototype.u;oe.prototype.open=oe.prototype.m;oe.prototype.close=oe.prototype.close;ws.NO_ERROR=0;ws.TIMEOUT=8;ws.HTTP_ERROR=6;Ha.COMPLETE="complete";Ka.EventType=dn;dn.OPEN="a";dn.CLOSE="b";dn.ERROR="c";dn.MESSAGE="d";K.prototype.listen=K.prototype.N;F.prototype.listenOnce=F.prototype.O;F.prototype.getLastError=F.prototype.La;F.prototype.getLastErrorCode=F.prototype.Da;F.prototype.getStatus=F.prototype.ba;F.prototype.getResponseJson=F.prototype.Qa;F.prototype.getResponseText=F.prototype.ga;F.prototype.send=F.prototype.ea;var Ud=function(){return new ts},Fd=function(){return vs()},ti=ws,Vd=Ha,Bd=tt,lo={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},$d=gn,On=Ka,jd=F;const ho="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ie.UNAUTHENTICATED=new ie(null),ie.GOOGLE_CREDENTIALS=new ie("google-credentials-uid"),ie.FIRST_PARTY=new ie("first-party-uid"),ie.MOCK_USER=new ie("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ct="9.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe=new Mi("@firebase/firestore");function fo(){return Xe.logLevel}function w(t,...e){if(Xe.logLevel<=N.DEBUG){const n=e.map(ar);Xe.debug(`Firestore (${Ct}): ${t}`,...n)}}function Oe(t,...e){if(Xe.logLevel<=N.ERROR){const n=e.map(ar);Xe.error(`Firestore (${Ct}): ${t}`,...n)}}function po(t,...e){if(Xe.logLevel<=N.WARN){const n=e.map(ar);Xe.warn(`Firestore (${Ct}): ${t}`,...n)}}function ar(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(t="Unexpected state"){const e=`FIRESTORE (${Ct}) INTERNAL ASSERTION FAILED: `+t;throw Oe(e),new Error(e)}function O(t,e){t||_()}function b(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class v extends et{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Hd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ie.UNAUTHENTICATED))}shutdown(){}}class Kd{constructor(e){this.t=e,this.currentUser=ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new je;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new je,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new je)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(O(typeof s.accessToken=="string"),new qd(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return O(e===null||typeof e=="string"),new ie(e)}}class zd{constructor(e,n,s){this.type="FirstParty",this.user=ie.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class Gd{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new zd(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ie.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qd{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=r=>{r.error!=null&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,w("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?i(r):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(O(typeof n.token=="string"),this.p=n.token,new Wd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Xd(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function R(t,e){return t<e?-1:t>e?1:0}function pt(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new v(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new v(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new v(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new v(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return B.fromMillis(Date.now())}static fromDate(e){return B.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new B(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?R(this.nanoseconds,e.nanoseconds):R(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.timestamp=e}static fromTimestamp(e){return new A(e)}static min(){return new A(new B(0,0))}static max(){return new A(new B(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,n,s){n===void 0?n=0:n>e.length&&_(),s===void 0?s=e.length-n:s>e.length-n&&_(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Yt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Yt?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class M extends Yt{construct(e,n,s){return new M(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new v(d.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new M(n)}static emptyPath(){return new M([])}}const Yd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class J extends Yt{construct(e,n,s){return new J(e,n,s)}static isValidIdentifier(e){return Yd.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),J.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new J(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new v(d.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new v(d.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new v(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new v(d.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new J(n)}static emptyPath(){return new J([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.path=e}static fromPath(e){return new E(M.fromString(e))}static fromName(e){return new E(M.fromString(e).popFirst(5))}static empty(){return new E(M.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&M.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return M.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new E(new M(e.slice()))}}function Jd(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=A.fromTimestamp(s===1e9?new B(n+1,0):new B(n,s));return new Me(i,E.empty(),e)}function Zd(t){return new Me(t.readTime,t.key,-1)}class Me{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Me(A.min(),E.empty(),-1)}static max(){return new Me(A.max(),E.empty(),-1)}}function ef(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=E.comparator(t.documentKey,e.documentKey),n!==0?n:R(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vn(t){if(t.code!==d.FAILED_PRECONDITION||t.message!==tf)throw t;w("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&_(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new p((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof p?n:p.resolve(n)}catch(n){return p.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):p.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):p.reject(n)}static resolve(e){return new p((n,s)=>{n(e)})}static reject(e){return new p((n,s)=>{s(e)})}static waitFor(e){return new p((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=p.resolve(!1);for(const s of e)n=n.next(i=>i?p.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new p((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===r&&s(o)},l=>i(l))}})}static doWhile(e,n){return new p((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function wn(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.it(s),this.rt=s=>n.writeSequenceNumber(s))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function kt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Sc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cr.ot=-1;class j{constructor(e,n){this.comparator=e,this.root=n||z.EMPTY}insert(e,n){return new j(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,z.BLACK,null,null))}remove(e){return new j(this.comparator,this.root.remove(e,this.comparator).copy(null,null,z.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mn(this.root,e,this.comparator,!0)}}class Mn{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class z{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:z.RED,this.left=i!=null?i:z.EMPTY,this.right=r!=null?r:z.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new z(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return z.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return z.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,z.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _();const e=this.left.check();if(e!==this.right.check())throw _();return e+(this.isRed()?0:1)}}z.EMPTY=null,z.RED=!0,z.BLACK=!1;z.EMPTY=new class{constructor(){this.size=0}get key(){throw _()}get value(){throw _()}get color(){throw _()}get left(){throw _()}get right(){throw _()}copy(t,e,n,s,i){return this}insert(t,e,n){return new z(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.comparator=e,this.data=new j(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new mo(this.data.getIterator())}getIteratorFrom(e){return new mo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof $)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $(this.comparator);return n.data=e,n}}class mo{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.fields=e,e.sort(J.comparator)}static empty(){return new le([])}unionWith(e){let n=new $(J.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new le(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return pt(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new X(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new X(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return R(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}X.EMPTY_BYTE_STRING=new X("");const sf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Le(t){if(O(!!t),typeof t=="string"){let e=0;const n=sf.exec(t);if(O(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:U(t.seconds),nanos:U(t.nanos)}}function U(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gt(t){return typeof t=="string"?X.fromBase64String(t):X.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Cc(t){const e=t.mapValue.fields.__previous_value__;return Ac(e)?Cc(e):e}function Jt(t){const e=Le(t.mapValue.fields.__local_write_time__.timestampValue);return new B(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class mt{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new mt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof mt&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(t){return t==null}function ns(t){return t===0&&1/t==-1/0}function of(t){return typeof t=="number"&&Number.isInteger(t)&&!ns(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ye(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ac(t)?4:af(t)?9007199254740991:10:_()}function fe(t,e){if(t===e)return!0;const n=Ye(t);if(n!==Ye(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Jt(t).isEqual(Jt(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Le(s.timestampValue),o=Le(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return gt(s.bytesValue).isEqual(gt(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return U(s.geoPointValue.latitude)===U(i.geoPointValue.latitude)&&U(s.geoPointValue.longitude)===U(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return U(s.integerValue)===U(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=U(s.doubleValue),o=U(i.doubleValue);return r===o?ns(r)===ns(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return pt(t.arrayValue.values||[],e.arrayValue.values||[],fe);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(go(r)!==go(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!fe(r[a],o[a])))return!1;return!0}(t,e);default:return _()}}function Zt(t,e){return(t.values||[]).find(n=>fe(n,e))!==void 0}function yt(t,e){if(t===e)return 0;const n=Ye(t),s=Ye(e);if(n!==s)return R(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return R(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=U(i.integerValue||i.doubleValue),a=U(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return yo(t.timestampValue,e.timestampValue);case 4:return yo(Jt(t),Jt(e));case 5:return R(t.stringValue,e.stringValue);case 6:return function(i,r){const o=gt(i),a=gt(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=R(o[c],a[c]);if(u!==0)return u}return R(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=R(U(i.latitude),U(r.latitude));return o!==0?o:R(U(i.longitude),U(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=yt(o[c],a[c]);if(u)return u}return R(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Ln.mapValue&&r===Ln.mapValue)return 0;if(i===Ln.mapValue)return 1;if(r===Ln.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=R(a[l],u[l]);if(h!==0)return h;const f=yt(o[a[l]],c[u[l]]);if(f!==0)return f}return R(a.length,u.length)}(t.mapValue,e.mapValue);default:throw _()}}function yo(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return R(t,e);const n=Le(t),s=Le(e),i=R(n.seconds,s.seconds);return i!==0?i:R(n.nanos,s.nanos)}function ct(t){return Ti(t)}function Ti(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Le(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?gt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,E.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Ti(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Ti(s.fields[a])}`;return r+"}"}(t.mapValue):_();var e,n}function vo(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function _i(t){return!!t&&"integerValue"in t}function ur(t){return!!t&&"arrayValue"in t}function wo(t){return!!t&&"nullValue"in t}function Eo(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xn(t){return!!t&&"mapValue"in t}function Bt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return kt(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Bt(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Bt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function af(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.value=e}static empty(){return new ae({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!xn(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bt(n)}setAll(e){let n=J.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Bt(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());xn(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return fe(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];xn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){kt(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new ae(Bt(this.value))}}function kc(t){const e=[];return kt(t.fields,(n,s)=>{const i=new J([n]);if(xn(s)){const r=kc(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new le(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e,n,s,i,r,o){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(e){return new G(e,0,A.min(),A.min(),ae.empty(),0)}static newFoundDocument(e,n,s){return new G(e,1,n,A.min(),s,0)}static newNoDocument(e,n){return new G(e,2,n,A.min(),ae.empty(),0)}static newUnknownDocument(e,n){return new G(e,3,n,A.min(),ae.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ae.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ae.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=A.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof G&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new G(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ut=null}}function Io(t,e=null,n=[],s=[],i=null,r=null,o=null){return new cf(t,e,n,s,i,r,o)}function lr(t){const e=b(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+ct(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Cs(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ct(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ct(s)).join(",")),e.ut=n}return e.ut}function uf(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${ct(s.value)}`;var s}).join(", ")}]`),Cs(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ct(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ct(n)).join(",")),`Target(${e})`}function hr(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!yf(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!fe(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_o(t.startAt,e.startAt)&&_o(t.endAt,e.endAt)}function bi(t){return E.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class se extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,s):new lf(e,n,s):n==="array-contains"?new ff(e,s):n==="in"?new pf(e,s):n==="not-in"?new gf(e,s):n==="array-contains-any"?new mf(e,s):new se(e,n,s)}static ct(e,n,s){return n==="in"?new hf(e,s):new df(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(yt(n,this.value)):n!==null&&Ye(this.value)===Ye(n)&&this.at(yt(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class lf extends se{constructor(e,n,s){super(e,n,s),this.key=E.fromName(s.referenceValue)}matches(e){const n=E.comparator(e.key,this.key);return this.at(n)}}class hf extends se{constructor(e,n){super(e,"in",n),this.keys=Dc("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class df extends se{constructor(e,n){super(e,"not-in",n),this.keys=Dc("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Dc(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>E.fromName(s.referenceValue))}class ff extends se{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ur(n)&&Zt(n.arrayValue,this.value)}}class pf extends se{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Zt(this.value.arrayValue,n)}}class gf extends se{constructor(e,n){super(e,"not-in",n)}matches(e){if(Zt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Zt(this.value.arrayValue,n)}}class mf extends se{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ur(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Zt(this.value.arrayValue,s))}}class ss{constructor(e,n){this.position=e,this.inclusive=n}}class $t{constructor(e,n="asc"){this.field=e,this.dir=n}}function yf(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function To(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=E.comparator(E.fromName(o.referenceValue),n.key):s=yt(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function _o(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fe(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function vf(t,e,n,s,i,r,o,a){return new En(t,e,n,s,i,r,o,a)}function dr(t){return new En(t)}function wf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Nc(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Rc(t){for(const e of t.filters)if(e.ht())return e.field;return null}function Oc(t){return t.collectionGroup!==null}function en(t){const e=b(t);if(e.lt===null){e.lt=[];const n=Rc(e),s=Nc(e);if(n!==null&&s===null)n.isKeyField()||e.lt.push(new $t(n)),e.lt.push(new $t(J.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.lt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new $t(J.keyField(),r))}}}return e.lt}function Je(t){const e=b(t);if(!e.ft)if(e.limitType==="F")e.ft=Io(e.path,e.collectionGroup,en(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of en(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new $t(r.field,o))}const s=e.endAt?new ss(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ss(e.startAt.position,e.startAt.inclusive):null;e.ft=Io(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.ft}function Ef(t,e,n){return new En(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ks(t,e){return hr(Je(t),Je(e))&&t.limitType===e.limitType}function Mc(t){return`${lr(Je(t))}|lt:${t.limitType}`}function Si(t){return`Query(target=${uf(Je(t))}; limitType=${t.limitType})`}function fr(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):E.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=To(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,en(n),s)||n.endAt&&!function(i,r,o){const a=To(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,en(n),s))}(t,e)}function If(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Lc(t){return(e,n)=>{let s=!1;for(const i of en(t)){const r=Tf(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Tf(t,e,n){const s=t.field.isKeyField()?E.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?yt(a,c):_()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return _()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ns(e)?"-0":e}}function xc(t){return{integerValue:""+t}}function _f(t,e){return of(e)?xc(e):Pc(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(){this._=void 0}}function bf(t,e,n){return t instanceof is?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof tn?Fc(t,e):t instanceof nn?Vc(t,e):function(s,i){const r=Uc(s,i),o=bo(r)+bo(s._t);return _i(r)&&_i(s._t)?xc(o):Pc(s.wt,o)}(t,e)}function Sf(t,e,n){return t instanceof tn?Fc(t,e):t instanceof nn?Vc(t,e):n}function Uc(t,e){return t instanceof rs?_i(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class is extends Ds{}class tn extends Ds{constructor(e){super(),this.elements=e}}function Fc(t,e){const n=Bc(e);for(const s of t.elements)n.some(i=>fe(i,s))||n.push(s);return{arrayValue:{values:n}}}class nn extends Ds{constructor(e){super(),this.elements=e}}function Vc(t,e){let n=Bc(e);for(const s of t.elements)n=n.filter(i=>!fe(i,s));return{arrayValue:{values:n}}}class rs extends Ds{constructor(e,n){super(),this.wt=e,this._t=n}}function bo(t){return U(t.integerValue||t.doubleValue)}function Bc(t){return ur(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Af(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof tn&&s instanceof tn||n instanceof nn&&s instanceof nn?pt(n.elements,s.elements,fe):n instanceof rs&&s instanceof rs?fe(n._t,s._t):n instanceof is&&s instanceof is}(t.transform,e.transform)}class Cf{constructor(e,n){this.version=e,this.transformResults=n}}class ue{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ue}static exists(e){return new ue(void 0,e)}static updateTime(e){return new ue(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Un(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ns{}function $c(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new pr(t.key,ue.none()):new In(t.key,t.data,ue.none());{const n=t.data,s=ae.empty();let i=new $(J.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new nt(t.key,s,new le(i.toArray()),ue.none())}}function kf(t,e,n){t instanceof In?function(s,i,r){const o=s.value.clone(),a=Ao(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof nt?function(s,i,r){if(!Un(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Ao(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(jc(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function jt(t,e,n,s){return t instanceof In?function(i,r,o,a){if(!Un(i.precondition,r))return o;const c=i.value.clone(),u=Co(i.fieldTransforms,a,r);return c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof nt?function(i,r,o,a){if(!Un(i.precondition,r))return o;const c=Co(i.fieldTransforms,a,r),u=r.data;return u.setAll(jc(i)),u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(i,r,o){return Un(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function Df(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Uc(s.transform,i||null);r!=null&&(n===null&&(n=ae.empty()),n.set(s.field,r))}return n||null}function So(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&pt(n,s,(i,r)=>Af(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class In extends Ns{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class nt extends Ns{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function jc(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Ao(t,e,n){const s=new Map;O(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Sf(o,a,n[i]))}return s}function Co(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,bf(r,o,e))}return s}class pr extends Ns{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Nf extends Ns{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x,D;function Of(t){switch(t){default:return _();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function qc(t){if(t===void 0)return Oe("GRPC error has no .code"),d.UNKNOWN;switch(t){case x.OK:return d.OK;case x.CANCELLED:return d.CANCELLED;case x.UNKNOWN:return d.UNKNOWN;case x.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case x.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case x.INTERNAL:return d.INTERNAL;case x.UNAVAILABLE:return d.UNAVAILABLE;case x.UNAUTHENTICATED:return d.UNAUTHENTICATED;case x.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case x.NOT_FOUND:return d.NOT_FOUND;case x.ALREADY_EXISTS:return d.ALREADY_EXISTS;case x.PERMISSION_DENIED:return d.PERMISSION_DENIED;case x.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case x.ABORTED:return d.ABORTED;case x.OUT_OF_RANGE:return d.OUT_OF_RANGE;case x.UNIMPLEMENTED:return d.UNIMPLEMENTED;case x.DATA_LOSS:return d.DATA_LOSS;default:return _()}}(D=x||(x={}))[D.OK=0]="OK",D[D.CANCELLED=1]="CANCELLED",D[D.UNKNOWN=2]="UNKNOWN",D[D.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",D[D.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",D[D.NOT_FOUND=5]="NOT_FOUND",D[D.ALREADY_EXISTS=6]="ALREADY_EXISTS",D[D.PERMISSION_DENIED=7]="PERMISSION_DENIED",D[D.UNAUTHENTICATED=16]="UNAUTHENTICATED",D[D.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",D[D.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",D[D.ABORTED=10]="ABORTED",D[D.OUT_OF_RANGE=11]="OUT_OF_RANGE",D[D.UNIMPLEMENTED=12]="UNIMPLEMENTED",D[D.INTERNAL=13]="INTERNAL",D[D.UNAVAILABLE=14]="UNAVAILABLE",D[D.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){kt(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Sc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=new j(E.comparator);function Ee(){return Mf}const Hc=new j(E.comparator);function xt(...t){let e=Hc;for(const n of t)e=e.insert(n.key,n);return e}function Kc(t){let e=Hc;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function $e(){return qt()}function zc(){return qt()}function qt(){return new Dt(t=>t.toString(),(t,e)=>t.isEqual(e))}const Lf=new j(E.comparator),Pf=new $(E.comparator);function k(...t){let e=Pf;for(const n of t)e=e.add(n);return e}const xf=new $(R);function Gc(){return xf}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,Tn.createSynthesizedTargetChangeForCurrentChange(e,n)),new Rs(A.min(),s,Gc(),Ee(),k())}}class Tn{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Tn(X.EMPTY_BYTE_STRING,n,k(),k(),k())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,n,s,i){this.gt=e,this.removedTargetIds=n,this.key=s,this.yt=i}}class Wc{constructor(e,n){this.targetId=e,this.It=n}}class Qc{constructor(e,n,s=X.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class ko{constructor(){this.Tt=0,this.Et=No(),this.At=X.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=k(),n=k(),s=k();return this.Et.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:_()}}),new Tn(this.At,this.Rt,e,n,s)}Dt(){this.bt=!1,this.Et=No()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class Uf{constructor(e){this.Mt=e,this.Ft=new Map,this.$t=Ee(),this.Bt=Do(),this.Lt=new $(R)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const s=this.Qt(n);switch(e.state){case 0:this.jt(n)&&s.Vt(e.resumeToken);break;case 1:s.kt(),s.Pt||s.Dt(),s.Vt(e.resumeToken);break;case 2:s.kt(),s.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(s.Ot(),s.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),s.Vt(e.resumeToken));break;default:_()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((s,i)=>{this.jt(i)&&n(i)})}zt(e){const n=e.targetId,s=e.It.count,i=this.Ht(n);if(i){const r=i.target;if(bi(r))if(s===0){const o=new E(r.path);this.Kt(n,o,G.newNoDocument(o,A.min()))}else O(s===1);else this.Jt(n)!==s&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((r,o)=>{const a=this.Ht(o);if(a){if(r.current&&bi(a.target)){const c=new E(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,G.newNoDocument(c,e))}r.vt&&(n.set(o,r.St()),r.Dt())}});let s=k();this.Bt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ht(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.$t.forEach((r,o)=>o.setReadTime(e));const i=new Rs(e,n,this.Lt,this.$t,s);return this.$t=Ee(),this.Bt=Do(),this.Lt=new $(R),i}qt(e,n){if(!this.jt(e))return;const s=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,s),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,s){if(!this.jt(e))return;const i=this.Qt(e);this.Xt(e,n)?i.Ct(n,1):i.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),s&&(this.$t=this.$t.insert(n,s))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Mt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new ko,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new $(R),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||w("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Mt.te(e)}Wt(e){this.Ft.set(e,new ko),this.Mt.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Mt.getRemoteKeysForTarget(e).has(n)}}function Do(){return new j(E.comparator)}function No(){return new j(E.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Vf=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Bf{constructor(e,n){this.databaseId=e,this.dt=n}}function os(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xc(t,e){return t.dt?e.toBase64():e.toUint8Array()}function $f(t,e){return os(t,e.toTimestamp())}function ve(t){return O(!!t),A.fromTimestamp(function(e){const n=Le(e);return new B(n.seconds,n.nanos)}(t))}function gr(t,e){return function(n){return new M(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Yc(t){const e=M.fromString(t);return O(eu(e)),e}function Ai(t,e){return gr(t.databaseId,e.path)}function ni(t,e){const n=Yc(e);if(n.get(1)!==t.databaseId.projectId)throw new v(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new v(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new E(Jc(n))}function Ci(t,e){return gr(t.databaseId,e)}function jf(t){const e=Yc(t);return e.length===4?M.emptyPath():Jc(e)}function ki(t){return new M(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Jc(t){return O(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ro(t,e,n){return{name:Ai(t,e),fields:n.value.mapValue.fields}}function qf(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:_()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,u){return c.dt?(O(u===void 0||typeof u=="string"),X.fromBase64String(u||"")):(O(u===void 0||u instanceof Uint8Array),X.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?d.UNKNOWN:qc(c.code);return new v(u,c.message||"")}(o);n=new Qc(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=ni(t,s.document.name),r=ve(s.document.updateTime),o=new ae({mapValue:{fields:s.document.fields}}),a=G.newFoundDocument(i,r,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Fn(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=ni(t,s.document),r=s.readTime?ve(s.readTime):A.min(),o=G.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Fn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=ni(t,s.document),r=s.removedTargetIds||[];n=new Fn([],r,i,null)}else{if(!("filter"in e))return _();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new Rf(i),o=s.targetId;n=new Wc(o,r)}}return n}function Hf(t,e){let n;if(e instanceof In)n={update:Ro(t,e.key,e.value)};else if(e instanceof pr)n={delete:Ai(t,e.key)};else if(e instanceof nt)n={update:Ro(t,e.key,e.data),updateMask:ep(e.fieldMask)};else{if(!(e instanceof Nf))return _();n={verify:Ai(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof is)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof tn)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof nn)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof rs)return{fieldPath:r.field.canonicalString(),increment:o._t};throw _()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:$f(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:_()}(t,e.precondition)),n}function Kf(t,e){return t&&t.length>0?(O(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?ve(s.updateTime):ve(i);return r.isEqual(A.min())&&(r=ve(i)),new Cf(r,s.transformResults||[])}(n,e))):[]}function zf(t,e){return{documents:[Ci(t,e.path)]}}function Gf(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ci(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ci(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length===0)return;const u=c.map(l=>function(h){if(h.op==="=="){if(Eo(h.value))return{unaryFilter:{field:it(h.field),op:"IS_NAN"}};if(wo(h.value))return{unaryFilter:{field:it(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Eo(h.value))return{unaryFilter:{field:it(h.field),op:"IS_NOT_NAN"}};if(wo(h.value))return{unaryFilter:{field:it(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:it(h.field),op:Yf(h.op),value:h.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:it(l.field),direction:Xf(l.dir)}}(u))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,u){return c.dt||Cs(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Wf(t){let e=jf(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){O(s===1);const l=n.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let r=[];n.where&&(r=Zc(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new $t(ot(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Cs(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new ss(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new ss(f,h)}(n.endAt)),vf(e,i,o,r,a,"F",c,u)}function Qf(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return _()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Zc(t){return t?t.unaryFilter!==void 0?[Zf(t)]:t.fieldFilter!==void 0?[Jf(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Zc(e)).reduce((e,n)=>e.concat(n)):_():[]}function Xf(t){return Ff[t]}function Yf(t){return Vf[t]}function it(t){return{fieldPath:t.canonicalString()}}function ot(t){return J.fromServerFormat(t.fieldPath)}function Jf(t){return se.create(ot(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return _()}}(t.fieldFilter.op),t.fieldFilter.value)}function Zf(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ot(t.unaryFilter.field);return se.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ot(t.unaryFilter.field);return se.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ot(t.unaryFilter.field);return se.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ot(t.unaryFilter.field);return se.create(i,"!=",{nullValue:"NULL_VALUE"});default:return _()}}function ep(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function eu(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&kf(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=jt(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=jt(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=zc();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=$c(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(A.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),k())}isEqual(e){return this.batchId===e.batchId&&pt(this.mutations,e.mutations,(n,s)=>So(n,s))&&pt(this.baseMutations,e.baseMutations,(n,s)=>So(n,s))}}class mr{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){O(e.mutations.length===s.length);let i=Lf;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new mr(e,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n,s,i,r=A.min(),o=A.min(),a=X.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new qe(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new qe(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new qe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e){this.ne=e}}function ip(t){const e=Wf({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ef(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(){this.ze=new op}addToCollectionParentIndex(e,n){return this.ze.add(n),p.resolve()}getCollectionParents(e,n){return p.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return p.resolve()}deleteFieldIndex(e,n){return p.resolve()}getDocumentsMatchingTarget(e,n){return p.resolve(null)}getIndexType(e,n){return p.resolve(0)}getFieldIndexes(e,n){return p.resolve([])}getNextCollectionGroupToUpdate(e){return p.resolve(null)}getMinOffset(e,n){return p.resolve(Me.min())}getMinOffsetFromCollectionGroup(e,n){return p.resolve(Me.min())}updateCollectionGroup(e,n,s){return p.resolve()}updateIndexEntries(e,n){return p.resolve()}}class op{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new $(M.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new $(M.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new vt(0)}static Rn(){return new vt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(){this.changes=new Dt(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,G.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?p.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.getBaseDocument(e,n,s))).next(i=>(s!==null&&jt(s.mutation,i,le.empty(),B.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,k()).next(()=>s))}getLocalViewOfDocuments(e,n,s=k()){const i=$e();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=xt();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=$e();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,k()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Ee();const o=qt(),a=qt();return n.forEach((c,u)=>{const l=s.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof nt)?r=r.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),jt(l.mutation,u,l.mutation.getFieldMask(),B.now()))}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new cp(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=qt();let i=new j((o,a)=>o-a),r=k();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||le.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(i.get(a.batchId)||k()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=zc();l.forEach(f=>{if(!r.has(f)){const g=$c(n.get(f),s.get(f));g!==null&&h.set(f,g),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return p.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return E.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Oc(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):p.resolve($e());let a=-1,c=r;return o.next(u=>p.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(l)?p.resolve():this.getBaseDocument(e,l,h).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,c,u,k())).next(l=>({batchId:a,changes:Kc(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new E(n)).next(s=>{let i=xt();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=xt();return this.indexManager.getCollectionParents(e,i).next(o=>p.forEach(o,a=>{const c=function(u,l){return new En(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{r=r.insert(l,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(r=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,G.newInvalidDocument(u)))});let o=xt();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&jt(u.mutation,c,le.empty(),B.now()),fr(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):p.resolve(G.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return p.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var s;return this.Jn.set(n.id,{id:(s=n).id,version:s.version,createTime:ve(s.createTime)}),p.resolve()}getNamedQuery(e,n){return p.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(s){return{name:s.name,query:ip(s.bundledQuery),readTime:ve(s.readTime)}}(n)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(){this.overlays=new j(E.comparator),this.Xn=new Map}getOverlay(e,n){return p.resolve(this.overlays.get(n))}getOverlays(e,n){const s=$e();return p.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ie(e,n,r)}),p.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.Xn.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Xn.delete(s)),p.resolve()}getOverlaysForCollection(e,n,s){const i=$e(),r=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return p.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new j((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=r.get(u.largestBatchId);l===null&&(l=$e(),r=r.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=$e(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return p.resolve(a)}ie(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Xn.get(i.largestBatchId).delete(s.key);this.Xn.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new np(n,s));let r=this.Xn.get(n);r===void 0&&(r=k(),this.Xn.set(n,r)),this.Xn.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this.Zn=new $(q.ts),this.es=new $(q.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const s=new q(e,n);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.rs(new q(e,n))}os(e,n){e.forEach(s=>this.removeReference(s,n))}us(e){const n=new E(new M([])),s=new q(n,e),i=new q(n,e+1),r=[];return this.es.forEachInRange([s,i],o=>{this.rs(o),r.push(o.key)}),r}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new E(new M([])),s=new q(n,e),i=new q(n,e+1);let r=k();return this.es.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new q(e,0),s=this.Zn.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class q{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return E.comparator(e.key,n.key)||R(e.ls,n.ls)}static ns(e,n){return R(e.ls,n.ls)||E.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new $(q.ts)}checkEmpty(e){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new tp(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ds=this.ds.add(new q(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(e,n){return p.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ws(s),r=i<0?0:i;return p.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new q(n,0),i=new q(n,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([s,i],o=>{const a=this._s(o.ls);r.push(a)}),p.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new $(R);return n.forEach(i=>{const r=new q(i,0),o=new q(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([r,o],a=>{s=s.add(a.ls)})}),p.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;E.isDocumentKey(r)||(r=r.child(""));const o=new q(new E(r),0);let a=new $(R);return this.ds.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.ls)),!0)},o),p.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(s=>{const i=this._s(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){O(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ds;return p.forEach(n.mutations,i=>{const r=new q(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=s})}In(e){}containsKey(e,n){const s=new q(n,0),i=this.ds.firstAfterOrEqual(s);return p.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,p.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e){this.ps=e,this.docs=new j(E.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.ps(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return p.resolve(s?s.document.mutableCopy():G.newInvalidDocument(n))}getEntries(e,n){let s=Ee();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():G.newInvalidDocument(i))}),p.resolve(s)}getAllFromCollection(e,n,s){let i=Ee();const r=new E(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||ef(Zd(c),s)<=0||(i=i.insert(c.key,c.mutableCopy()))}return p.resolve(i)}getAllFromCollectionGroup(e,n,s,i){_()}Is(e,n){return p.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new pp(this)}getSize(e){return p.resolve(this.size)}}class pp extends ap{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.zn.addEntry(e,i)):this.zn.removeEntry(s)}),p.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e){this.persistence=e,this.Ts=new Dt(n=>lr(n),hr),this.lastRemoteSnapshotVersion=A.min(),this.highestTargetId=0,this.Es=0,this.As=new yr,this.targetCount=0,this.Rs=vt.An()}forEachTarget(e,n){return this.Ts.forEach((s,i)=>n(i)),p.resolve()}getLastRemoteSnapshotVersion(e){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return p.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Es&&(this.Es=n),p.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new vt(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,p.resolve()}updateTargetData(e,n){return this.vn(n),p.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Ts.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),p.waitFor(r).next(()=>i)}getTargetCount(e){return p.resolve(this.targetCount)}getTargetData(e,n){const s=this.Ts.get(n)||null;return p.resolve(s)}addMatchingKeys(e,n,s){return this.As.ss(n,s),p.resolve()}removeMatchingKeys(e,n,s){this.As.os(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),p.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),p.resolve()}getMatchingKeysForTargetId(e,n){const s=this.As.hs(n);return p.resolve(s)}containsKey(e,n){return p.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,n){this.bs={},this.overlays={},this.Ps=new cr(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new gp(this),this.indexManager=new rp,this.remoteDocumentCache=function(s){return new fp(s)}(s=>this.referenceDelegate.Ss(s)),this.wt=new sp(n),this.Ds=new lp(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new hp,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.bs[e.toKey()];return s||(s=new dp(n,this.referenceDelegate),this.bs[e.toKey()]=s),s}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,s){w("MemoryPersistence","Starting transaction:",e);const i=new yp(this.Ps.next());return this.referenceDelegate.Cs(),s(i).next(r=>this.referenceDelegate.xs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ns(e,n){return p.or(Object.values(this.bs).map(s=>()=>s.containsKey(e,n)))}}class yp extends nf{constructor(e){super(),this.currentSequenceNumber=e}}class vr{constructor(e){this.persistence=e,this.ks=new yr,this.Os=null}static Ms(e){return new vr(e)}get Fs(){if(this.Os)return this.Os;throw _()}addReference(e,n,s){return this.ks.addReference(s,n),this.Fs.delete(s.toString()),p.resolve()}removeReference(e,n,s){return this.ks.removeReference(s,n),this.Fs.add(s.toString()),p.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),p.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(i=>this.Fs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Fs.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Cs(){this.Os=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Fs,s=>{const i=E.fromPath(s);return this.$s(e,i).next(r=>{r||n.removeEntry(i,A.min())})}).next(()=>(this.Os=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(s=>{s?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return p.or([()=>p.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Pi=s,this.vi=i}static Vi(e,n){let s=k(),i=k();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new wr(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Ci(e,n).next(r=>r||this.xi(e,n,i,s)).next(r=>r||this.Ni(e,n))}Ci(e,n){return p.resolve(null)}xi(e,n,s,i){return wf(n)||i.isEqual(A.min())?this.Ni(e,n):this.Di.getDocuments(e,s).next(r=>{const o=this.ki(n,r);return this.Oi(n,o,s,i)?this.Ni(e,n):(fo()<=N.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Si(n)),this.Mi(e,o,n,Jd(i,-1)))})}ki(e,n){let s=new $(Lc(e));return n.forEach((i,r)=>{fr(e,r)&&(s=s.add(r))}),s}Oi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ni(e,n){return fo()<=N.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",Si(n)),this.Di.getDocumentsMatchingQuery(e,n,Me.min())}Mi(e,n,s,i){return this.Di.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e,n,s,i){this.persistence=e,this.Fi=n,this.wt=i,this.$i=new j(R),this.Bi=new Dt(r=>lr(r),hr),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(s)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new up(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function Ep(t,e,n,s){return new wp(t,e,n,s)}async function tu(t,e){const n=b(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=k();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of r){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Ki:u,removedBatchIds:o,addedBatchIds:a}))})})}function Ip(t,e){const n=b(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=p.resolve();return h.forEach(g=>{f=f.next(()=>u.getEntry(a,g)).next(m=>{const C=c.docVersions.get(g);O(C!==null),m.version.compareTo(C)<0&&(l.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),u.addEntry(m)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=k();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function nu(t){const e=b(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function Tp(t,e){const n=b(t),s=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const a=[];e.targetChanges.forEach((l,h)=>{const f=i.get(h);if(!f)return;a.push(n.Vs.removeMatchingKeys(r,l.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(r,l.addedDocuments,h)));let g=f.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(X.EMPTY_BYTE_STRING,A.min()).withLastLimboFreeSnapshotVersion(A.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),i=i.insert(h,g),function(m,C,S){return m.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(f,g,l)&&a.push(n.Vs.updateTargetData(r,g))});let c=Ee(),u=k();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,l))}),a.push(_p(r,o,e.documentUpdates).next(l=>{c=l.Gi,u=l.Qi})),!s.isEqual(A.min())){const l=n.Vs.getLastRemoteSnapshotVersion(r).next(h=>n.Vs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(l)}return p.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(n.$i=i,r))}function _p(t,e,n){let s=k(),i=k();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Ee();return n.forEach((a,c)=>{const u=r.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(A.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):w("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Gi:o,Qi:i}})}function bp(t,e){const n=b(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Sp(t,e){const n=b(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Vs.getTargetData(s,e).next(r=>r?(i=r,p.resolve(i)):n.Vs.allocateTargetId(s).next(o=>(i=new qe(e,o,0,s.currentSequenceNumber),n.Vs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.$i.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.$i=n.$i.insert(s.targetId,s),n.Bi.set(e,s.targetId)),s})}async function Di(t,e,n){const s=b(t),i=s.$i.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!wn(o))throw o;w("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.$i=s.$i.remove(e),s.Bi.delete(i.target)}function Oo(t,e,n){const s=b(t);let i=A.min(),r=k();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=b(a),h=l.Bi.get(u);return h!==void 0?p.resolve(l.$i.get(h)):l.Vs.getTargetData(c,u)}(s,o,Je(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Fi.getDocumentsMatchingQuery(o,e,n?i:A.min(),n?r:k())).next(a=>(Ap(s,If(e),a),{documents:a,ji:r})))}function Ap(t,e,n){let s=A.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Li.set(e,s)}class Mo{constructor(){this.activeTargetIds=Gc()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Cp{constructor(){this.Fr=new Mo,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,s){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new Mo,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){w("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,s,i,r){const o=this.oo(e,n);w("RestConnection","Sending: ",o,s);const a={};return this.uo(a,i,r),this.co(e,o,a,s).then(c=>(w("RestConnection","Received: ",c),c),c=>{throw po("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}ao(e,n,s,i,r,o){return this.ro(e,n,s,i,r)}uo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ct,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}oo(e,n){const s=Dp[e];return`${this.so}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,s,i){return new Promise((r,o)=>{const a=new jd;a.listenOnce(Vd.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ti.NO_ERROR:const u=a.getResponseJson();w("Connection","XHR received:",JSON.stringify(u)),r(u);break;case ti.TIMEOUT:w("Connection",'RPC "'+e+'" timed out'),o(new v(d.DEADLINE_EXCEEDED,"Request time out"));break;case ti.HTTP_ERROR:const l=a.getStatus();if(w("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(m)>=0?m:d.UNKNOWN}(h.status);o(new v(f,h.message))}else o(new v(d.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new v(d.UNAVAILABLE,"Connection failed."));break;default:_()}}finally{w("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}ho(e,n,s){const i=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Ud(),o=Fd(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new $d({})),this.uo(a.initMessageHeaders,n,s),pa()||ma()||vl()||ya()||wl()||ga()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=i.join("");w("Connection","Creating WebChannel: "+c,a);const u=r.createWebChannel(c,a);let l=!1,h=!1;const f=new Np({jr:m=>{h?w("Connection","Not sending because WebChannel is closed:",m):(l||(w("Connection","Opening WebChannel transport."),u.open(),l=!0),w("Connection","WebChannel sending:",m),u.send(m))},Wr:()=>u.close()}),g=(m,C,S)=>{m.listen(C,P=>{try{S(P)}catch(V){setTimeout(()=>{throw V},0)}})};return g(u,On.EventType.OPEN,()=>{h||w("Connection","WebChannel transport opened.")}),g(u,On.EventType.CLOSE,()=>{h||(h=!0,w("Connection","WebChannel transport closed"),f.eo())}),g(u,On.EventType.ERROR,m=>{h||(h=!0,po("Connection","WebChannel transport errored:",m),f.eo(new v(d.UNAVAILABLE,"The operation could not be completed")))}),g(u,On.EventType.MESSAGE,m=>{var C;if(!h){const S=m.data[0];O(!!S);const P=S,V=P.error||((C=P[0])===null||C===void 0?void 0:C.error);if(V){w("Connection","WebChannel received error:",V);const pe=V.status;let _e=function(Ot){const Mt=x[Ot];if(Mt!==void 0)return qc(Mt)}(pe),Rt=V.message;_e===void 0&&(_e=d.INTERNAL,Rt="Unknown error status: "+pe+" with message "+V.message),h=!0,f.eo(new v(_e,Rt)),u.close()}else w("Connection","WebChannel received:",S),f.no(S)}}),g(o,Bd.STAT_EVENT,m=>{m.stat===lo.PROXY?w("Connection","Detected buffering proxy"):m.stat===lo.NOPROXY&&w("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.Zr()},0),f}}function si(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(t){return new Bf(t,!0)}class su{constructor(e,n,s=1e3,i=1.5,r=6e4){this.js=e,this.timerId=n,this.lo=s,this.fo=i,this._o=r,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-s);i>0&&w("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,n,s,i,r,o,a,c){this.js=e,this.Ao=s,this.Ro=i,this.bo=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new su(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(e){this.Fo(),this.stream.send(e)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(Oe(n.toString()),Oe("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Po===n&&this.Uo(s,i)},s=>{e(()=>{const i=new v(d.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(i)})})}Uo(e,n){const s=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{s(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{s(()=>this.qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return w("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Op extends iu{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.wt=r}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=qf(this.wt,e),s=function(i){if(!("targetChange"in i))return A.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?A.min():r.readTime?ve(r.readTime):A.min()}(e);return this.listener.Go(n,s)}Qo(e){const n={};n.database=ki(this.wt),n.addTarget=function(i,r){let o;const a=r.target;return o=bi(a)?{documents:zf(i,a)}:{query:Gf(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Xc(i,r.resumeToken):r.snapshotVersion.compareTo(A.min())>0&&(o.readTime=os(i,r.snapshotVersion.toTimestamp())),o}(this.wt,e);const s=Qf(this.wt,e);s&&(n.labels=s),this.Mo(n)}jo(e){const n={};n.database=ki(this.wt),n.removeTarget=e,this.Mo(n)}}class Mp extends iu{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.wt=r,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(O(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=Kf(e.writeResults,e.commitTime),s=ve(e.commitTime);return this.listener.Jo(s,n)}return O(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=ki(this.wt),this.Mo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Hf(this.wt,s))};this.Mo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=s,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new v(d.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.bo.ro(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new v(d.UNKNOWN,i.toString())})}ao(e,n,s,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.bo.ao(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new v(d.UNKNOWN,r.toString())})}terminate(){this.Zo=!0}}class Pp{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Oe(n),this.su=!1):w("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=r,this.du.Br(o=>{s.enqueueAndForget(async()=>{st(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=b(a);c.lu.add(4),await _n(c),c._u.set("Unknown"),c.lu.delete(4),await Ms(c)}(this))})}),this._u=new Pp(s,i)}}async function Ms(t){if(st(t))for(const e of t.fu)await e(!0)}async function _n(t){for(const e of t.fu)await e(!1)}function ru(t,e){const n=b(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Tr(n)?Ir(n):Nt(n).Co()&&Er(n,e))}function ou(t,e){const n=b(t),s=Nt(n);n.hu.delete(e),s.Co()&&au(n,e),n.hu.size===0&&(s.Co()?s.ko():st(n)&&n._u.set("Unknown"))}function Er(t,e){t.wu.Nt(e.targetId),Nt(t).Qo(e)}function au(t,e){t.wu.Nt(e),Nt(t).jo(e)}function Ir(t){t.wu=new Uf({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Nt(t).start(),t._u.iu()}function Tr(t){return st(t)&&!Nt(t).Do()&&t.hu.size>0}function st(t){return b(t).lu.size===0}function cu(t){t.wu=void 0}async function Up(t){t.hu.forEach((e,n)=>{Er(t,e)})}async function Fp(t,e){cu(t),Tr(t)?(t._u.uu(e),Ir(t)):t._u.set("Unknown")}async function Vp(t,e,n){if(t._u.set("Online"),e instanceof Qc&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.hu.delete(o),s.wu.removeTarget(o))}(t,e)}catch(s){w("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await as(t,s)}else if(e instanceof Fn?t.wu.Ut(e):e instanceof Wc?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(A.min()))try{const s=await nu(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.wu.Yt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.hu.get(c);u&&i.hu.set(c,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.hu.get(a);if(!c)return;i.hu.set(a,c.withResumeToken(X.EMPTY_BYTE_STRING,c.snapshotVersion)),au(i,a);const u=new qe(c.target,a,1,c.sequenceNumber);Er(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){w("RemoteStore","Failed to raise snapshot:",s),await as(t,s)}}async function as(t,e,n){if(!wn(e))throw e;t.lu.add(1),await _n(t),t._u.set("Offline"),n||(n=()=>nu(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Ms(t)})}function uu(t,e){return e().catch(n=>as(t,n,e))}async function Ls(t){const e=b(t),n=Pe(e);let s=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;Bp(e);)try{const i=await bp(e.localStore,s);if(i===null){e.au.length===0&&n.ko();break}s=i.batchId,$p(e,i)}catch(i){await as(e,i)}lu(e)&&hu(e)}function Bp(t){return st(t)&&t.au.length<10}function $p(t,e){t.au.push(e);const n=Pe(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function lu(t){return st(t)&&!Pe(t).Do()&&t.au.length>0}function hu(t){Pe(t).start()}async function jp(t){Pe(t).Xo()}async function qp(t){const e=Pe(t);for(const n of t.au)e.Ho(n.mutations)}async function Hp(t,e,n){const s=t.au.shift(),i=mr.from(s,e,n);await uu(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ls(t)}async function Kp(t,e){e&&Pe(t).zo&&await async function(n,s){if(i=s.code,Of(i)&&i!==d.ABORTED){const r=n.au.shift();Pe(n).No(),await uu(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Ls(n)}var i}(t,e),lu(t)&&hu(t)}async function Po(t,e){const n=b(t);n.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");const s=st(n);n.lu.add(3),await _n(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Ms(n)}async function zp(t,e){const n=b(t);e?(n.lu.delete(2),await Ms(n)):e||(n.lu.add(2),await _n(n),n._u.set("Unknown"))}function Nt(t){return t.mu||(t.mu=function(e,n,s){const i=b(e);return i.tu(),new Op(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,s)}(t.datastore,t.asyncQueue,{zr:Up.bind(null,t),Jr:Fp.bind(null,t),Go:Vp.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),Tr(t)?Ir(t):t._u.set("Unknown")):(await t.mu.stop(),cu(t))})),t.mu}function Pe(t){return t.gu||(t.gu=function(e,n,s){const i=b(e);return i.tu(),new Mp(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,s)}(t.datastore,t.asyncQueue,{zr:jp.bind(null,t),Jr:Kp.bind(null,t),Yo:qp.bind(null,t),Jo:Hp.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await Ls(t)):(await t.gu.stop(),t.au.length>0&&(w("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new je,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new _r(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new v(d.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function br(t,e){if(Oe("AsyncQueue",`${e}: ${t}`),wn(t))return new v(d.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.comparator=e?(n,s)=>e(n,s)||E.comparator(n.key,s.key):(n,s)=>E.comparator(n.key,s.key),this.keyedMap=xt(),this.sortedSet=new j(this.comparator)}static emptySet(e){return new ut(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ut;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(){this.yu=new j(E.comparator)}track(e){const n=e.doc.key,s=this.yu.get(n);s?e.type!==0&&s.type===3?this.yu=this.yu.insert(n,e):e.type===3&&s.type!==1?this.yu=this.yu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.yu=this.yu.remove(n):e.type===1&&s.type===2?this.yu=this.yu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):_():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,s)=>{e.push(s)}),e}}class wt{constructor(e,n,s,i,r,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new wt(e,n,ut.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ks(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(){this.Iu=void 0,this.listeners=[]}}class Wp{constructor(){this.queries=new Dt(e=>Mc(e),ks),this.onlineState="Unknown",this.Tu=new Set}}async function Qp(t,e){const n=b(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Gp),i)try{r.Iu=await n.onListen(s)}catch(o){const a=br(o,`Initialization of query '${Si(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Eu(n.onlineState),r.Iu&&e.Au(r.Iu)&&Sr(n)}async function Xp(t,e){const n=b(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Yp(t,e){const n=b(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Au(i)&&(s=!0);o.Iu=i}}s&&Sr(n)}function Jp(t,e,n){const s=b(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Sr(t){t.Tu.forEach(e=>{e.next()})}class Zp{constructor(e,n,s){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new wt(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Du||!s)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=wt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e){this.key=e}}class fu{constructor(e){this.key=e}}class eg{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=k(),this.mutatedKeys=k(),this.Lu=Lc(e),this.Uu=new ut(this.Lu)}get qu(){return this.Fu}Ku(e,n){const s=n?n.Gu:new xo,i=n?n.Uu:this.Uu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const f=i.get(l),g=fr(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),C=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let S=!1;f&&g?f.data.isEqual(g.data)?m!==C&&(s.track({type:3,doc:g}),S=!0):this.Qu(f,g)||(s.track({type:2,doc:g}),S=!0,(c&&this.Lu(g,c)>0||u&&this.Lu(g,u)<0)&&(a=!0)):!f&&g?(s.track({type:0,doc:g}),S=!0):f&&!g&&(s.track({type:1,doc:f}),S=!0,(c||u)&&(a=!0)),S&&(g?(o=o.add(g),r=C?r.add(l):r.delete(l)):(o=o.delete(l),r=r.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),r=r.delete(l.key),s.track({type:1,doc:l})}return{Uu:o,Gu:s,Oi:a,mutatedKeys:r}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const r=e.Gu.pu();r.sort((u,l)=>function(h,f){const g=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _()}};return g(h)-g(f)}(u.type,l.type)||this.Lu(u.doc,l.doc)),this.ju(s);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,r.length!==0||c?{snapshot:new wt(this.query,e.Uu,i,r,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new xo,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=k(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const n=[];return e.forEach(s=>{this.Bu.has(s)||n.push(new fu(s))}),this.Bu.forEach(s=>{e.has(s)||n.push(new du(s))}),n}Ju(e){this.Fu=e.ji,this.Bu=k();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return wt.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class tg{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class ng{constructor(e){this.key=e,this.Xu=!1}}class sg{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new Dt(a=>Mc(a),ks),this.ec=new Map,this.nc=new Set,this.sc=new j(E.comparator),this.ic=new Map,this.rc=new yr,this.oc={},this.uc=new Map,this.cc=vt.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function ig(t,e){const n=pg(t);let s,i;const r=n.tc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Yu();else{const o=await Sp(n.localStore,Je(e));n.isPrimaryClient&&ru(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await rg(n,e,s,a==="current")}return i}async function rg(t,e,n,s){t.hc=(l,h,f)=>async function(g,m,C,S){let P=m.view.Ku(C);P.Oi&&(P=await Oo(g.localStore,m.query,!1).then(({documents:_e})=>m.view.Ku(_e,P)));const V=S&&S.targetChanges.get(m.targetId),pe=m.view.applyChanges(P,g.isPrimaryClient,V);return Fo(g,m.targetId,pe.zu),pe.snapshot}(t,l,h,f);const i=await Oo(t.localStore,e,!0),r=new eg(e,i.ji),o=r.Ku(i.documents),a=Tn.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=r.applyChanges(o,t.isPrimaryClient,a);Fo(t,n,c.zu);const u=new tg(e,n,r);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function og(t,e){const n=b(t),s=n.tc.get(e),i=n.ec.get(s.targetId);if(i.length>1)return n.ec.set(s.targetId,i.filter(r=>!ks(r,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Di(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),ou(n.remoteStore,s.targetId),Ni(n,s.targetId)}).catch(vn)):(Ni(n,s.targetId),await Di(n.localStore,s.targetId,!0))}async function ag(t,e,n){const s=gg(t);try{const i=await function(r,o){const a=b(r),c=B.now(),u=o.reduce((f,g)=>f.add(g.key),k());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=Ee(),m=k();return a.Ui.getEntries(f,u).next(C=>{g=C,g.forEach((S,P)=>{P.isValidDocument()||(m=m.add(S))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,g)).next(C=>{l=C;const S=[];for(const P of o){const V=Df(P,l.get(P.key).overlayedDocument);V!=null&&S.push(new nt(P.key,V,kc(V.value.mapValue),ue.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,S,o)}).next(C=>{h=C;const S=C.applyToLocalDocumentSet(l,m);return a.documentOverlayCache.saveOverlays(f,C.batchId,S)})}).then(()=>({batchId:h.batchId,changes:Kc(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.oc[r.currentUser.toKey()];c||(c=new j(R)),c=c.insert(o,a),r.oc[r.currentUser.toKey()]=c}(s,i.batchId,n),await bn(s,i.changes),await Ls(s.remoteStore)}catch(i){const r=br(i,"Failed to persist write");n.reject(r)}}async function pu(t,e){const n=b(t);try{const s=await Tp(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.ic.get(r);o&&(O(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?O(o.Xu):i.removedDocuments.size>0&&(O(o.Xu),o.Xu=!1))}),await bn(n,s,e)}catch(s){await vn(s)}}function Uo(t,e,n){const s=b(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.tc.forEach((r,o)=>{const a=o.view.Eu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=b(r);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Eu(o)&&(c=!0)}),c&&Sr(a)}(s.eventManager,e),i.length&&s.Zu.Go(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function cg(t,e,n){const s=b(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.ic.get(e),r=i&&i.key;if(r){let o=new j(E.comparator);o=o.insert(r,G.newNoDocument(r,A.min()));const a=k().add(r),c=new Rs(A.min(),new Map,new $(R),o,a);await pu(s,c),s.sc=s.sc.remove(r),s.ic.delete(e),Ar(s)}else await Di(s.localStore,e,!1).then(()=>Ni(s,e,n)).catch(vn)}async function ug(t,e){const n=b(t),s=e.batch.batchId;try{const i=await Ip(n.localStore,e);mu(n,s,null),gu(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await bn(n,i)}catch(i){await vn(i)}}async function lg(t,e,n){const s=b(t);try{const i=await function(r,o){const a=b(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(O(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);mu(s,e,n),gu(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await bn(s,i)}catch(i){await vn(i)}}function gu(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function mu(t,e,n){const s=b(t);let i=s.oc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.oc[s.currentUser.toKey()]=i}}function Ni(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ec.get(e))t.tc.delete(s),n&&t.Zu.lc(s,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(s=>{t.rc.containsKey(s)||yu(t,s)})}function yu(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(ou(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Ar(t))}function Fo(t,e,n){for(const s of n)s instanceof du?(t.rc.addReference(s.key,e),hg(t,s)):s instanceof fu?(w("SyncEngine","Document no longer in limbo: "+s.key),t.rc.removeReference(s.key,e),t.rc.containsKey(s.key)||yu(t,s.key)):_()}function hg(t,e){const n=e.key,s=n.path.canonicalString();t.sc.get(n)||t.nc.has(s)||(w("SyncEngine","New document in limbo: "+n),t.nc.add(s),Ar(t))}function Ar(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new E(M.fromString(e)),s=t.cc.next();t.ic.set(s,new ng(n)),t.sc=t.sc.insert(n,s),ru(t.remoteStore,new qe(Je(dr(n.path)),s,2,cr.ot))}}async function bn(t,e,n){const s=b(t),i=[],r=[],o=[];s.tc.isEmpty()||(s.tc.forEach((a,c)=>{o.push(s.hc(c,e,n).then(u=>{if(u){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),i.push(u);const l=wr.Vi(c.targetId,u);r.push(l)}}))}),await Promise.all(o),s.Zu.Go(i),await async function(a,c){const u=b(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>p.forEach(c,h=>p.forEach(h.Pi,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>p.forEach(h.vi,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!wn(l))throw l;w("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.$i.get(h),g=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(g);u.$i=u.$i.insert(h,m)}}}(s.localStore,r))}async function dg(t,e){const n=b(t);if(!n.currentUser.isEqual(e)){w("SyncEngine","User change. New user:",e.toKey());const s=await tu(n.localStore,e);n.currentUser=e,function(i,r){i.uc.forEach(o=>{o.forEach(a=>{a.reject(new v(d.CANCELLED,r))})}),i.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await bn(n,s.Ki)}}function fg(t,e){const n=b(t),s=n.ic.get(e);if(s&&s.Xu)return k().add(s.key);{let i=k();const r=n.ec.get(e);if(!r)return i;for(const o of r){const a=n.tc.get(o);i=i.unionWith(a.view.qu)}return i}}function pg(t){const e=b(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=pu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fg.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cg.bind(null,e),e.Zu.Go=Yp.bind(null,e.eventManager),e.Zu.lc=Jp.bind(null,e.eventManager),e}function gg(t){const e=b(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ug.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lg.bind(null,e),e}class mg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=Os(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return Ep(this.persistence,new vp,e.initialUser,this.wt)}_c(e){return new mp(vr.Ms,this.wt)}dc(e){return new Cp}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class yg{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Uo(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=dg.bind(null,this.syncEngine),await zp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Wp}createDatastore(e){const n=Os(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new Rp(i));var i;return function(r,o,a,c){return new Lp(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Uo(this.syncEngine,a,0),o=Lo.V()?new Lo:new kp,new xp(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,u){const l=new sg(s,i,r,o,a,c);return u&&(l.ac=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=b(e);w("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await _n(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=ie.UNAUTHENTICATED,this.clientId=bc.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{w("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(w("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new v(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new je;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=br(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Eg(t,e){t.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await tu(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Ig(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Tg(t);w("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Po(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Po(e.remoteStore,r)),t.onlineComponents=e}async function Tg(t){return t.offlineComponents||(w("FirestoreClient","Using default OfflineComponentProvider"),await Eg(t,new mg)),t.offlineComponents}async function vu(t){return t.onlineComponents||(w("FirestoreClient","Using default OnlineComponentProvider"),await Ig(t,new yg)),t.onlineComponents}function _g(t){return vu(t).then(e=>e.syncEngine)}async function Vo(t){const e=await vu(t),n=e.eventManager;return n.onListen=ig.bind(null,e.syncEngine),n.onUnlisten=og.bind(null,e.syncEngine),n}const Bo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(t,e,n){if(!n)throw new v(d.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function bg(t,e,n,s){if(e===!0&&s===!0)throw new v(d.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $o(t){if(!E.isDocumentKey(t))throw new v(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function jo(t){if(E.isDocumentKey(t))throw new v(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ps(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":_()}function He(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new v(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ps(t);throw new v(d.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new v(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new v(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,bg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qo({}),this._settingsFrozen=!1,e instanceof mt?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new v(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mt(i.options.projectId)}(e))}get app(){if(!this._app)throw new v(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new v(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qo(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Hd;switch(n.type){case"gapi":const s=n.client;return O(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new Gd(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new v(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Bo.get(e);n&&(w("ComponentProvider","Removing Datastore"),Bo.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Re(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new re(this.firestore,e,this._key)}}class Sn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Sn(this.firestore,e,this._query)}}class Re extends Sn{constructor(e,n,s){super(e,n,dr(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new re(this.firestore,null,new E(e))}withConverter(e){return new Re(this.firestore,e,this._path)}}function Eu(t,e,...n){if(t=ce(t),wu("collection","path",e),t instanceof Cr){const s=M.fromString(e,...n);return jo(s),new Re(t,null,s)}{if(!(t instanceof re||t instanceof Re))throw new v(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(M.fromString(e,...n));return jo(s),new Re(t.firestore,null,s)}}function xs(t,e,...n){if(t=ce(t),arguments.length===1&&(e=bc.I()),wu("doc","path",e),t instanceof Cr){const s=M.fromString(e,...n);return $o(s),new re(t,null,new E(s))}{if(!(t instanceof re||t instanceof Re))throw new v(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(M.fromString(e,...n));return $o(s),new re(t.firestore,t instanceof Re?t.converter:null,new E(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new su(this,"async_queue_retry"),this.Kc=()=>{const n=si();n&&w("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=si();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=si();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new je;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Mc.push(e),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(e){if(!wn(e))throw e;w("AsyncQueue","Operation failed with retryable error: "+e)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Oc.then(()=>(this.Lc=!0,e().catch(s=>{this.Bc=s,this.Lc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Oe("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Lc=!1,s))));return this.Oc=n,n}enqueueAfterDelay(e,n,s){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const i=_r.createAndSchedule(this,e,n,s,r=>this.Wc(r));return this.$c.push(i),i}Gc(){this.Bc&&_()}verifyOperationInProgress(){}async zc(){let e;do e=this.Oc,await e;while(e!==this.Oc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function Ho(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Et extends Cr{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new Sg,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Tu(this),this._firestoreClient.terminate()}}function Ag(t=Ia()){return xi(t,"firestore").getImmediate()}function Iu(t){return t._firestoreClient||Tu(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Tu(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new rf(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new wg(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new v(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new J(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this._byteString=e}static fromBase64String(e){try{return new It(X.fromBase64String(e))}catch(n){throw new v(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new It(X.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new v(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new v(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return R(this._lat,e._lat)||R(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=/^__.*__$/;class kg{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new nt(e,this.data,this.fieldMask,n,this.fieldTransforms):new In(e,this.data,n,this.fieldTransforms)}}function bu(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _()}}class Nr{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.wt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Xc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new Nr(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ta({path:s,na:!1});return i.sa(e),i}ia(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ta({path:s,na:!1});return i.Xc(),i}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return cs(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(bu(this.Zc)&&Cg.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class Dg{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=s||Os(e)}aa(e,n,s,i=!1){return new Nr({Zc:e,methodName:n,ca:s,path:J.emptyPath(),na:!1,ua:i},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function Rr(t){const e=t._freezeSettings(),n=Os(t._databaseId);return new Dg(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Su(t,e,n,s,i,r={}){const o=t.aa(r.merge||r.mergeFields?2:0,e,n,i);ku("Data must be an object, but it was:",o,s);const a=Au(s,o);let c,u;if(r.merge)c=new le(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const l=[];for(const h of r.mergeFields){const f=Rg(e,h,n);if(!o.contains(f))throw new v(d.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Mg(l,f)||l.push(f)}c=new le(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new kg(new ae(a),c,u)}function Ng(t,e,n,s=!1){return Or(n,t.aa(s?4:3,e))}function Or(t,e){if(Cu(t=ce(t)))return ku("Unsupported field value:",e,t),Au(t,e);if(t instanceof _u)return function(n,s){if(!bu(s.Zc))throw s.oa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.oa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Or(o,s.ra(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=ce(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return _f(s.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=B.fromDate(n);return{timestampValue:os(s.wt,i)}}if(n instanceof B){const i=new B(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:os(s.wt,i)}}if(n instanceof Dr)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof It)return{bytesValue:Xc(s.wt,n._byteString)};if(n instanceof re){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:gr(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.oa(`Unsupported field value: ${Ps(n)}`)}(t,e)}function Au(t,e){const n={};return Sc(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):kt(t,(s,i)=>{const r=Or(i,e.ea(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Cu(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof B||t instanceof Dr||t instanceof It||t instanceof re||t instanceof _u)}function ku(t,e,n){if(!Cu(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ps(n);throw s==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+s)}}function Rg(t,e,n){if((e=ce(e))instanceof kr)return e._internalPath;if(typeof e=="string")return Du(t,e);throw cs("Field path arguments must be of type string or ",t,!1,void 0,n)}const Og=new RegExp("[~\\*/\\[\\]]");function Du(t,e,n){if(e.search(Og)>=0)throw cs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new kr(...e.split("."))._internalPath}catch{throw cs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function cs(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new v(d.INVALID_ARGUMENT,a+t+c)}function Mg(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Lg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Mr("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Lg extends Nu{data(){return super.data()}}function Mr(t,e){return typeof e=="string"?Du(t,e):e instanceof kr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ru extends Nu{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Vn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Mr("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Vn extends Ru{data(e={}){return super.data(e)}}class Pg{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ut(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Vn(this._firestore,this._userDataWriter,s.key,s,new Ut(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new v(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Vn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ut(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Vn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ut(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:xg(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function xg(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new v(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fg{}function Vg(t,...e){for(const n of e)t=n._apply(t);return t}class Bg extends Fg{constructor(e,n,s){super(),this.fa=e,this.da=n,this._a=s,this.type="where"}_apply(e){const n=Rr(e.firestore),s=function(i,r,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new v(d.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){zo(l,u);const g=[];for(const m of l)g.push(Ko(a,i,m));h={arrayValue:{values:g}}}else h=Ko(a,i,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||zo(l,u),h=Ng(o,r,l,u==="in"||u==="not-in");const f=se.create(c,u,h);return function(g,m){if(m.ht()){const S=Rc(g);if(S!==null&&!S.isEqual(m.field))throw new v(d.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${S.toString()}' and '${m.field.toString()}'`);const P=Nc(g);P!==null&&jg(g,m.field,P)}const C=function(S,P){for(const V of S.filters)if(P.indexOf(V.op)>=0)return V.op;return null}(g,function(S){switch(S){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(m.op));if(C!==null)throw C===m.op?new v(d.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${m.op.toString()}' filter.`):new v(d.INVALID_ARGUMENT,`Invalid query. You cannot use '${m.op.toString()}' filters with '${C.toString()}' filters.`)}(i,f),f}(e._query,"where",n,e.firestore._databaseId,this.fa,this.da,this._a);return new Sn(e.firestore,e.converter,function(i,r){const o=i.filters.concat([r]);return new En(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,s))}}function $g(t,e,n){const s=e,i=Mr("where",t);return new Bg(i,s,n)}function Ko(t,e,n){if(typeof(n=ce(n))=="string"){if(n==="")throw new v(d.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Oc(e)&&n.indexOf("/")!==-1)throw new v(d.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(M.fromString(n));if(!E.isDocumentKey(s))throw new v(d.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return vo(t,new E(s))}if(n instanceof re)return vo(t,n._key);throw new v(d.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ps(n)}.`)}function zo(t,e){if(!Array.isArray(t)||t.length===0)throw new v(d.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new v(d.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function jg(t,e,n){if(!n.isEqual(e))throw new v(d.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{convertValue(e,n="none"){switch(Ye(e)){case 0:return null;case 1:return e.booleanValue;case 2:return U(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw _()}}convertObject(e,n){const s={};return kt(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Dr(U(e.latitude),U(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Cc(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Jt(e));default:return null}}convertTimestamp(e){const n=Le(e);return new B(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=M.fromString(e);O(eu(s));const i=new mt(s.get(1),s.get(3)),r=new E(s.popFirst(5));return i.isEqual(n)||Oe(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class Mu extends qg{constructor(e){super(),this.firestore=e}convertBytes(e){return new It(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new re(this.firestore,null,n)}}function Hg(t,e,n){t=He(t,re);const s=He(t.firestore,Et),i=Ou(t.converter,e,n);return Lr(s,[Su(Rr(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ue.none())])}function Kg(t){return Lr(He(t.firestore,Et),[new pr(t._key,ue.none())])}function zg(t,e){const n=He(t.firestore,Et),s=xs(t),i=Ou(t.converter,e);return Lr(n,[Su(Rr(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,ue.exists(!1))]).then(()=>s)}function Lu(t,...e){var n,s,i;t=ce(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Ho(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Ho(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(t instanceof re)u=He(t.firestore,Et),l=dr(t._key.path),c={next:h=>{e[o]&&e[o](Gg(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=He(t,Sn);u=He(h.firestore,Et),l=h._query;const f=new Mu(u);c={next:g=>{e[o]&&e[o](new Pg(u,f,h,g))},error:e[o+1],complete:e[o+2]},Ug(t._query)}return function(h,f,g,m){const C=new vg(m),S=new Zp(f,C,g);return h.asyncQueue.enqueueAndForget(async()=>Qp(await Vo(h),S)),()=>{C.Tc(),h.asyncQueue.enqueueAndForget(async()=>Xp(await Vo(h),S))}}(Iu(u),l,a,c)}function Lr(t,e){return function(n,s){const i=new je;return n.asyncQueue.enqueueAndForget(async()=>ag(await _g(n),s,i)),i.promise}(Iu(t),e)}function Gg(t,e,n){const s=n.docs.get(e._key),i=new Mu(t);return new Ru(t,i,e._key,s,new Ut(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Ct=n})(cn),dt(new ze("firestore",(n,{options:s})=>{const i=n.getProvider("app").getImmediate(),r=new Et(i,new Kd(n.getProvider("auth-internal")),new Qd(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),r._setSettings(s),r},"PUBLIC")),Ne(ho,"3.4.12",t),Ne(ho,"3.4.12","esm2017")})();function Pr(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Pu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wg=Pu,xu=new on("auth","Firebase",Pu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=new Mi("@firebase/auth");function Bn(t,...e){Go.logLevel<=N.ERROR&&Go.error(`Auth (${cn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(t,...e){throw xr(t,...e)}function he(t,...e){return xr(t,...e)}function Qg(t,e,n){const s=Object.assign(Object.assign({},Wg()),{[e]:n});return new on("auth","Firebase",s).create(e,{appName:t.name})}function xr(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return xu.create(t,...e)}function T(t,e,...n){if(!t)throw xr(e,...n)}function me(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bn(e),new Error(e)}function Te(t,e){t||me(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=new Map;function ye(t){Te(t instanceof Function,"Expected a class definition");let e=Wo.get(t);return e?(Te(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wo.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(t,e){const n=xi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Kn(r,e!=null?e:{}))return i;Ie(i,"already-initialized")}return n.initialize({options:e})}function Yg(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ye);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Jg(){return Qo()==="http:"||Qo()==="https:"}function Qo(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jg()||ga()||"connection"in navigator)?navigator.onLine:!0}function em(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,n){this.shortDelay=e,this.longDelay=n,Te(n>e,"Short delay should be less than long delay!"),this.isMobile=pa()||ma()}get(){return Zg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(t,e){Te(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;me("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;me("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;me("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm=new An(3e4,6e4);function sm(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Us(t,e,n,s,i={}){return Fu(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=an(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Uu.fetch()(Vu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function Fu(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},tm),e);try{const i=new rm(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Pn(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Pn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Pn(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Qg(t,l,u);Ie(t,l)}}catch(i){if(i instanceof et)throw i;Ie(t,"network-request-failed")}}async function im(t,e,n,s,i={}){const r=await Us(t,e,n,s,i);return"mfaPendingCredential"in r&&Ie(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Vu(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Ur(t.config,i):`${t.config.apiScheme}://${i}`}class rm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(he(this.auth,"network-request-failed")),nm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pn(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=he(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function om(t,e){return Us(t,"POST","/v1/accounts:delete",e)}async function am(t,e){return Us(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cm(t,e=!1){const n=ce(t),s=await n.getIdToken(e),i=Fr(s);T(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ht(ii(i.auth_time)),issuedAtTime:Ht(ii(i.iat)),expirationTime:Ht(ii(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ii(t){return Number(t)*1e3}function Fr(t){var e;const[n,s,i]=t.split(".");if(n===void 0||s===void 0||i===void 0)return Bn("JWT malformed, contained fewer than 3 sections"),null;try{const r=ml(s);return r?JSON.parse(r):(Bn("Failed to decode base64 JWT payload"),null)}catch(r){return Bn("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function um(t){const e=Fr(t);return T(e,"internal-error"),T(typeof e.exp!="undefined","internal-error"),T(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof et&&lm(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function lm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ht(this.lastLoginAt),this.creationTime=Ht(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(t){var e;const n=t.auth,s=await t.getIdToken(),i=await sn(t,am(n,{idToken:s}));T(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?pm(r.providerUserInfo):[],a=fm(t.providerData,o),c=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Bu(r.createdAt,r.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function dm(t){const e=ce(t);await us(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fm(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function pm(t){return t.map(e=>{var{providerId:n}=e,s=Pr(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gm(t,e){const n=await Fu(t,{},async()=>{const s=an({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Vu(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Uu.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T(typeof e.idToken!="undefined","internal-error"),T(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):um(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return T(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await gm(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new rn;return s&&(T(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(T(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(T(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rn,this.toJSON())}_performRefresh(){return me("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t,e){T(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Ke{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Pr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Bu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await sn(this,this.stsTokenManager.getToken(this.auth,e));return T(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cm(this,e)}reload(){return dm(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ke(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await us(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await sn(this,om(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(u=n.createdAt)!==null&&u!==void 0?u:void 0,V=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:pe,emailVerified:_e,isAnonymous:Rt,providerData:Ot,stsTokenManager:Mt}=n;T(pe&&Mt,e,"internal-error");const hl=rn.fromJSON(this.name,Mt);T(typeof pe=="string",e,"internal-error"),be(h,e.name),be(f,e.name),T(typeof _e=="boolean",e,"internal-error"),T(typeof Rt=="boolean",e,"internal-error"),be(g,e.name),be(m,e.name),be(C,e.name),be(S,e.name),be(P,e.name),be(V,e.name);const $s=new Ke({uid:pe,auth:e,email:f,emailVerified:_e,displayName:h,isAnonymous:Rt,photoURL:m,phoneNumber:g,tenantId:C,stsTokenManager:hl,createdAt:P,lastLoginAt:V});return Ot&&Array.isArray(Ot)&&($s.providerData=Ot.map(dl=>Object.assign({},dl))),S&&($s._redirectEventId=S),$s}static async _fromIdTokenResponse(e,n,s=!1){const i=new rn;i.updateFromServerResponse(n);const r=new Ke({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await us(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$u.type="NONE";const Xo=$u;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e,n){return`firebase:${t}:${e}:${n}`}class lt{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=$n(this.userKey,i.apiKey,r),this.fullPersistenceKey=$n("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ke._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new lt(ye(Xo),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||ye(Xo);const o=$n(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=Ke._fromJSON(e,l);u!==r&&(a=h),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new lt(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new lt(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ju(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zu(e))return"Blackberry";if(Gu(e))return"Webos";if(Vr(e))return"Safari";if((e.includes("chrome/")||qu(e))&&!e.includes("edge/"))return"Chrome";if(Ku(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ju(t=H()){return/firefox\//i.test(t)}function Vr(t=H()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qu(t=H()){return/crios\//i.test(t)}function Hu(t=H()){return/iemobile/i.test(t)}function Ku(t=H()){return/android/i.test(t)}function zu(t=H()){return/blackberry/i.test(t)}function Gu(t=H()){return/webos/i.test(t)}function Fs(t=H()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mm(t=H()){var e;return Fs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ym(){return ya()&&document.documentMode===10}function Wu(t=H()){return Fs(t)||Ku(t)||Gu(t)||zu(t)||/windows phone/i.test(t)||Hu(t)}function vm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(t,e=[]){let n;switch(t){case"Browser":n=Yo(H());break;case"Worker":n=`${Yo(H())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${cn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const i of this.queue)await i(e),i.onAbort&&s.push(i.onAbort)}catch(i){s.reverse();for(const r of s)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jo(this),this.idTokenSubscription=new Jo(this),this.beforeStateQueue=new wm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ye(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await lt.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await us(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=em()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ce(e):null;return n&&T(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ye(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new on("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ye(e)||this._popupRedirectResolver;T(n,this,"argument-error"),this.redirectPersistenceManager=await lt.create(this,[ye(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return T(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Xu(t){return ce(t)}class Jo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Al(n=>this.observer=n)}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return me("not implemented")}_getIdTokenResponse(e){return me("not implemented")}_linkToIdToken(e,n){return me("not implemented")}_getReauthenticationResolver(e){return me("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ht(t,e){return im(t,"POST","/v1/accounts:signInWithIdp",sm(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im="http://localhost";class Ze extends Yu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ze(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ie("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Pr(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Ze(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ht(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ht(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ht(e,n)}buildRequest(){const e={requestUri:Im,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=an(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Ju{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends Cn{constructor(){super("facebook.com")}static credential(e){return Ze._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Se.credentialFromTaggedObject(e)}static credentialFromError(e){return Se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Se.credential(e.oauthAccessToken)}catch{return null}}}Se.FACEBOOK_SIGN_IN_METHOD="facebook.com";Se.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends Cn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ze._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ae.credential(n,s)}catch{return null}}}Ae.GOOGLE_SIGN_IN_METHOD="google.com";Ae.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce extends Cn{constructor(){super("github.com")}static credential(e){return Ze._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ce.credentialFromTaggedObject(e)}static credentialFromError(e){return Ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ce.credential(e.oauthAccessToken)}catch{return null}}}Ce.GITHUB_SIGN_IN_METHOD="github.com";Ce.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke extends Cn{constructor(){super("twitter.com")}static credential(e,n){return Ze._fromParams({providerId:ke.PROVIDER_ID,signInMethod:ke.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ke.credentialFromTaggedObject(e)}static credentialFromError(e){return ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ke.credential(n,s)}catch{return null}}}ke.TWITTER_SIGN_IN_METHOD="twitter.com";ke.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Ke._fromIdTokenResponse(e,s,i),o=Zo(s);return new Tt({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Zo(s);return new Tt({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Zo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends et{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,ls.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new ls(e,n,s,i)}}function Zu(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ls._fromErrorAndOperation(t,r,e,s):r})}async function Tm(t,e,n=!1){const s=await sn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Tt._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _m(t,e,n=!1){var s;const{auth:i}=t,r="reauthenticate";try{const o=await sn(t,Zu(i,r,e,t),n);T(o.idToken,i,"internal-error");const a=Fr(o.idToken);T(a,i,"internal-error");const{sub:c}=a;return T(t.uid===c,i,"user-mismatch"),Tt._forOperation(t,r,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&Ie(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bm(t,e,n=!1){const s="signIn",i=await Zu(t,s,e),r=await Tt._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function Sm(t,e,n,s){return ce(t).onIdTokenChanged(e,n,s)}const hs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hs,"1"),this.storage.removeItem(hs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(){const t=H();return Vr(t)||Fs(t)}const Cm=1e3,km=10;class tl extends el{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Am()&&vm(),this.fallbackToPolling=Wu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);ym()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,km):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Cm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tl.type="LOCAL";const Dm=tl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl extends el{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nl.type="SESSION";const sl=nl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Vs(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,r)),c=await Nm(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const u=Br("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(l),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(l),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(){return window}function Om(t){de().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(){return typeof de().WorkerGlobalScope!="undefined"&&typeof de().importScripts=="function"}async function Mm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Lm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Pm(){return il()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl="firebaseLocalStorageDb",xm=1,ds="firebaseLocalStorage",ol="fbase_key";class kn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Bs(t,e){return t.transaction([ds],e?"readwrite":"readonly").objectStore(ds)}function Um(){const t=indexedDB.deleteDatabase(rl);return new kn(t).toPromise()}function Oi(){const t=indexedDB.open(rl,xm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ds,{keyPath:ol})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ds)?e(s):(s.close(),await Um(),e(await Oi()))})})}async function ea(t,e,n){const s=Bs(t,!0).put({[ol]:e,value:n});return new kn(s).toPromise()}async function Fm(t,e){const n=Bs(t,!1).get(e),s=await new kn(n).toPromise();return s===void 0?null:s.value}function ta(t,e){const n=Bs(t,!0).delete(e);return new kn(n).toPromise()}const Vm=800,Bm=3;class al{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Oi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Bm)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return il()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vs._getInstance(Pm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Mm(),!this.activeServiceWorker)return;this.sender=new Rm(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Lm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Oi();return await ea(e,hs,"1"),await ta(e,hs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ea(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Fm(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ta(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Bs(i,!1).getAll();return new kn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}al.type="LOCAL";const $m=al;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function qm(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=he("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",jm().appendChild(s)})}function Hm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new An(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(t,e){return e?ye(e):(T(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends Yu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ht(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ht(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ht(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zm(t){return bm(t.auth,new $r(t),t.bypassAuthState)}function Gm(t){const{auth:e,user:n}=t;return T(n,e,"internal-error"),_m(n,new $r(t),t.bypassAuthState)}async function Wm(t){const{auth:e,user:n}=t;return T(n,e,"internal-error"),Tm(n,new $r(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zm;case"linkViaPopup":case"linkViaRedirect":return Wm;case"reauthViaPopup":case"reauthViaRedirect":return Gm;default:Ie(this.auth,"internal-error")}}resolve(e){Te(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Te(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm=new An(2e3,1e4);class at extends cl{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,at.currentPopupAction&&at.currentPopupAction.cancel(),at.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){Te(this.filter.length===1,"Popup operations only handle one event");const e=Br();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(he(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(he(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,at.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(he(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Qm.get())};e()}}at.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm="pendingRedirect",jn=new Map;class Ym extends cl{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=jn.get(this.auth._key());if(!e){try{const s=await Jm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}jn.set(this.auth._key(),e)}return this.bypassAuthState||jn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Jm(t,e){const n=ty(e),s=ey(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Zm(t,e){jn.set(t._key(),e)}function ey(t){return ye(t._redirectPersistence)}function ty(t){return $n(Xm,t.config.apiKey,t.name)}async function ny(t,e,n=!1){const s=Xu(t),i=Km(s,e),o=await new Ym(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=10*60*1e3;class iy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ry(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!ul(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(he(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sy&&this.cachedEventUids.clear(),this.cachedEventUids.has(na(e))}saveEventToCache(e){this.cachedEventUids.add(na(e)),this.lastProcessedEventTime=Date.now()}}function na(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ul({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ry(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ul(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oy(t,e={}){return Us(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cy=/^https?/;async function uy(t){if(t.config.emulator)return;const{authorizedDomains:e}=await oy(t);for(const n of e)try{if(ly(n))return}catch{}Ie(t,"unauthorized-domain")}function ly(t){const e=Ri(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!cy.test(n))return!1;if(ay.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=new An(3e4,6e4);function sa(){const t=de().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function dy(t){return new Promise((e,n)=>{var s,i,r;function o(){sa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sa(),n(he(t,"network-request-failed"))},timeout:hy.get()})}if(!((i=(s=de().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=de().gapi)===null||r===void 0)&&r.load)o();else{const a=Hm("iframefcb");return de()[a]=()=>{gapi.load?o():n(he(t,"network-request-failed"))},qm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw qn=null,e})}let qn=null;function fy(t){return qn=qn||dy(t),qn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py=new An(5e3,15e3),gy="__/auth/iframe",my="emulator/auth/iframe",yy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wy(t){const e=t.config;T(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ur(e,my):`https://${t.config.authDomain}/${gy}`,s={apiKey:e.apiKey,appName:t.name,v:cn},i=vy.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${an(s).slice(1)}`}async function Ey(t){const e=await fy(t),n=de().gapi;return T(n,t,"internal-error"),e.open({where:document.body,url:wy(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yy,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=he(t,"network-request-failed"),a=de().setTimeout(()=>{r(o)},py.get());function c(){de().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ty=500,_y=600,by="_blank",Sy="http://localhost";class ia{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ay(t,e,n,s=Ty,i=_y){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Iy),{width:s.toString(),height:i.toString(),top:r,left:o}),u=H().toLowerCase();n&&(a=qu(u)?by:n),ju(u)&&(e=e||Sy,c.scrollbars="yes");const l=Object.entries(c).reduce((f,[g,m])=>`${f}${g}=${m},`,"");if(mm(u)&&a!=="_self")return Cy(e||"",a),new ia(null);const h=window.open(e||"",a,l);T(h,t,"popup-blocked");try{h.focus()}catch{}return new ia(h)}function Cy(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky="__/auth/handler",Dy="emulator/auth/handler";function ra(t,e,n,s,i,r){T(t.config.authDomain,t,"auth-domain-config-required"),T(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:cn,eventId:i};if(e instanceof Ju){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Sl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(r||{}))o[c]=u}if(e instanceof Cn){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Ny(t)}?${an(a).slice(1)}`}function Ny({config:t}){return t.emulator?Ur(t,Dy):`https://${t.authDomain}/${ky}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri="webStorageSupport";class Ry{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sl,this._completeRedirectFn=ny,this._overrideRedirectResult=Zm}async _openPopup(e,n,s,i){var r;Te((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=ra(e,n,s,Ri(),i);return Ay(e,o,Br())}async _openRedirect(e,n,s,i){return await this._originValidation(e),Om(ra(e,n,s,Ri(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Te(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Ey(e),s=new iy(e);return n.register("authEvent",i=>(T(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ri,{type:ri},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[ri];o!==void 0&&n(!!o),Ie(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uy(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Wu()||Vr()||Fs()}}const Oy=Ry;var oa="@firebase/auth",aa="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Py(t){dt(new ze("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,c)=>{T(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),T(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qu(t)},l=new Em(a,c,u);return Yg(l,n),l})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),dt(new ze("auth-internal",e=>{const n=Xu(e.getProvider("auth").getImmediate());return(s=>new My(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ne(oa,aa,Ly(t)),Ne(oa,aa,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(t=Ia()){const e=xi(t,"auth");return e.isInitialized()?e.getImmediate():Xg(t,{popupRedirectResolver:Oy,persistence:[$m,Dm,sl]})}Py("Browser");const ll=()=>{const t=fl("__svelte__");return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},session:t.session,updated:t.updated}},$y={subscribe(t){return ll().page.subscribe(t)}},ca=t=>{throw new Error(`Cannot ${t} session store before subscribing`)},fs={subscribe(t){const e=ll().session;return fs.set=e.set,fs.update=e.update,e.subscribe(t)},set:()=>ca("set"),update:()=>ca("update")};async function ua(t){const e={method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({token:t})};await fetch("/api/token",e)}function Uy(){const t=xy(Hn);Sm(t,async e=>{if(e){const n=await e.getIdToken();await ua(n),fs.update(s=>(s.user={name:e.displayName,email:e.email,uid:e.uid},s))}else await ua(""),fs.update(n=>(n.user=void 0,n))},e=>console.error(e.message))}let Hn,_t;function jy(t){Hn||(Hn=Sh(t),_t=Ag(Hn),Uy())}function Fy(t){const e={};return Object.keys(t).filter(n=>t._dbFields.includes(n)).forEach(n=>{e[n]=t[n]}),e}async function qy(t){const e=Fy(t);if(!t._collection)throw Error("Objects that extends Document must specify __collection");if(t._id)await Hg(xs(_t,t._collection,t._id),e);else{const n=await zg(Eu(_t,t._collection),e);t._id=n.id}}function Hy(t,e){return la(e,n=>{let s,i=!1;const r=()=>{i=!0,s&&s()};return(async()=>i||(s=Lu(xs(_t,e._collection,e._id),o=>{if(o.exists()){const a=new t(o.data());a._id=o.id,n(a)}else n(void 0),s()})))(),r})}async function Ky(t){if(!t._collection)throw Error("Objects that extends Document must specify __collection");await Kg(xs(_t,t._collection,t._id))}function zy(t,e,n,s=[]){return la(s,i=>{let r,o=!1;const a=()=>{o=!0,r&&r()};return(async()=>{if(o)return;const c=Vg(Eu(_t,e),$g("uid","==",n));r=Lu(c,u=>{const l=[];u.forEach(h=>{const f=new t(h.data());f._id=h.id,l.push(f)}),i(l)})})(),a})}export{qy as a,zy as b,Ky as d,Hy as g,jy as i,$y as p,fs as s};
