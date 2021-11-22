# defaultjs-template-language (`alias: jstl`)

- [defaultjs-template-language (`alias: jstl`)](#defaultjs-template-language-alias-jstl)
  - [0. Introduction](#0-introduction)
  - [1. Basic usage](#1-basic-usage)
  - [2. Template File](#2-template-file)
  - [3. Template functionality](#3-template-functionality)
    - [3.1. Expressions](#31-expressions)
    - [Text content](#text-content)
    - [jstl-if](#jstl-if)
    - [jstl-choose](#jstl-choose)
    - [jstl-foreach](#jstl-foreach)
    - [jstl-repeat](#jstl-repeat)
  - [3. Special Tags](#3-special-tags)
  - [4. Javascript API](#4-javascript-api)
    - [4.1. Template](#41-template)
    - [4.2. Renderer](#42-renderer)
    - [4.3. Renderer Dom Events](#43-renderer-dom-events)
    - [4.4. Custom Directives](#44-custom-directives)
    - [4.5. Custom Tags](#45-custom-tags)
  - [Links / References](#links--references)
  - [[defaultjs-expression-language] https://github.com/default-js/defaultjs-expression-language](#defaultjs-expression-language-httpsgithubcomdefault-jsdefaultjs-expression-language)

## 0. Introduction

The defaultjs-template-language, or simplified `J`ava`S`cript `T`emplate `L`anguage -> short `jstl`,  is a reimplementation of [de.titus.jstl][1]. The new version no longer uses jquery. Only dependencies from the `@default-js` ecosystem are used. there are no third party libs used at runtime.

The reimplementation has two goals:

1. **Primary goal** is to support javascript `await async` at all directives and all api levels.
2. **Secondary goal** is to improve the performence.

*Both goals has been fully achieved.*


## 1. Basic usage

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

## 2. Template File



## 3. Template functionality

### 3.1. Expressions

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

The execution engine is implemented with [defaultjs-expression-language]


---
### Text content




```html
<!--
    data: {
        hello: "hello",
        world: "world",
        html: "<b>hello world</b><script type=\"application/javascript\">alert(\"unsecure\")</script>",
        longText: "this is an long\nlong\nlong\ntext"
    }
-->

<div>${hallo} ${world}</div>
<div jstl-text-content-type="text">${html}</div>
<div jstl-text-content-type="html">${html}</div>
<div jstl-text-content-type="html" jstl-text-unsecure>${html}</div>
<div jstl-text-trim-length="15">${longText}</div>

```



---
### jstl-if

---
### jstl-choose

---
### jstl-foreach

---
### jstl-repeat

---
**jstl-data**

---
**jstl-include**

---
**Attributes**

---
**Event Handler**

---
**jstl-async**

---
**jstl-tagname**

---
**jstl-ignore**

---
**jstl-on-finished**


## 3. Special Tags

## 4. Javascript API

### 4.1. Template

### 4.2. Renderer

### 4.3. Renderer Dom Events

### 4.4. Custom Directives

### 4.5. Custom Tags


---
## Links / References

[1] https://github.com/TwilightTitus/de.titus.jstl
[defaultjs-expression-language] https://github.com/default-js/defaultjs-expression-language
---