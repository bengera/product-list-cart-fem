# 🛒 Product Shopping Cart

**React-based responsive shopping cart interface**

[ Front End Mentor Challenge](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d)
<br>
[ View Live Solution](https://product-list-with-cart-react0.netlify.app)

---

## Overview

This is a responsive shopping cart interface built with React. Users can add, remove or adjust the quantity of items and confirm their order through a modal window. This project was built in order to practice one of React's core concepts: `useState`.

---

![desktop view](/desktop-screenshot.png)
![modal view](/modal-screenshot.png)

## ✨ Features

- **Product List** – Display and render items from a JSON file
- **Cart System** – Add/remove items, update quantities, and view totals
- **Order Modal** – Confirmation UI with full cart summary and reset logic
- **Responsive Design** – Image switching via `<picture>` tag and em-based breakpoints
- **React Hooks** – `useState` and `useEffect` used for interactivity

---

## What I Practiced

- **State Management**

  - Liftting and sharing state between components
  - Conditonal rendering using the ternary operator
  - Rendering lists from arrays

---

## Tech Stack

- React
- Vite
- SCSS
- JSON (data)

---

## 🧠 Thoughts

This project helped me to think about how we derive values or render components based on state, rather than relying on imperative DOM manipulation.

I also discovered the `useEffect` hook, this allowed me to lock scrolling on the body when the user opened the modal window, since body was outside the component tree, I needed this side effect to happen manually when the overlay changed.
The second use was with calculating the order total when the cart changes, I used this hook to recalcaulate the total whenever the number of cart items state changed. This kept the total in sync whenever items were added or deleted or the quantitiy changed.
