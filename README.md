defaultjs-template-language (`alias: jstl`)
===

- [defaultjs-template-language (`alias: jstl`)](#defaultjs-template-language-alias-jstl)
- [Basic usage](#basic-usage)
- [Browser support](#browser-support)
- [Use Template File](#use-template-file)
- [Template functionality](#template-functionality)
  - [Expressions](#expressions)
  - [Text content manipulation](#text-content-manipulation)
  - [jstl-if](#jstl-if)
  - [jstl-choose](#jstl-choose)
  - [jstl-foreach](#jstl-foreach)
  - [jstl-repeat](#jstl-repeat)
  - [jstl-data](#jstl-data)
    - [`jstl-data-mode="remote"`](#jstl-data-moderemote)
    - [`jstl-data-mode="set"`](#jstl-data-modeset)
    - [`jstl-data-mode="direct"`](#jstl-data-modedirect)
  - [jstl-include](#jstl-include)
    - [Additional option](#additional-option)
  - [jstl-attach-element](#jstl-attach-element)
    - [Additional option](#additional-option-1)
  - [Attribute manipulation](#attribute-manipulation)
  - [Event handler](#event-handler)
    - [add event handler](#add-event-handler)
    - [delegate events](#delegate-events)
    - [toggle attribute by event](#toggle-attribute-by-event)
    - [toggle class by event](#toggle-class-by-event)
  - [jstl-async](#jstl-async)
  - [jstl-tagname](#jstl-tagname)
  - [jstl-ignore](#jstl-ignore)
  - [jstl-on-finished](#jstl-on-finished)
- [Special Tags](#special-tags)
  - [Tag `jstl`](#tag-jstl)
- [Javascript API](#javascript-api)
  - [Template](#template)
    - [`new Template(template)`](#new-templatetemplate)
    - [`load(template, cache, alias)` ⇒ `Template`](#loadtemplate-cache-alias--template)
    - [`fetch(url, cache, alias)` ⇒ `Template`](#fetchurl-cache-alias--template)
    - [`loadNodeTemplate(node, defaultTemplate, cache, alias)` ⇒ `Template`](#loadnodetemplatenode-defaulttemplate-cache-alias--template)
  - [Renderer](#renderer)
    - [`new Renderer(option)`](#new-rendereroption)
    - [`Renderer.build(option)` ⇒ `Promise<Renderer>`](#rendererbuildoption--promiserenderer)
    - [`render(option)` ⇒ `Promise`](#renderoption--promise)
    - [`Renderer.render(option)` ⇒ `Promise`](#rendererrenderoption--promise)
  - [Custom Directives](#custom-directives)
  - [Custom Tags](#custom-tags)

---

The defaultjs-template-language, or simplified `J`ava`S`cript `T`emplate `L`anguage -> short `jstl`,  is a reimplementation of [de.titus.jstl](https://github.com/TwilightTitus/de.titus.jstl). The new version no longer uses jquery. Only dependencies from the `@default-js` ecosystem are used. there are no third party libs used at runtime.

The reimplementation has two goals:

1. **Primary goal** is to support javascript `await async` at all directives and all api levels.
2. **Secondary goal** is to improve the performence.

*Both goals has been fully achieved.*

# Basic usage

**NPM**

```javascript
//import the Template and Renderer Classes
import {Template, Renderer} from "@default-js/defaultjs-template-language"

//find the container at html page, to render the content into
const container = document.getElementById("MyContainterToRenderInto");
//load the template to be render
const template = await Template.load(new URL("/path/to/a/template.tpl.html", location));
//render the template into container with some data
Renderer.render({container, template, data: {}});
```

**Script Tag**

```html
<html>
    <head> ...</head>
    <body>
        <div id="MyContainterToRenderInto"></div>

        <!-- the script file is located in the dist directory -->
        <script type="application/javascript" src="/path/to/browser-defaultjs-template-language.min.js"></script>
        <script type="application/javascript">
        const {Template, Renderer} = defaultjs.tl;
        const container = document.getElementById("MyContainterToRenderInto");

        const render = async () => {
            //load the template to be render
            const template = await Template.load(new URL("/path/to/a/template.tpl.html", location));
            //render the template into container with some data
            Renderer.render({container, template, data: {}});
        };

        render();
        </script>
    </body>
</html>
```

**ES Module Bundle**

`dist/module-defaultjs-template-language.min.js` exports the same as the package, with its
dependencies bundled in: a page imports it without a bundler and without an import map. The bundle
carries its own copy of `@default-js/defaultjs-expression-language`.

```html
<script type="module">
    import { Template, Renderer } from "/path/to/module-defaultjs-template-language.min.js";

    const container = document.getElementById("MyContainterToRenderInto");
    const template = await Template.load(new URL("/path/to/a/template.tpl.html", location));
    await Renderer.render({ container, template, data: {} });
</script>
```

# Browser support

Safari does not support customized built-in elements; there the `is` attribute has no effect.

# Use Template File

# Template functionality

## Expressions

The expression provide the capability make your content dynamic. The expression use properties from the data context and combine the property values with javascript. It is possible to execute all javascript, but you have not the complete access at all global properties. The execution engine for the expression support javascript `await async`.

**Basic syntax**

```javascript
${varname|javascript}
```

**Examples**

```javascript
/*
const data = {
    text : "hello",
    fn : async () => {return "hello world";}
};
... call renderer ...
*/

${text}
//output: hello
${text + "world"}
//output: hello world
${ await fn() } 
//output: hello world

```

The execution engine is implemented with [defaultjs-expression-language](https://github.com/default-js/defaultjs-expression-language
)

## Text content manipulation

**Data context used by following examples**

```javascript
{
    hello: "hello",
    world: "world",
    html: "<b>hello world</b><script type=\"application/javascript\">alert(\"unsecure\")</script>",
    longText: "this is an long\nlong\nlong\ntext"
}
```

**Example: simple text**

```html
<!--template-->
<div>${hello} ${world}</div>

<!--output-->
<div>hello world</div>
```

**Example: long text with trim length**

```html
<!--template-->
<div jstl-text-trim-length="15">${longText}</div>

<!--output-->
<div>this is an l...</div>
```

**Example: html as text**

Including html as text, the tags are removed and entities decoded.

```html
<!--template-->
<div>${html}</div>

<!--output-->
<div>hello worldalert("unsecure")</div>
```

**Example: html with secure filter (default)**

By including html content, the default behavore is to remove unsecure tags. Unsecure tags are: `script, style, body, html, head, object, link`

```html
<!--template-->
<div jstl-text-content-type="html">${html}</div>

<!--output: script tag is filtered-->
<div><b>hello world</b></div>
```

**Example: html with unsecure filter**

It is recommended to use `jstl-text-unsecure` only, if the content save.

```html
<!--template-->
<div jstl-text-content-type="html" jstl-text-unsecure>${html}</div>

<!--output-->
<div><b>hello world</b><script type="application/javascript">alert("unsecure")</script></div>
```

## jstl-if

The `jstl-if` directive evaluate an expression to a boolean value. If the expression value evaluated to `true` the tag with content would be included at result. By `false` the tag would not be rendered.

```html
<div jstl-if="${false}">not included</div>
<div jstl-if="${true}">included</div>
```

## jstl-choose

This is the equivalent of `if - if else - else` structure. The direct content of a tag marked by `jstl-choose` (selector: `[jstl-choose] > *`) readed. The first tag with `jstl-when`, with an expression evaluated to `true`, would be rendered. Every else are removed. If the expression value of all `jstl-when` evaluated to be `false`, in this case the a tag with `jstl-otherwise` are rendered, if available.

```html
<div jstl-choose>
    <div jstl-when="${expression}">case 1</div>
    <div jstl-when="${expression}">case 2</div>
    <div jstl-otherwise>if nothing matches</div>
</div>
```

## jstl-foreach

This provide the capabillity to loop over an array. The content of element would be repeated and rendered with every element of array.

`jstl-foreach` works in two modes: with `jstl-foreach`, it iterates data; without it, but with
`jstl-foreach-count`, it counts.

**Iterating data**

```javascript
//data used for example
{
    array : [
        {name: "item-1"},
        {name: "item-2"},
        {name: "item-3"}
    ],
    object : {
        a: "value-a",
        b: "value-b"
    }
}
```

```html
<div jstl-foreach="${array}" jstl-foreach-var="item">
    <div>${item.name}</div>
</div>

<!-- output -->
<div>
    <div>item-1</div>
    <div>item-2</div>
    <div>item-3</div>
</div>
```

An object is iterated by its own properties: the item is the value of a property, `status.key` its name.

```html
<div jstl-foreach="${object}">
    <div>${status.key}: ${item}</div>
</div>

<!-- output -->
<div>
    <div>a: value-a</div>
    <div>b: value-b</div>
</div>
```

| Attribute | |
|-|-|
| `jstl-foreach-start` | the index of the first item, `0` by default |
| `jstl-foreach-step` | the distance between two items, `1` by default: `2` renders every second item |
| `jstl-foreach-count` | only the items with an index below `start + count` are iterated; `0` iterates all |

The status of an iteration:

```javascript
{
    index: 0, // item index (zero based)
    number: 1, // item number (one based)
    key: 0, // the index of the item in an array, the name of the property in an object
    first: true, // true for the first iteration
    last: false, // true for the last iteration
    step: 1, // the distance between two iterations
    count: 10, // the end of the iterated range: the length of the array, or start + count if smaller
    data: [] // full array or object
}
```

**Counting**

Without `jstl-foreach`, the content is rendered `jstl-foreach-count` times; the item is a number.

```html
<div jstl-foreach-count="${3}">
    <div>${item}</div>
</div>

<!-- output -->
<div>
    <div>0</div>
    <div>1</div>
    <div>2</div>
</div>
```

| Attribute | |
|-|-|
| `jstl-foreach-count` | the number of iterations |
| `jstl-foreach-start` | the first number, `0` by default |
| `jstl-foreach-step` | the distance between two numbers, `1` by default |

The status of an iteration:

```javascript
{
    index: 0, // the item
    number: 1, // the item plus one
    first: true, // true for the first iteration
    last: false, // true for the last iteration
    step: 1, // the distance between two numbers
    count: 3 // the number of iterations
}
```

**Attributes of both modes**

**`jstl-foreach-var`**

Set a varname to be used as referrence for the loop element. The default varname is `item`.

```html
<div jstl-foreach="${array}" jstl-foreach-var="element">
    <div>${element}</div>
</div>
```

**`jstl-foreach-status`**

Set a varname for the status of the current iteration. The default varname is `status`.

**`jstl-foreach-condition`**

An expression evaluated before every item, with the item and the status. Once it is `true`, the
loop stops, and that item is not rendered.

```html
<div jstl-foreach="${array}" jstl-foreach-condition="${item.name == 'item-3'}">
    <div>${item.name}</div>
</div>

<!-- output -->
<div>
    <div>item-1</div>
    <div>item-2</div>
</div>
```

## jstl-repeat

This provide the capabillity to loop over an array. The difference between `jstl-foreach` and `jstl-repeat` is, `jstl-repeat` use the element self as template to be render items of array.

`jstl-repeat` works in two modes: with `jstl-repeat`, it iterates data; without it, but with
`jstl-repeat-count`, it counts.

**Iterating data**

```javascript
//data used for example
{
    array : [
        {name: "item-1"},
        {name: "item-2"},
        {name: "item-3"}
    ]
}
```

```html
<div jstl-repeat="${array}" jstl-repeat-var="item">${item.name}</div>

<!-- output -->
<div>item-1</div>
<div>item-2</div>
<div>item-3</div>
```

An object is iterated by its own properties: the item is the value of a property, `status.key` its name.

```javascript
//data used for example
{
    object : {
        a: "value-a",
        b: "value-b"
    }
}
```

```html
<div jstl-repeat="${object}">${status.key}: ${item}</div>

<!-- output -->
<div>a: value-a</div>
<div>b: value-b</div>
```

| Attribute | |
|-|-|
| `jstl-repeat-start` | the index of the first item, `0` by default |
| `jstl-repeat-step` | the distance between two items, `1` by default: `2` renders every second item |
| `jstl-repeat-count` | only the items with an index below `start + count` are iterated; `0` iterates all |

The status of an iteration:

```javascript
{
    index: 0, // item index (zero based)
    number: 1, // item number (one based)
    key: 0, // the index of the item in an array, the name of the property in an object
    first: true, // true for the first iteration
    last: false, // true for the last iteration
    step: 1, // the distance between two iterations
    count: 10, // the end of the iterated range: the length of the array, or start + count if smaller
    data: [] // full array or object
}
```

**Counting**

Without `jstl-repeat`, the element is rendered `jstl-repeat-count` times; the item is a number.

```html
<div jstl-repeat-count="${3}">${item}</div>

<!-- output -->
<div>0</div>
<div>1</div>
<div>2</div>
```

| Attribute | |
|-|-|
| `jstl-repeat-count` | the number of iterations |
| `jstl-repeat-start` | the first number, `0` by default |
| `jstl-repeat-step` | the distance between two numbers, `1` by default |

The status of an iteration:

```javascript
{
    index: 0, // the item
    number: 1, // the item plus one
    first: true, // true for the first iteration
    last: false, // true for the last iteration
    step: 1, // the distance between two numbers
    count: 3 // the number of iterations
}
```

**Attributes of both modes**

**`jstl-repeat-var`**

Set a varname to be used as referrence for the loop element. The default varname is `item`.

```html
<div jstl-repeat="${array}" jstl-repeat-var="element">${element}</div>
```

**`jstl-repeat-status`**

Set a varname for the status of the current iteration. The default varname is `status`.

**`jstl-repeat-condition`**

An expression evaluated before every item, with the item and the status. Once it is `true`, the
loop stops, and that item is not rendered.

```html
<div jstl-repeat="${array}" jstl-repeat-condition="${item.name == 'item-3'}">${item.name}</div>

<!-- output -->
<div>item-1</div>
<div>item-2</div>
```

## jstl-data

`jstl-data` provides the capability to load and manipulate the data at current data context. The different capabilities are activated by `jstl-data-mode` and one of these values `remote`, `set`, `direct`.

### `jstl-data-mode="remote"`

The `remote` mode can be used to load a remote json data into data context.

```json
//content of json file
{
    "name" : "value"
}
```

```html
<!-- load data direct into context-->
<div jstl-data="/path/to/json/file" jstl-data-mode="remote">${name}</div>
<!-- load data with varname into context-->
<div jstl-data="/path/to/json/file" jstl-data-mode="remote" jstl-data-var="file">${file.name}</div>
```

### `jstl-data-mode="set"`

The `set` can be used extract data from data context into a new var.

```json
//render data context
{
    "data" : "value"
}
```

```html
<!-- load data direct into context-->
<div jstl-data="${data}" jstl-data-mode="set" jstl-data-var="newData">${newData}</div>
```

### `jstl-data-mode="direct"`

The `direct` are used to define a static value.

```html
<!-- load data direct into context-->
<div jstl-data="hello world" jstl-data-mode="direct" jstl-data-var="data">${data}</div>

<!-- output-->
<div>hello world</div>
```

## jstl-include

With `jstl-include` it is possible to load a template and execute the template as content of current tag. The url of template can be static or evaluated by an expression.

```html
<div jstl-include="/url/to/template.tpl.html"></div>
<div jstl-include="${url.to.template}"></div>
```

### Additional option

`jstl-include-mode`

|value||
|-|-|
|replace|replacing the content of current tag|
|append|appending the template as content of current tag|
|prepend|prepending the template as content of current tag|

## jstl-attach-element

`jstl-attach-element` provide the capability to include a existing dom object by javascript object reference or by a query selector string. 

> The attached element doesn`t process. It would be included only!

```html
<div jstl-attach-element="${domElement}"></div>
<div jstl-attach-element="${querySelector}"></div>
<div jstl-attach-element="[querySelector]"></div>
```

### Additional option

`jstl-attach-element-mode`

|value||
|-|-|
|replace|replacing the content by resolved element|
|append|append resolved element, after current element is completely rendered|
|prepend|prepend resolved element, after current element is completely rendered|

## Attribute manipulation

The `JSTL` provide the functionality to manipulate the attributes of a tag.

> To define a condition for an attribute, prefix the attribute name by `?` and include this new attribute with an expression.

```html
<!-- set value of attribute by an expression-->
<div attribute="${value}"></div>

<!-- check if attribute including-->
<div ?attribute="${value}" attribute="value"></div>

<!-- check if attribute including and set value by an expression-->
<div ?attribute="${value}" attribute="${value}"></div>
```

## Event handler

To make the content interactive by user, it is possible to define event handler. Event handler can be global function, function of current render context or fetch one event and delegate the event by a new event.

> it is possible to add an event handler under a condition. Prefix the event handler definition with `?` and with an expression value.

### add event handler

>syntax: @[event]="[action]"

```html
<div @click="alert('click')"></div>
<div ?@click="${condition}" @click="alert('click')"></div>
```

### delegate events

>syntax: @[event]:delegate="[target event name]"

```html
<div @click:delegate="my-custom-event"></div>
<div ?@click:delegate="${condition}" @click:delegate="my-custom-event"></div>
```

### toggle attribute by event

>syntax: @[event]:toggleAttribute:[attribute name]="[selector of target element]"

```html
<div @click:toggleAttribute:test-attribute="#id-of-target-element"></div>
<div ?@click:toggleAttribute:test-attribute="${condition}" @click:toggleAttribute:test-attribute="#id-of-target-element"></div>
```

### toggle class by event

>syntax: @[event]:toggleClass:[class name]="[selector of target element]"

```html
<div @click:toggleClass:test-class=""></div>
<div @click:toggleClass:test-class="#id-of-target-element"></div>
<div ?@click:toggleClass:test-class="${condition}" @click:toggleClass:test-class="#id-of-target-element"></div>
```

## jstl-async

`jstl-async` provide the capability to decouple a subtree of rendering path.

```html
    <div jstl-async><!-- at this point, its starts a new renderer and decoupling from the previous renderer -->
    </div>
```

## jstl-tagname

The `jstl-tagname` is useful to dynamiclly creates a tag or change the tagname by using expressions.

```html
<!--
    render context: {
        tagname: "span",
        content: "some content"
    }
-->

<jstl jstl-tagname="${tagname}">${content}</jstl>
<div jstl-tagname="${tagname}">${content}</div>

<!-- output -->
<span>some content</span>
<span>some content</span>

```

## jstl-ignore

`jstl-ignore` flag a subtree to be ignored by renderer. The renderer includes the subtree unprocessed directly into the rendering result.

```html
<!--
    render context: {
        text1: "some text",
        text2: "another text"
    }
-->
<div>
    ${text1}
    <div jstl-ignore>${text2}</div>
</div>

<!-- output -->
<div>
    some text
    <div>${text2}</div>
</div>

```

## jstl-on-finished

>experimentelle feature

# Special Tags

## Tag `jstl`

The tag `jstl` to use rendering functicality without visual dom structures. The `jstl` tag would be replaces by the content of the render result. If no content avalilable, the tag would be removed.

```html
<!--
    render context: {
        text1: "some text",
        text2: "another text"
        array: [
            {text: "text 1"},
            {text: "text 2"},
            {text: "text 3"}
        ]
    }
-->
<div>
    <!-- case 1 -->
    <jstl>
        ${text1}
        <div>${text2}</div>
    </jstl>

    <!-- case 2 -->
    <jstl jstl-foreach="${array}" jstl-foreach-var="item">
        <div>${item.text}</div>
    </jstl>

    <!-- case 3 -->
    <jstl jstl-data="${ text1 + ', ' + text2}" jstl-data-mode="set" jstl-data-var="result">
        ${result}
    </jstl>

</div>


<!-- output -->
<div>
    <!-- case 1 -->
    some text
    <div>another text</div>

    <!-- case 2 -->
    <div>text 1</div>
    <div>text 2</div>
    <div>text 3</div>

    <!-- case 3 -->
    some text, another text
</div>

```

# Javascript API

## Template

```javascript
// import the template class
import { Template } from "@default-js/defaultjs-template-language";
```

### `new Template(template)`

Create a instance of `Template`.

**Kind**: constructor

| Param     | Type                | Description  | Default |
| --------- | ------------------- | ------------ | ------- |
| template  | `HTMLTemplateElement` | template definition - `required` | |
| key | `string` | identifire at cache - `optional` | `null` |

Additional to the constructor, the template class provide some static methods to create template instance.

### `load(template, cache, alias)` ⇒ `Template`

Create a instance of `Template` by `string`, `URL`, `Node`, `NodeList`, `HTMLCollection` or `Template`. Any other type rejects with an `Error`.

**Kind**: static function

| Param     | Type                | Description  | Default |
| --------- | ------------------- | ------------ | ------- |
| template  | `string`, `URL`, `Node`, `NodeList`, `HTMLCollection` or `Template` | source of template - `required` | |
| cache | `boolean` | store the template at cache - `optional` | `true` |
| alias | `string` | store the template at cache - `optional` | `null` |

### `fetch(url, cache, alias)` ⇒ `Template`

Create a instance of `Template` by a url as `string` or `URL`. A `string` is resolved against `location`, the address of the page. Any other type rejects with an `Error`.

**Kind**: static function

| Param     | Type                | Description  | Default |
| --------- | ------------------- | ------------ | ------- |
| url  | `string`, `URL` | source of template - `required` | |
| cache | `boolean` | store the template at cache - `optional` | `true` |
| alias | `string` | store the template at cache - `optional` | `null` |

### `loadNodeTemplate(node, defaultTemplate, cache, alias)` ⇒ `Template`

Attempts to determine a `Template` based on a `Node`.

This function makes several steps to attempting a `Template` by following order:

1. Search for a `HTMLTemplateElement` as child of `Node` (selector: `:scope > template`)
2. Evaluate the attribute `template` at `Node` as a query selector
3. Evaluate the attribute `template` at `Node` as a `URL`

**Kind**: static function

| Param     | Type                | Description  | Default |
| --------- | ------------------- | ------------ | ------- |
| url  | `Node` | Node to be attempting the Template - `required` | |
| defaultTemplate  | `Template` | fallback `Template`, if no template found - `optional` | `null` |
| cache | `boolean` | store the template at cache - `optional` | `true` |
| alias | `string` | store the template at cache - `optional` | `null` |

## Renderer

```javascript
// import the template class
import { Renderer } from "@default-js/defaultjs-template-language";
```

### `new Renderer(option)`

Creates an instance of `Renderer`.

**Kind**: constructor

| Param  | Type     | Description  | Default |
| ------ | -------- | ------------ | ------- |
| option | `Object` | template and base data of the renderer - `optional` | `{}` |

**option**

| Properties | Type       | Description  | Default |
| ---------- | ---------- | ------------ | ------- |
| template   | `Template` | the template rendered, if `render` gets none - `optional` | `null` |
| data       | `Object`   | base data, available in every rendering - `optional` | `{}` |

Throws an `Error`, if `template` is not a `Template`. To create a renderer from another source of a template, use `Renderer.build`.

### `Renderer.build(option)` ⇒ `Promise<Renderer>`

Creates an instance of `Renderer` and loads its template with `Template.load` first.

**Kind**: static function

| Properties | Type | Description  | Default |
| ---------- | ---- | ------------ | ------- |
| template   | `Template`, `string`, `URL`, `Node`, `NodeList`, `HTMLCollection` or a `Promise` of one | source of the template - `optional` | `null` |
| data       | `Object` | base data, available in every rendering - `optional` | `{}` |

### `render(option)` ⇒ `Promise`

Renders a template into a container. The promise resolves, when the rendering is finished.

**Kind**: function

| Param  | Type     | Description  | Default |
| ------ | -------- | ------------ | ------- |
| option | `Object` | what to render, and where - `required` |  |

**option**

| Properties | Type          | Description  | Default |
| ---------- | ------------- | ------------ | ------- |
| container  | `HTMLElement` | the element to render into - `required` | |
| template   | `Template`, `string`, `URL`, `Node`, `NodeList` or `HTMLCollection` | the template to render, loaded with `Template.load` - `optional` | the template of the renderer |
| data       | `Object`      | data of this rendering; a name it holds hides the same name of the base data - `optional` | |
| mode       | `string`      | `replace`, `append` or `prepend` - `optional` | `replace` |
| target     | `HTMLElement` | an element in the container: `replace` replaces it, `append` inserts the result after it, `prepend` before it - `optional` | |
| root       | `HTMLElement` | the element `jstl-on-finished` gets as `$root` - `optional` | the container |

Without `target`, `replace` replaces the content of the container, `append` appends the result to it and `prepend` prepends it. The promise is rejected, if there is no template, neither in `option` nor at the renderer, or if `mode` is none of the three.

### `Renderer.render(option)` ⇒ `Promise`

Renders a template into a container without keeping a renderer: `new Renderer({ template, data }).render({ container, mode, target })`.

**Kind**: static function

| Properties | Type          | Description  | Default |
| ---------- | ------------- | ------------ | ------- |
| container  | `HTMLElement` | the element to render into - `required` | |
| template   | `Template`    | the template to render - `required` | |
| data       | `Object`      | data for rendering - `optional` | |
| mode       | `string`      | as for `render(option)` - `optional` | `replace` |
| target     | `HTMLElement` | as for `render(option)` - `optional` | |

The promise is rejected, if `template` is not a `Template`; load one with `Template.load` first, or use `Renderer.build`.

## Custom Directives

## Custom Tags
