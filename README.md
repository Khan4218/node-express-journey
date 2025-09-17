# Node.js Projects

This repository contains projects I built while learning and practicing Node.js.  
It includes two main parts:  

1. **Build a Node API** ✅ (Completed)  
2. **Build a Fullstack Node App** 🚀 (In Progress)

---

## 📚 Part 1: Build a Node API (Completed)
In this section, I learned how to use Node.js without frameworks to build and structure APIs.  
Key topics covered:
- Core Node.js modules (`http`, `fs`, `url`, `path`)
- Creating a server with the `http` module
- Handling requests and responses
- Parsing URLs and query parameters
- Serving JSON responses
- Modularizing code with utility functions
- Filtering data based on client query params
- Designing clean and reusable API endpoints

**Mini Project:**  
Built an `/api` endpoint that serves destination data and supports query filters such as:  
- `country`  
- `continent`  
- `is_open_to_public`

---

## 🚀 Part 2: Build a Fullstack Node App (In Progress)
Next, I’ll be learning how to:
- Connect Node.js backend with a frontend
- Work with databases for persistent storage
- Handle routes and state between client & server
- Deploy a fullstack Node application

---

## 🛠 Tech Stack
- **Node.js** (no external frameworks in Part 1)  
- JavaScript (ES Modules)  
- JSON for mock data (Part 1)  
- Frontend integration (coming in Part 2)

---

## 💡 How to Run (Part 1)
1. Clone this repo  
   ```bash
   git clone <your-repo-url>
   cd scrimba-node-course

2.	Run the server
    node server.js

3.	Visit the API:
http://localhost:3000/api
http://localhost:3000/api?country=India
http://localhost:3000/api?continent=Europe&is_open_to_public=true

✨ Stay tuned for updates as I move into Part 2: Fullstack Node App!