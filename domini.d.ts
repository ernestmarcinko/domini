declare module "domini" {
	type HTMLElementWithFields = HTMLElement&{[otherFields: string]: unknown;};

	interface DOMini extends Array<HTMLElementWithFields> {
		(selector?: string|HTMLElement): this;
		fn: {
			_: (selector: string) => Array<HTMLElementWithFields>
		},
		_fn: {
			plugin: (name: string, object: Object) => this
		}
		add: (selector: string|HTMLElement) => this,

		css: {
			(properties: Record<string, unknown>): this;
			(property: string, value: unknown): this;
		},

		hasClass: (className: string) => boolean,

		addClass: (className: string) => this,

		removeClass: (className: string) => this,

		/**
		 * Checks if element is visible
		 */
		isVisible: () => boolean,

		val: {
			(value: string|number|string[]|number[]): this;
			(): string|number|string[]|number[];
		},

		attr: {
			(attributes: Record<string, unknown>): this;
			(attribute: string, value: unknown): this;
			(attribute: string): unknown;
		},

		removeAttr: (attribute: string) => this,

		prop: {
			(attribute: string, value: unknown): this;
			(attribute: string): unknown;
		},

		data: {
			(key: string, value: unknown): this;
			(key: string): string;
		},

		html: {
			(html: string): this;
			(): string;
		},

		text: {
			(text: string): this;
			(): string;
		},

		extend: (...args: Object) => Object,

		each: (callback: (index?: number, node?: HTMLElementWithFields, array?: HTMLElementWithFields[])=>unknown) => this

		forEach: (callback: (node?: HTMLElementWithFields, index?: number, array?: HTMLElementWithFields[])=>unknown) => this

		get: (n: number) => HTMLElementWithFields,

		offset: ()=> {
			top: number,
			left: number,
		},

		position: () => {
			top: number,
			left: number,
		},

		outerWidth: (includeMargin?: boolean = false) => number,
		outerHeight: (includeMargin?: boolean = false) => number,

		noPaddingWidth: (includeMargin?: boolean = false) => number,
		noPaddingHeight: (includeMargin?: boolean = false) => number,

		innerWidth: () => number,
		innerHeight: () => number,

		/**
		 * Same as `outerWidth(false)`
		 */
		width: () => number,

		/**
		 * Same as `outerHeight(false)`
		 */
		height: () => number,

		on: {
			(events: string, callback: (event:Event)=>void): this,
			(events: string, selector: string, callback: (event:Event)=>void): this,
		},

		off: {
			(): this,
			(events: string): this,
			(events: string, callback: Function): this
		},

		offForced: ()=> this,

		trigger: (event: string, args:unknown[], native: boolean = false, jquery: boolean = false) => this,

		/**
		 * Removes all DoMini related event listeners
		 */
		clear: () => this,

		clone: () => this,

		detach: (context?: string|HTMLElement) => this,

		remove: (context?: string|HTMLElement) => this,

		prepend: (prepend: string|HTMLElement|HTMLElement[]|DOMini) => this,

		append: (prepend: string|HTMLElement|HTMLElement[]|DOMini) => this,

		/**
		 * Addons and other possibly dynamically added fields
		 */
		[otherFields: string]: (...args:unknown)=>this | unknown;
	}

	import {DOMini} from "./types";
	declare const DoMini: DOMini;

	export=DoMini;
}