declare module "domini" {
	type HTMLElementWithFields = HTMLElement&{[otherFields: string]: unknown;};

	interface DOMini extends Array<HTMLElementWithFields> {
		(selector?: string|HTMLElement): this;
		fn: {
			_: (selector: string) => Array<HTMLElementWithFields>,

			ajax: (args: {
				'url': string,
				'method'?: XMLHttpRequest.HttpMethod,
				'cors'?: 'cors'|'no-cors', // cors, no-cors
				'data'?: unknown,
				'success'?: (response_text: string) => void,
				'fail'?: (request: XMLHttpRequest) => void,
				'accept'?: string,
				'contentType'?: XMLHttpRequest.ContentType
			} = {
				'url': '',
				'method': 'GET',
				'cors': 'cors', // cors, no-cors
				'data': {},
				'success': null,
				'fail': null,
				'accept': 'text/html',
				'contentType': 'application/x-www-form-urlencoded; charset=UTF-8'
			}) => void,
		},
		_fn: {
			plugin: (name: string, object: Object) => this,

			bodyTransform: () => {
				top: number,
				left: number,
			},

			bodyTransformY: () => number,

			bodyTransformX: () => number,

			hasFixedParent: (element: HTMLElement) => boolean,

			hasEventListener: (element: HTMLElement, event_type: string, func: Function) => boolean,

			allDescendants: (element: HTMLElement) => Array<HTMLElement>,

			createElementsFromHTML: (html_string: string) => Array<HTMLElement>,

			elementArrayFromAny: (anything: string|HTMLElement|HTMLElement[]|DOMini) => Array<HTMLElement>,

			absolutePosition: (element: HTMLElement) => {
				top: number,
				left: number,
			},
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

		get: {
			(): HTMLElementWithFields[],
			(n: number): HTMLElementWithFields|undefined,
		},

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

		is: (selectors: string) => boolean,

		parent: (selectors?: string) => this,

		copy: (source: Object<unknown>|Array<unknown>, deep?: boolean = false) => typeof source,

		first: () => this,

		last: () => this,

		prev: (selectors?: string) => this,

		next: (selectors?: string) => this,

		closest: (selectors?: string|HTMLElement|DOMini) => this,

		find: (selectors?: string) => this,

		animate: {
			(props: false|Record<string, number>, duration?: number = 200, easing?: keyof DOMini.animate.easing),
			easing: Record<string, (x: number)=>number>,
		},

		unhighlight: (options?: {
			className?: string,
			element?: 'span'
		} = {
			className: 'highlight',
			element: 'span'
		}) => this,

		highlight: (word: string|string[], options?: {
			className?: string,
			element?: string,
			caseSensitive?: boolean,
			wordsOnly?: boolean,
			excludeParents?: string
		} = {
			className: 'highlight',
			element: 'span',
			caseSensitive: false,
			wordsOnly: false,
			excludeParents: '.excludeFromHighlight'
		}) => this,

		serialize: () => string,

		serializeObject: (object: Object<unknown>, prefix: string) => string,

		inViewPort: (tolerance: number = 0, viewport: HTMLElement = window) => boolean,

		/**
		 * Addons and other possibly dynamically added fields
		 */
		[otherFields: string]: (...args:unknown)=>this | unknown;
	}

	declare const DoMini: DOMini;

	export=DoMini;
}