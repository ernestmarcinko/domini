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
<script src="https://unpkg.com/domini@latest/dist/domini.js"></script>
```

..if you don't need the modules (animate, highlight, serialize, xhttp) then you can use a trimmed core version:

```html
<script src="https://unpkg.com/domini@latest/dist/domini-core.js"></script>
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

### .each()
Alias of ``.forEach()``

### .forEach( callback ( n ``Element``, index ``Int``, arr ``array``) ): ``self``
Iterates throught the elements matched, executes a callback function for each iteration.
```javascript
$( "p" ).forEach(function( el, index ) {
  console.log( 'Paragraph ' + index + ": " + $( this ).text() );
});
```

### .get( ): ``array``
Retrieve all of the elements matched by the DoMini object
```javascript
for ( el of $( "p" ).get() ) {
  console.log( el.innerText );
}
```

### .get( ``Int`` n ): ``Element|null``
Retrieve one of the elements matched by the DoMini object
```javascript
console.log( $( "p" ).get(0).innerText );
```

## Element related Methods

### .attr( ``String`` a ): ``String|null``
Returns the last element's attribute value matched by the DoMini object.
```javascript
$("p").attr('id');
```

### .attr( ``Int|String`` v ): ``self``
Sets the node attribte value to the argument value of the elements matched. Uses the ``Element.setAttribute`` function.
```javascript
$("p").attr('id', 'myId');
```

### .data( ``String`` a ): ``String|null``
Returns the last element's dataset ``data-{key}`` value matched by the DoMini object.
```javascript
$("p").data('customData');
```

### .data( ``String`` a, ``Int|String`` v ): ``self``
Sets the node dataset ``data-{key}`` value to the argument value of the elements matched.
```javascript
$("p").data('customData', 'value');
```

### .html(): ``String``
Gets the innerHTML value
```javascript
console.log( $( "p" ).html() );
```

### .html( ``String`` v ): ``self``
Sets node innerHTML to the argument value
```javascript
$( "p" ).html('Link: <a href='#'>Click here!</a>');
```

### .prop( ``String`` p ): ``String|null``
Returns the last element's property value matched by the DoMini object
```javascript
console.log( $("input[type=checkbox]").prop('checked') );
```

### .prop( ``String`` p, ``Any`` v ): ``self``
Sets the node peroperty value to the argument value of the elements matched. Sets the property explicitly as ``Element[p] = v``
```javascript
$("input[type=checkbox]").prop('checked', true);
```

### .text(): ``String``
Gets the textContent value
```javascript
console.log( $( "p" ).text() );
```

### .text( ``String`` v ): ``self``
Sets node textContent to the argument value.
```javascript
$( "p" ).text('Text!');
```

### .val(): ``String``
Returns the last element's value matched by the DoMini object
```javascript
console.log( $( "input[type=text]" ).val() );
```

### .val( ``String`` v ): ``self``
Sets the node value to the argument value of the elements matched
```javascript
 $( "input[type=text]" ).val('value');
```

## CSS & Style related Methods

### .css( ``String`` p ): ``String``
Returns the computedStyle value of the matched element.
```javascript
console.log( $( "p" ).css('opacity') );
```

### .css( ``String`` p, ``String`` v ): ``self``
Sets a single style value of the matched element
```javascript
$("p").css('opacity',  0.5);
```

### .css( ``Object<String, String>`` o ): ``self``
Sets a multiple style values of the matched element.
```javascript
$("p").css({
    'marginLeft': '12px',
    'display': 'block',
    'opacity': 0.5
});
```

### .offset( ``String`` p ): ``Object``
Returns the calculated offset values ``{'top': top, 'left': left}``.

```javascript
console.log( $( "p" ).offset().top, $( "p" ).offset().left );
```

### .position( ``String`` p ): ``Object``
Returns the offsetTop and offsetLeft values ``{'top': el.offsetTop, 'left': el.offsetLeft}``.
```javascript
console.log( $( "p" ).position().top, $( "p" ).position().left );
```

### .outerWidth( ``bool`` margin = false ): ``int``
Returns the width of the element with or without margins.
```javascript
console.log( 'Width with margins: ', $( "div" ).outerWidth(true) );
console.log( 'Width without margins: ', $( "div" ).outerWidth() );
```

### .outerHeight( ``bool`` margin = false ): ``int``
Returns the height of the element with or without margins.
```javascript
console.log( 'Height with margins: ', $( "div" ).outerHeight(true) );
console.log( 'Height without margins: ', $( "div" ).outerHeight() );
```

### .width( ): ``int``
Returns the width of the element without margins.
```javascript
console.log( 'Width: ', $( "div" ).width() );
```

### .height( ): ``int``
Returns the height of the element without margins.
```javascript
console.log( 'Height: ', $( "div" ).width() );
```

