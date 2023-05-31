# DoMini

A minimalistic HTML document manipulation and traversal tool. Syntactically indentical to jQuery, but much smaller with only the essential features.

## Installation
Use npm or yarn to install TypeWriter with a single command

```shell
# with npm
npm i domini

# with yarn
yarn add domini
```
## Via CDN

If you prefer a build, use the CDN version

```html
<script src="https://unpkg.com/@anag0/typewriter@latest/dist/domini.js"></script>
```

..if you don't need the modules (animate, highlight, serialize, xhttp) then you can use a trimmed core version:

```html
<script src="https://unpkg.com/@anag0/typewriter@latest/dist/domini-core.js"></script>
```

## Usage
```javascript
// Similarly to jQuery
DoMini('#selector').text('Hi!');

// If you prefer $
const $ = DoMini;
$('#selector').text('Hi!');

// Or much better in a scope
(function($){
    $('#selector').text('Hi!');
})(DoMini);

// To execute automatically after DOMContentLoaded you can simply do:
DoMini(function($){ 
    $('#selector').text('Hi!');
});
```  

## Basic Methods

| Method | Params | Description |
| --- | --- | --- |
| get | ``Int`` Node to return | Returns a node from the matches |
| forEach or each | callback ( ``Node`` Current Node ``Int`` Index ``array`` Source ) | Loops through the selected elements |
| val() | - | Gets a node value |
| val(v) | ``String \| Numeric`` Value | Sets the node value to the argument value |
| attr(a) | ``String`` attribute | Gets attribute. If  arguments, sets node attributes to the argument value |
| attr(a, v) | ``String`` attribute, ``String \| Numeric \| Object<String, Any>`` Value | Sets node attributes to the argument value |
| removeAttr(a) | ``String`` attribute | Removes the attribute |
| prop(p) | ``String`` attribute | Gets the property value |
| prop(p, v) | ``String`` attribute, ``String \| Numeric`` Value | Sets node property to the argument value |
| data(d) | ``String`` attribute | Gets the dataset value |
| data(d, v) | ``String`` attribute, ``String \| Numeric`` Value | Sets node dataset to the argument value |
| html() |- | Gets the innerHTML value |
| html(html) | ``String`` Html | Sets node innerHTML to the argument value |
| text() | - | Gets the textContent value  |
| text(text) | ``String`` Text | Sets node textContent to the argument value |