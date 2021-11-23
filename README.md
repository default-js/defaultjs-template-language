defaultjs-template-language (`alias: jstl`)
===

- [defaultjs-template-language (`alias: jstl`)](#defaultjs-template-language-alias-jstl)
- [Basic usage](#basic-usage)
- [Use Template File](#use-template-file)
- [Template functionality](#template-functionality)
  - [Expressions](#expressions)
  - [Text content](#text-content)
  - [jstl-if](#jstl-if)
  - [jstl-choose - jstl-when - jstl-otherwise](#jstl-choose---jstl-when---jstl-otherwise)
  - [jstl-foreach](#jstl-foreach)
  - [jstl-repeat](#jstl-repeat)
  - [jstl-data](#jstl-data)
    - [`jstl-data-mode="remote"`](#jstl-data-moderemote)
    - [`jstl-data-mode="set"`](#jstl-data-modeset)
    - [`jstl-data-mode="direct"`](#jstl-data-modedirect)
  - [jstl-include](#jstl-include)
    - [Additional option](#additional-option)
  - [Attribute manipulation](#attribute-manipulation)
  - [Event handler](#event-handler)
    - [simple event handler](#simple-event-handler)
    - [delegate events](#delegate-events)
    - [toggle attribute by event](#toggle-attribute-by-event)
    - [toggle class by event](#toggle-class-by-event)
  - [jstl-async](#jstl-async)
  - [jstl-tagname](#jstl-tagname)
  - [jstl-ignore](#jstl-ignore)
  - [jstl-on-finished](#jstl-on-finished)
- [Special Tags](#special-tags)
- [Javascript API](#javascript-api)
  - [Template](#template)
  - [Renderer](#renderer)
  - [Renderer Dom Events](#renderer-dom-events)
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
        const {Template, Renderer} = defaultjs.jstl;
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

---
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


## Text content

---
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

---
The `jstl-if` directive evaluate an expression to a boolean value. If the expression value evaluated to `true` the tag with content would be included at result. By `false` the tag would not be rendered.

```html
<div jstl-if="${false}">not included</div>
<div jstl-if="${true}">included</div>
```

## jstl-choose - jstl-when - jstl-otherwise

---
This is the equivalent of `if - if else - else` structure. The direct content of a tag marked by `jstl-choose` (selector: `[jstl-choose] > *`) readed. The first tag with `jstl-when`, with an expression evaluated to `true`, would be rendered. Every else are removed. If the expression value of all `jstl-when` evaluated to be `false`, in this case the a tag with `jstl-otherwise` are rendered, if available.

```html
<div jstl-choose>
    <div jstl-when="${expression}">case 1</div>
    <div jstl-when="${expression}">case 2</div>
    <div jstl-otherwise>if nothing matches</div>
</div>
```

## jstl-foreach

---
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

---

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

---

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

---

With `jstl-include` it is possible to load a template and execute the template as content of current tag. The url of template can be static or evaluated by an expression.

```html
<div jstl-include="/url/to/template.tpl.html"></div>
<div jstl-include="${url.to.template}"></div>
```

### Additional option

`jstl-include-mode`

> |value||
> |-|-|
> |replace|replacing the content of current tag|
> |append|appending the template as content of current tag|
> |prepand|prepending the template as content of current tag|

## Attribute manipulation

---

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

---

To make the content interactive by user, it is possible to define event handler. Event handler can be global function, function of current render context or fetch one event and delegate the event by a new event.

> it is possible to add an event handler under a condition. Prefix the event handler definition with `?` and with an expression value. 

### simple event handler

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
<div @click:toggleAttribute:test-class="#id-of-target-element"></div>
<div ?@click:toggleAttribute:test-class="${condition}" @click:toggleAttribute:test-class="#id-of-target-element"></div>
```



## jstl-async

---

## jstl-tagname

---

## jstl-ignore

---

## jstl-on-finished

---


# Special Tags

# Javascript API

## Template

## Renderer

## Renderer Dom Events

## Custom Directives

## Custom Tags

