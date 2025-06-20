# ✅ React Todo App with Context API & localStorage

A modern and minimalist Todo app built with **React**, leveraging the **Context API** for global state and **localStorage** to persist tasks across sessions.

---

## 🌟 Features

- Add, edit, and delete todos
- Mark todos as completed/incomplete
- Persist data using browser `localStorage`
- Context API-based global state (no Redux)

---

## 🛠 Tech Stack

- React (Vite)
- Context API
- localStorage
- JavaScript
- Tailwind CSS

---

## 📂 Project Structure

<!-- code block starts -->
```text
todo-app/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx
│   │   └── TodoItem.jsx
│   ├── context/
│   │   └── TodoContext.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package-lock.json
├── eslint.config.json
├── LICENSE
├── package.json
├── vite.config.json
├── index.html
└── README.md
```
<!-- code block ends -->

---

## ⚙️ Getting Started

### 📦 Prerequisites

- Node.js (v18+)
- npm or yarn

---

### 🚀 Installation

<!-- code block starts -->
```bash
git clone https://github.com/anand11206/TodoReactAndContextAPI.git
cd TodoReactAndContextAPI

npm install
# or
yarn install
```
<!-- code block ends -->

---

### 🧪 Running the Application

<!-- code block starts -->
```bash
npm run dev      # For Vite
```
<!-- code block ends -->

Then visit:

<!-- code block starts -->
```text
http://localhost:5173 or what terminal shows
```
<!-- code block ends -->

---

### 📦 Building for Production

<!-- code block starts -->
```bash
npm run build
```
<!-- code block ends -->

The output will be in the `dist/` (Vite) or `build/` (CRA) directory.

---

## 🧠 How It Works

- The **Context API** provides a global state that holds the todo list and related actions.
- The todo list is synced to `localStorage` using `useEffect`, so tasks persist after a page refresh or browser restart.


---

## 📄 License

This project is licensed under the **MIT License**.  
See the [LICENSE](./LICENSE) file for details.

---

## 👤 Author

**Your Name**  
GitHub: [@anand11206](https://github.com/anand11206)

---

## 🤝 Contributions

All contributions are welcome.  
Feel free to fork, raise issues, or submit pull requests.

---
