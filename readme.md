# Nike Customer Service AI Agent

## Overview
The **Nike Customer Service AI Agent** is a web application designed to provide **customer support**, **order tracking**, and **product recommendations** using AI-driven chatbot interactions.

## Features
- **User Authentication** (Sign up, Login, Logout)
- **AI Chatbot for Customer Queries**
- **Product Browsing & Recommendations**
- **Shopping Cart & Order Placement**
- **Order Tracking & Status Updates**
- **Secure Payment Handling**

## Tech Stack
### **Frontend**
- **React.js** (UI development)
- **Axios** (API requests)
- **React Bootstrap** (UI components)
- **React Router** (Routing)

### **Backend**
- **Node.js + Express.js** (Server & API handling)
- **PostgreSQL** (Database for storing user, product, and order data)
- **JWT Authentication** (Secure user authentication)

## Project Structure
```
📦 nike-customer-service-ai-agent
 ┣ 📂 backend
 ┃ ┣ 📂 controllers
 ┃ ┣ 📂 models
 ┃ ┣ 📂 routes
 ┃ ┣ 📂 services
 ┃ ┣ 📜 server.js
 ┃ ┣ 📜 db.js
 ┃ ┣ 📜 package.json
 ┣ 📂 frontend
 ┃ ┣ 📂 components
 ┃ ┣ 📂 pages
 ┃ ┣ 📜 App.js
 ┃ ┣ 📜 index.js
 ┃ ┣ 📜 package.json
 ┣ 📜 README.md
```

## Installation
### **Backend Setup**
```sh
cd backend
npm install
node server.js
```

### **Frontend Setup**
```sh
cd frontend
npm install
npm start
```

## API Endpoints
### **Authentication**
| Method | Endpoint        | Description         |
|--------|----------------|---------------------|
| POST   | `/api/auth/signup` | Register a new user |
| POST   | `/api/auth/login`  | Authenticate user |

### **Chatbot**
| Method | Endpoint        | Description            |
|--------|----------------|------------------------|
| POST   | `/api/chat`    | Process user query |

### **Product & Order**
| Method | Endpoint        | Description            |
|--------|----------------|------------------------|
| GET    | `/api/products` | Get all products      |
| POST   | `/api/cart/add` | Add item to cart      |
| POST   | `/api/order`    | Place an order       |

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m "Added feature"`)
4. Push to branch (`git push origin feature-name`)
5. Create a pull request

## License
This project is licensed under the **MIT License**.