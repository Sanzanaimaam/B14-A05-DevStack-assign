# 🚀 DevStack

DevStack is a simple and user-friendly website where users can explore different technologies and build their own technology stack.

The project focuses on keeping the interface **clean, simple, and easy to use** while practicing important React and TypeScript concepts.

## 🛠️ Technologies Used

- React + Vite
- TypeScript
- React Toastify
- Tailwind CSS
- DaisyUI
- HTML

## ✨ Features

- 🔍 Explore different technologies from various categories.
- 🧩 Select technologies and build a personalized technology stack.
- 🗑️ Remove technologies from the selected stack.
- 🔔 Show toast messages when technologies are added or removed.
- 📭 Display an empty-stack message when no technology is selected.
- 📱 Responsive and clean user interface.

## 📚 Concepts I Learned

### 1. What is JSX?

JSX lets us write HTML-like code inside JavaScript or TypeScript. It makes React code easier and more readable to write.

### 2. Props vs State

**Props** pass data from a parent component to a child component.

**State** stores data inside a component and allows the UI to update when the data changes.

### 3. What is `useState`?

`useState` is a React Hook used to store and update data in a component.

I used `useState` to manage my selected technologies.

### 4. What is `useEffect`?

`useEffect` is a React Hook that runs code after rendering.

It can be used for tasks such as loading data, fetching data, or responding to changes.

### 5. Why use `key` in `.map()`?

The `key` helps React identify each item in a list.

It allows React to efficiently track which items have changed, been added, or been removed.

### 6. What is Conditional Rendering?

Conditional rendering means showing something based on a condition.

I used conditional rendering to display an empty-stack message when no technology has been selected.

### 7. Parent to Child and Child to Parent

**Parent to Child:**  
The parent sends data to the child using props.

**Child to Parent:**  
The parent passes a function to the child through props, and the child calls that function to send data back to the parent.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Go to the project directory

```bash
cd DevStack
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Then open the local URL shown in your terminal.

## 🎯 Project Purpose

The main purpose of DevStack was to practice:

- React fundamentals
- TypeScript
- JSX
- Props and State
- `useState`
- `useEffect`
- Conditional Rendering
- List Rendering and `key`
- Parent-to-child communication
- Child-to-parent communication
- React Toastify
- Tailwind CSS and DaisyUI

## 👩‍💻 Author

**Sanzana Imam Chowdhury**

Built with ❤️ using React, TypeScript, Tailwind CSS, and DaisyUI.
