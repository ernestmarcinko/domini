import DoMini from "./base";

import "./core/basic";
import "./core/css";
import "./core/data";
import "./core/dimensions";
import "./core/event";
import "./core/manipulation";
import "./core/selector";
import "./core/utils";

document.dispatchEvent(new Event('domini-dom-core-loaded'));

export default DoMini;