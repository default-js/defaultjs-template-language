defaultjs-template-language (`alias: jstl`)
===

- [defaultjs-template-language (`alias: jstl`)](#defaultjs-template-language-alias-jstl)
- [Basic usage](#basic-usage)
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
    - [`new Tempate(template)`](#new-tempatetemplate)
    - [`load(template, cache, alias)` ⇒ `Template`](#loadtemplate-cache-alias--template)
    - [`fetch(url, cache, alias)` ⇒ `Template`](#fetchurl-cache-alias--template)
    - [`loadNodeTemplate(node, defaultTemplate, cache, alias)` ⇒ `Template`](#loadnodetemplatenode-defaulttemplate-cache-alias--template)
  - [Renderer](#renderer)
    - [`new Renderer(template, data)`](#new-renderertemplate-data)
    - [`render(option)`](#renderoption)
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
import {Template, Renderer} from "@default-js/defaultjs-template-languange"

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

        //script file is located at dist directory
        <script type="application/javascript" src="/path/to/defaultjs-template-languange.min.js" />
        <script type="application/javascript">
        const {Template, Renderer} = defaultjs.tl;
        const container = document.getElementById("MyContainterToRenderInto");

        const render = async () {
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
<div>${hallo} ${world}</div>

<!--output-->
<div>hello world</div>
```

**Example: long text with trim length**

```html
<!--template-->
<div jstl-text-trim-length="15">${longText}</div>

<!--output-->
<div>this is an long...</div>
```

**Example: html as text**

Including html as text, all tags are escaped.

```html
<!--template-->
<div>${html}</div>

<!--output-->
<div>&gt;b&lt;hello world&gt;/b&lt;&gt;script type="application/javascript"&lt;alert("unsecure")&gt;/script&lt;</div>
```

**Example: html with secure filter (default)**

By including html content, the default behavore is to remove unsecure tags. Unsecure tags are: `script, style, body, html, head, object, link`

```html
<!--template-->
<div jstl-text-content-type="html">${html}</div>

<!--output: script tag is filtered-->
<div><b>hello world</b>/div>
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

**additional parameter**

**`jstl-foreach-var`**

Set a varname to be used as referrence for the loop element. The default varname is `item`.

```html
<div jstl-foreach="${array}" jstl-foreach-var="element">
    <div>${element}</div>
</div>
```

**`jstl-foreach-status`**

Set a varname for a meta data and state of the current iteration. The default varname is `status`.

```javascript
{
    index: 0, // item index (zero based)
    number: 1, // item number (one based)
    count: 10, // length of array,
    data: [] // full array
}
```

## jstl-repeat

This provide the capabillity to loop over an array. The difference between `jstl-foreach` and `jstl-repeat` is, `jstl-repeat` use the element self as template to be render items of array.

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

**additional parameter**

**`jstl-repeat-var`**

Set a varname to be used as referrence for the loop element. The default varname is `item`.

```html
<div jstl-repeat="${array}" jstl-foreach-var="element">${element}</div>
```

**`jstl-repeat-status`**

Set a varname for a meta data and state of the current iteration. The default varname is `status`.

```javascript
{
    index: 0, // item index (zero based)
    number: 1, // item number (one based)
    count: 10, // length of array,
    data: [] // full array
}
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
|prepand|prepending the template as content of current tag|

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
|prepand|prepend resolved element, after current element is completely rendered|

## Attribute manipulation

The `JSTL` provide the functionality to manipulate the attributes of a tag.

> To define a condition for an attribute, prefix the attribute name by `?` and include this new attribute with an expression.

```html
<!-- set value of attribute by an expression-->
<div attribute="${value}"></div>

<!-- check if attribute including-->
<div ?attribute="${value}" attrbute="value"></div>

<!-- check if attribute including and set value by an expression-->
<div ?attribute="${value}" attrbute="${value}"></div>
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
<div ?@click:toggleclass:test-class="${condition}" @click:toggleAttribute:test-class="#id-of-target-element"></div>
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
import { Template } from "@default-js/defauljs-template-language";
```

### `new Tempate(template)`

Create a instance of `Template`.

**Kind**: constructor

| Param     | Type                | Description  | Default |
| --------- | ------------------- | ------------ | ------- |
| template  | `HTMLTemplateElement` | template definition - `required` | |
| key | `string` | identifire at cache - `optional` | `null` |

Additional to the constructor, the template class provide some static methods to create template instance.

### `load(template, cache, alias)` ⇒ `Template`

Create a instance of `Template` by `string`, `URL`, `Node`, `NodeList`, `HTMLCollection` or `Template`.

**Kind**: static function

| Param     | Type                | Description  | Default |
| --------- | ------------------- | ------------ | ------- |
| template  | `string`, `URL`, `Node`, `NodeList`, `HTMLCollection` or `Template` | source of template - `required` | |
| cache | `boolean` | store the template at cache - `optional` | `true` |
| alias | `string` | store the template at cache - `optional` | `null` |

### `fetch(url, cache, alias)` ⇒ `Template`

Create a instance of `Template` by a url as `string` or `URL`.

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
import { Renderer } from "@default-js/defauljs-template-language";
```

### `new Renderer(template, data)`

Create a instance of `Renderer`.

**Kind**: constructor

| Param     | Type                | Description  | Default |
| --------- | ------------------- | ------------ | ------- |
| template  | `Template` | template definition - `required` | |
| data | `Object` | base data to render a template - `optional` | `null` |

### `render(option)`

Execute the rendering process.

**Kind**: constructor

| Param  | Type     | Description  | Default |
| ------ | -------- | ------------ | ------- |
| option | `Object` | option to specify the rendering - `required` |  |

**option**: Option to specify the how, what and where to be render

| Properties     | Type          | Description  | Default |
| -------------- | ------------- | ------------ | ------- |
| container      | `HTMLElement` | element where to be render the template into - `required` | |
| template       | `Template`    | the template that to be render. - `optional` | template from the renderer |
| data           | `Object`      | data for rendering - `optional` | |
| mode           | `string`      | possible options [`append`, `prepend`,`replace`] - `optional` | `replace` |

## Custom Directives

## Custom Tags
