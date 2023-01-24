# 🧮 [Calc,a simple calculator ](https://andressavianab.github.io/calculator-app-main/)# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Responsive Design
- JavaScript

### What I learned

My biggest learning was using the HTML data property to change the value of CSS variables. I also learned to control them by Javascript.

```css
body[data-theme="t-two"] {
  --main-bg: hsl(0, 0%, 90%);
  --screen-bg: hsl(0, 0%, 93%);
  --calc-bg: hsl(0, 5%, 81%);
  --text-color: hsl(60, 10%, 19%);
  --text-del-color: hsl(0, 0%, 100%);
  --key-bg-del: hsl(185, 42%, 37%);
  --key-bg: hsl(45, 7%, 89%);
  --key-bg-equal: hsl(25, 98%, 40%);
  --key-equal-shadow: hsl(25, 99%, 27%);
  --key-del-shadow: hsl(185, 58%, 25%);
  --key-shadow: hsl(35, 11%, 61%);
  --key-color-equal-text: hsl(0, 0%, 100%);
  --rigth: 0px;
}
```

```js
const themes = {
  "t-one": "t-two",
  "t-two": "t-three",
  "t-three": "t-one",
};

const button = document.getElementById("switchtheme");
if (button) {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const currentTheme = document.body.dataset.theme;
    document.body.setAttribute("data-theme", themes[currentTheme] || "t-one");
  });
}
```

## Author

- Github - [@andressavianab](https://github.com/andressavianab)
- Frontend Mentor - [@andressavianab](https://www.frontendmentor.io/profile/andressavianab)
