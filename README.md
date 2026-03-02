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

## Features

- **Product List** – Display and render items from a JSON file
- **Cart System** – Add/remove items, update quantities, and view totals
- **Order Modal** – Confirmation UI with full cart summary and reset logic
- **Responsive Design** – Image switching via `<picture>` tag and em-based breakpoints
- **React Hooks** – `useState` and `useEffect` used for interactivity

---

## How It Works

- Cart state is owned at the top level and passed down via props to product and cart components.
- When an item is added, the cart checks if it already exists and either increments the quantity or adds a new entry.
- Order total is derived from cart state rather than stored separately.
- The confirmation modal visibility is controlled via state.
- A side effect locks body scroll when the modal is open using `useEffect`.

## Tech Stack

- React 19
- Vite
- SCSS
- JSON (data)

---

## 🧠 Reflections

This project reinforced the importance of deriving UI from state rather than manipulating the DOM directly.

I used `useEffect` in two key scenarios:

- Locking body scroll when the modal is open (side effect outside the React tree).now
- Recalculating order totals whenever cart state changes to keep derived values in sync.

This helped me better understand how React separates rendering logic from side effects.

## Run Locally

npm install
npm run dev
