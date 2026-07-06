console.log("Its first code in with html and css");
/*
DOM (Document Object Model) in JavaScript

The DOM (Document Object Model) is a programming interface for HTML and XML documents. It represents a web page as a tree of objects that JavaScript can access and manipulate.

Simply put:

The DOM allows JavaScript to change the content, structure, and style of a web page dynamically.

How DOM Works

When a browser loads an HTML page, it creates a DOM Tree.

HTML Example
<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>
    <h1 id="heading">Hello World</h1>
    <p>This is a paragraph.</p>
    <button>Click Me</button>
</body>
</html>
DOM Tree
Document
│
└── html
    │
    ├── head
    │    └── title
    │
    └── body
         │
         ├── h1
         ├── p
         └── button

Every HTML element becomes an object (node) in the DOM.

Why Do We Use DOM?

Using the DOM, JavaScript can:

Change HTML content
Change CSS styles
Add new elements
Remove elements
Handle user events (click, input, hover)
Validate forms
Create animations

Example:

document.getElementById("heading").innerHTML = "Welcome!";

Output:

Hello World

changes to

Welcome!
Accessing Elements
1. getElementById()

Selects an element using its ID.

HTML

<h1 id="title">Hello</h1>

JavaScript

let heading = document.getElementById("title");
console.log(heading);
2. getElementsByClassName()

Returns all elements with the given class.

HTML

<p class="text">One</p>
<p class="text">Two</p>

JavaScript

let items = document.getElementsByClassName("text");

console.log(items);

Output

HTMLCollection(2)

Access first element

console.log(items[0]);
3. getElementsByTagName()

Returns elements by tag name.

let p = document.getElementsByTagName("p");
4. querySelector()

Returns the first matching element.

document.querySelector("#title");

Using class

document.querySelector(".text");

Using tag

document.querySelector("p");
5. querySelectorAll()

Returns all matching elements.

let items = document.querySelectorAll(".text");

Output

NodeList(2)

Loop through

items.forEach(item => {
    console.log(item);
});
Changing HTML Content

Using innerHTML

<p id="demo">Hello</p>
document.getElementById("demo").innerHTML = "Welcome";

Output

Welcome
Changing Text Only

Using textContent

document.getElementById("demo").textContent = "JavaScript";

Difference:

innerHTML

element.innerHTML = "<b>Hello</b>";

Output

Hello (bold)

textContent

element.textContent = "<b>Hello</b>";

Output

<b>Hello</b>

(as plain text)

Changing CSS

HTML

<p id="para">Learning DOM</p>

JavaScript

let p = document.getElementById("para");

p.style.color = "red";
p.style.backgroundColor = "yellow";
p.style.fontSize = "30px";
Changing Attributes

HTML

<img id="img" src="old.jpg">

JavaScript

document.getElementById("img").src = "new.jpg";
*/


// 
/*
--------------------DOM Manipulation by ID (getElementById())-----------------------------

getElementById() is one of the most commonly used DOM methods in JavaScript. It selects an HTML element using its id attribute.

Syntax
document.getElementById("idName");
document → Represents the entire HTML document.
getElementById() → Finds an element by its unique id.
Returns the element object if found; otherwise returns null.
*/

let id_details = document.getElementById("first");
console.dir(id_details);
console.log(id_details);

let id1_details = document.getElementById("secend");
console.dir(id1_details);
console.log(id1_details);

let one_class = document.getElementsByClassName("one");
console.dir(one_class);
console.log(one_class);

let by_tag = document.getElementsByTagName("p");
console.dir(by_tag);
console.log(by_tag);

let query_selectoruse = document.querySelector("p");
console.dir(query_selectoruse);
console.log(query_selectoruse);

let query_selectoruseall = document.querySelectorAll("p");
console.dir(query_selectoruseall);
console.log(query_selectoruseall);

// Dom Properties 
/* 
| Property                 | Purpose                   |
| ------------------------ | ------------------------- |
| `innerHTML`              | Get/Set HTML content      |
| `innerText`              | Get/Set visible text      |
| `textContent`            | Get/Set all text          |
| `value`                  | Input value               |
| `src`                    | Image source              |
| `href`                   | Link URL                  |
| `id`                     | Element ID                |
| `className`              | CSS class                 |
| `classList`              | Add/Remove/Toggle classes |
| `style`                  | Change CSS                |
| `attributes`             | All attributes            |
| `title`                  | Tooltip text              |
| `checked`                | Checkbox/Radio state      |
| `disabled`               | Enable/Disable element    |
| `children`               | Child elements            |
| `parentElement`          | Parent element            |
| `firstElementChild`      | First child element       |
| `lastElementChild`       | Last child element        |
| `nextElementSibling`     | Next sibling element      |
| `previousElementSibling` | Previous sibling element  |
| `nodeName`               | Tag name                  |
| `nodeType`               | Node type                 |
| `nodeValue`              | Text node value           |
*/

let d = id1_details.tagName;
console.log(d);

let text = id1_details.innerText;
console.log(text);

let html_show = id_details.innerHTML;
console.log(html_show);

let contents = id1_details.textContent;
console.log(contents);
console.dir(contents);

// practice challenge One 1 
let pr_print = document.getElementById("pr");
pr_print.innerText= "Students of GBU College";
console.log(pr_print.innerText);

// Practice challenge Secend 
let div_chang = document.getElementsByClassName("box");

div_chang[0].innerText = "All text are updated 1";
div_chang[1].innerText = "All text are updated 2";
div_chang[2].innerText = "All text are updated 3";
console.log(div_chang[0]);
console.log(div_chang[1]);
console.log(div_chang[2]);



